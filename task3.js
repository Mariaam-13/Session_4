function sendVerificationEmail(email)
{
    return new Promise((resolve, reject) => {
        console.log("Sending verification email...");

        setTimeout(() => {
            resolve("Email sent successfully")
        }, 3000)

    
    })
}

async function registerUser(name, email) {
    try
    {
        if(email && name)
        {
            const messge = await sendVerificationEmail(email);
            console.log(messge);
            console.log("User registered successfully");
        }
        else{
            console.log("email and name is required")
        }
       
        
    }
    catch(error){console.log(error)}
    
}
registerUser("Esraa", "esraa@gmail.com")