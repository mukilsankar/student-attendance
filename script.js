document.getElementById("form").addEventListener("click", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.getElementById("name").value;
    password =  document.getElementById("password").value;

    if (username == "rmk" && password == "0000") {
        window.location.href = "student.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }
}

