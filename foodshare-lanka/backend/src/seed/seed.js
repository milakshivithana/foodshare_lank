import dotenv from 'dotenv';dotenv.config();
import bcrypt from 'bcryptjs';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';import Donation from '../models/Donation.js';import Request from '../models/Request.js';

await connectDB();await Request.deleteMany({});await Donation.deleteMany({});await User.deleteMany({});
const pass=await bcrypt.hash('Demo12345!',12);
const users=await User.insertMany([
 {name:'Nimal Perera',organizationName:'Colombo Community Kitchen',email:'donor@example.com',phone:'0712345678',password:pass,role:'DONOR',donorType:'Restaurant',address:'Union Place, Colombo 02',city:'Colombo',district:'Colombo'},
 {name:'Anjali Fernando',organizationName:'Hope Shelter Sri Lanka',email:'recipient@example.com',phone:'0771234567',password:pass,role:'RECIPIENT',recipientType:'Shelter',address:'Kandy Road, Colombo 08',city:'Colombo',district:'Colombo'},
 {name:'FoodShare Admin',organizationName:'FoodShare Lanka',email:'admin@example.com',phone:'0700000000',password:pass,role:'ADMIN',address:'Colombo',city:'Colombo',district:'Colombo'}
]);
const donor=users.find(u=>u.role==='DONOR');
const now=new Date();const day=(n)=>new Date(now.getTime()+n*86400000);
const donations=[
 ['Fresh Vegetable Pack','Vegetables','Mixed vegetables rescued from today's supermarket surplus.',25,'Kg','Fresh',-1,2,'Colombo','Colombo','Union Place, Colombo 02'],
 ['Surplus Lunch Meals','Cooked Meals','Fresh prepared rice and curry portions, packed for same-day collection.',40,'Meals','Prepared Today',0,1,'Kandy','Kandy','Peradeniya Road, Kandy'],
 ['Bakery Items','Bakery','Unsold bread, buns and pastries from the evening batch.',30,'Boxes','Fresh',-1,1,'Galle','Galle','Wakwella Road, Galle'],
 ['Packaged Grocery Items','Groceries','Sealed pantry items with clear best-before dates.',50,'Packets','Packaged',-10,15,'Kurunegala','Kurunegala','Main Street, Kurunegala'],
 ['Yoghurt & Dairy Packs','Dairy','Refrigerated dairy packs stored correctly before pickup.',24,'Items','Near Expiry',-1,1,'Negombo','Gampaha','Lewis Place, Negombo'],
 ['Fruit Rescue Boxes','Fruits','Bananas, papaya and oranges suitable for immediate distribution.',18,'Boxes','Fresh',-1,3,'Matara','Matara','Akuressa Road, Matara']
].map(x=>({donorId:donor._id,title:x[0],category:x[1],description:x[2],quantity:x[3],unit:x[4],condition:x[5],preparationDate:day(x[6]),bestBeforeDate:day(x[7]),availableFrom:now,availableUntil:day(x[7]),pickupAddress:x[10],city:x[8],district:x[9],contactNumber:donor.phone,pickupInstructions:'Please call 15 minutes before collection.',status:'AVAILABLE'}));
await Donation.insertMany(donations);console.log('Seed complete. Demo passwords: Demo12345!');process.exit(0);
