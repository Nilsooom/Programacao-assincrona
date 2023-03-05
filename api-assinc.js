// Todas requisições de API

//   app.get('/',async (req, res)=>{
//   const city = await getCityFrom('cep')  // se ficasse sem "await" retorna Promisse
//    res.send(`Cidade encontrada: ${city}`)
//   })


//Metodo para mandar varias:

//SO se utiliza Promisse.all se uma chamda não depender da outra !

// app.get('/', async (req, res)=>{
//   const city = getCityFrom('cep');
//   const state = getStateFrom('cep');
//    ---- Metodo java: guarda todas as asincronas em uma array!
//   const promessa = Promisse.all([city, state]) // RETORNA UMA SÒ PROMISSE
// ----- Para que retorne todas as promisses precisa incluir o 'AWAIT'

// res.send(promessa) // retorna a array: [São Paulo, Fortaleza] na msm ordem que informa no Promisse
//  })

//Para desetrutura uma Array:

// const [array1, array2] = array - colocar nome diferente da constante para cada indice

//