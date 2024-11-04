const signup = document.querySelector("h1");
signup.style.color = "blue";






document.getElementById("signUpForm").addEventListener("submit",function(event){
    event.preventDefault();

    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;

    
    document.getElementById('erroruserName');
    document.getElementById('errorpassword');

    document.getElementById("Username").style.border = " 1px solid #ccc";
    erroruserName.innerHTML= '';
    document.getElementById("password").style.border = " 1px solid #ccc";
    errorpassword.innerHTML= '';

    let isvalid = true;

    if(username.length < 6){
        document.getElementById("erroruserName").innerHTML ="Username must be at least 6 characters long.";
        document.getElementById("Username").style.border = "1px solid red";
        isvalid = false;
    }
    if(!username){
     erroruserName.innerHTML ="Username is required!";
     document.getElementById("Username").style.border = "1px solid red";
     isvalid=false;

    }
    if(password.length < 6){
        //document.getElementById("errorpassword").innerHTML  = "Password is required!";
        document.getElementById("errorpassword").innerHTML  = "Password must be at least 6 characters long.";
        document.getElementById("password").style.border = "1px solid red";

        isvalid = false;
    }
    if(!password){
        errorpassword.innerHTML ="Password is required!";
        document.getElementById("password").style.border = "1px solid red";
        isvalid=false;
   
       }

    if(isvalid){
        alert("Successful!");

        document.getElementById("signUpForm").reset();
    }
})