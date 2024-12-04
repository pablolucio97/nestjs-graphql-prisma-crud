import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserInput,
  DeleteUserInput,
  GetUserInput,
  UpdateUserInput,
} from '../GraphqQLInputs/userInput';
import { User } from '../models/user.model';
import { UsersService } from '../services/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { name: 'getUsers' })
  async listUsers(): Promise<User[]> {
    const users = await this.usersService.listUsers();
    return users;
  }

  @Query(() => User, { name: 'getUser', nullable: true })
  async getUser(@Args('data') data: GetUserInput): Promise<User | null> {
    const user = await this.usersService.getUser(data);
    return user;
  }

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.usersService.create(data);
    return user;
  }

  @Mutation(() => User, { name: 'updateUser' })
  async updateUser(@Args('data') data: UpdateUserInput): Promise<User> {
    const updatedUser = await this.usersService.update(data);
    return updatedUser;
  }

  @Mutation(() => User, { name: 'deleteUser', nullable: true })
  async deleteUser(@Args('data') data: DeleteUserInput): Promise<void> {
    await this.usersService.deleteUser(data);
  }
}
