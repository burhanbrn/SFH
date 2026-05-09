let user =
JSON.parse(localStorage.getItem("loggedInUser"));

if(!user){
window.location.href = "signin.html";
}

document.getElementById("welcomeUser")
.innerHTML =
`Welcome ${user.name} 👋`;

function logout(){

localStorage.removeItem("loggedInUser");

window.location.href = "signin.html";
}