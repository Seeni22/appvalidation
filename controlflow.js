/* If-Else Statements
 Switch-Case Statements
 For Loops
 While Loops
 Do-while Loops
 Infinite Loops
 For-in Loops
 For-of Loops
 Break and Continue
 Exercise: Max of two numbers
 Exercise: FizzBuzz
 Exercise: Even and Odd Numbers
 */
/*
  let points=105;
   let offpoint=120;
    if(points>= offpoint){
console.log('User have discount');
    }
    else{
        console.log('User  need more points');
    }
   
  */

    let goldpoints=530;
   
    if(goldpoints>=300){
     console.log('User  got 15%  And gift');
    }
     else if(goldpoints>=200){
        console.log('User  got 15% ');
    }else if (goldpoints >= 100){
        console.log('User  get12%');
    }
     else{
        console.log('User get  5%');
     }
   
// switch case

     let fieldWork= 'FDev';
     switch(fieldWork){
        case 'FSDev':
        console.log('Works on both frentend and backend');
        break;
        case 'FDev':
        console.log('Works on frontend');
        break;
        case 'BDev':
        console.log('Works on backend');
        break;
        case 'Devops':
        console.log('Works in devops');
        break;
        case 'Ui/Ux':
        console.log('Works in ui/ux design');
        break;
        case 'Test':
        console.log('Works in TEsting automation and manual');
        break;
        

     }
     // for condition,( initialise a variable,condition  condition true  then execute code block{})
     const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];


for (let i = 0; i < cars.length; i++) {
  console.log( cars[i] ); 
} 

 for ( let num =20;num>10;num--){
  console.log(num);
 }



// while  it works if the condition is true

let a=10;
while(a>=1){
  console.log(a);
  a--;
}
// do while its execute once before check the condition
 let b= 31;
 do{
  console.log(b);
  b++;
 }while( b<30);

 // for in  to used in the object
  let teamdetails={
     csk:'Chennaisuperkings',
     matchplaed:'6',
     matchwon:'4',
     matchlost:'2',
     homegeound:'Chennai',
  }
   for( let key in teamdetails){
    console.log(teamdetails[key]);
   }
   // for of useed in array
   const car = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    for (let cardet of car)
      console.log(cardet);
//console.log(cardet[2]); to get the 2  indes letter of each word
 

 for (let i = 0; i < 10; i++) {
  if (i === 5)
      break;

  console.log(i);
}


// Exercise: Max of two numbers
 let  num1=35;
 let num2=45;
 if(num1>=num2){
  console.log('NUM 1 is greater');
 }
  else{
    console.log('num 2 is big');
  }
// they used it
  function max(numa, numb) {
    return numa >= numb ? numa : numb;
}
 console.log(max(20,15));
 


//  Exercise: Even and Odd Numbers
 let userin=43;
 if ( userin % 2 === 0){
console.log('You have entered number is EVEN');
 }
  else {
    console.log('You have entered number is ODD');

  }

  // FizzBuzz
   function FizzBuzz(num){
 if (num % 3 ===0 && num% 5 ===0)
   return console.log('FizzBuzz');
 else if(num % 3 === 0 )
  return console.log('Fizz');
 else if(num % 5 === 0 )
  return console.log('Buzz');
else{
  return num
}
   }
   FizzBuzz(15);

    
   
    
 
 