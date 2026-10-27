import { expect, type Locator } from '@playwright/test';
import { UIHelper } from '../utils/uiHelpers';
import type { Page } from '@playwright/test';
import { orangeHRMTestData } from '../utils/testData';

export class MaintenancePage {
  private readonly moduleData = orangeHRMTestData.modules.maintenance;
  readonly accessHeading: Locator = this.page.getByRole('heading', {
    name: 'Administrator Access',
  });
  readonly username: Locator = this.page.getByRole('textbox').nth(0);
  readonly password: Locator = this.page.getByRole('textbox').nth(1);
  readonly confirmButton: Locator = this.page.getByRole('button', {
    name: 'Confirm',
  });

  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await UIHelper.clickElement(
      this.page.getByRole('navigation', { name: 'Sidepanel' })
        .getByRole('link', { name: this.moduleData.label, exact: true }),
    );
    await expect(this.accessHeading).toBeVisible();
  }

  async cancelAdminAccessPrompt(): Promise<void> {
    await UIHelper.clickElement(
      this.page.getByRole('button', { name: 'Cancel', exact: true }),
    );
    await expect(
      this.page.getByRole('heading', { name: 'Administrator Access' }),
    ).toBeHidden();
  }
}
