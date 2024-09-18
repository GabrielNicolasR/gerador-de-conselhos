const botao = document.getElementById('botao')
const idDoConselho = document.getElementById('id-conselho')
const textoDoConselho = document.getElementById('conselho')


botao.addEventListener('click', () => {
    pegarConselhosAleatorios()
})



async function pegarConselhosAleatorios() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const conselho = await fetch(url)

        if (!conselho.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
          }
      
        const json = await conselho.json()
        const idAleatorio = json.slip.id
        const conselhoAleatorio = json.slip.advice
        
        idDoConselho.innerText = `advice #${idAleatorio}`
        textoDoConselho.innerText = `${conselhoAleatorio}`
    }catch {
        console.log("err")
    }
}