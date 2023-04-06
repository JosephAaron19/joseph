// Header toggle

let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-activate');
    this.classList.toggle('fa-xmark')
})


//Typing Effect

let typed =  new Typed('.auto-input',{
    strings: ['Developer junior',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

//Activate link state on scroll

//Get all links

let naviLinks = document.querySelectorAll('nav ul li a')
//Get all sections
let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function(){
    const scrollPos = wigitndow.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos > (section.offsetTop + section.offsetHeight)){
            naviLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
        
    });
});
