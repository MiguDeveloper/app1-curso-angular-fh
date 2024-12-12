import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = {
  apiValidationEmail: 'https://jsonplaceholder.typicode.com/posts/1',
};
export const environment = {
  ...commonEnvironment,
  ...env,
};
