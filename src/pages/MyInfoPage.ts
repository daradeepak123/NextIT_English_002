import { expect, type Locator, type Page } from '@playwright/test';
import { UIHelper } from '../utils/uiHelpers';
import { orangeHRMTestData } from '../utils/testData';

export class MyInfoPage {
  private readonly moduleData = orangeHRMTestData.modules.myInfo;
  readonly heading: Locator = this.page.getByRole('heading', {
    name: 'Personal Details',
    exact: true,
  });
  readonly firstName: Locator = this.page.locator('input[name="firstName"]');
  readonly saveButton: Locator = this.page.getByRole('button', {
    name: 'Save',
    exact: true,
  });

  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await UIHelper.clickElement(
      this.page.getByRole('navigation', { name: 'Sidepanel' })
        .getByRole('link', { name: this.moduleData.label, exact: true }),
    );
    await expect(this.page).toHaveURL((url) =>
      url.origin === orangeHRMTestData.baseUrl &&
      url.pathname.startsWith(`${this.moduleData.path}/`),
    );
    await expect(this.heading).toBeVisible();
  }
}
