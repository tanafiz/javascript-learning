const cartTotal = 3940;
const isMember = true;
if(cartTotal > 1000){
    if(isMember){
        let discount = 20;
        let discountAmount = (cartTotal * discount) / 100;
        let finalPrice = cartTotal - discountAmount;
        console.log("Final price:" , finalPrice);
    }
    else{
        discount = 10;
        discountAmount = (cartTotal * discount) / 100;
        finalPrice = cartTotal - discountAmount;
        console.log("Final price:" , finalPrice);
    }
}
else{
    console.log("No discount");
}