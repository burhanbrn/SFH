const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});


document.getElementById("signupForm")
.addEventListener("submit", function (e) {
    e.preventDefault();
    let name =
    document.getElementById("signupName").value.trim();
    let email =
    document.getElementById("signupEmail").value.trim();
    let password =
    document.getElementById("signupPassword").value.trim();

    
    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    
    let users =
        JSON.parse(localStorage.getItem("users")) || [];
    let userExists =
        users.find(user => user.email === email);
    if (userExists) {
        alert("User already exists!");
        return;
    }

    
    let user = {
        name,
        email,
        password
    };
    users.push(user);
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );
    alert("Signup successful!");

    
    document.getElementById("signupForm").reset();


    container.classList.remove("active");
});


document.getElementById("signinForm")
.addEventListener("submit", function (e) {
    e.preventDefault();
    let email =
    document.getElementById("signinEmail").value.trim();
    let password =
    document.getElementById("signinPassword").value.trim();
    let users =
        JSON.parse(localStorage.getItem("users")) || [];
    let validUser = users.find(user =>
        user.email === email &&
        user.password === password
    );
    if (validUser) {
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(validUser)
        );
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password!");
    }
});