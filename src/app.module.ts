import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< Updated upstream
import { OperationModule } from './operations/operations.module';
=======
import { ProductsModule } from './products/products.module';
>>>>>>> Stashed changes
import { MongooseModule } from '@nestjs/mongoose';
var username = encodeURIComponent("Mayank2508");
var password = encodeURIComponent("opolopopolop");


@Module({
<<<<<<< Updated upstream
  imports: [OperationModule,
    MongooseModule.forRoot(
    `mongodb+srv://${username}:${password}@mydb.lgxhyxm.mongodb.net/kalvium?retryWrites=true&w=majority`
=======
  imports: [ProductsModule,
    MongooseModule.forRoot(
    `mongodb+srv://${username}:${password}@mydb.lgxhyxm.mongodb.net/nestjs-demo?retryWrites=true&w=majority`
>>>>>>> Stashed changes
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
