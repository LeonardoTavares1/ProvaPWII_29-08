import { CreatePoolSqlServer } from "../../pool.js";
const conexao = await CreatePoolSqlServer();

export class Produtos{
    constructor(preco, descricao){
        this._preco = preco,
        this._descricao = descricao
    }

    static async SelectAll(){
      try {
        const { recordset } = await conexao.query('select * from Produtos')
        return recordset
      } catch (error) {

      }
    }

    Insert(){
        ProdutosTable.push({
            preco: this._preco,
            descricao : this._descricao
        })
    }
}