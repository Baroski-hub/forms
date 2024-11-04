const form  = document.querySelector("h1");
form.style.color = "#f44336";

document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    const form = document.getElementById("myForm").value;
    const firstName = document.getElementById("firstName").value;
    const otherName = document.getElementById("otherName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = new Date(document.getElementById("dob").value); 
    const errorFirstName = document.getElementById("errorFirstname")
    const errorOtherName = document.getElementById("errorOthername")
    const errorphoneNumber = document.getElementById("errorphoneNumber")
    const errorEmail = document.getElementById("errorEmail")
    const errorDOB = document.getElementById("errorDOB")

    document.getElementById("firstName").style.border = "1px solid #ccc"
    errorFirstName.innerHTML= '';
    document.getElementById("otherName").style.border = "1px solid #ccc"
    errorOtherName.innerHTML= '';
    document.getElementById("phone").style.border = "1px solid #ccc"
    errorphoneNumber.innerHTML= '';
    document.getElementById("email").style.border = "1px solid #ccc"
    errorEmail.innerHTML= '';
    document.getElementById("dob").style.border = "1px solid #ccc"
    errorDOB.innerHTML= '';

    let isValid = true; 
     
    //if(!form){
     //   alert("Please fill in the space!!")
    //}

     //Names validation
     console.log(firstName)
    if(!firstName){
        // errorMessages.push("First name is required!");
        errorFirstName.innerHTML= "First name is required!"
        document.getElementById("firstName").style.border = "1px solid red"
        isValid = false;
    }
    console.log(otherName)
    if(!otherName){
        //errorMessages.push("Other name is required!");
        errorOtherName.innerHTML= "Other name is required!"
        document.getElementById("otherName").style.border = "1px solid red"
        isValid = false;

    }


    //Phone validation
    const phonePattern = /^[0-9]{10}$/;
    console.log(phone)
    if(!phonePattern.test(phone)){
        //errorMessages.push("Phone number must be 10 digits.");
        errorphoneNumber.innerHTML= "Phone Number is required!"
        document.getElementById("phone").style.border = "1px solid red"
        isValid = false;
    }
    
    //Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email)
    if(!emailPattern.test(email)){
        //errorMessages.push("Please enter a valid email address.");
        errorEmail.innerHTML= "Email is required!"
        document.getElementById("email").style.border = "1px solid red"
        isValid = false;
    }

    //Date validation
    const age = new Date().getFullYear() - dob.getFullYear();
    console.log(age)
    if(age < 20 || age > 30){
        errorDOB.innerHTML= "Age must be between 20 and 30 years old."
        document.getElementById("dob").style.border = "1px solid red"
        isValid = false;
        // errorDOB.push("Age must be between 20 and 30 years old.");
    }
    if(!age){
        errorDOB.innerHTML= "DOB is required!"
        document.getElementById("dob").style.border = "1px solid red"
        isValid = false;

    }


    if (isValid){
        alert("Form submitted successfully!");
      document.getElementById("myForm").reset();

    } 

    // const errorMessagesDiv = document.getElementById("erromessage");
    // errorMessagesDiv.innerHTML = "";
    // if(errorMessages.length > 0){

    // }else{
    //     alert("Form submitted successfully!");

    // }

    // const errorMessage = document.getElementById("erromessage");
    // errorMessage.style.color = "red";

});

// const fom = document.getElementById('myForm');
// console.log(fom);

// const div = document.querySelectorAll('div');
// console.log(div);

// const labels =document.querySelectorAll('label');
// console.log(labels);

// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// const button = document.querySelector('button');
// console.log(button);
