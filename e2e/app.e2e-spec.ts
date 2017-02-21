import { XWhizzUiPage } from './app.po';

describe('x-whizz-ui App', () => {
  let page: XWhizzUiPage;

  beforeEach(() => {
    page = new XWhizzUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
