
const username = document.querySelector('.username');
const password = document.querySelector('.password');
async function myFunc(event) {
    event.preventDefault()
    try{
    const response = await axios.post("http://localhost:3000/Home/sign-up", {
        username: username.value,
        password: password.value
    },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    alert(response.data.msg);
    window.location.href = "/Frontend/LoginPage/index.html";
}catch(error){

    if(error.response && error.response.status === 400){
        document.querySelector(".invalid").textContent = "Ensure your password is over 6 characters and check your email format."
        //alert("Ensure your password is over 6 characters and check your email format.");
    }
    else{
        alert("Internal server error")
    }
    
}
}


