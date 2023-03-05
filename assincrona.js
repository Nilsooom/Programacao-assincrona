//Função assincrona - NÃO TEM TEMPO DETERMINADO PARA EXECUTAR (ALEATORIO)

const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground')

const cep = getCityFromZipcode('03258010') //Realiza uma Promisse

//"then" tras o retorno apos ser processado
//"then||catch" receb function callback que o argumento é o retorno da resposta. 
getCityFromZipcode('03258010').then((cidade) => {
    console.log(cidade)
})

//"catch" retorna a mensgem de erro (caso a promessa não seja realizada)
getCityFromZipcode().then(cidade => {
    return cidade
}).catch(erro => {
    console.log(erro)
})

// Referenciar em uma variavel tambem:
const asinc = getCityFromZipcode('cep') //Promisse
//asinc.then()
//asinc.catch()       


//NÂO È BOM IDENTAR MUITOS CODIGOS !
get.getStateFromZipcode('03258010').then((estado) => {
    console.log(estado);
    //Para que a função assincrona siga um ordem deve ser colocada dentro do THEN
    getCityFromZipcode('03258010').then((cidade) => {
        console.log(cidade).catch(erro => { console.log(erro) })
        //Sera enviada apos a resposta do estado!
        get.getStateFromZipcode('03258010').then((estado) => {
            console.log(estado)
        }) //Depois de cidade e assim por diante...
    })
})


    //ASINC: Asssincrona.
    //AWAIT: Aguarde.
    (async function () {    //Funcaoa anonima
        const cidade = await getCityFromZipcode('03258010');
        console.log(cidade)

        const estado = await getStateFromZipcode('03258010');
        console.log(estado)
    })() //Async torna uma função assincron e o wait executa na ordem como se fosse sincrona.

//Função assincrona padrão arrow function:
const teste = async () => { }
console.log(teste) // Retorna uma Promisse