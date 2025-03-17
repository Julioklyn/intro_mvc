class AlunoService {
    constructor(){
        this.alunos = [];
    }

    add(aluno){
        if(aluno instanceof AlunoModel){
            throw new Error('Invalid Aluno');
        }
        this.alunos.push(aluno);
    }

    update(aluno){
        return aluno
    }
}