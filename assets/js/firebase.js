$(function(){
  setTimeout(function() {
     $('#splash').fadeOut(700);
  }, 3500);
});
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
      $(".button-collapse").sideNav();

        var config = {
            apiKey: "AIzaSyB1JSEyJaSVrao1-SLJeN323ima9wEbswQ",
            authDomain: "haribol-app.firebaseapp.com",
            databaseURL: "https://haribol-app.firebaseio.com",
            projectId: "haribol-app",
            storageBucket: "haribol-app.appspot.com",
            messagingSenderId: "779719796705"
          };
          firebase.initializeApp(config);

  });


window.onload = inicializar, azul;
var formAutenticacion, blue;


function azul(){
  blue = document.getElementById("modal5");
  blue.addEventListener("submit",autentificar, false);
  //formAutenticacion.addEventListener("submit",autentificar, false );
};

function inicializar(){
  formAutenticacion = document.getElementById("modal1");
  formAutenticacion.addEventListener("submit",registrar, false );
  //formAutenticacion.addEventListener("submit",autentificar, false );
};


function autentificar(event){

  event.preventDefault();
  var username = event.target.email.value;
  var contrasena = event.target.password.value;
  
  //hacerLogin(username,contrasena)
  firebase.auth().signInWithEmailAndPassword(username, contrasena)
  .then(function(result){
    //var myProfile = document.getElementById("myProfile");
    //myProfile.setAttribute("href", "index.html");
    email.value = "";
    password.value="";
    //alert('Usuario Antiguosdf!')
    window.location.href = "finish.html";;

  })

  .catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  //var errorMessage = error.message;
  
  //alert('Estas Maldsfsdf!')
  window.location.href = "finish.html";;
  // ...
});

}
function registrar(event){

  event.preventDefault();
  var username = event.target.email.value;
  var contrasena = event.target.password.value;


  firebase.auth().createUserWithEmailAndPassword(username, contrasena)
  .then(function(result){
    email.value = "";
    password.value="";
    var user = data.user;
    console.log(user);
    console.log('adentro')
    alert('Bienvenida Visaka')
    window.location.href = "finish.html";
  })

  .catch(function(error) {
    //alert('Estas Mal!')
    window.location.href = "finish.html";;
  // ...
});

};


/*
//inicio de usuario con google
 var provider = new firebase.auth.GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

 $('#googleInit').click(function(){
  firebase.auth().signInWithPopup(provider).then(function(data){
    var user = data.user;
    console.log(user);
   // $( ".fondoStreet " ).addClass( "hide" );
    $( ".fondoStreet " ).hide();
    $( ".visakaPerfil" ).removeClass( "hide" );
    $( ".userProfile" ).addClass( "hide" );
    $( ".userPrincipal" ).removeClass( "hide" );
    $('#imgP').attr('src',user.photoURL);
    $('#username').text(user.displayName);
    $('#profileInf').text(user.email);
    //window.location.href = "veryfy.html"
   

  }).catch(function(error){
    console.log('error');
  });
 });


//USUARIOS LOGEADOS 
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    $( ".fondoStreet " ).addClass( "hide" );
    $( ".visakaPerfil" ).removeClass( "hide" );
    $( ".userProfile" ).removeClass( "hide" );
    $( ".userPrincipal" ).addClass( "hide" );
    $('#imgP').attr('src',user.photoURL);
    $('#username').text(user.displayName);
    $('#profileInf').text(user.email); 
    // User is signed in.
  } else {
    $( ".visakaPerfil" ).addClass( "hide" );
    $( ".fondoStreet" ).removeClass( "hide" );
    // No user is signed in.
  }
}); */


 //NOTIFICACIONES
$("#notifications").click(function(){
var $toastContent = $('<span>Tienes 5 mensajes sin leer</span>');
  Materialize.toast($toastContent, 3000);

var $toastContent = $('<span>Kote ahora es tu amiga </span>');
  Materialize.toast($toastContent, 4000);

  var $toastContent = $('<span>Tienes un evento en 2 dias </span>'); //add($('<button class="btn-flat toast-action">Undo</button>'));
  Materialize.toast($toastContent, 5000);
});


$("#cerrarPerfil").click(function(){

  window.location.href = "index.html";

//firebase.auth().signOut().then(function() {
  //console.log('Signed Out');
  //$( ".visakaPerfil" ).addClass( "hide" );
  //$( ".fondoStreet" ).removeClass( "hide" );
//}, function(error) {
  //console.error('Sign Out Error', error);
 //});
});

$("#closeMovile").click(function(){
  window.location.href = "index.html";

//firebase.auth().signOut().then(function() {
  //console.log('Signed Out');
  //$( ".visakaPerfil" ).addClass( "hide" );
  //$( ".fondoStreet" ).removeClass( "hide" );
//}, function(error) {
  //console.error('Sign Out Error', error);
 //});
});


$("#homePage").click(function(){
  $( ".userProfile" ).addClass( "hide" );
  $( ".userPrincipal" ).removeClass( "hide" );
});

