import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'SgsCore',
    // name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    // issuer: 'https://localhost:44369',
    issuer: 'http://itcomp-ids',
    redirectUri: baseUrl,
    // clientId: 'DossierEtudiant_ConsoleTestApp',
    clientId: 'SgsCore',
    responseType: 'code',
    // scope: 'offline_access DossierEtudiant',
    scope: 'offline_access SgsCore',
    requireHttps: false
    // requestAccessToken : true

  },
  apis: {
    default: {
      // url: 'https://sgscore',
      // rootNamespace: 'Itcomp.Sgs',
    // default: {
      url: 'https://localhost:44384',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Config.Environment;
