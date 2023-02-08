var initial="Miss/Mr.";
var name1="Human";
var msg1='Hello '+ initial + name1 + 'Welcome<br><br>';
document.write(msg1);
var msg2=`${initial}  ${ name1}  Now iam using back tick`;
document.write( msg2);

function changecase(){
    var userName=document.getElementById("username").value;
    
    document.getElementById("username").value=userName.toUpperCase();
    if(userName=="")
    {
        document.getElementById("usererror").innerHTML ="Enter valid user name".fontcolor('red');
    }
    else{
       document.getElementById("usererror").innerHTML =" ";
    }
}

function verifyname(){

    var name3=document.getElementById("namevalid").value;
    var error1=document.getElementById("error2");
    if(name3=="")
    {
        error1.innerHTML ="user name required".fontcolor('red');
    }
    else if(name3.length<4)
    {
        error1.innerHTML ="Name Too short.. min length 4 chars".fontcolor('gold');
    }
    else if(name3.length>10)
    {
        error1.innerHTML ="Name Too long.. max chars 10".fontcolor('gray');
    }
    else{
        error1.innerHTML ="";
    }
}