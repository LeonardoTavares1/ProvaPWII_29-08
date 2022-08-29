import { Product } from "../Models/ProductModel.js";

async function StoreProduct(req, res){
    const { preco, descricao } = req.body;
    let prod = new Product(preco, descricao);
    return res.status(200).send(prod.getName());
}

export { StoreProduct }