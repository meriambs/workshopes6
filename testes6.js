
 /**********************////partie let var et const 
// ici on a const and let both block scoped while var is local and you can identify it anywhere 
//var can e declared many imes and let inly one time 
if(true){
    var variable='test var ';
    //  console.log('testvar1',variable)
  }

  if(true){
    let vary = 'test let ';
    //  console.log('let1',vary)
  }
  if(true){
     const  a= 'terfghjklest';
    // console.log('let3',a)
  }
//    console.log('test2va',variable);
//    console.log('testlet2',vary);
//   console.log('testlet3',a);


    function testy(){
    console.log('test2va',typeof(variable));
     console.log('testlet2',typeof(vary));
   }

  /**********************////ici on a let can be declared one time and var many time 
//    var variable='test var ';
//    let vary = 'test let ';
//    let vary = 'test let ';
//    console.log('let1',vary);
//    console.log('testvar1',variable)
   /**********************////var let us use a variable before we declare it and it can cause a probleme 

//    console.log('test ici var ', testyyyy);
//    var testyyyy ="test"

//    let testyyyy ="test"
//    console.log('test ici var ', testyyyy);

 /**********************//////ici nous c la propriete qui va changer et non pas la valeur .

//  const t=12;
//  let z=22;
//  console.log(t)

//  t=25;
//  console.log(t)
const person ={
    name:"test name "
}
console.log(person);
person.name='test';
console.log(person)
 /**********************//////Ternary Operator Used Instead of if...else
// basic if else

const number =5;
let result 

// if (number >= 50){
//     result = "not to ffty"
// }else {
//     result ='fifty'
// }

//first we break down the if 
// ljvjb ? lkfwx : azertyhuj 

// (avant le ? c'est le if , conditin , on copie et on le colle ) ? (resultat 1ere condition) :  (resultata else )


// number >= 50 ? result = "not to ffty" : result ='fifty'

// result = number >= 50 ?  "not to ffty" : 'fifty'
// console.log(result);

// if we have triple nested if :

// if (number === 0) {
//     result =' test result 1'
// } else if (number < 10){
//     result = 'yu have littel'
// }else {
// result=' no thanks '
// }

result = number === 0 ? ' test result 1' : ( number < 10 ?  'yu have littel'  : ' no thanks ');
        // (1st condition) (resultat 1 )      (else if )        (resultata 2 )     (else resulat 3 )

        console.log(result);      

        // it's hard to understand it so it's good in some case to use the nested thing try to do it with things u can , sometime it's to write the easiest thing to understad 




         /**********************//////arow function /**********************//////


document.addEventListener('click',function(){
    console.log('click1')
})

;
document.addEventListener('click',()=>{ console.log('click1')})
document.addEventListener('click',()=> console.log('click1'))
//consistant c'est quoi vraiment arow function 

