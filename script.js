function compute()
{
    //Getting all the values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var yearInTheFuture = new Date().getFullYear()+parseInt(years);
    //The result text appear in the span tag
    //The <mark> tag highlights the numbers
     document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br\>at an interest rate of <mark>"+rate+"% </mark><br\>You will receive an amount of <mark>"+interest+"</mark>,<br\>in the year <mark>"+yearInTheFuture+"</mark>.<br\>";
}
   


//This function reads the value of the range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText= rateval;
}



//Check for positive values in the Amount input
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a valid number");
        document.getElementById("principal").focus();
    }
}
 

