const products = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};


function getproduct(id)
{

    const search = new Promise((resolve , reject) => {
        for( let i in products)
        {
            if(products[id] == products[i])
            {
                resolve(products[id]);
                return;
            }
            
            
        }
        reject("product not found");
    })
    return search;

}

getproduct(2)
.then((products) => {console.log(products)})
.catch((error) => {console.log(error)})
