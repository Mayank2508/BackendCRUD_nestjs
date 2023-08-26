import { Injectable} from "@nestjs/common/decorators/core/injectable.decorator";
import { Product } from "./products.model";
import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectModel } from "@nestjs/mongoose/dist/common";
import { Model } from "mongoose";
@Injectable()

export class ProductsServices{
    private products:Product[]=[];
    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async insertProduct(title:string,desc:string,price:number){
        
        const newProduct=new this.productModel({
            title:title,
            description:desc,
            price:price});
            const result =await newProduct.save();

        console.log(result);
        return result.id as string;
    }
    async getProducts(){
        const products=await this.productModel.find().exec();
        
        return products.map(prod=>({
            id:prod.id,
            title:prod.title,
            description:prod.description,
            price:prod.price
        }));
    }
async getSingleProduct(productId:string){
   const product=await this.findProduct(productId);
    return product;
}
async updateProduct(productId:string,title:string,desc:string,price:number){
    const updateProduct=await this.findProduct(productId);
   
    
    if(title){
       updateProduct.title=title;


    }
    if(desc){
       updateProduct.description=desc;
    }
    if(price){
       updateProduct.price=price;
    }
    updateProduct.save();
}
async deleteProduct(prodId:string){
   const result =await this.productModel.deleteOne({_id:prodId}).exec();
   console.log(result);
}



private async findProduct(id:string):Promise<Product>{
    let product;
    try{
     product= await this.productModel.findById(id);
    }catch(error){
        throw new NotFoundException('could not find product');
    }
    if(!product){
        throw new NotFoundException('could not find product');
    }
    return product;
}


}