import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class MessageInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description?: string;
}
