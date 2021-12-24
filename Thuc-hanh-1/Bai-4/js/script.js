// coding implementation  
function checkform(){

    function checkemail(){
        var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        var email = document.getElementById("email").value;
        if(email == "")
            alert("you must fill in email!");
        else if (regExp.test(email))
            return true;
        else{
            alert("Invalid email!");
        }
    }
    
    function checkchar(){
        var char = document.getElementById("com").value;
        var min=30;
        if(char == "")
            alert("You must fill in comment!");
        else if(char.length < min)
            alert("Text needs to enter more than 30 characters!");
    }

    function checkrate(){
        var rate = document.getElementById("rate").value;
        parseInt(rate);
        if(rate == "")
            alert("You must fill in rate!");
        else if (isNaN(rate))
            alert( "Rate must be a number!");
    }

    checkemail();
    checkchar();
    checkrate();
}


// end coding implementation