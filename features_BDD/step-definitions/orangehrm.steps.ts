import { expect, type Locator, type Page } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { AdminPage } from '../../src/pages/AdminPage';
import { BuzzPage } from '../../src/pages/BuzzPage';
import { ClaimPage } from '../../src/pages/ClaimPage';
import { DashboardPage } from '../../src/pages/DashboardPage';
import { DirectoryPage } from '../../src/pages/DirectoryPage';
import { LeavePage } from '../../src/pages/LeavePage';
import { LoginPage } from '../../src/pages/LoginPage';
import { MaintenancePage } from '../../src/pages/MaintenancePage';
import { MyInfoPage } from '../../src/pages/MyInfoPage';
import { PerformancePage } from '../../src/pages/PerformancePage';
import { PimPage } from '../../src/pages/PimPage';
import { RecruitmentPage } from '../../src/pages/RecruitmentPage';
import { TimePage } from '../../src/pages/TimePage';
import { orangeHRMTestData } from '../../src/utils/testData';

const { Given, When, Then } = createBdd();

interface OpenablePage {
  open(): Promise<void>;
  heading: Locator;
}

const openedModuleHeadings = new WeakMap<Page, Locator>();

Given('I open the OrangeHRM login page', async ({ page }) => {
  await new LoginPage(page).open();
});

When('I sign in with the demo credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(
    orangeHRMTestData.credentials.username,
    orangeHRMTestData.credentials.password,
  );
});

Then('I am logged into OrangeHRM', async ({ page }) => {
  await expect(
    page.getByRole('navigation', { name: 'Sidepanel' }),
  ).toBeVisible({ timeout: 15000 });
});

Given('I have signed into OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(
    orangeHRMTestData.credentials.username,
    orangeHRMTestData.credentials.password,
  );
  await expect(
    page.getByRole('navigation', { name: 'Sidepanel' }),
  ).toBeVisible({ timeout: 15000 });
});

When('I open the {string} module', async ({ page }, moduleName: string) => {
  const modulePages: Record<string, OpenablePage> = {
    Admin: new AdminPage(page),
    PIM: new PimPage(page),
    Leave: new LeavePage(page),
    Time: new TimePage(page),
    Recruitment: new RecruitmentPage(page),
    'My Info': new MyInfoPage(page),
    Performance: new PerformancePage(page),
    Dashboard: new DashboardPage(page),
    Directory: new DirectoryPage(page),
    Claim: new ClaimPage(page),
    Buzz: new BuzzPage(page),
    Maintenance: {
      open: async () => new MaintenancePage(page).open(),
      get heading() {
        return new MaintenancePage(page).accessHeading;
      },
    },
  };
  const modulePage = modulePages[moduleName];

  if (!modulePage) {
    throw new Error(`Unknown OrangeHRM module: ${moduleName}`);
  }

  await modulePage.open();
  openedModuleHeadings.set(page, modulePage.heading);
});

Then('the {string} page is displayed', async ({ page }, heading: string) => {
  const pageHeading = openedModuleHeadings.get(page);
  if (!pageHeading) {
    throw new Error('Open a module before checking its page heading');
  }

  await expect(pageHeading).toHaveText(heading);
});

Then('I cancel the administrator access prompt', async ({ page }) => {
  await new MaintenancePage(page).cancelAdminAccessPrompt();
});
