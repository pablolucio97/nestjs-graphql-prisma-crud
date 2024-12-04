import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserInput,
  GetUserInput,
  UpdateUserInput,
} from '../GraphqQLInputs/userInput';
import { User, User as UserModel } from '../models/user.model';
import { UsersService } from '../services/user.service';

@Resolver((of: unknown) => UserModel)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UserModel], { name: 'getUsers' })
  async listUsers(): Promise<User[]> {
    const users = await this.usersService.listUsers();
    return users;
  }

  @Query(() => UserModel, { name: 'getUser' })
  async getUser(@Args('data') data: GetUserInput): Promise<User | null> {
    const user = await this.usersService.getUser(data);
    return user;
  }

  @Mutation(() => UserModel)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.usersService.create(data);
    return user;
  }

  @Mutation(() => UserModel)
  async updateUser(@Args('data') data: UpdateUserInput): Promise<User> {
    const updatedUser = await this.usersService.update(data);
    return updatedUser;
  }
}
