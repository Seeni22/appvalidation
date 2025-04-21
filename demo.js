
//  var is a golobal scope 
//   let is a private scope
 let a=25;
 let b=30;
 function varity(a,b,c,d){
    let c=(a+b);
    let d=c;
 }
 console.log(d);