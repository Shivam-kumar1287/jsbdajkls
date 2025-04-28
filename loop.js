//  for(var i=0,i<10,i++){
//      console.log(i ," \n");
//          }

// const iss=true;
// if(iss){
//     console.log("true");
// }
// else{   
//     console.log("false");
// }

// if(2==1){
//     console.log("true");
// }


// const s=300;
// if(s>200){
//golobal scope 
//     var n= 100;
//     console.log("true",`${n}`);
// }
// console.log("false",`${n}`);

// if(s>200){
//     // local scopef
//     let n1= 100;
//     console.log("true",`${n1}`);
// }
// console.log("false",`${n1}`);


/**Switch loop in js */

// const month= 2;
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//         case 2:
//             console.log("February")
//             break;

//         case 3:
//             console.log("March")
//             break;
//         default:
//             console.log("Invalid month");

//             break;
// }

/** How to return a obje */
// const empobj={
//     name:"Rana",
//     age:22,
//     city:"Delhi",
//     country:"India"

// }
// if(Object.keys(empobj).length===0){
//     console.log("empty object")
// }
// else{
//     console.log("not empty object")
//     console.log(empobj.name);
// }


//**ternary operater */
// const age= 20;
// const isAdult= (age>=18)? "Adult" : "Not Adult"
// console.log(isAdult);

/** for loop  */
// for(let i=1;i<=10;i++){
//     console.log(i," \n");
// }



/**whiile loop */
// let i=1;
// while( i<=10){
//     console.log(i," ");
//     i++;
// }


// let i=0;
// let myarry=["sam","sara","sita","ram"];
// while(i<myarry.length){
//     console.log(myarry[i]);
//     i++;
// }


/** do while loop */
// let i=0;
// do{
//     console.log(i,"");
//     i++;
// }
// while(i<=10);

/** foreach loop */

// const myarry=["sam","sara","sita","ram"];
// myarry.forEach((value)=>{
//     console.log(value);
// })
    

/**for each  with arrow function */
// myarry.forEach(( greet=(item) =>{
//     console.log(item)
// }))
// greet("hello")

// const conding=["sita","ram","sara","sam"];
// const ss=conding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(ss);    

/**Fillter */
//const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnum=mynum.filter((item)=>{
//     return item%2==0;
// })
// console.log(newnum);


//const mynumm=[1,2,3,4,5,6,7,8,9,10,-1,2,3,4,-4,-5,-6,-7,-8,-9,-10];
// const ood=mynumm.filter((item) => /**here use can gave onew more constion */  {
//     return item >1 && item <=10
// })
// console.log(ood);
// mynumm.forEach((item)=>{
//     if(item>1 && item<=10)
//         console.log(item);
    
// })
// const nn=mynumm.map((num) => num*2)
//                .map((num) =>num+1)
//                .filter((num) => num>0);
// console.log(nn);


// const mybook=[
//     {
//         "id": 1,
//         "name": "sita",
//         "price": 200,
//         "author": "ram",
//         "publisher": "sara",
//     },
//     {
//         "id":2,
//         "name":"ram",
//         "price":300,
//         "author":"sita",
//         "publisher":"sara",
//     },
//     {
//         "id":3,
//         "name":"sara",
//         "price":400,
//         "author":"ram",
//         "publisher":"sita",
//     },
//     {
//         "id":4,
//         "name":"sam",
//         "price":500,
//         "author":"sita",
//         "publisher":"ram",
//     },
//     {
//         "id":5,
//         "name":"sita",
//         "price":600,
//         "author":"ram",
//         "publisher":"sara",
//     }
// ]

// const myboo=mybook.filter((item)=>{
//     return item.price>200 && item.price<=500
// })
// console.log(myboo);
// const mybb=mybook.filter((item)=>{
//     return item.author=='ram' ;
// })
// console.log(mybb);

