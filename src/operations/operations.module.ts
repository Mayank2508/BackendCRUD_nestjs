import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { OperationController } from "./operations.controller";
import { OperationsServices } from "./operations.service";
import { MongooseModule } from "@nestjs/mongoose/dist/mongoose.module";
import { OperationSchema } from "./operations.model"
@Module({
    imports:[MongooseModule.forFeature([{name:'Operation',schema:OperationSchema}])],
    controllers:[OperationController],
    providers:[OperationsServices],
})
export class OperationModule{}