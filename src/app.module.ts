import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mathd1as:teste@cluster1.eca8i.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
