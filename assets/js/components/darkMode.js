function darkMode(){
    const nav = document.querySelector('.nav')
    const menu = document.body
    // const cabeza = document.querySelector('.header')
    
    nav.addEventListener('click', function(e){
        if(e.target.closest('.darkMode')){
             menu.classList.toggle('dark_Mode')
            //  cabeza.classList.toggle('dark_Mode')
            // console.log(menu)
            // console.log('Le diste click al modo nocturno')
            // ponerSol()
            // ponerLuna()
            const luna = document.querySelector('.bxs-moon')
            const sol = document.querySelector('.bxs-sun')
            if(luna){
                luna.classList.replace('bxs-moon', 'bxs-sun')     
            }
            if (sol){
                sol.classList.replace('bxs-sun','bxs-moon')
            }
        }
    })
}

// function ponerSol(){
//     const luna = document.querySelector('.bxs-moon')
//     const sol = document.querySelector('.bxs-sun')
//     if(luna){
//         luna.classList.replace('bxs-moon', 'bxs-sun')     
//     }
// }

// function ponerLuna(){
//     // const luna = document.querySelector('.bxs-moon')
//     const sol = document.querySelector('bxs-sun')
//      if (sol){
//         luna.classList.replace('bxs-sun','bxs-moon')
//     }
// }


export default darkMode