// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);
// const n="skdf";
// console.log(`${n.toUpperCase}`);
// console.log(n.toString());

/*   object */ 
const ms=Symbol("name");
const obj={

    name:"sdf",
    age:23,
    [ms]:"sdf",
    location:"sdf ",
    email:" sdf"
};
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj[ms]);
// console.log(obj.location);


/** /* 1. Object.keys() - returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
 * 2. Object.values() - returns an array of a given object's own enumerable property values, in the same order as we get with a normal loop.
 * 3. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as we get with a normal loop.
 * 4. Object.fromEntries() - transforms a list of key-value pairs into an object.
 * 5. Object.assign() - copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
 * 6. Object.freeze() - freezes an object. A frozen object can no longer be changed: new properties can't be added, existing properties can't be removed or changed, and the object's prototype can't be changed.
 * 7. Object.seal() - seals an object. A sealed object can no longer have new properties added to it, but existing properties can be removed or changed.
 * 8. Object.is() - determines whether two values are the same value.
 * 9. Object.getOwnPropertyDescriptor() - returns a property descriptor for an own property (that is, a property directly present on an object and not in its prototype chain).
 * 10. Object.getOwnPropertyDescriptors() - returns all own property descriptors of a given object.
 * 11. Object.getPrototypeOf() - returns the prototype of the specified object.
 * 12. Object.setPrototypeOf() - sets the prototype of a specified object to another object or null.
 *  
 * 13. Object.create() - creates a new object, using an existing object as the prototype of the newly created object.
 * 14. Object.defineProperty() - adds the named property described by a given property descriptor to an object.
 *  15. Object.defineProperties() - adds the named properties described by the given property descriptors to an object.
 *  16. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as we get with a normal loop.
*
/**
 * 
 */
// const ti={};
// ti.name="sdf";
// ti.age=23;
// ti.location="sdf";
// console.log(ti);
// console.log(Object.keys(ti));

// console.log(Object.values(ti));

// console.log(Object.entries(ti));
// console.log(Object.fromEntries(Object.entries(ti)));

// const re={
//     email:"sdf",
//     fullname:{
//         username:{
//             firstname:"shivam",
//             lastname:"Rajput"
//         }
//     }
// }
// console.log(re.email);
// console.log(re.fullname.username.firstname);
// console.log(re.fullname.username.lastname);
// console.log(re.fullname.username["firstname"],re.fullname.username["lastname"]);
// console.log(re.fullname.username["lastname"]);


/** object assign  */
// const obj1={
//     name:"Raman",
//     age:23,
//     location:"Rajkot", 
//     email:" sdf"
// };
// const obj2={
//     name:"Rana",
//     age:23,
//     location:"sdf ",
//     email:" sdf"
// };
// console.log(obj1===obj2);
// const on3=Object.assign({},obj1,obj2);
//  console.log(on3);
// const course = {
//     name: "sdf",
//     duration: "1hour",
//     location: "s;re",
//     email: " sdf"
// }

// const {location, l} = course;
// console.log(course);
// console.log(location);
// console.log(l);