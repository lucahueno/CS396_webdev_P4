var submitted=false;

function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
      alert("お前は必須項目です。") ;
      return false;
    }
    return true;
  }

 function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert("メールアドレスは必須項目です。") ;//Validation Message
    return false;

  }

  if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    alert("メールアドレスを正しく入力してください。") ;//Validation Message
    return false;

  }

  return true;

}

function validateMessage () {

    var message = document.getElementById('message').value;
    if(message.length == 0) {
      alert("本文は必須項目です。") ;//Validation Message
      return false;
  
    }
    return true;
  }


function validateForm() {
  if (!validateName() || !validateEmail()) {
    return false;
  }
  else {
    submitted=true;
    return true;
  }
}