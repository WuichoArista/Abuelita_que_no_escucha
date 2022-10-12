
 let boton = document.querySelector('.boton_empezar')
 let personaContestacion = document.getElementById('persona_contestacion')
 let abuelitaContestacion = document.getElementById('abuelita_contestacion')

 const mensaje = () => {
   let persona = personaContestacion.value
   let respuesta
    if( persona === persona.toUpperCase() && persona !== 'ADIOS' && persona !== 'ADIÓS' && persona !== '') {
        respuesta = 'NO, NO DESDE 1983'
       abuelitaContestacion.innerHTML = respuesta
    } else if( persona === '') {
        respuesta = 'HABLA QUE NO TE ESCUCHO'
        abuelitaContestacion.innerHTML = respuesta
     } else if ( persona === 'Adios' || persona === ' Adiós' || persona === 'adios' || persona === 'adiós'){
        abuelitaContestacion.innerHTML = '¿DIJISTE ARROZ?'
     }else if(persona !== "" && persona !== 'ADIÓS' && persona !== 'ADIOS'){
        respuesta = '¡¿EH?! ¡NO TE ESCUCHO, HIJO!'
        abuelitaContestacion.innerHTML = respuesta
     } else if( persona === 'ADIOS'){
        respuesta = '!AHHH¡ ADIOS'
        abuelitaContestacion.innerHTML = respuesta

     }
 }

 boton.addEventListener( 'click' , mensaje)


// opcion com prompt

/*  boton.onclick = function () {   
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
 */

