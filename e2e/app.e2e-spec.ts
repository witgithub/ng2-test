import { Ang2KomponentyPage } from './app.po';

describe('ang2-komponenty App', () => {
  let page: Ang2KomponentyPage;

  beforeEach(() => {
    page = new Ang2KomponentyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
