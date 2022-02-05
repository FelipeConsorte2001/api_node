const db = require('../db')
module.exports = {
    getAll: () =>{
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM alunos', (error,results)=>{
                if(error){ reject(error);return;}
                resolve(results);
            });
        });
    },
    findById: (id) =>{
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM alunos WHERE id =? ',[id],(error,results)=>{
                if(error){ reject(error);return;}
                if(results.length > 0){
                    resolve(results[0]);
                }else{
                    resolve(false);
                }
            });
        }
    )},
    add: (nome,rgm,idade,cpf,rg) =>{
        return new Promise((resolve,reject) =>{
            db.query('INSERT INTO alunos (nome,rgm,idade,cpf,rg) VALUES (?,?,?,?,?)',
                [nome,rgm,idade,cpf,rg],
                (error,results) =>{
                    if(error){reject(error);return; }
                    resolve(results.insertId);
                }
            );
        });
    },
    update: (id,nome,rgm,idade,cpf,rg) => {
        return new Promise((resolve,reject) =>{
            db.query("UPDATE alunos SET nome =? , rgm=?, idade =?, cpf =?, rg=? WHERE id=?",
            [nome,rgm,idade,cpf,rg,id],
            (error,results) => {
                if(error){reject(error);return;}
                resolve(results);
            }
            )
        });
    },
    delete:(id) =>{
        return new Promise((resolve,reject)=>{
            db.query('DELETE FROM alunos WHERE id = ?',[id],(error,results) =>{
                if(error){reject(error);return;}
                resolve(results);
            });
        });
    }
}

