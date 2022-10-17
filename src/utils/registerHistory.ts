import History from '../models/History';
import { validateToken } from './token';

export const registerHistory = async (
    transaction: string,
    token: string
  ) => {
  const history = new History({
    transaction,
    date: Date.now(),
    Uid: token ? (await validateToken(token))?.uid?._id : ''
  });
  await history.save();
}
