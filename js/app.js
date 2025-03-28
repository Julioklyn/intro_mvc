const alunos = [
    {
     
      nome: "chico melato",
      notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [2, 7, 2, 2],
        bancodados: [2, 2, 6, 8],
        ferramentas: [3, 8, 10, 3],
      },
    },
    {
      
      nome: "Belle Belinha",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [7, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
    {
      
      nome: "Robinho",
      notas: {
        backend_1: [10, 10, 8, 10],
        frontend_2: [7, 8, 8 , 7],
        bancodados: [8, 7, 7, 9],
        ferramentas: [8, 9, 7, 7],
      },
    },
  ];

  const alunoService = new AlunoService()

alunos.forEach(aluno => {
    alunoService.add(new AlunoModel(aluno))
})

const alunoView = new AlunoView(document.querySelector('[data-table-alunos]'))
const alunoController = new AlunoController(alunoService, alunoView)

 document.querySelector("form").addEventListener("submit",     function(event) {
  event.preventDefault()
  const nome = document.getElementById('first_name').value
alunoController.add({nome})
})
