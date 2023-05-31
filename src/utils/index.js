export const totalPrice = (items) => {
    // let sum = 0;
    // items.forEach(element => {
    //     sum+=element.price;
    // });
    // return sum;

    return items.reduce((sum,product)=>sum+product.price,0)
};
