import { expect, type Locator, type Page } from '@playwright/test';
import { UIHelper } from '../utils/uiHelpers';
import { orangeHRMTestData } from '../utils/testData';

export class TimePage {
  private readonly moduleData = orangeHRMTestData.modules.time;
  readonly heading: Locator = this.page.getByRole('heading', {
    name: 'Select Employee',
    exact: true,
  });
  readonly employeeName: Locator = this.field('Employee Name');
  readonly viewButton: Locator = this.page.getByRole('button', {
    name: 'View',
    exact: true,
  });

  constructor(private readonly page: Page) {}

  private field(label: string): Locator {
    return this.page.locator('.oxd-input-group').filter({
      has: this.page.locator('label').getByText(label, { exact: true }),
    }).locator('input').first();
  }

  async open(): Promise<void> {
    await UIHelper.clickElement(
      this.page.getByRole('navigation', { name: 'Sidepanel' })
        .getByRole('link', { name: this.moduleData.label, exact: true }),
    );
    await this.expectLoaded();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(
      `${orangeHRMTestData.baseUrl}${this.moduleData.path}`,
    );
    await expect(this.heading).toBeVisible();
  }
}
