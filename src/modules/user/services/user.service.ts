import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../services/prisma';
import {
  CreateUserInput,
  DeleteUserInput,
  GetUserInput,
  UpdateUserInput,
} from '../GraphqQLInputs/userInput';
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

  async update(data: UpdateUserInput): Promise<User> {
    const updatedUser = await this.PrismaService.user.update({
      where: {
        id: data.id,
      },
      data,
    });

    return updatedUser;
  }

  async getUser(data: GetUserInput): Promise<User | null> {
    const user = await this.PrismaService.user.findUnique({
      where: {
        id: data.id,
      },
    });

    return user;
  }

  async deleteUser(data: DeleteUserInput): Promise<void> {
    await this.PrismaService.user.delete({
      where: {
        id: data.id,
      },
    });
  }
}
