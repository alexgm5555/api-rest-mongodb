import express from 'express';
const router = express.Router();
import { registerHistory } from '../utils/registerHistory';

import {errorTemplate, successTemplate} from '../utils/messageTemplate';


import login from '../services/login';
import singIn from '../services/singIn';
import restaurant from '../services/findRestaurant';
import history from '../services/history';
import logout from '../services/logOut';
import { validateToken } from '../utils/token';

router.post('/login', async (_req: any, res: any ) => {
  try {
    const body = _req.body;
    const response = await login(body);
    registerHistory('login', response);
    res.json(successTemplate(200, `Password score:`, response));
  } catch (e) {
      res.status(400).send(errorTemplate(400, `Error: ${e}`));
  }
});

router.post('/singIn', async (_req: any, res: any ) => {
  try {
    const body = _req.body;
    const response = await singIn(body);
    registerHistory('singIn', response);
    res.json(successTemplate(200, ` :`, response));
  } catch (e) {
      res.status(400).send(errorTemplate(400, `Error: ${e}`));
  }
});

router.post('/logout', async (_req: any, res: any ) => {
  try {
    const body = _req.body;
    body.token = _req.headers.token;
    await validateToken(body.token);
    const response = await logout(body.token);
    registerHistory('logout', body.token);
    res.json({
      statusCode:200,
      body: {
          response
      }
    });
  } catch (e) {
      res.status(400).send(errorTemplate(400, `Error: ${e}`));
  }
});

router.post('/restaurant', async (_req: any, res: any ) => {
  try {
    const body = _req.body;
    body.token = _req.headers.token;
    await validateToken(body.token);
    const response = await restaurant(body);
    registerHistory('restaurant', body.token);
    res.json(successTemplate(200, ` :`, response));
  } catch (e) {
      res.status(400).send(errorTemplate(400, `Error: ${e}`));
  }
});

router.post('/getHistory', async (_req: any, res: any ) => {
  try {
    const body = _req.body;
    body.token = _req.headers.token;
    await validateToken(body.token);
    const response = await history();
    await registerHistory('getHistory', body.token);
    res.json({
      statusCode:200,
      body: {
          response
      }
    });
  } catch (e) {
      res.status(400).send(errorTemplate(400, `Error: ${e}`));
  }
});

module.exports = router;
