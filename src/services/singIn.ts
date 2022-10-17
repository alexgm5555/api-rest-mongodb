import {validationResult} from 'express-validator';
import { createToken } from '../utils/token';
import User from "../models/User";

interface bodySingIn {
  email: string;
  pass: string;
  pass2: string;
}

const singIn = async(_req: bodySingIn) => {
  const {email, pass } = _req;
  const errors =  validationResult(_req);
  let user = new User({email, pass, state: true});

  if ( !errors.isEmpty() ) {
    return Promise.reject(errors.array());
  }
  if ( _req.email.length < 6 ) {
     return Promise.reject('El password es demasiado corto');
  }

  await user.save();
  const token = createToken(email);

  return Promise.resolve(token);
}

export default singIn;
