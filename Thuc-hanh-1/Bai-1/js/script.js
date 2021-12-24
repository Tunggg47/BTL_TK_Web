// coding implementation
function checkform(){

    function pricefrom(){
        var from = document.getElementById("from").value;
        parseInt(from);
        if(from == "")
            alert("You must fill in Price from!");
        else if (isNaN(from))
            alert( "Price from must be a number!");
        else if(from < 0)
            alert("Price from must be a natural number!");
    }
    function priceto(){
        var to = document.getElementById("to").value;
        parseInt(to);
        if(to == "")
            alert("You must fill in Price to!");
        else if (isNaN(to))
            alert( "Price to must be a number!");
        else if(to < 0)
            alert("Price to must be a natural number");
    }
    pricefrom();
    priceto();
}
// end coding implementation