
/*
JavaScript Operators
 Intro to Operators
 Arithmetic Operators
 Assignment Operator
 Comparison Operators
 Equality Operators
 The Ternary Operator

 Have some confusions and work in thia thing and update
 Logical Operators
 Logical Operators with Non-booleans


 Operator Precedence
 */
//let a=20;
//let b=a+1;
//console.log(b);
/* let b;
a=a+1;
a+=1;
a++;
++a;
a--;
--a;
b=a++;
console.log(b);
console.log(a);
*/
 
//assignment=  comparision <,>=,<.<=  equal to == (it dont check the data type) strict equality === it check yhe data type to
 let num1='true';
 let num2='true';
 const numcompare=(num1==num2);
 console.log(numcompare);
  

 //ternery its used to declare the variable  by comparing  use comparision in store values
  let age=18;
   const userdrive = age>=18 ? true:false;
   console.log(userdrive);

    let points=80;
    const customerType=points>100? 'Gold':'Silver';
     console.log(customerType);
      
     
     function max(num1, num2) {
        return num1 >= num2 ? num1 : num2;
    }
    console.log(max(9,11));

      // and && or|| not!  null?? except booleans 
       // &&and both conditions are true it will be true
       // || both conditions are false only false
      // i could have some doughts in that so i can work this on after working hours and update it; 
      let a = true, b = true, c =  true, d = true;

console.log(a && b || c && d);


console.log((a && b) || (c && d));

let a1 = true, b1 = false, c1 = false, d1 = false;

console.log(a1 && b1 || c1 && d1);


console.log((a1 && b1) || (c1 && d1));
