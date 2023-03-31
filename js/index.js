const carrouselBtn       = document.querySelectorAll(`.Carrousel-btn`)
const carrouselImg       = document.querySelectorAll(`.Carrousel-img`)
const carrouselGaleria   = document.querySelector(`.Carrousel-galeria`)
const next               = document.querySelector(`.Next`)
const prev               = document.querySelector(`.Prev`)



// next.addEventListener(`click`,()=>{
//     carrouselGaleria.style.transform = `translateX(-50%)`
// })
// prev.addEventListener(`click`,()=>{
//     carrouselGaleria.style.transform = `translateX(-0%)`
// })

const numImg = carrouselImg.length
const numImgVisibles = 3

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