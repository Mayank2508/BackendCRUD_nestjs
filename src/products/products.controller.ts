import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { ProductsServices } from "./products.service";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Param } from "@nestjs/common";
import { Patch } from "@nestjs/common/decorators";
import { Delete } from "@nestjs/common/decorators/http/request-mapping.decorator";
@Controller('products')
export class ProductsController{
    constructor(private readonly productsService:ProductsServices ){}
    @Post()
    async addProduct(
        
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number,
        ){
        const generatedId= await this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice,
            );
      return {id:generatedId};
    }
    @Get()
    async getAllproducts(){
        const products =await this.productsService.getProducts();
        return products;
    }
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.productsService.getSingleProduct(prodId);
    }
    @Patch(':id')
    async updateProduct(@Param('id') prodId:string,
    @Body('title') prodTitle:string,
    @Body('description') prodDesc:string,
    @Body('price') prodPrice:number)
    {
        await this.productsService.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
        return null;

    }
    @Delete(':id')

    async removeProduct(@Param('id') prodId:string,){
        await this.productsService.deleteProduct(prodId);
        return null;
    }



}