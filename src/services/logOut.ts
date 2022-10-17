import { validateToken } from "../utils/token";
import User from "../models/User"; 

const logout = async(token: string) => {
  const _id = (await validateToken(token))?.uid;
  const response = await User.updateOne({ _id },{state: false});
  return Promise.resolve(response);
}

export default logout;
