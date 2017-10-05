import { WebangularPage } from './app.po';

describe('webangular App', () => {
  let page: WebangularPage;

  beforeEach(() => {
    page = new WebangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
