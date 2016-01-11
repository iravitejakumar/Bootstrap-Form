function fnOnSubmit(){
	fnFormValidation();
	var name=document.getElementById("name").value;
    var amount=document.getElementById("amount").value;
	var savings=document.getElementById("saving").value;
    document.getElementById("nameOutput").innerHTML=name;
    document.getElementById("amountOutput").innerHTML=amount;
    document.getElementById("typeOutput").innerHTML=savings;
}
function fnFormValidation() {
 name = document.getElementById('name').value;
    amount = document.getElementById('amount').value;
    pwd = document.getElementById('password').value;
    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    if (amount <= 0) {
        alert("Enter a valid amount");
        return false;
    }
    if (pwd.length >=6&&pwd.length<=10) {
        alert("Password must 6 to 10 characters long.");
        return false;
    } else {
        alert("submit successful !!!!");
        fnChangeName();
    }
}
function fnNameValidation() {

   var uname = document.getElementById('name').value;
   
 var namePattern = /^[A-Za-z]+$/;
    if (uname.match(namePattern)) {

        var name=document.getElementById('namediv');
        name.setAttribute('class','form-group col-sm-9 has-feedback has-success');
    	var nameIcon=document.getElementById('nameicon');
        nameIcon.setAttribute('class','glyphicon glyphicon-ok form-control-feedback');
        var message=document.getElementById('msg');
         message.innerText=''; 
    }
    else{
    	var name=document.getElementById('namediv');
        name.setAttribute('class','form-group col-sm-9 has-feedback has-error');
    	var nameIcon=document.getElementById('nameicon');
        nameIcon.setAttribute('class','glyphicon glyphicon-remove form-control-feedback');
        var message=document.getElementById('msg');
        message.innerText='Please Enter Alphabets';
    }
}
function fnAmountValidation() {
   var amount = document.getElementById('amount').value;
   
 var amountpattern = /^[0-9]+$/;
    if (amount.match(amountpattern)) {

        var amount=document.getElementById('amountdiv');
        amount.setAttribute('class','input-group col-sm-8 has-feedback has-success');
    	var amountIcon=document.getElementById('amounticon');
        amountIcon.setAttribute('class','glyphicon glyphicon-ok form-control-feedback');      
    }
    else{
    	 var amount=document.getElementById('amountdiv');
         amount.setAttribute('class','input-group col-sm-8 has-feedback has-error');
    	 var amountIcon=document.getElementById('amounticon');
        amountIcon.setAttribute('class','glyphicon glyphicon-remove form-control-feedback');
    }
}
function fnPasswordValidation() {
   var password = document.getElementById('password').value;
   
 var passwordPattern = /^.+$/;
    if (password.match(passwordPattern)&&(password.length>=6&&password.length<=10)) {

        var password=document.getElementById('passworddiv');
        password.setAttribute('class','form-group col-sm-9 has-feedback has-success');
    	var passwordIcon=document.getElementById('passwordicon');
        passwordIcon.setAttribute('class','glyphicon glyphicon-ok form-control-feedback');   
    }
    else{
    	 var password=document.getElementById('passworddiv');
       password.setAttribute('class','form-group col-sm-9 has-feedback has-error');
    	var passwordIcon=document.getElementById('passwordicon');
        passwordIcon.setAttribute('class','glyphicon glyphicon-remove form-control-feedback');
    }
}
