import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma';
import { PhotoResolver } from './resolvers/photo.resolver';
import { PhotosService } from './services/photo.service';

@Module({
  providers: [PrismaService, PhotosService, PhotoResolver],
})
export class PhotosModule {}
