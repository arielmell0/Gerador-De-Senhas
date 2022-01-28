export default function barraProgresso() {
    const qtdCaracteres = document.querySelector('.qtd-caracteres')
    const barra = document.querySelector('.barra-progresso')
    const btnGerar = document.querySelector('.gerar-senha')

    document.addEventListener('click', (e) => {
        if(e.target.className !== btnGerar.className) return
        
        const valor = qtdCaracteres.value

        if(valor >= 4 && valor <= 6) {
            barra.style.backgroundColor = 'red'
            barra.style.width = '25%'
        } else if(valor >= 7 && valor <= 8) {
            barra.style.backgroundColor = 'yellow'
            barra.style.width = '50%'
        } else if(valor >= 9 && valor <= 10) {
            barra.style.backgroundColor = 'yellowgreen'
            barra.style.width = '75%'
        } else if(valor >= 11) {
            barra.style.backgroundColor = 'green'
            barra.style.width = '100%'
        }

        console.log(qtdCaracteres.value)
    })

    
}