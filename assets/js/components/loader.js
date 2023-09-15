function loader(){
    window.addEventListener('load', function(){
        const carga = document.querySelector('.loader')
        // console.log(carga)
        carga.classList.add('loader--hidden')
    })
}

export default loader