import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../services/prisma';
import { CreateUserInput } from '../GraphqQLInputs/userInput';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private PrismaService: PrismaService) {}
  async create(data: CreateUserInput): Promise<User> {
    const newUser = await this.PrismaService.user.create({ data });
    return newUser;
  }

  async listUsers(): Promise<User[]> {
    const users = await this.PrismaService.user.findMany();
    return users;
  }
}
