import jwt from "jsonwebtoken";
import { findUser } from "../services/login";

interface IPayload {
    uid: {
        _id: string
    };
  }
export const validateToken = async (token: string) => {
    let userObject = 
        jwt.verify(token, process.env.JWT_SECRET || '') as IPayload;
    const user = await findUser({ _id: userObject.uid });
    // si el usuario tiene stado false lo saca porque se salio 
    // consulto el servicio de logout
    if (!user?.state) {
      throw new Error("El Usuario no está logeado.");
    } else {
      return userObject;
    }
} 

export const createToken = async (email: string) => {
  const user = await findUser({ email });
  return jwt.sign({uid: user?._id}, process.env.JWT_SECRET || '1234');
}
