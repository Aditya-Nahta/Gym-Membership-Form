function clearErrors()
{
    errors = document.getElementsByClassName('errorform');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    //set error inside id 
    element = document.getElementById(id);
    element.getElementsByClassName('errorform')[0].innerHTML = error;
}

function showpw() {
  var x = document.getElementById("show1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function showcpw() {
  var y = document.getElementById("show2");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
} 

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation 

    var email = document.forms['myForm']["email"].value;
    if (email.length>25){
        document.getElementById("prompt1").style.color = "red"
        document.getElementById("prompt1").style.fontSize = "x-large"
        seterror("mail", " Email length is too long");
        returnval = false;
    }
    else {
        document.getElementById("prompt1").style.color = "green"
        document.getElementById("prompt1").style.fontSize = "x-large"
        seterror("mail", " ACCEPTED");
        returnval = false;
    }

    var uname = document.forms['myForm']["uname"].value;
    if (uname.length < 3 ){
        document.getElementById("prompt2").style.color = "red"
        document.getElementById("prompt2").style.fontSize = "x-large"
        seterror("username", " Username is too short ");
        returnval = false;
    }
    if (uname.length > 12){
        document.getElementById("prompt2").style.color = "red"
        document.getElementById("prompt2").style.fontSize = "x-large"
        seterror("username", " Username is too long ");
        returnval = false;
    } 
    else {
        document.getElementById("prompt2").style.color = "green"
        document.getElementById("prompt2").style.fontSize = "x-large"
        seterror("username", " ACCEPTED ");
        returnval = false;
    }
    var password = document.forms['myForm']["pword"].value;
    if (password.length < 6){
        document.getElementById("prompt3").style.color = "red"
        document.getElementById("prompt3").style.fontSize = "x-large"
        seterror("pw", " Password length must be atlease 6 characters long! ");
        returnval = false;
    }
    else{
        document.getElementById("prompt3").style.color = "green"
        document.getElementById("prompt3").style.fontSize = "x-large"
        seterror("pw", " ACCEPTED ");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["cpword"].value;
    if (cpassword != password){
        document.getElementById("prompt4").style.color = "red"
        document.getElementById("prompt4").style.fontSize = "x-large"
        seterror("cpw", " Password and Confirm password should match! ");
        returnval = false;
    }
    else{
        document.getElementById("prompt4").style.color = "green"
        document.getElementById("prompt4").style.fontSize = "x-large"
        seterror("cpw", " Matched ");
        returnval = false;
    }

    return returnval;
}


