//Project Carrousel

/* Este código está creando una funcionalidad de carrusel para un conjunto de imágenes. Selecciona los
elementos necesarios del HTML utilizando `document.querySelectorAll` y `document.querySelector`,
calcula los valores necesarios para que funcione el carrusel y agrega detectores de eventos a los
botones siguiente y anterior para mover el carrusel en consecuencia. La variable `carrouselContador`
realiza un seguimiento de la posición actual del carrusel, y la variable `operacion` calcula el
porcentaje de movimiento necesario para cada clic. */
const carrouselBtn       = document.querySelectorAll(`.Carrousel-btn`)
const carrouselImg       = document.querySelectorAll(`.Carrousel-img`)
const carrouselGaleria   = document.querySelector(`.Carrousel-galeria`)
const next               = document.querySelector(`.Next`)
const prev               = document.querySelector(`.Prev`)

const numImg = carrouselImg.length
const numImgVisibles = 2

let carrouselContador = 0

carrouselGaleria.style.width = `${ 100 * ( numImg /  numImgVisibles) }%`
carrouselGaleria.style.gridTemplateColumns = `repeat( ${numImg} , 1fr )`

const operacion = 100 / ( numImg / numImgVisibles )
next.addEventListener(`click`,()=>{
    
    carrouselContador++
    

    if( carrouselContador >= ( numImg / numImgVisibles )){
        carrouselContador = 0
    }
    carrouselGaleria.style.transform = `translateX(-${ operacion * carrouselContador  }%)`
})
prev.addEventListener(`click`,()=>{
    if( carrouselContador <= 0 ){
        carrouselContador = ( numImg / numImgVisibles)
    }

    carrouselContador--

    carrouselGaleria.style.transform = `translateX(-${ operacion * carrouselContador  }%)`
})

//Background color

/* Este código agrega un detector de eventos de desplazamiento al objeto de la ventana. Cuando el
usuario se desplaza, selecciona los elementos HTML con la clase "Proyecto" y "Proyecto-estrella"
utilizando `document.querySelector` y `document.querySelectorAll`, respectivamente. Luego, agrega la
clase "isActive" a estos elementos usando el método `classList.add()`. Es probable que esto se use
para agregar algunos efectos visuales o animaciones a estos elementos cuando el usuario se desplaza. */

const project=document.querySelector(`.Project`)
const projectStar=document.querySelectorAll(`.Project-star`)
window.addEventListener(`scroll`,()=>{
    const {scrollY, innerHeight}=window

    project.classList.add(`isActive`)
    projectStar.forEach((eachStar,i)=>{
        projectStar[i].classList.add(`isActive`)

    })
 
})