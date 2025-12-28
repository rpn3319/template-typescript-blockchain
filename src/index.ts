import { config } from './config';

const main = async () => {
  console.log(`Running in ${config.ENVIRONMENT} environment`);

  // Your application logic goes here
};

main().catch((error) => {
  console.error('Application error:', error);
  process.exit(1);
});
