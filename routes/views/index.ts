import * as Hapi from 'hapi';
import * as Joi from 'joi';

import { getMainPage, getAphorismsPage, getNotesPage, getTechniquesPage } from '../../handlers/views';

const views: Hapi.ServerRoute[] = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: getMainPage
  },
  {
    method: 'GET',
    path: '/aphorisms',
    handler: getAphorismsPage
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNotesPage
  },
  {
    method: 'GET',
    path: '/techniques',
    handler: getTechniquesPage
  },
]

export default views;