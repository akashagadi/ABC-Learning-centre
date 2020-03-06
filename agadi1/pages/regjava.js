function vfun() {
    var username = document.forms["myform"]["username"].value;
    var password = document.forms["myform"]["password"].value;

    if (uname == null || uname == "") {
        document.getElementById("errorBox").innerHTML =
            "enter the user name";
        return false;
    }

    if (password == null || password == "") {
        document.getElementById("errorBox").innerHTML =
            "enter the password";
        return false;
    }

    if (username != '' && password != '') {
        alert("Login successfully");
    }

}

//form 2

function vfun1() {
    var uname1 = document.forms["myform2"]["username"].value;
    var email1 = document.forms["myform2"]["email1"].value;
    var contact = document.forms["myform2"]["contact"].value;
    var upswd1 = document.forms["myform2"]["upswd1"].value;
    var upswd2 = document.forms["myform2"]["upswd2"].value;


    if (uname1 == null || uname1 == "") {
        document.getElementById("errorBox").innerHTML =
            "enter the user name";
        return false;
    }

    if (email1 == null || email1 == "") {
        document.getElementById("errorBox").innerHTML =
            "enter the email";
        return false;
    }
    if (contact == null || contact == "") {
        document.getElementById("errorBox").innerHTML =
            "enter contact number";
        return false; 

    }
    if (upswd1 == null || upswd1 == "") {
        document.getElementById("errorBox").innerHTML =
            "enter the password";
        return false;
    }

    if (upswd2 == null || upswd2 == "") {
        document.getElementById("errorBox").innerHTML =
            "enter the password";
        return false;
    }

    if (upswd1 != upswd2) {
        document.getElementById("errorBox").innerHTML =
            "password dont match";
        return false;
    }



    if (uname1 != '' && upswd1 != '' && upswd2 != '' && email1 != '' && upswd1 == upswd2)


        alert("Register successfull");


}