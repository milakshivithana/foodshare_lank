import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { HttpError } from '../utils/httpError.js';

export async function createUser(data) {
  const exists = await User.findOne({ email:data.email.toLowerCase() });
  if (exists) throw new HttpError(409,'An account with that email already exists');
  const hashed = await bcrypt.hash(data.password, 12);
  const user = await User.create({ ...data, email:data.email.toLowerCase(), password:hashed });
  return user;
}
export async function loginUser(email,password) {
  const user = await User.findOne({email:email.toLowerCase()}).select('+password');
  if (!user || !user.isActive || !(await bcrypt.compare(password,user.password))) throw new HttpError(401,'Invalid email or password');
  const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET,{expiresIn:'2h'});
  user.password = undefined;
  return {token,user};
}
