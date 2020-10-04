import { Router } from 'express';
import { answerFriendRequestController } from './useCases/AnswerFriendRequest';
import { authUserController } from './useCases/AuthUser';
import { createUserController } from './useCases/CreateUser';
import { getLoggedController } from './useCases/GetLogged';
import { logoutController } from "./useCases/Logout";
import { sendFriendRequestController } from './useCases/SendFriendRequest';

const router = Router();

router.get('/logged', (req, res) => getLoggedController.handle(req, res));
router.post('/signup', (req, res) => createUserController.handle(req, res));
router.post('/auth', (req, res) => authUserController.handle(req, res));
router.delete('/logout', (req, res) => logoutController.handle(req, res));
router.post('/friend-request', (req, res) => sendFriendRequestController.handle(req, res));
router.patch('/friend-request/:id', (req, res) => answerFriendRequestController.handle(req, res));

export default router;