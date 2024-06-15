mobile = document.querySelector('.header__mobile');
mobile.onclick = function (){
    navegacion = document.querySelector('.navegacion');
    if(navegacion.classList[1] == "activo"){
        navegacion.classList.remove('activo');
    }else{
        navegacion.classList.add('activo');
    }
}