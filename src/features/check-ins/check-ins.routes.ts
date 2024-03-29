import { type FastifyInstance } from 'fastify';

import {
  sessionsMiddleware,
  verifyUserRoleMiddleware,
} from '@shared/middlewares';

import { CheckInsController } from './check-ins.controller';

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', sessionsMiddleware);

  const checkInsController = new CheckInsController();

  app.get('/check-ins/history', checkInsController.getHistory);

  app.post('/gyms/:gymId/check-ins', checkInsController.create);

  app.patch(
    '/check-ins/:checkInId/validate',
    { onRequest: [verifyUserRoleMiddleware(['Admin'])] },
    checkInsController.validate,
  );
}
