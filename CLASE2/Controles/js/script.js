var btnSaludar;

window.addEventListener('load',function(){
    btnSaludar = document.getElementById('btnSaludar');

//    btnSaludar.addEventListener('click',saludar);

    btnSaludar.addEventListener('click',function(){
        alert("Hola Mundo");
    });

    btnSaludar.addEventListener('click',function(){
        alert("Chau");
    });


/*    btnSaludar.onclick = saludar;
    btnSaludar.onclick = function(){
        alert("Chau");
    };*/

});










function saludar(){
    alert("Hola Mundo");
}