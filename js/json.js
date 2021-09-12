//JSON=Javascript Object Notation
const user={name:'Alam',id:11,job:'actor'};
const stringified=JSON.stringify(user);
const obj=JSON.parse(stringified);
// console.log(user)
// console.log(stringified)

const shop={
 name:'Aliya store',
 profit:13000,
 address:'Panhlaish',
 products:['bag','laptop','mobile'],
 owner:{
   name:'alia bhatt',
   profession:'actor'
 },
 isExpensive:false
}
//stringify=convert to string
const shopStringified=JSON.stringify(shop);
// console.log(shopStringified);
// console.log(shop)
//parse=convert string to object
const converted=JSON.parse(shopStringified);
// console.log(converted)