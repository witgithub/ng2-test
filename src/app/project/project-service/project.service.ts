import {Injectable, Inject} from '@angular/core';
import {ReplaySubject} from 'rxjs/Rx';
import {DataProvider} from '../../../data-access/data-provider';

@Injectable()
export class ProjectService {
  dataProvider;
  change;
  projectsSubscription;
  projects;
  constructor(@Inject(DataProvider) dataProvider) {
    this.dataProvider = dataProvider;
    this.dataProvider = [];
    // Udostępniamy mechanizm powtarzania, który będzie emitował zdarzenia, jeśli zmieni się lista projektu.
    this.change = new ReplaySubject(1);

    // Konfiguracja subskrypcji w stylu reaktywnym i funkcyjnym w celu otrzymywania zmian projektu w bazie danych.
    this.projectsSubscription = this.dataProvider.getLiveChanges()
      // Najpierw zamień rekordy zmiany na faktyczne dokumenty.
      .map((change) => change.doc)
      // Przefiltruj, abyśmy otrzymywali tylko dokumenty projektu.
      .filter((document) => document.type === 'project')
      // Na końcu dokonujemy subskrypcji w obserwatorze zmian i radzimy sobie ze zmianami projektu w parametrze funkcji.
      .subscribe((changedProject) => {
        this.projects = this.projects.slice();
        // Dla każdej zmiany projektu musimy uaktualnić listę projektów i posortować ją po tytule.
        const projectIndex = this.projects.findIndex((project) => project._id === changedProject._id);
        if (projectIndex === -1) {
          this.projects.push(changedProject);
        } else {
          this.projects.splice(projectIndex, 1, changedProject);
        }
        this.projects.sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0);
        // Zgłoś zdarzenie do mechanizmu powtarzania.
        this.change.next(this.projects);
      });
  }
}
