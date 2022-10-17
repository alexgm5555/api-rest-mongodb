import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
export interface IUser extends  mongoose.Document {
    email: any;
    pass: any;
    state: boolean;
    comparePassword(candidatePassword: string): Promise<boolean>;
  }

const userSchema: Schema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  state: { type: Boolean, required: true }
});

userSchema.pre("save",async function(next: any) {
    const user = this;
    if (!user.isModified('pass')) {
       return next(); 
    }
    try {
        const salt = await bcryptjs.genSalt(10);
        user.pass = await bcryptjs.hash(user.pass, salt); 
        next();
    } catch (error) {
        console.log('falló');
        throw new Error("Falló la creción del nuevo usuario.");
    }
});


userSchema.methods.comparePassword = async function (
    candidatePassword: string
  ): Promise<boolean> {
    // So we don't have to pass this into the interface method
    const user = this as IUser;
  
    return bcryptjs.compare(candidatePassword, user.pass).catch((e: any) => {return e;});
  };
  
export default mongoose.model<IUser>("User", userSchema);

