import { MicroblogAngular2Page } from './app.po';

describe('microblog-angular2 App', () => {
  let page: MicroblogAngular2Page;

  beforeEach(() => {
    page = new MicroblogAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
