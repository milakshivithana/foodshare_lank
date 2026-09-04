import {CheckCircle2,AlertCircle,X} from 'lucide-react';
export default function Toast({toast,onClose}){if(!toast)return null;return <div className={`toast ${toast.type||'success'}`}><span>{toast.type==='error'?<AlertCircle size={19}/>:<CheckCircle2 size={19}/>}</span><span>{toast.message}</span><button onClick={onClose}><X size={17}/></button></div>}
