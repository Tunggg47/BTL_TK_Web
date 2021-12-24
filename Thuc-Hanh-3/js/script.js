// coding implementation
function checkform() {
    var name = document.getElementById("ten").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (name == "" || email == "" || subject == "" || message == "") {
        alert("Bạn phải điền đầy đủ thông tin!");
        return false;
    }
    else if (regExp.test(email)){
        alert("Bạn đã gửi thành công!");
        return true;
    }    
    else {
        alert("Email không đúng định dạng!");
        return false;
    }
    

}

// end coding implementation