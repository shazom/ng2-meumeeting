import { MeudevPage } from './app.po';

describe('meudev App', function() {
  let page: MeudevPage;

  beforeEach(() => {
    page = new MeudevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
