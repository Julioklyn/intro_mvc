alunos.forEach(aluno => {     
    aluno.media = {}
    for(let materia in aluno.notas){
        aluno.media[materia] = average(...aluno.notas[materia])
    }
});

console.log(alunos);

const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = `<th>Nome</th>` 

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return `<th>${materia}</th>`
}).join('')

console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
console.log(htmlHeader.innerHTML)

document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)