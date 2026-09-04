export const money=()=>'';
export function dateTime(v){return v?new Date(v).toLocaleString('en-LK',{dateStyle:'medium',timeStyle:'short'}):'—';}
export function dateOnly(v){return v?new Date(v).toLocaleDateString('en-LK',{dateStyle:'medium'}):'—';}
export function statusLabel(s){return s?.replaceAll('_',' ').replaceAll(/\b\w/g,c=>c.toUpperCase())||'';}
