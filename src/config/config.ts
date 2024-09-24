enum Environment {
  Production = 'production',
  Staging = 'staging',
  Development = 'development',
}

const prodBaseUrl =
  process.env.NEXT_PUBLIC_PROD_BASE_URL ?? 'http://localhost:3000';
const stagingBaseUrl =
  process.env.NEXT_PUBLIC_STAGING_BASE_URL ?? 'http://localhost:3000';
const devBaseUrl =
  process.env.NEXT_PUBLIC_DEV_BASE_URL ?? 'http://localhost:3000';
const environment: Environment =
  (process.env.NEXT_PUBLIC_ENV as Environment) ?? Environment.Development;

let baseUrl: string;

if (environment === Environment.Production) {
  baseUrl = prodBaseUrl;
} else if (environment === Environment.Staging) {
  baseUrl = stagingBaseUrl;
} else {
  baseUrl = devBaseUrl;
}

const BASE_URL = baseUrl;

export { BASE_URL };
