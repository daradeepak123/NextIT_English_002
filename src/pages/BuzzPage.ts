import { expect, type Locator, type Page } from '@playwright/test';
import { UIHelper } from '../utils/uiHelpers';
import { orangeHRMTestData } from '../utils/testData';

export class BuzzPage {
  private readonly moduleData = orangeHRMTestData.modules.buzz;
  readonly heading: Locator = this.page.getByRole('heading', {
    name: 'Buzz',
    exact: true,
  });
  readonly postText: Locator = this.page.getByPlaceholder("What's on your mind?");
  readonly postButton: Locator = this.page.getByRole('button', {
    name: 'Post',
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
