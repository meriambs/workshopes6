 /**********************//////array function /**********************//////

 const companies =[
{name:'company one ',category:'fiannce',start:1994,end:2008},
{name:'company two ',category:'retail',start:1998,end:2007},
{name:'company three ',category:'auto',start:1948,end:2012},
{name:'company four ',category:'techno',start:1963,end:2018},
{name:'company five ',category:'fiannce',start:2002,end:2028},
{name:'company six ',category:'thecno ',start:1485,end:2058},

 ]

 const age =[33,12,20,16,5,54,21,66,12,15,45,25,64,32]
 //forEach it's like a loop but return nothing 
 for (let i=0;i<companies.length;i++){
     console.log(companies[i])
 }

companies.forEach((el)=>{
    console.log(el.name)
})

//ici on loop et c plus elegant on peut dire 
 //filter

 //get 21 and older 
let candrink =[];
for (let i=0;i<age.length ;i++){
    if(age[i]>=21){
        candrink.push(age[i])
    }
}
console.log(candrink);

//la on va realiser un filter function 
//ici c plus fin et il ne faut pas oublier la parie return si on a les {}
const arr = age.filter(e=>{return e>=21});
console.log('test',arr);


//an other  gget 
// const retailcompanies = companies.filter(function(companies){
//     if(companies.category === 'fiannce'){
// return true
//     }
// })
// console.log(retailcompanies)

// partie es6

const retailcompanies = companies.filter(el=>el.category === 'fiannce');
console.log('test', retailcompanies);

const startt = companies.filter(s=>s.start>= 1998 && s.start <2002 );

console.log('start',startt);

//ici je veux 
//c'est bon 
  
 //map 
 //each value is boucled 
const companinames = companies.map(function(el){
return `${el.name} [${el.start} - ${el.end}]`})
const companiname = companies.map(el=>`${el.name} [${el.start} - ${el.end}]`)
console.log(companiname);

// loop and multiplay 
const tst = age.map(el=>el*10)
console.log(tst)
//ici on a deux map wra b3adhhom 
const agemap =age.map(el=>Math.sqrt(el)).map(el=>el*2)
console.log(agemap)



 //sort 
//simple sortine 
const sorting =companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1
    }else {
        return -1
    }
})

//sorting es6 
const soting2 = age.sort((a,b)=> a>b ? 1: -1)
//ici du grand au peit 
const soting3 = age.sort((a,b)=> a>b ? -1: 1)


console.log('test2',soting3)

console.log(sorting)




 //reduce

//  let sum =0;
//  for (let i=0;i<age.length ;i++){
//      sum += age[i]
//  }

//  console.log(sum)

//  const testsum = age.reduce(function(total,age){
// return total +age;
//  },0);

//  console.log('reduce',testsum);

 const testsum = age.reduce((total,age)=> total +age,0)
 console.log('reduvvvce',testsum);

 //total year from all companie 

 const totalyear = companies.reduce((total,companies)=> total +(companies.end - companies.start),0)
console.log(totalyear)