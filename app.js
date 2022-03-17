
 let boton = document.querySelector('.boton_empezar')
 boton.onclick = function () {   
    let saludo = prompt('Hola hijo que paso')
    function mensaje (){
        if( saludo === saludo.toUpperCase() && saludo !=='ADIOS TQM' && saludo !== 'ADIÓS TQM' && saludo !== ""  ){
            saludo = prompt('"NO, NO DESDE 1983"')
            mensaje ()
       } else if( saludo === ""){ 
            saludo = prompt('HABLA MUCHACHO')
            mensaje()
       } else if ( saludo !== "" && saludo !== 'ADIÓS TQM' && saludo !== 'ADIOS TQM' ) {  
            saludo = prompt('"¡¿EH?! ¡NO TE ESCUCHO, HIJO!"')
            mensaje ()
       } else if (saludo === 'ADIOS TQM' || saludo === 'ADIÓS TQM') {
            let adios = prompt('¿DIJISTE ARROZ?')
            if(adios === 'ADIOS TQM' || adios === 'ADIÓS TQM' ){
                adios = prompt('¿MIOS?')
                if(adios === 'ADIOS TQM' || adios === 'ADIÓS TQM') {
                    alert('¡AHHHH! ADIOS HIJITO')
                }  else {
                    saludo = prompt('"¡¿EH?! ¡NO TE ESCUCHO, HIJO!"')
                    mensaje()
                }
           }else {
               saludo = prompt('"¡¿EH?! ¡NO TE ESCUCHO, HIJO!"')
               mensaje()
           }
       }
    }
    mensaje()
 }


