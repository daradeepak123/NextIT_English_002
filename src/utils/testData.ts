import { readFileSync } from 'node:fs';

export const orangeHRMModuleNames = [
  'admin',
  'pim',
  'leave',
  'time',
  'recruitment',
  'myInfo',
  'performance',
  'dashboard',
  'directory',
  'claim',
  'buzz',
  'maintenance',
] as const;

export type OrangeHRMModuleName = (typeof orangeHRMModuleNames)[number];

export interface OrangeHRMModuleData {
  label: string;
  path: string;
  pathPrefix?: boolean;
  requiresAdminAccess?: boolean;
}

export interface OrangeHRMTestData {
  baseUrl: string;
  loginPath: string;
  credentials: {
    username: string;
    password: string;
  };
  modules: Record<OrangeHRMModuleName, OrangeHRMModuleData>;
}

const testDataPath = new URL('../../testdata/orangehrm.json', import.meta.url);

export const orangeHRMTestData = JSON.parse(
  readFileSync(testDataPath, 'utf8'),
) as OrangeHRMTestData;
