import { expect, test, type Page } from '@playwright/test';
import { AdminPage } from '../src/pages/AdminPage';
import { BuzzPage } from '../src/pages/BuzzPage';
import { ClaimPage } from '../src/pages/ClaimPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { DirectoryPage } from '../src/pages/DirectoryPage';
import { LeavePage } from '../src/pages/LeavePage';
import { LoginPage } from '../src/pages/LoginPage';
import { MaintenancePage } from '../src/pages/MaintenancePage';
import { MyInfoPage } from '../src/pages/MyInfoPage';
import { PerformancePage } from '../src/pages/PerformancePage';
import { PimPage } from '../src/pages/PimPage';
import { RecruitmentPage } from '../src/pages/RecruitmentPage';
import { TimePage } from '../src/pages/TimePage';
import { orangeHRMTestData } from '../src/utils/testData';

async function login(page: Page): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(
    orangeHRMTestData.credentials.username,
    orangeHRMTestData.credentials.password,
  );
  await expect(
    page.getByRole('navigation', { name: 'Sidepanel' }),
  ).toBeVisible({ timeout: 15000 });
}

test('Login page exposes username and password fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();

  await expect(loginPage.username).toBeVisible();
  await expect(loginPage.password).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

  await loginPage.login(
    orangeHRMTestData.credentials.username,
    orangeHRMTestData.credentials.password,
  );
  await expect(
    page.getByRole('navigation', { name: 'Sidepanel' }),
  ).toBeVisible();
});

test.describe('OrangeHRM module page tests', () => {
  // The public demo uses one shared account; avoid parallel login/session collisions.
  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Admin page shows the system-user search controls', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.open();
    await expect(adminPage.heading).toBeVisible();
    await expect(adminPage.username).toBeVisible();
    await expect(adminPage.searchButton).toBeVisible();
  });

  test('PIM page shows employee search controls', async ({ page }) => {
    const pimPage = new PimPage(page);
    await pimPage.open();
    await expect(pimPage.heading).toBeVisible();
    await expect(pimPage.employeeName).toBeVisible();
    await expect(pimPage.searchButton).toBeVisible();
  });

  test('Leave page shows leave-list filters', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.open();
    await expect(leavePage.heading).toBeVisible();
    await expect(leavePage.fromDate).toBeVisible();
    await expect(leavePage.searchButton).toBeVisible();
  });

  test('Time page shows timesheet employee controls', async ({ page }) => {
    const timePage = new TimePage(page);
    await timePage.open();
    await expect(timePage.heading).toBeVisible();
    await expect(timePage.employeeName).toBeVisible();
    await expect(timePage.viewButton).toBeVisible();
  });

  test('Recruitment page shows candidate search controls', async ({ page }) => {
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.open();
    await expect(recruitmentPage.heading).toBeVisible();
    await expect(recruitmentPage.candidateName).toBeVisible();
    await expect(recruitmentPage.searchButton).toBeVisible();
  });

  test('My Info page shows personal details fields', async ({ page }) => {
    const myInfoPage = new MyInfoPage(page);
    await myInfoPage.open();
    await expect(myInfoPage.heading).toBeVisible();
    await expect(myInfoPage.firstName).toBeVisible();
    await expect(myInfoPage.saveButton).toBeVisible();
  });

  test('Performance page shows employee-review search controls', async ({ page }) => {
    const performancePage = new PerformancePage(page);
    await performancePage.open();
    await expect(performancePage.heading).toBeVisible();
    await expect(performancePage.employeeName).toBeVisible();
    await expect(performancePage.searchButton).toBeVisible();
  });

  test('Dashboard page shows its main widgets', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.open();
    await expect(dashboardPage.heading).toBeVisible();
    await expect(dashboardPage.timeAtWorkWidget).toBeVisible();
    await expect(dashboardPage.quickLaunchWidget).toBeVisible();
  });

  test('Directory page shows employee directory filters', async ({ page }) => {
    const directoryPage = new DirectoryPage(page);
    await directoryPage.open();
    await expect(directoryPage.heading).toBeVisible();
    await expect(directoryPage.employeeName).toBeVisible();
    await expect(directoryPage.searchButton).toBeVisible();
  });

  test('Claim page shows employee claim filters', async ({ page }) => {
    const claimPage = new ClaimPage(page);
    await claimPage.open();
    await expect(claimPage.heading).toBeVisible();
    await expect(claimPage.employeeName).toBeVisible();
    await expect(claimPage.searchButton).toBeVisible();
  });

  test('Buzz page shows the post composer', async ({ page }) => {
    const buzzPage = new BuzzPage(page);
    await buzzPage.open();
    await expect(buzzPage.heading).toBeVisible();
    await expect(buzzPage.postText).toBeVisible();
    await expect(buzzPage.postButton).toBeVisible();
  });

  test('Maintenance page shows the protected-access prompt', async ({ page }) => {
    const maintenancePage = new MaintenancePage(page);
    await maintenancePage.open();
    await expect(maintenancePage.accessHeading).toBeVisible();
    await expect(maintenancePage.username).toBeVisible();
    await expect(maintenancePage.username).toBeDisabled();
    await expect(maintenancePage.password).toBeVisible();
    await expect(maintenancePage.confirmButton).toBeVisible();
    await maintenancePage.cancelAdminAccessPrompt();
  });
});
