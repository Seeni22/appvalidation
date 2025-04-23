/* Variable and its types
var is a golobal scope  or function scope it can access through any where it can accese out side a scope
 let is a private scope it can access only inside the scope {} we can get error like the variable is mot defined
 const  is a constant unable to change it Assignment to constant variable so unable to change it.
*/

//  let a=25;
//  let b=30;
// var c=a+b;
//   const d=c;
//  console.log(a);
{
    let a=20;
    let b=30;
    var c =a+b;
   }
    console.log(c);
{
 let d=25;
 d=35;
 let e=30;
 let  f =d+e;
 const g=10;
 //g=23;//Assignment to constant variable so unable to change it.
 let h=f+g;
 console.log(f);
 console.log(h);

}
//console.log(f);

/* difference betweem  null and undefined
 if we could not assign a value to a variable means its a  undifined 


*/
 let login= "name";
 let password;
 console.log(password);
// here first  we could not assign a value for the variable password the we can assigh a value means we can use this method 
// value of both undefined and null will be same , but data type for null and undefined are differ 
console.log(typeof login);
console.log(typeof password);
 password=35
 console.log(login,password);
    console.log(typeof login);
    console.log(typeof password);

 let user1='sri';
 let meettime=null;
 console.log(typeof user1);
    console.log(typeof meettime);
 //console.log(meettime);
  //meettime=12-1;
  //console.log(meettime);

  //how many  ways to create a object in js
    // function det(ac,dc){
    //     return ac+dc;
    // }
     //arrow functions
    seeni=(ac,dc)=>{ 
        return ac=dc;
    }
    console.log(seeni(32,34));
    function founder(fname) {
        console.log('Welcome user to our page '+fname);
       }


       //  array  manipulation adding, combining, and inserting elements at specific positions. Master core methods like push(), unshift(), splice(), and concat(). 
      //    push
       let fruits=['apple','orange','mango','lemon'];
       console.log(fruits);
       fruits.push('watermelon');
       console.log(fruits);
       //shift,unshift The shift() method removes the first array element and "shifts" all other elements to a lower index.
       fruits.shift(1);
       console.log(fruits);

       //the unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
       fruits.unshift('kiwi');
       console.log(fruits);
       //The splice() method can be used to add new items to an array 3 reffer the index value of where to add and 1 refers to remove how many elements
        fruits.splice(3,1,'pineapple','banana');
        console.log(fruits);
    //   The concat() method creates a new array by merging two array
    //  let veg=['carrot','potato','tomato'];
    //    console.log(veg);
    //    console.log(veg.concat(fruits));
    const stringArray = [];

function addToStringArray(item) {
  if (typeof item === "string") {
    stringArray.push(item);
  } else {
    console.error("Only strings are allowed!");
  }
}

addToStringArray("Hello",'user'); // ✅
//addToStringArray(123);     // ❌
console.log(stringArray);
// test git commit
git remote add origin https://github.com/Seeni22/appvalidation.git
git add test.js
 git commit -m "second commit"
 git push -u origin main