import { type FastifyInstance } from 'fastify';

import { usersController } from '@features/users';

type AppRoute = [(app: FastifyInstance) => Promise<void>, string];

export const routes: AppRoute[] = [[usersController, '/users']];
