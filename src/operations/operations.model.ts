import * as mongoose from 'mongoose';
export const OperationSchema = new mongoose.Schema({
    operationName:{type:String, required:true},
    
}, {timestamps: true});


export interface Operation extends mongoose.Document{
         id:string;
         operationName: string;
}
