import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  number: string;
}

@ObjectType()
export class Station {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
