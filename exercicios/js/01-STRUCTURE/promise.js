/**
 * Retorna uma promessa;
 * 
 */

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .then(outra => console.log('Eaí?'))
    .catch(e => console.log('Erro', e))