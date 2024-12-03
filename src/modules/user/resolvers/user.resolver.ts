import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../GraphqQLInputs/userInput';
import { User, User as UserModel } from '../models/user.model';
import { UsersService } from '../services/user.service';

@Resolver((of: unknown) => UserModel)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [UserModel], { name: 'getUsers' })
  async listUsers(): Promise<User[]> {
    const users = await this.usersService.listUsers();
    return users;
  }

  @Mutation((returns) => UserModel)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.usersService.create(data);
    return user;
  }
}
