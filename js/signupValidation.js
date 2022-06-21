const validate = () =>{
    let first = document.getElementById("first_pass");
    let second = document.getElementById("second_pass");

    if(first == ""){
        alert("Please enter password.");
        // return false;
    }
    else if(first != second){
        alert("Password not matched.");
        // return false;
    }else{
        // return true;
    }
}

// document.getElementById("second").onblur = validate();
document.getElementById("signupForm").onsubmit=validate();
