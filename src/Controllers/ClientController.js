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

    static async novoCliente(req, res){
        try {
            const { id, preco, descricao } = req.body;
            const novo_cliente = await new Produtos(id, preco, descricao).Insert();
            return res.status(200).json(novo_cliente);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }

    static async alterarCliente(req, res){
        try {
            const { id, preco, descricao } = req.body;
            const { id } = req.params;
            const alt_cliente = await new Produtos(preco, descricao, id).Update();
            return res.status(200).json(alt_cliente);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }
}