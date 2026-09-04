import {statusLabel} from '../utils/format';
export default function StatusBadge({status}){return <span className={`badge badge-${status?.toLowerCase()}`}>{statusLabel(status)}</span>}
