


// Reset Password
function reset_password() {
    let Npass = document.getElementById("NewPassword").value;
    let Repass = document.getElementById("RePassword").value;
    let letter = /[a-z]/;
    let upper  =/[A-Z]/;

    if(Npass.length < 8) {
        document.getElementById("num").innerHTML = "**Password length must be atleast 8 characters**";
        document.getElementById("NewPassword").value = "";
        document.getElementById("NewPassword").style.border="2px solid red";

     }

     else if (!letter.test(Npass) ||!upper.test(Npass) ) {
        document.getElementById("num").innerHTML="Password must includes an UpperCase and LowerCase character";
        document.getElementById("NewPassword").value = "";
        document.getElementById("NewPassword").style.border="2px solid red";
    }
    
    else if (Npass == "" || Repass == "") {
        document.getElementById("num").innerHTML= "***Please fill all fields***";
        document.getElementById("NewPassword").style.border="2px solid red";
        document.getElementById("RePassword").style.border="2px solid red";
    }
    else if (Npass == Repass) {
        window.location.href = "success.html";
    }
    else if (Npass != Repass) {
        document.getElementById("message").innerHTML= " Password did not match";
        document.getElementById("RePassword").value = "";
        document.getElementById("RePassword").style.border="2px solid red";
    }
}

