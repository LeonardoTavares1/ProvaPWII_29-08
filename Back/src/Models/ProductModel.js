export class Product{
    constructor(preco, descricao){
        this.preco= preco;
        this.descricao = descricao;
    }

    getPreco(){
        return this.preco;
    }

    getDescricao(){
        return this.descricao;
    }
}
