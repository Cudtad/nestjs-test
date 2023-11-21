export type ENVConfig = {
  PORT: number;
  MONGO_CONNECTION_STRING: string;
  MYSQL_DB_HOST: string;
  MYSQL_DB_PORT: number;
  MYSQL_DB_USER: string;
  MYSQL_DB_PASSWORD: string;
  MYSQL_DB_DATABASE: string;
  HASH_SALT: string;
  CMC_PRO_API_KEY: string;

  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;

  SPACES_KEY: string;
  SPACES_SECRET: string;
  SPACES_ENDPOINT: string;
  SPACES_BUCKET: string;
  SPACES_REGION: string;
  ELASTICSEARCH_NODE: string;

  API_ENDPOINT: string;
  API_SECRET_KEY: string;

  USER_SERVICE_API_ENDPOINT: string;
  USER_SERVICE_API_SECRET_KEY: string;

  AUTH_API_ENDPOINT: string;
  SERVER_TO_SERVER_KEY: string;

  SPOT_SERVICE_URL: string;
  SPOT_API_SECRET: string;

  NOTIFICATION_API_ENDPOINT: string;
  NOTIFICATION_API_SECRET_KEY: string;

  SMARTCONTRACT_ADDRESS: string;
  MODERATOR_PRIVATE_KEY: string;
  BSC_RPC_HTTP: string;
  BSC_SCAN_URL: string;
  VNST_CHANNEL: string;
};
