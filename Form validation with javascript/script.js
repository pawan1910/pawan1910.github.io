// ---Image Preview---
function PreviewImage() {
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

  oFReader.onload = function (oFREvent) {
    document.getElementById("uploadPreview").src = oFREvent.target.result;
    document.getElementById("uploadPreview").style.display = "block";
    Obj.Img = oFReader.result;
  };
}

// Validation

const form = document.getElementById("form");
const firstname = document.getElementById("fname");
form.addEventListener("submit", (e) => {
  e.preventDefault();
//   myFunction();
//   submit_form();
});

const Obj = {
  fname: "",
  lname: "",
  email: "",
  Password: "",
  Repassword: "",
  date: "",
  Gender: "",
  Skill: [],
  Img: "",
};

function submit_form() {
  let Fname = firstname.value;
  Obj.fname = Fname;
  let Lname = document.getElementById("lname").value;
  Obj.lname = Lname;
  let Email = document.getElementById("email").value;
  Obj.email = Email;
  let Npass = document.getElementById("NewPassword").value;
  Obj.Password = Npass;
  let Repass = document.getElementById("RePassword").value;
  Obj.Repassword = Repass;
  let Date = document.getElementById("date").value;
  Obj.date = Date;
  let gen = document.getElementsByName("gender").value;
  let skill = document.getElementsByClassName("checkbox")
  let Img = document.getElementById("uploadImage").value;

  let letter = /[a-z]/;
  let upper = /[A-Z]/;
  let num = /[0-9]/;
  let char = /[!@#$%^&*]/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let atposition = Email.indexOf("@");
  let dotposition = Email.lastIndexOf(".");
  

  if (Fname == "") {
    document.getElementById("first").innerHTML = "***Please fill all fields***";
    document.getElementById("fname").style.border = "2px solid #dc3545";
    return false;
  } else if (num.test(Fname) || char.test(Fname)) {
    document.getElementById("first").innerHTML =
      "***Must not contain number or special char***";
    document.getElementById("fname").style.border = "2px solid #dc3545";
    return false;
  } else if (letter.test(Fname)) {
    document.getElementById("first").innerHTML = "";
    document.getElementById("fname").style.border = "2px solid #22f022";
  }

  if (Lname == "") {
    document.getElementById("last").innerHTML = "***Please fill all fields***";
    document.getElementById("lname").style.border = "2px solid #dc3545";
    return false;
  } else if (num.test(Lname) || char.test(Lname)) {
    document.getElementById("last").innerHTML =
      "***Must not contain number or special char***";
    document.getElementById("lname").style.border = "2px solid #dc3545";
    return false;
  } else if (letter.test(Lname)) {
    document.getElementById("last").innerHTML = "";
    document.getElementById("lname").style.border = "2px solid #22f022";
  }

  if (Email == "") {
    document.getElementById("mail").innerHTML = "***Please fill all fields***";
    document.getElementById("email").style.border = "2px solid #dc3545";
    return false;
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= Email.length
  ) {
    document.getElementById("mail").innerHTML =
      "*Please enter correct email id*";
    document.getElementById("email").style.border = "2px solid #dc3545";
    return false;
  } else if (Email.match(mailformat)) {
    document.getElementById("mail").innerHTML = "";
    document.getElementById("email").style.border = "2px solid #22f022";
  }

  if (Date == "") {
    document.getElementById("dob").innerHTML = "***Please fill all fields***";
    document.getElementById("date").style.border = "2px solid #dc3545";
  } else {
    document.getElementById("dob").innerHTML = "";
    document.getElementById("date").style.border = "2px solid #22f022";
  }

  if (Npass == "") {
    document.getElementById("num").innerHTML = "***Please fill all fields***";
    document.getElementById("NewPassword").style.border = "2px solid #dc3545";
    return false;
  }
   else if (Npass.length < 8) {
    document.getElementById("num").innerHTML =
      "**Password length must be atleast 8 characters**";

    document.getElementById("NewPassword").style.border = "2px solid #dc3545";
    return false;
  } 
  else if (!letter.test(Npass) || !upper.test(Npass)) {
    document.getElementById("num").innerHTML =
      "Password must includes an UpperCase and LowerCase character";

    document.getElementById("NewPassword").style.border = "2px solid #dc3545";
    return false;
  } 
  else if (!letter.test(Npass) || !num.test(Npass)) {
    document.getElementById("num").innerHTML = "Password must includes number";

    document.getElementById("NewPassword").style.border = "2px solid #dc3545";
    return false;
  }
   else if (!letter.test(Npass) || !char.test(Npass)) {
    document.getElementById("num").innerHTML = "Password must includes special character";

    document.getElementById("NewPassword").style.border = "2px solid #dc3545";
    
  }

  if (Repass == "") {
    document.getElementById("message").innerHTML ="***Please fill all fields***";
    document.getElementById("RePassword").style.border = "2px solid #dc3545";
    return false;
  } 
   if (Npass != Repass) {
    document.getElementById("message").innerHTML = " Password did not match";
    document.getElementById("RePassword").style.border = "2px solid #dc3545";
    return false;
  }

  else if (Npass == Repass) {
    document.getElementById("num").innerHTML = "";
    document.getElementById("NewPassword").style.border = "2px solid #22f022";
    document.getElementById("message").innerHTML = "";
    document.getElementById("RePassword").style.border = "2px solid #22f022";
    
  }

  if(gen == ""){
    document.getElementById("radio").innerHTML ="***Please select gender***";
    return false;
  }

  if (checkboxes == ""){
    document.getElementById("check").innerHTML = "***Please select atlest 1 skill***";
  }

  if (Img == "") {
    document.getElementById("uploadImage").style.border = "2px solid #dc3545";
    document.getElementById("img").innerHTML = "***Please select image***";
    return false;
  }
  else {
    document.getElementById("uploadImage").style.border = "2px solid #22f022";
    document.getElementById("img").innerHTML = "";
  }
 
  myFunction();

  return false;
}



let gender = null;
function gender1() {
  gender = document.getElementById("male").value;
  Obj.Gender = gender;
}
function gender2() {
  gender = document.getElementById("female").value;
  Obj.Gender = gender;
}
function gender3() {
  gender = document.getElementById("others").value;
  Obj.Gender = gender;
}

// document.getElementsByName("gender")
// .forEach(radio => {
//     if (radio.checked)
//      {console.log(radio.value)
//        Obj.Gender = radio.value;
//     }})

//Console Values
function myFunction() {
  console.log("output", Obj);
}

//CheckBox
let valueList = document.getElementById("valueList");
let text = "You have selected ";
let listArray = [];

let checkboxes = document.querySelectorAll(".checkbox");

for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    if (this.checked == true) {
      listArray.push(this.value);
      valueList.innerHTML = console.log(text + listArray.join("/"));
      Obj.Skill = listArray;}
     else {
      listArray = listArray.filter((e) => e !== this.value);
      valueList.innerHTML = console.log(text + listArray.join("/"));
    }
  });
}
