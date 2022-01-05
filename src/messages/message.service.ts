import { Injectable } from '@nestjs/common';
import { MessageInput } from './dto/message-input';
import { Message } from './models/message.model';
import { mockDatabase } from './mock';

@Injectable()
export class MessageService {
  async create(data: MessageInput): Promise<Message> {
    // mockDatabase.push(data);
    return data;
  }

  async findOneById(id: string): Promise<Message> {
    return mockDatabase.find((item) => item.id === id);
  }

  async getAllMessage(limit = 0): Promise<Message[]> {
    if (!limit) {
      return mockDatabase;
    }
    return mockDatabase.slice(0, limit);
  }
}
