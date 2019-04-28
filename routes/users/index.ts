import * as Hapi from 'hapi';
import * as Joi from 'joi';
import { userRegister } from '../../handlers/users/userRegister';

import { docs } from '../../config/docs';

const users: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/user/register',
    handler: userRegister,
    options: {
      ...docs.users,
      validate: {
        payload: {
          email: Joi.string()
            .email()
            .required(),
          password: Joi.string()
            .min(4)
            .required(),
          name: Joi.string().required(),
        },
      },
    },
  },
];

export default users;

// TODO:
// path: '/user/login',
// path: '/user/password/reset',
// path: '/user/password/new',
