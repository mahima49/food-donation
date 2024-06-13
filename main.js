const flip = document.querySelector('.inner__form'),
flipbtn = document.querySelectorAll('.inner__aside span a'),
fliphold = document.querySelector('.inner__aside')
let state = false;
flipbtn.forEach(element => {
    element.addEventListener('click',showhide)
});
function showhide(e){
    event.preventDefault()
    if(!state){
        flip.classList.add("active");
        fliphold.classList.add("active")
        state = true;
    }else{
        flip.classList.remove("active");
        fliphold.classList.remove("active")
        state = false;
    }
}