 /*
  JavaScript Variables
 Variables
 Constants
 Primitive Types
 Dynamic Typing
 Objects
 Arrays
 Functions
 Types of Functions

  */
 //console.log(31 +12);

 // let is used to declera a global variable it will change the value
  let  user ='Hello  welcomeuser';
  user='Hello';
  console.log(user);
  // here the value assigned latyer will assign for user

  // const it could not change the variable value

/*  const UserSri='Sri welcome';
  UserSri='WElcome';
  console.log(UserSri);
  */
  // here we can get error message to not to declear to the const variable

   
// string, number, bigint,boolean,undefined,null, symbols-primitive
//object reference

let  fruits='Apple';
console.log(typeof fruits);
let favouriteFood=120n;
console.log(typeof favouriteFood);
let favouriteColor;
console.log(typeof favouriteColor);
let noofApples=12;
console.log(typeof noofApples);

//const uniquekey=symbol();
 let details={
    name:'sri',
    age: 25,

 };



 
let nameofUser='Sri';
console.log(typeof nameofUser);
nameofUser= 4.2;
console.log(typeof nameofUser);
nameofUser=true;
console.log(typeof nameofUser);

//object is a regference types
 let newUser={ 
    name:'Sri',
     age:35,
     study:'BE'
    };
      console.log(newUser);
      console.log(newUser.name);
      console.log(newUser['Study']);
      // update a value
      newUser.age=39;
      console.log(newUser.age);
      newUser['study']='Mca';
      console.log(newUser['study'])
       let userage='age';
       console.log(newUser[userage]);
      /*----- */
       //Array
        let colorchoice =[ 'Red', 'Green','Blue']; 
        colorchoice[1]=14;
        console.log(typeof colorchoice);
        console.log( colorchoice.length);
        console.log(colorchoice);
        console.log(colorchoice[1]);
        // ------------

       // Function
       function hiuser() {
        console.log('Welcome user to our page');
       }
       hiuser();

       function founder(fname) {
        console.log('Welcome user to our page '+fname);
       }
       founder( 'Srini');
       // types 
        function  multiplay(a,b){
            return a*b;
        }
        console.log(multiplay(3,6));

        let user1;
        console.log(user1);
        console.log(typeof user1);
        let user2=null;
        console.log(user2);
         console.log(typeof user2);