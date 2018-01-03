$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

window.onload = inicializar;
var formAutenticacion;
function inicializar(){
  formAutenticacion = document.getElementById("modal2");
  formAutenticacion.addEventListener("submit",autentificar, false );
  //formAutenticacion.addEventListener("submit",autentificar, false );


}
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
    window.location.href = "veryfy.html"

    alert('Usuario Antiguo!');

    var myProfile = document.getElementById("myProfile");
    myProfile.setAttribute("href", "index.html");

  })

  .catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  //var errorMessage = error.message;
  
  alert('Estas Mal!');
  window.location.href = "index.html"
  // ...
});

}
function registrar(event){

  event.preventDefault();
  var username = event.target.email.value;
  var contrasena = event.target.password.value;


  firebase.auth().createUserWithEmailAndPassword(username, contrasena)
  .then(function(result){
    alert('Estas dentro Bien!');
  })

  .catch(function(error) {
    alert('Estas Mal!');
  // ...
});

}



/*
(function() {
  //inicializar firebase 
  var config = {
            apiKey: "AIzaSyB1JSEyJaSVrao1-SLJeN323ima9wEbswQ",
            authDomain: "haribol-app.firebaseapp.com",
            databaseURL: "https://haribol-app.firebaseio.com",
            projectId: "haribol-app",
            storageBucket: "",
            messagingSenderId: "779719796705"
          };
          firebase.initializeApp(config);
          const txtEmail = document.getElementById('email');
          const txtPassword3 = document.getElementById('password3');
          const btnLogin = document.getElementById('btnLogin');
          const btnSingUp = document.getElementById('singUp');
          const btnLogout = document.getElementById('logout');
          //AÑADIR EVENTO LOGIN
          btnLogin.addEventListener('click', e => {
            //obtener valores  email y passwORD
            const email = txtEmail.value;
            const pass = txtPassword3.value;
            //creamos una constante para almacenar los valores 
            const auth = firebase.auth();
            //Sign In
            const promise = auth.signInWhithEmailAndPassword(email,pass);
            promise.catch( e => console.log(e.message)
              );
          });
          
          //AÑADIR EVENTO SINGUP
          btnSingUp.addEventListener('click', e => {
            //obtener valores  email y passwORD
            //COMPROBAR QUE EL EMAIL SEA REAL
            const email = txtEmail.value;
            const pass = txtPassword3.value;
            //creamos una constante para almacenar los valores 
            const auth = firebase.auth();
            console.log('hoaR')
            //Sign up
            const promise = auth.createUserWithEmailAndPassword(email,pass);
            promise.catch( e => console.log(e.message)
              );
          });
         
          var username = document.getElementById("username");
          var profileInf = document.getElementById("profileInf");
          var description = document.getElementById("description");
          var dbRefName = firebase.database().ref().child("userName");
         dbRefName.on("value",snap=> username.innerText = snap.val() );
          var dbRefInf = firebase.database().ref().child("profileInf");
          dbRefInf.on("value",snap=> profileInf.innerText = snap.val() );
          var dbRefDesc = firebase.database().ref().child("description");
          dbRefDesc.on("value",snap=> description.innerText = snap.val() );
          //obtener elementos Evento Value
          //Sicronizar Objectos
          //const = crear una constante
          const preObject = document.getElementById("object");
          // crear referencias
          const dbRefObject = firebase.database().ref().child("object");
          //METODO ON  
          //SNAP: foto fija de la informacion que se encuentra en la base de datos 
         // dbRefObject.on("value",snap => console.log(snap.val()) );
         dbRefObject.on("value",snap => {
          preObject.innerText = JSON.stringify(snap.val(),null, 3) 
          });
         //evento CHild
           const ulList = document.getElementById("lista");
          // crear referencias
          const dbRefList =  dbRefObject .child("habilidades");
          //el objeto que habiamos creado arriba"habilidades"
          //METODO ON  
          //SNAP: foto fija de la informacion que se encuentra en la base de datos 
         // dbRefObject.on("value",snap => console.log(snap.val()) );
         //cambiamos el tipo de evento de valuea a child_added
         //funcion call back
         dbRefList.on("child_added",snap => { //console.log(snap.val()) );
         //creamos un item list 
         const li = document.createElement('li');
          li.innerText = snap.val();
          li.id = snap.key;
          ulList.appendChild(li);
        });
         dbRefList.on("child_changed", snap =>{
          const liChange = document.getElementById(snap.key);
          liChange.innerText = snap.val();
         });
         dbRefList.on("child_removed" , snap => {
          const liRemove = document.getElementById(snap.key)
          liToRemove.remove();
         });
         //AUTENTIFICACION
         //const auth = firebase.auth();
         //auth.signInWhithEmailAndPassword(email,pass);
         //auth.createUserWithEmailAndPassword(email.pass);
         //auth.onAuthStateChanged(firebase=> {});
}()); 




$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

window.onload = inicializar;
window.onload = ingresar;
var formAutenticacion;
var formLogin;

function inicializar(){
  formAutenticacion = document.getElementById("form_autenti");
  formAutenticacion.addEventListener("submit",autentificar, false );
  //formAutenticacion.addEventListener("submit",autentificar, false );
};
function ingresar(){
  formLogin = document.getElementById("form_login");
  formLogin.addEventListener("submit",registrar, false );
  //formAutenticacion.addEventListener("submit",autentificar, false );
};

function autentificar(event){

  event.preventDefault();
  var username = event.target.email.value;
  var contrasena = event.target.password.value;
  
  //hacerLogin(username,contrasena)
  firebase.auth().signInWithEmailAndPassword(username, contrasena)
  .then(function(result){
    var myProfile = document.getElementById("myProfile");
    myProfile.setAttribute("href", "index.html");
    email.value = "";
    password.value="";
    window.location.href = "index.html"

    alert('Usuario Antiguo!');

    var myProfile = document.getElementById("myProfile");
    myProfile.setAttribute("href", "index.html");

  })

  .catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  //var errorMessage = error.message;
  
  alert('Estas Mal!');
  window.location.href = "index.html"
  // ...
});

}
function registrar(event){

  event.preventDefault();
  var username = event.target.email.value;
  var contrasena = event.target.password.value;


  firebase.auth().createUserWithEmailAndPassword(username, contrasena)
  .then(function(result){
  var myProfile = document.getElementById("myProfile");
  myProfile.setAttribute("href", "veryfy.html");
    alert('Estas dentro Bien!');
  })

  .catch(function(error) {
    alert('Estas Mal!');
  // ...
});

}

(function() {

  //inicializar firebase 
  var config = {
            apiKey: "AIzaSyB1JSEyJaSVrao1-SLJeN323ima9wEbswQ",
            authDomain: "haribol-app.firebaseapp.com",
            databaseURL: "https://haribol-app.firebaseio.com",
            projectId: "haribol-app",
            storageBucket: "",
            messagingSenderId: "779719796705"
          };
          firebase.initializeApp(config);

          const txtEmail = document.getElementById('email');
          const txtPassword3 = document.getElementById('password3');
          const btnLogin = document.getElementById('btnLogin');
          const btnSingUp = document.getElementById('singUp');
          const btnLogout = document.getElementById('logout');
          //AÑADIR EVENTO LOGIN

          btnLogin.addEventListener('click', e => {
            //obtener valores  email y passwORD
            const email = txtEmail.value;
            const pass = txtPassword3.value;
            //creamos una constante para almacenar los valores 

            const auth = firebase.auth();
            //Sign In

            const promise = auth.signInWhithEmailAndPassword(email,pass);
            promise.catch( e => console.log(e.message)
              );
          });

          

          //AÑADIR EVENTO SINGUP

          btnSingUp.addEventListener('click', e => {
            //obtener valores  email y passwORD
            //COMPROBAR QUE EL EMAIL SEA REAL
            const email = txtEmail.value;
            const pass = txtPassword3.value;
            //creamos una constante para almacenar los valores 

            const auth = firebase.auth();
            console.log('hoaR')
            //Sign up

            const promise = auth.createUserWithEmailAndPassword(email,pass);
            promise.catch( e => console.log(e.message)
              );
          });
         
          var username = document.getElementById("username");
          var profileInf = document.getElementById("profileInf");
          var description = document.getElementById("description");

          var dbRefName = firebase.database().ref().child("userName");
         dbRefName.on("value",snap=> username.innerText = snap.val() );

          var dbRefInf = firebase.database().ref().child("profileInf");
          dbRefInf.on("value",snap=> profileInf.innerText = snap.val() );

          var dbRefDesc = firebase.database().ref().child("description");
          dbRefDesc.on("value",snap=> description.innerText = snap.val() );

          //obtener elementos Evento Value


          //Sicronizar Objectos
          //const = crear una constante

          const preObject = document.getElementById("object");
          // crear referencias
          const dbRefObject = firebase.database().ref().child("object");
          //METODO ON  
          //SNAP: foto fija de la informacion que se encuentra en la base de datos 
         // dbRefObject.on("value",snap => console.log(snap.val()) );
         dbRefObject.on("value",snap => {
          preObject.innerText = JSON.stringify(snap.val(),null, 3) 
          });

         //evento CHild
           const ulList = document.getElementById("lista");
          // crear referencias
          const dbRefList =  dbRefObject .child("habilidades");
          //el objeto que habiamos creado arriba"habilidades"
          //METODO ON  
          //SNAP: foto fija de la informacion que se encuentra en la base de datos 
         // dbRefObject.on("value",snap => console.log(snap.val()) );


         //cambiamos el tipo de evento de valuea a child_added
         //funcion call back

         dbRefList.on("child_added",snap => { //console.log(snap.val()) );
         //creamos un item list 

         const li = document.createElement('li');
          li.innerText = snap.val();
          li.id = snap.key;
          ulList.appendChild(li);
        });

         dbRefList.on("child_changed", snap =>{
          const liChange = document.getElementById(snap.key);
          liChange.innerText = snap.val();

         });

         dbRefList.on("child_removed" , snap => {
          const liRemove = document.getElementById(snap.key)
          liToRemove.remove();
         });


         //AUTENTIFICACION

         //const auth = firebase.auth();
         //auth.signInWhithEmailAndPassword(email,pass);
         //auth.createUserWithEmailAndPassword(email.pass);
         //auth.onAuthStateChanged(firebase=> {});

}()); */