$("#profilePage").click(function(){
  $( ".userPrincipal" ).addClass( "hide" );
  $( ".userProfile" ).removeClass( "hide" );
});

$("#like").click(function(){
  $(".likeFoto").removeClass("teal-text");
  $(".likeFoto").addClass("red-text");

});
$("#deletPost").click(function(){
  $("#pin").hide();

});



var follower = 108;

$("#followBoton").click(function(){

  follower++;
  $( "#followCount" ).text( follower );

});


var focus = 1,
  blur = 0;
$( "#like" ).focusin(function() {
    focus++;
    $( "#likeCount" ).text( + focus + " Likes " );

  })
  .blur(function() {
    blur++;
    $( "#blur-count" ).text( "blur fired: " + blur + "x" );
  });

$("#addCOment").click(function(){
  var textarea2 = $("#textarea2").val();

  $("#comentBox").append(



      '<span>' +
         '<p class="grey-text text-darken-4 ">' +
         '<strong>Visaka Devi &nbsp </strong>' +
         '<span class="grey-text text-darken-1 ultra-small"> '+ textarea2 +'</span>' +
        ' </p> ' +
       '</span> ' 

    
    );

  $("#textarea2").val(" ");


});

// funcion textarea
  $('#btn').click(function(){
  var comment = $('#comment').val();
  if (comment !== '') {
  $('#comment').val("");
  var cont = $('#comment-cont');
  cont.append('<div class="chip comment-bubble"><img src="assets/images/images.jpg"alt="Contact Person">' + comment + '</div>')
  } else {
    $('#btn').attr('disable', 'disable');
  }
});




$("#newPostText").click(function(){
  var textarea = $("#textarea").val();
  $("#pines").append(

    '<div class="col s12 white z-depth-2" >' +
         ' <div class="col s2 center-align">' +
            ' <img src="assets/images/profilepci.jpg"  class=" myPic3 circle responsive-img valign profile-post-uer-image"> '  +                 
          ' </div>' +
           '<div class="col s10">' +
            ' <p class="grey-text text-darken-4 margin"><strong>Visaka Devi</strong></p>' +
            ' <span class="gray-text text-darken-1 ultra-small"><em>'+ textarea +'</em></span>' +
           '</div>' +

            '<div class="col s12 ">' +
               '<a href="#" id="like"><i class=" likeFoto teal-text material-icons">favorite</i> <span id="likeCount" class="grey-text text-darken-4 strong ">1 Like &nbsp</span> </a>' +
              ' <a href="#" id="" class="right" ><i class=" teal-text material-icons">more_horiz</i></a>' +

           '</div>' +
    '</div>' 
    );

  $("#textarea").val(" ");

});



 
  firebase.auth().singOut().then(function(){
    alert('Vuelve pronto');

    $( ".visakaPerfil" ).addClass( "hide" );
    $( ".fondoStreet" ).removeClass( "hide" );

  });

var idPin = 0;
function savePin(){
  //rescatar el valor del titulo
  var titulo =$("#tituloInput").val();
  var descripcion =$("#descripcionInput").val();
  var url =$("#urlInput").val();
  //rescatando valor de 
  //DOm, 
  $("#pines").append(

    '<div class="col s12 white z-depth-1" id="pin_'+ idPin +'">' +
        '<div class="col s2 center-align">' +
          ' <img src="assets/images/profilepci.jpg"  class=" myPic3 circle responsive-img valign profile-post-uer-image"> '  +                     
         '</div>' +
         '<div class="col s10">' +
           '<p class="grey-text text-darken-4 margin"><strong>Visaka Devi</strong></p>' +
           '<span class="grey-text text-darken-1 ultra-small">Ubicacion</span>' +
         '</div>' +
         '<div class="col s12">'   +                  
             '<img src="'+ url +'" alt="sample" class="responsive-img"> ' +                 
         '</div>' +
        ' <div class="col s12 ">' +
                  ' <a href="#" id="like"><i class=" likeFoto teal-text text-darken-4 material-icons">favorite</i> <span id="likeCount" class="grey-text text-darken-4 strong ">1 Like &nbsp</span> </a>' +
                   '<a href="#" id=""><i class=" teal-text text-darken-4 material-icons">input</i></a>' +
                   '<a href="#" id="" class="right" ><i class=" teal-text text-darken-4 material-icons">more_horiz</i></a>' +
         '</div>' +
          '<div class="col s12 ">' +
                  '<span>' +
                   '<p class="grey-text text-darken-4 ">' +
                  ' <strong>Visaka Devi</strong>' +
                   '<span class="grey-text text-darken-1 ultra-small">'  + descripcion +  '</span>' +
                   '</p>' +
                ' </span>' +
         '</div>' +
         '<div class="col s8 input-field ">' +
             '<input id="profile-comments" type="text" class="validate ">' +
             '<label for="profile-comments" class="active">Add a comment...</label>' +
         '</div>' +
         '<div class="col s12 ">' +

       '</div>' +
  '</div>' 
  );
  $("#modal4").hide();
};








