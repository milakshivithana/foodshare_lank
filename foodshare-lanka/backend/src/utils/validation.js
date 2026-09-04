import { z } from 'zod';

const phone = z.string().regex(/^(?:\+94|0)7\d{8}$/, 'Enter a valid Sri Lankan mobile number');
export const registerSchema = z.object({
  name:z.string().min(2).max(100), organizationName:z.string().max(150).optional().or(z.literal('')),
  email:z.string().email(), phone, password:z.string().min(8), role:z.enum(['DONOR','RECIPIENT']),
  donorType:z.string().optional(), recipientType:z.string().optional(), address:z.string().min(3).max(250),
  city:z.string().min(2).max(80), district:z.string().min(2).max(80)
});
export const loginSchema = z.object({ email:z.string().email(), password:z.string().min(1) });
export const donationSchema = z.object({
  title:z.string().min(3).max(120), category:z.enum(['Cooked Meals','Bakery','Fruits','Vegetables','Groceries','Dairy','Packaged Food','Other']),
  description:z.string().min(10).max(1000), quantity:z.coerce.number().positive(), unit:z.enum(['Meals','Portions','Kg','Packets','Boxes','Items']),
  condition:z.enum(['Fresh','Prepared Today','Packaged','Near Expiry']), preparationDate:z.coerce.date(), bestBeforeDate:z.coerce.date(),
  availableFrom:z.coerce.date(), availableUntil:z.coerce.date(), pickupAddress:z.string().min(3).max(250), city:z.string().min(2), district:z.string().min(2),
  contactNumber:phone, pickupInstructions:z.string().max(500).optional().or(z.literal(''))
}).superRefine((v,ctx)=>{
  if (v.bestBeforeDate < v.preparationDate) ctx.addIssue({code:'custom',path:['bestBeforeDate'],message:'Best-before date cannot be before preparation date.'});
  if (v.preparationDate > new Date()) ctx.addIssue({code:'custom',path:['preparationDate'],message:'Preparation date cannot be in the future.'});
  if (v.availableUntil > v.bestBeforeDate) ctx.addIssue({code:'custom',path:['availableUntil'],message:'Availability cannot extend beyond the best-before date.'});
  if (v.availableUntil <= v.availableFrom) ctx.addIssue({code:'custom',path:['availableUntil'],message:'Available-until time must be after available-from time.'});
  if (v.bestBeforeDate < new Date()) ctx.addIssue({code:'custom',path:['bestBeforeDate'],message:'Expired food cannot be listed as available.'});
});
export const requestSchema = z.object({ requestedQuantity:z.coerce.number().positive(), message:z.string().max(500).optional().or(z.literal('')), preferredPickupTime:z.coerce.date(), contactNumber:phone }).superRefine((v,ctx)=>{ if(v.preferredPickupTime < new Date()) ctx.addIssue({code:'custom',path:['preferredPickupTime'],message:'Preferred pickup time must be in the future.'}); });
