import { expect, type Locator, type Page } from '@playwright/test';
import { UIHelper } from '../utils/uiHelpers';
import { orangeHRMTestData } from '../utils/testData';

export class DashboardPage {
  private readonly moduleData = orangeHRMTestData.modules.dashboard;
  readonly heading: Locator = this.page.getByRole('heading', {
    name: 'Dashboard',
    exact: true,
  });
  readonly timeAtWorkWidget: Locator = this.page.getByText('Time at Work', {
    exact: true,
  });
  readonly quickLaunchWidget: Locator = this.page.getByText('Quick Launch', {
    exact: true,
  });

  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await UIHelper.clickElement(
      this.page.getByRole('navigation', { name: 'Sidepanel' })
        .getByRole('link', { name: this.moduleData.label, exact: true }),
    );
    await expect(this.page).toHaveURL(
      `${orangeHRMTestData.baseUrl}${this.moduleData.path}`,
    );
    await expect(this.heading).toBeVisible();
  }
}
