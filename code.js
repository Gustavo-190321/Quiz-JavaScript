
let respostas_corretas = [
    '1889',
    'Lua',
    'Tuberculose'
];
let corretas;

function confere(){

    corretas = 0

    let perguntas = document.getElementsByClassName('pergunta');

    console.log(perguntas)

    for (let index_question = 0; perguntas.length > index_question; index_question++) {
        //console.log(perguntas[i])
        let respostas = perguntas[index_question].querySelectorAll('input')

        for (let index_answer = 0; respostas.length > index_answer; index_answer++) {

            if(respostas[index_answer].value == respostas_corretas[index_question] && respostas[index_answer].checked ){
                corretas++
            }

            if(respostas[index_answer].value == respostas_corretas[index_question]){
                respostas[index_answer].parentNode.className = 'right'
            }
           else{
            respostas[index_answer].parentNode.className = 'wrong'
          }
      }
    }
    window.alert(`Você acertou ${corretas} perguntas`)
    
}

