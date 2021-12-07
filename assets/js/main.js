window.addEventListener("load",function(){
    const showPassword = document.querySelector(".show-password")
    const inputPassword = document.querySelector(".password-input #pwd")
    showPassword.addEventListener("click",function(){
        if (inputPassword.type === "password"){
            inputPassword.type = "text"
            showPassword.classList.remove("far")
            showPassword.classList.remove("fa-eye")
            showPassword.classList.add("fas")
            showPassword.classList.add("fa-eye-slash")
        }
        else{inputPassword.type = "password"
        showPassword.classList.add("far")
        showPassword.classList.add("fa-eye")
        showPassword.classList.remove("fas")
        showPassword.classList.remove("fa-eye-slash")
    }
    })
})
