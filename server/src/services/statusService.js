const darDay=value=>new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value));
export function statusForAmounts(due,paid,dueDate){
 if(Number(paid)>=Number(due)&&Number(due)>0)return'paid';
 if(dueDate&&darDay(dueDate)<darDay(new Date()))return'overdue';
 if(Number(paid)>0)return'partial';
 return'pending';
}
export function leaseStatus(endDate,current='active'){
 if(current==='terminated')return current;
 return new Date(endDate)<new Date()?'expired':'active';
}
