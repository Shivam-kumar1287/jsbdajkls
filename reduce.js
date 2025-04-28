const shoppingcart=[
    { id: 1, name: "apple", price: 1.5, quantity: 2 },
    { id: 2, name: "banana", price: 0.5, quantity: 5 },
    { id: 3, name: "orange", price: 1.0, quantity: 3 },
    { id: 4, name: "grape", price: 2.0, quantity: 1 },
    { id: 5, name: "kiwi", price: 1.2, quantity: 4 }
]
const cc= shoppingcart.reduce((acc,item)=> acc+item.price*item.quantity,0);
const cm= shoppingcart.reduce((acc,item)=> acc+item.price*item.quantity,0);
console.log(cm);


console.log(cc);
