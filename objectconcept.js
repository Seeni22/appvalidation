/*
Section 4: JavaScript Objects
 Object Literals Factory Functions
 Constructor Functions
 Objects are Dynamic
 The Constructor Property
 Functions are Objects
 Value vs Reference types
 Enumerating Properties of an Object
 Cloning an Object
 Garbage Collection
 The Built in Math Function
 String Methods
 Template Literals
 The Date Object
 Summary of Objects
 */


//  Object Literals  function with in a object its method ,property

let pet={
    name:'Tonny',
    type:'Lab',
    age:3.5,
    vacinationStatus:'Completed',
     petstatus:function(){
        return "Name of pet: "+this.name+" Type of pet: "+this.type+" Age of pet: "+this.age+" Vacination: "+this.vacinationStatus;
     }

 };
 console.log (pet.petstatus());

 // nested object its is used to create object inside a object
  let value={
    passid:'1123j5',
    dateofexp: 12-2-25,
    details:{
        name:'SRI',
        age:25,
        blood:'O+',
    }
  };
  console.log(value.details.age);

 // Factory Functions functions an object 
   


//  Constructor Functions 
const carworks= new Object();
carworks.extworks="Paint";
carworks.interiorworks="leather finish";
carworks.waterwash="yes",
carworks.carno=1321;
console.log(carworks);
//  Objects are Dynamic
//  The Constructor Property
//  Functions are Objects
//  Value vs Reference types
//  Enumerating Properties of an Object
//  Cloning an Object
//  Garbage Collection
//  The Built in Math Function
//  String Methods
//  Template Literals
//  The Date Object
 