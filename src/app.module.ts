import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { GraphQLModule } from '@nestjs/graphql';
// import { CitiesModule } from './cities/cities.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT,
} = process.env;

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
console.log('=======================');
console.log(uri);
const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: './schema.gql',
    // }),
    // CitiesModule,
    MongooseModule.forRoot(uri, options),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
