const NoteService = require('../service/NoteService');
module.exports = {
    ping:(req,res)=>{
        res.json({pong:true})
    },
    all: async (req,res) =>{
        let json ={error: '',result:[]};

        let alunos = await NoteService.getAll();

        for(let i in alunos){
            json.result.push({
                id:alunos[i].id,
                nome: alunos[i].nome,
                rgm: alunos[i].rgm,
                idade: alunos[i].idade,
                cpf: alunos[i].cpf,
                rg: alunos[i].rg
            });
        }
        res.json(json);
    },
    one: async (req,res)=>{
        let json= {error: '', result:{}};

        let id = req.params.id;//para pegar o parametro

        let aluno = await NoteService.findById(id);

        if(aluno){
            json.result = aluno ;
        }
        res.json(json);
    },
    new: async (req,res)=>{
        let json = {erro: '', result:{}};

        let nome = req.body.nome;
        let rgm = req.body.rgm;
        let idade = req.body.idade;
        let cpf = req.body.cpf;
        let rg = req.body.rg;
        
        if(nome && rgm && idade && cpf && rg){
            let alunoId = await NoteService.add(nome,rgm,idade,cpf,rg);
            json.result = {
                id: alunoId,
                nome,rgm,idade,cpf,rg
            };
        }else{
            json.error = "Campos não enviados";
        }
        res.json(json);
    },
    edit: async (req,res)=>{
        let json = {erro: '', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let rgm = req.body.rgm;
        let idade = req.body.idade;
        let cpf = req.body.cpf;
        let rg = req.body.rg;

        if(id && nome && rgm && idade && cpf && rg){
            await NoteService.update(id,nome,rgm,idade,cpf,rg);
            json.result ={
                id,
                nome,
                rgm,
                idade,
                cpf,
                rg
            };
        }else{
            json.error = "campos não enviados"
        }
        res.json(json);
    },
    delete: async (req,res)=>{
        let json ={erro: '', result: {}}
        await NoteService.delete(req.params.id);
        res.json(json);
    }

}