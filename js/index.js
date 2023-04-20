//Menu Mobile

/* Este código agrega interactividad al menú de navegación móvil en la página de inicio de un sitio
web. Selecciona elementos específicos con clases como `Home-svg`, `Home-navMobile`, `Home-imgMobile`
y `Home-liMobile` y los asigna a constantes como `homeSvg`, `homeMobile`, `homeImg` y `hogarLi`.
Luego agrega detectores de eventos a los elementos `homeSvg` y `homeImg` para el evento `click`, y a
cada elemento `homeLi` para el evento `click`. Cuando se hace clic en el elemento `homeSvg`, se
agrega la clase `isVisible` al elemento `homeMobile`, lo que hace visible el menú de navegación
móvil. Cuando se hace clic en el elemento `homeImg`, se elimina la clase `isVisible` del elemento
`homeMobile`, que oculta el menú de navegación móvil. Cuando se hace clic en cualquier elemento
`homeLi`, también se elimina la clase `isVisible` del elemento `homeMobile`, que oculta el menú de
navegación móvil. */

const homeSvg=document.querySelector(`.Home-svg`)
const homeMobile=document.querySelector(`.Home-navMobile`)
const homeImg=document.querySelector(`.Home-imgMobile`)
const homeLi=document.querySelectorAll(`.Home-liMobile`)

homeSvg.addEventListener(`click`,()=>{
    homeMobile.classList.add(`isVisible`)
})
homeImg.addEventListener(`click`,()=>{
    homeMobile.classList.remove(`isVisible`)

})

homeLi.forEach((eachLi,i)=>{
    homeLi[i].addEventListener(`click`,()=>{
        homeMobile.classList.remove(`isVisible`)
    })

})

//Works

/* Este código agrega una función interactiva a la sección "Works" de una página web. Selecciona todos
los elementos con la clase "Works-li" y "Works-img" y los asigna a las constantes "worksLi" y
"worksImg", respectivamente. Luego agrega detectores de eventos a cada elemento "Works-li" para los
eventos "mouseover" y "mouseout". Cuando el mouse está sobre un elemento "Works-li", elimina la
clase "isActive" de todos los elementos "Works-img" y la agrega al elemento "Works-img"
correspondiente. Cuando el mouse deja un elemento "Works-li", elimina la clase "isActive" de todos
los elementos "Works-img". Esto crea un efecto de desplazamiento en el que la imagen correspondiente
se resalta cuando el usuario pasa el cursor sobre un elemento "Works-li". */

const worksLi=document.querySelectorAll(`.Works-li`)
const worksImg=document.querySelectorAll(`.Works-img`)

worksLi.forEach((eachLi,i)=>{
    worksLi[i].addEventListener(`mouseover`,()=>{
        worksImg.forEach((eachImg,j)=>{
            worksImg[j].classList.remove(`isActive`)
        })
        worksImg[i].classList.add(`isActive`)
    })
    
})
worksLi.forEach((eachLi,i)=>{
    worksLi[i].addEventListener(`mouseout`,()=>{
       worksImg.forEach((eachImg,j)=>{
        worksImg[j].classList.remove(`isActive`)
       })

    })

})

//Parallax

/* Este código agrega un efecto de parallax a ciertos elementos de la página a medida que el usuario se
desplaza. Selecciona elementos específicos y luego agrega un detector
de eventos al objeto `window` para el evento `scroll`. Dentro del detector de eventos, obtiene la
posición actual `scrollY` y `innerHeight` de la ventana. También obtiene la posición `offsetTop` del
elemento `works`. */

const nombre=document.querySelector(`.Nombre`)
const apellido=document.querySelector(`.Apellido`)
const homeP=document.querySelector(`.Home-p`)
const about=document.querySelector(`.About`)
const aboutH2=document.querySelector(`.About-h2`)
const works=document.querySelector(`.Works`)

window.addEventListener(`scroll`,()=>{
    const { scrollY, innerHeight} = window
    const {offsetTop} = works

    nombre.style.transform=`translateY(${scrollY}px)`
    apellido.style.transform=`translateY(${scrollY * 1.5}px)`
    homeP.style.transform=`translateY(${scrollY * 6}px)`


    if(scrollY >= offsetTop - (innerHeight / 2)){
        worksLi.forEach((eachLi, i)=>{
            worksLi[i].classList.add(`isActive`)
        })  
    }else{
        worksLi.forEach((eachLi, i)=>{
            worksLi[i].classList.remove(`isActive`)
        })  

    }

    const {top} = about.getBoundingClientRect()
    if(top >= 0 ) {
        aboutH2.classList.remove(`isActive`)
    }else{
        aboutH2.classList.add(`isActive`)
    }

})

//Contact 
    //background-color

/* Este código selecciona todos los elementos con la clase `Contact-li` y los asigna a la constante
`contactLi`. También está seleccionando el elemento con la clase `Contacto` y asignándolo a la
constante `contacto`. */

const contactLi=document.querySelectorAll(`.Contact-li`)
const contact=document.querySelector(`.Contact`)

contactLi.forEach((eachContact,i)=>{
    contactLi[i].addEventListener(`mouseover`,()=>{
        contact.classList.add(`isActive`)
    })

    contactLi[i].addEventListener(`mouseout`,()=>{
        contact.classList.remove(`isActive`)

    })
})




