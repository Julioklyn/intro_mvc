class AlunoView {
    constructor(table) {
        this.tableList = table;
        this.tableHeader = this.tableList.querySelector('thead');
        this.tableBody = this.tableList.querySelector('tbody');
        this.materias = materias

        this.renderHeader();
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr');
        htmlHeader.innerHTML = '<td>Nome</td>';
        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia.nome}</td>`;
        }).join('');
        htmlHeader.innerHTML += htmlHeaderMaterias;
        this.tableHeader.appendChild(htmlHeader);
    }

    render(alunos) {
        this.tableBody.innerHTML = ''; 
        alunos.forEach(aluno => {
            let htmlrow = document.createElement('tr');
            htmlrow.innerHTML = `<td>${aluno.nome}</td>`;
            let encontrado = false; 
            this.materias.forEach(materia => {
                if (materia._id in aluno.notas) {
                    encontrado = true; 
                }
            });

            
            if (encontrado) {
                this.materias.forEach(materia => {
                    htmlrow.innerHTML += `<td>
                        ${aluno.media[materia._id] !== undefined ? aluno.media[materia._id] : '<a href="edit.html?id=${aluno._id}">Incluir Notas</a>'}
                    </td>`;
                });
            } else {
               htmlrow.innerHTML += `<td colspan="${this.materias.length}"><a href="edit.html?id=${aluno._id}">
               Incluir Notas
               </a>
               </td>`;
                
            }

            this.tableBody.appendChild(htmlrow);
        });
    }
}