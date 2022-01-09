import { Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';
import { MessageInput } from './dto/message-input';
import { Message } from './models/message.model';
import { mockDatabase, validationDatabase } from './mock';

@Injectable()
export class MessageService {
  async create(data: MessageInput): Promise<Message> {
    const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);
    const payload = { id: nanoid(), ...data };
    mockDatabase.push(payload);
    return payload;
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

  async getResponse(limit = 0): Promise<Message[]> {
    if (!limit) {
      return validationDatabase;
    }
    return validationDatabase.slice(0, limit);
  }
}
