import { NgroutePage } from './app.po';

describe('ngroute App', function() {
  let page: NgroutePage;

  beforeEach(() => {
    page = new NgroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
