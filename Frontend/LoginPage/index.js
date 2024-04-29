const username = document.querySelector('.username');
const password = document.querySelector('.password');

async function myFunc(event) {
    event.preventDefault();

    try {
        const response = await axios.post("http://localhost:3000/Home/login", {
            username: username.value,
            password: password.value
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        sessionStorage.setItem('jwtToken', response.data.token);
        window.location.href = "/Frontend/ShowPage/index.html";
    } catch (error) {
        if (error.response && error.response.status === 401) {
            document.querySelector(".invalid").textContent = "Invalid Credentials"

        }
        else if(error.response && error.response.status==400){
            alert("Ensure your password is over 6 characters and check your email format.")
           
        } else {
            alert("An error occurred while logging in. Please try again later.");
            console.error(error);
        }
    }
}

// document.querySelector('.btn').addEventListener('click', myFunc);
