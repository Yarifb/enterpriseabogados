const $btnUp = document.getElementById('up');

window.addEventListener('scroll', (e)=> {
    let y = document.documentElement.scrollTop;
    if(y === 0){
        $btnUp.classList.add("hide");
        $btnUp.classList.remove("active");
        }else if ( y >= 800){
            $btnUp.classList.add("active");
            $btnUp.classList.remove("hide");
        }
});

// recomendado hacer la clase desde HTML//
//document.addEventListener("DOMContentLoaded", (e)=> {
//    $btnUp.classList.add("hide");
//});    


document.addEventListener('click', (e) => {
    if(e.target === $btnUp || e.target.matches(".fa-chevron-circle-up")){
        //alert("Hola");
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    }
});

