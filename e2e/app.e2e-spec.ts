import { NgAwsLauncherPage } from './app.po';

describe('ng-aws-launcher App', () => {
  let page: NgAwsLauncherPage;

  beforeEach(() => {
    page = new NgAwsLauncherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
