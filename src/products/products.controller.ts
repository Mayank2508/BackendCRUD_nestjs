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
    addProduct(
        
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number,
        ):any{
        const generatedId= this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice,
            );
      return {id:generatedId};
    }
    @Get()
    getAllproducts(){
        return this.productsService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.productsService.getSingleProduct(prodId);
    }
    @Patch(':id')
    updateProduct(@Param('id') prodId:string,
    @Body('title') prodTitle:string,
    @Body('description') prodDesc:string,
    @Body('price') prodPrice:number)
    {
        this.productsService.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
        return null;

    }
    @Delete(':id')

    removeProduct(@Param('id') prodId:string,){
        this.productsService.deleteProduct(prodId);
        return null;
    }



}