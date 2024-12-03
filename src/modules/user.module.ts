import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma';
import { UsersService } from './user/services/user.service';
import { UserResolver } from './user/resolvers/user.resolver';

@Module({
  providers: [PrismaService, UsersService, UserResolver],
})
export class UsersModule {}
