import { Injectable } from '@nestjs/common';
import { CreatePhotoInput, GetPhotoInput } from '../GraphQLInputs/photoInput';
import { Photo } from '../models/photo.model';
import { PrismaService } from './../../../services/prisma';

@Injectable()
export class PhotosService {
  constructor(private PrismaService: PrismaService) {}
  async create(data: CreatePhotoInput): Promise<Photo> {
    const newPhoto = await this.PrismaService.photo.create({
      data: {
        url: data.url,
        likes: data.likes,
        isPrivate: data.isPrivate,
        postedAt: new Date(),
      },
    });
    return newPhoto;
  }

  async list(): Promise<Photo[]> {
    const photos = await this.PrismaService.photo.findMany();
    return photos;
  }

  async getPhoto(data: GetPhotoInput): Promise<Photo | null> {
    const photo = await this.PrismaService.photo.findUnique({
      where: {
        id: data.id,
      },
    });

    return photo;
  }
}
