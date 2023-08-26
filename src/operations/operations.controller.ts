import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { OperationsServices } from "./operations.service";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Param } from "@nestjs/common";
@Controller()
export class OperationController{
    constructor(private readonly operationService:OperationsServices ){}
    
    @Get('history')
    async getHistory()
    {
        return await this.operationService.getLastTwenty();
    }
    @Get(':sequence(*)')
    async calculate(@Param('sequence') sequence: string): Promise<any> 
    {
        return await this.operationService.calculate(sequence);
    }
}




