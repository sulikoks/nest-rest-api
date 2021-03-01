import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CitiesModule } from './cities/cities.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { CatsModule } from './cats/cats.module';
//
// const MONGO_LOGIN = process.env.MONGO_LOGIN;
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: './schema.gql',
    }),
    CitiesModule,
    // MongooseModule.forRoot(
    //   `mongodb+srv://${MONGO_LOGIN}:${MONGO_PASSWORD}@cluster0.x1dek.mongodb.net/test?retryWrites=true&w=majority`,
    //   { useNewUrlParser: true },
    // ),
    // CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
