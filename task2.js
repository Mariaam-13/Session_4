function calculateShipping(weight)
{
    const shipping = new Promise((resolve, reject) => {
        if(weight > 0 )
        {
            resolve(weight * 5);
        }
        else{reject("invalid weight")}
        
    })
    return shipping;
}

calculateShipping(10)
.then(cost => console.log("Shipping cost: " + cost))
.catch(error => console.log(error))


calculateShipping(-10)
.then(cost => console.log("Shipping cost: " + cost))
.catch(error => console.log(error))