import { Produtos } from "../Models/ClientModel.js";

export class ClientController{

    static async listarTodos( req, res){
       try {
        const produtos = await Produtos.SelectAll();
        return res.status(200).json(produtos)
           
       } catch (error) {
           console.log('Error controller ClientController.js ' + error)
           return res.status(500).json(error)
       }
    }

    static novoCliente(req, res){
        const { preco , descricao } = req.body;
        const Produtos = new Produtos(preco, descricao).Insert();
        return res.status(200).json({
            msg : 'Cadastrado com sucesso!'
        });
    }
}