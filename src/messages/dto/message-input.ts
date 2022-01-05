import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class MessageInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
