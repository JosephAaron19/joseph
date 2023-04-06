// Header toggle

let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-activate');
    this.classList.toggle('fa-xmark')
})


//Typing Effect

let typed =  new Typed('.auto-input',{
    strings: ['Front-END Developer junior!', 'Developer junior',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

