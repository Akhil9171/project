function calculator()
{   
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    if (a==null || a=="" || b==null || b=="")
    {  
    alert("Name can't be blank");  
    return false;  
    }


    var operator = document.getElementById("operator").value;
    switch(operator)
    {
        case '+' : document.getElementById("answer").value = a+b;
                 break;
        case '-' : document.getElementById("answer").value = a-b;
                 break;
        case '*' : document.getElementById("answer").value = a*b;
                 break;
        case '/' : document.getElementById("answer").value = a/b;
                 break;
    }
}