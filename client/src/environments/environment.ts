// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const hostname = window.location.hostname === 'localhost'
  ? 'http://ecohub.devswarm/api'
  : '/api'

export const environment = {
  production: false,
  clientId: 'peJql8GAWQbo2NlZaxTzEp3XoYQKKag5',
  domain: 'etech-dev.eu.auth0.com'
};
