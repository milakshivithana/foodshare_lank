import { asyncHandler } from '../utils/asyncHandler.js';
import { createUser, loginUser } from '../services/authService.js';
import { registerSchema, loginSchema } from '../utils/validation.js';

export const register = asyncHandler(async (req,res)=>{
  const parsed = registerSchema.safeParse(req.body);
  if(!parsed.success) return res.status(400).json({success:false,message:parsed.error.issues[0].message,errors:parsed.error.flatten().fieldErrors});
  const data=parsed.data;
  if(data.role==='DONOR' && !data.donorType) return res.status(400).json({success:false,message:'Please select your donor type'});
  if(data.role==='RECIPIENT' && !data.recipientType) return res.status(400).json({success:false,message:'Please select your recipient type'});
  const user=await createUser(data); res.status(201).json({success:true,message:'Account created successfully',data:{user}});
});
export const login = asyncHandler(async(req,res)=>{
  const parsed=loginSchema.safeParse(req.body); if(!parsed.success) return res.status(400).json({success:false,message:'Enter a valid email and password'});
  const data=await loginUser(parsed.data.email,parsed.data.password); res.json({success:true,message:'Login successful',data});
});
export const me = asyncHandler(async(req,res)=>res.json({success:true,data:{user:req.user}}));
