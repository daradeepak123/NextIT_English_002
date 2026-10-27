import type { Locator, Page } from '@playwright/test';
import { UIHelper } from '../utils/uiHelpers';
import { orangeHRMTestData } from '../utils/testData';

export class LoginPage {
  readonly username: Locator = this.page.locator('input[name="username"]');
  readonly password: Locator = this.page.locator('input[name="password"]');
  readonly loginButton: Locator = this.page.getByRole('button', { name: 'Login' });

  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto(orangeHRMTestData.loginPath);
  }

  async login(username: string, password: string): Promise<void> {
    await UIHelper.setText(this.username, username);
    await UIHelper.setText(this.password, password);
    await UIHelper.clickElement(this.loginButton);
  }
}
