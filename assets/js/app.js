          var config = {
            apiKey: "AIzaSyB1JSEyJaSVrao1-SLJeN323ima9wEbswQ",
            authDomain: "haribol-app.firebaseapp.com",
            databaseURL: "https://haribol-app.firebaseio.com",
            projectId: "haribol-app",
            storageBucket: "",
            messagingSenderId: "779719796705"
          };
          firebase.initializeApp(config);
          var username = document.getElementById("username");
          var profileInf = document.getElementById("profileInf");
          var description = document.getElementById("description");

          var dbRefName = firebase.database().ref().child("userName");
          dbRef.on("value",snap=> username.innerText = snap.val() );

          var dbRefInf = firebase.database().ref().child("profileInf");
          dbRef.on("value",snap=> profileInf.innerText = snap.val() );

          var dbRefDesc = firebase.database().ref().child("description");
          dbRef.on("value",snap=> description.innerText = snap.val() );

          //obtener elementos
          var preObject = document.getElementById("object");
          // crear referencias
          var dbRefObje = firebase.database().ref().child("profileInf");
          dbRef.on("value",snap=> profileInf.innerText = snap.val() );





//generando el numero random
$(function(){
  setTimeout(function() {
     $('#splash').fadeOut(700);
  }, 2500);
});


$('#sendNumber').click(function(){

  numeroCel();
})
$('#listo').click(function(){

   checkCode();
})
var numeroCel= function(){
  var phoneNumber = $("#icon_telephone").val().length;
    if (phoneNumber == 9) {
      //añadir atributos href a el boton
      $("#sendNumber").attr("href", "veryfy.html");

      
    } else {
      alert("ERROR! \n Ingresa un numero Valido,\n de 9 digitos");
      $("#sendNumber").removeAttr("href");
    }
    randomCode();
   
}

//FUNCIONES
var randomCode = function(){
  var phoneNumber = $("#icon_telephone").val().length;
  if(phoneNumber == 9){
    window.localStorage.setItem("code", Math.round(Math.random()*900)+99);
    alert("Su codigo es " + window.localStorage.getItem("code"));
    window.localStorage.setItem("numberCode", $("#icon_telephone").val());
  }
}


//FUNCIONES

console.log('numberCode');

//Veryficar CODIGO
var checkCode = function(){
  var firstNum = $(".in-code").eq(0).val();
  var secondNum = $(".in-code").eq(1).val();
  var thirtNum = $(".in-code").eq(2).val();
  var codeTotal = firstNum + secondNum + thirtNum;
  console.log(codeTotal);
  if(codeTotal == window.localStorage.getItem("code")){
      $("#listo").attr("href", "finish.html");
    } else {
      alert("Codigo erroneo");
      $(".in-code").val("");
      $("#listo").attr("href", "phone.html");
    }
}
$('#finishsed').click(function(){
  $('#pageFinal').append(
     '<div class="container pink center" id="splash">' +
          '<h1 class=" white-text">Bienvenido</h1>' +
           '<img src="assets/images/logo.svg" alt="">' +
      '</div>' 
    )
})
