import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { subscriber } from '../broker/subscriber';
import { publisher } from '../broker/publisher';
import { MessageInput } from './dto/message-input';
import { Message } from './models/message.model';
import { MessageService } from './message.service';

@Resolver((of) => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query((returns) => Message)
  async message(@Args('id') id: string): Promise<Message> {
    const message = await this.messageService.findOneById(id);
    if (!message) {
      throw new NotFoundException(id);
    }
    return message;
  }

  @Query((returns) => [Message])
  async allMessages(@Args('limit') limit: number): Promise<Message[]> {
    const messages = await this.messageService.getAllMessage(limit);
    if (!messages.length) {
      return [];
    }
    return messages;
  }

  @Query((returns) => [Message])
  async getResponse(@Args('limit') limit: number): Promise<Message[]> {
    const messages = await this.messageService.getResponse(limit);
    if (!messages.length) {
      return [];
    }
    return messages;
  }

  @Mutation((returns) => Message)
  async addMessage(
    @Args('newMessageData') newMessageData: MessageInput,
  ): Promise<Message> {
    const message = await this.messageService.create(newMessageData);
    publisher(message);
    subscriber();
    return message;
  }
}
