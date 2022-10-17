import { FilterQuery } from "mongoose";
import { createToken } from "../utils/token";
import User, { IUser } from "../models/User";

interface bodyLogin {
    email: string;
    pass: string;
  }

export async function findUser(
  query: FilterQuery<IUser>,
) {
  return User.findOne(query);
}

const login = async(_req: bodyLogin) => {
  const {email, pass } = _req;
  const user = await findUser({ email });

  //si no encuentra a el usuario lo envia al catch del routes
  if (!user) {
    throw new Error("El usuario no existe");
  }

  //Compara la contraseña con la que está en la BD
  const passOk = await user.comparePassword(pass);
  if(!passOk) {
    throw new Error("Pasword Invalido");
  } else {
    await User.updateOne({ email },{state: true});
  }

  //crea el token y lo envía
  const token = createToken(email);
  return Promise.resolve(token);
}

export default login;
