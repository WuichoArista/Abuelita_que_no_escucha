
 let boton = document.querySelector('.boton_empezar')
 boton.onclick = function () {   
    let saludo = prompt('Hola Hijo que paso')
    function mensaje (){
        if( saludo === saludo.toUpperCase() && saludo !=='ADIOS' && saludo !== 'adios' && saludo !== ""  ){
            saludo = prompt('"NO, NO DESDE 1983"')
            mensaje ()
       } else if( saludo === "" && saludo !== 'adios' ){ 
            saludo = prompt('HABLA MUCHACHO')
            mensaje()
       } else if ( saludo !== "" && saludo !== 'adios' && saludo !== 'ADIOS' && saludo !== 'Adios' ) {  
            saludo = prompt('"¡¿EH?! ¡NO TE ESCUCHO, HIJO!"')
            mensaje ()
       } else if (saludo === 'adios' || saludo === 'Adios' || saludo === 'ADIOS') {
            let adios = prompt('¿dijiste arroz?')
            if(adios === 'adios' || adios === 'Adios' || adios === 'ADIOS' ){
                adios = prompt('¿Mios?')
                if(adios === 'adios' || adios === 'Adios' || adios === 'ADIOS') {
                    alert('Ahhhhh adios hijito')
                }  
           }else {
               mensaje()
           }
       }
    }
    mensaje()
 }


