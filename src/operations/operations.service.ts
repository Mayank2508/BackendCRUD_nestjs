import { Injectable} from "@nestjs/common/decorators/core/injectable.decorator";
import { Operation } from "./operations.model";
import { InjectModel } from "@nestjs/mongoose/dist/common";
import { Model } from "mongoose";
@Injectable()

export class OperationsServices{

    constructor(@InjectModel('Operation') private readonly OperationModel:Model<Operation>){}

    async getLastTwenty() 
    {
        const res = await this.OperationModel.find()
        .sort({ createdAt: -1 })
        .limit(20)
        .exec();
        const parsedRes = res.map(res=>JSON.parse(res.operationName));
        const htmlResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>History</title>
        </head>
        <body>
          <h1>History</h1>
          <table>
          <tr>
            <th> Question </th>
            <th> Answer </th>
          </tr>
            ${parsedRes.map(item => `
            <tr>
            <td> Question: ${item.question}</td> 
            <td> Answer: ${item.ans}</td>
            </tr>`
            ).join('')}
          <table>
        </body>
      </html>
    `;
    return htmlResponse;
    }

    async insertOperation(operationName:any)
    {
        const newOperation=new this.OperationModel({operationName});
        const result =await newOperation.save();
        return result.id as string;
    }
    async calculate(sequence)
    {
        sequence = sequence.replaceAll('/','')
        .replaceAll('plus','+')
        .replaceAll('into','*')
        .replaceAll('by','/')
        .replaceAll('minus','-');
        const response = {question:sequence, ans:eval(sequence)};
        await this.insertOperation(JSON.stringify(response));
        return response;
    }
}