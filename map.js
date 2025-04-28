//  const mMap = new Map();
// mMap.set('red', 0.5);
//  mMap.set('jet', 0.5);
// mMap.set('jet', 0.5);
// for(const key of mMap){
//     console.log(key);
//}
// for(consy [key,value] of mMap){
//     console.log(key,value);
// }

const myobj={
    js:'javascript',
    py:'python',
    c:'c',
    'c++':'c++',
    csharp:'c#',
    java:'java',
    sql:'sql',
    html:'html',
    css:'css'
}
const mymap = new Map(Object.entries(myobj));
for(const [key,value] of mymap){
    console.log(key,value);
}