import { CreatePoolSqlServer } from "../../pool.js";
const conexao = await CreatePoolSqlServer();

export class Produtos{
    constructor(preco, descricao, id){
        this._preco = preco,
        this._descricao = descricao
        this._id = id
    }

    static async SelectAll(){
      try {
          const { recordset } = await conexao.query('select * from Produtos')
          return recordset
      } catch (error) {
          console.log("error script ClientModel.js " + error)
          return false
      }
  }

  async Insert(){
     try {
          const { rowsAffected } = await conexao.query(`insert into Produtos values('${ this._preco }',${ this._descricao },'${ this._id}')`)
          return true
      } catch (error) {
          console.log("error model: " + error)
          return false
      }
  }

  async Update(){
      try {
          const { rowsAffected } = await conexao.query(`update Produtos set nome = '${this._preco}' , descricao = ${this._descricao},  where id = ${this._id}`)
          return rowsAffected
      } catch (error) {
          console.log("error model: " + error)
          return false
      }
  }
}