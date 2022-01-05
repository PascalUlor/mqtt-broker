import { Injectable } from '@nestjs/common';
import { MessageInput } from './dto/message-input';
import { Message } from './models/message.model';
import { mockMessage } from './mock';

@Injectable()
export class MessageService {
  async create(data: MessageInput): Promise<Message> {
    mockMessage.push(data);
    return data;
  }

  async findOneById(id: string): Promise<Message> {
    return mockMessage.find((item) => item.id === id);
  }
}
