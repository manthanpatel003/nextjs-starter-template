type Environment = "production" | "staging" | "development";

const prodBaseUrl =
  process.env.NEXT_PUBLIC_PROD_BASE_URL ?? "http://localhost:3000";
const stagingBaseUrl =
  process.env.NEXT_PUBLIC_STAGING_BASE_URL ?? "http://localhost:3000";
const devBaseUrl =
  process.env.NEXT_PUBLIC_DEV_BASE_URL ?? "http://localhost:3000";

// Ensure that the environment variable is one of the allowed values or fallback to "development"
const environment: Environment =
  (process.env.NEXT_PUBLIC_ENV as Environment) ?? "development";

let baseUrl: string;

if (environment === "production") {
  baseUrl = prodBaseUrl;
} else if (environment === "staging") {
  baseUrl = stagingBaseUrl;
} else {
  baseUrl = devBaseUrl;
}

const BASE_URL = baseUrl;

export { BASE_URL };
