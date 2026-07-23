async function getUserProfile(id)
{
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );

        if(response)
        {
             const data = await response.json()

            console.log("Name: " + data.name)
            console.log("emai: " + data.email)

        }
        else{
            console.log("not found");
        }

       
    }
    catch (error){console.log(error)}

}
getUserProfile(1)