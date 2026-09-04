import {createContext,useContext,useEffect,useState} from 'react';import api from '../services/api';
const AuthContext=createContext(null);
export function AuthProvider({children}){const [user,setUser]=useState(null);const [loading,setLoading]=useState(true);
 useEffect(()=>{const token=localStorage.getItem('foodshare_token');if(!token)return setLoading(false);api.get('/auth/me').then(r=>setUser(r.data.data.user)).catch(()=>localStorage.removeItem('foodshare_token')).finally(()=>setLoading(false));},[]);
 const login=async(form)=>{const r=await api.post('/auth/login',form);localStorage.setItem('foodshare_token',r.data.data.token);setUser(r.data.data.user);return r.data;};
 const register=async(form)=>api.post('/auth/register',form);
 const logout=()=>{localStorage.removeItem('foodshare_token');setUser(null);};
 return <AuthContext.Provider value={{user,loading,login,register,logout}}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext);
