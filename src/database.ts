import mongoose from 'mongoose';
export const connetBD = async () => {
  try {
    const URI = `mongodb+srv://${process.env.BD}:${process.env.PASS_DB}` +
                `@cluster0.cr0st1r.mongodb.net/${process.env.BD_TYBA}`;
    if(URI) {
      await mongoose.connect(URI);
      console.log('conectado a la Bd');
    } else {
      throw new Error("faled server");
    }
  } catch (error) {
    console.log('No hay conexion con la bd: ', error);
  }
}