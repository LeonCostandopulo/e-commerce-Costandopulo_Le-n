const userLogin = {email : "leonguayerd@gmail.com", password : "guayerd"};
let form = document.querySelector("#loginForm");
const message = document.querySelector("#message");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    if (email == userLogin.email && password == userLogin.password) {
        localStorage.setItem("email", "leonguayerd@gmail.com");
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", "0");
        location.href = "../index/index.html";
    } else {
        message.innerText = ("Datos incorrectos");
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
    }
});
