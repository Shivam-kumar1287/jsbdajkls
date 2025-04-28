 // console.log("Rama");
// console.log("Rana");
// console.log("Raman");

//function saynema(){
//     console.log("Rama");
//     console.log("Rana");
//     console.log("Raman");
// }
// saynema();

// function addnum(n1,n2){
//     console.log(n1+n2);
// }
// addnum(2,3);
// addnum(5,"3");
// console.log("rusult of sum of 5 6 " ,addnum(5,6));

//


// function addnum1(n1,n2){
//     return n1+n2;
// }
// console.log("rusult of sum of 5 + 6 =" ,addnum1(5,6));


// function loginuser(username){
//     return `Welcome ${username}`;
// }
// console.log(loginuser("Rana"));
// console.log(loginuser("Rama"));

// function userlogin(user){
//     if(user===undefined || user===""){
//         return "please enter username";
//     }
//     else{
//     return `welcone ${user}`;}
// }
// console.log(userlogin("Rana"));
// console.log(userlogin("  "));


// function addd(...n){
//     return n.reduce((a,b)=>a+b,0);
// }
// console.log(addd(2,3,4,5,6));


// function add(v1,v2,...n){
//     return n.reduce((a,b)=>a+b,0);
// }
// console.log(add(2,3,4,5,6));


// function one(){
//     return function two(){

//         return function three(){
//             return "hello";
//         }
//     }
// }
// console.log(one()().two());

// if(true){
//     const user="kdsf";
//     if(user==="kdsf"){
//         const wedsite="sdf";
//         console.log(wedsite);
//     }
// }




// const user = {
//     user: "sdkfj",
//     price: 99,
//     welcomemessage: function() {
//         console.log(`welcome ${this.user}`);
//     },
//     init: function() {
//         this.welcomemessage(); // Calls the method when 'init' is called
//     }
// };

// user.init(); // Output: "welcome sdkfj"
//     //user.welcomemessage.bind(user)();

// function c(){
//     console.log(this)
// }
//c(); // Output: Window object in browsers or global object in Node.js


/** arrow function  */
/**  */
const addtwo =(a,b) =>{
    return a+b;
}
console.log(addtwo(2,3)); // Output: 5
//name iife
(function chai(){
    console.log("hello")
})()
// two iife
( (chaii) => {
    console.log("hello", chaii); // Logs: "hello dfgd"
})('dfgd')