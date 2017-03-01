import { NarePage } from './app.po';

describe('nare App', function() {
  let page: NarePage;

  beforeEach(() => {
    page = new NarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
