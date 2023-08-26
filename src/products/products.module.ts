import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { ProductsController } from "./products.controller";
import { ProductsServices } from "./products.service";
import { MongooseModule } from "@nestjs/mongoose/dist/mongoose.module";
import { ProductSchema } from "./products.model";
@Module({
    imports:[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])],
    controllers:[ProductsController],
    providers:[ProductsServices],
})
export class ProductsModule{}