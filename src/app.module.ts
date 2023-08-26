import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationModule } from './operations/operations.module';
import { MongooseModule } from '@nestjs/mongoose';
var username = encodeURIComponent("Mayank2508");
var password = encodeURIComponent("opolopopolop");


@Module({
  imports: [OperationModule,
    MongooseModule.forRoot(
    `mongodb+srv://${username}:${password}@mydb.lgxhyxm.mongodb.net/kalvium?retryWrites=true&w=majority`
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
