import { Injectable } from '@nestjs/common';
import {
  CreatePhotoInput,
  DeletePhotoInput,
  GetPhotoInput,
  GetPhotosByUserInput,
  UpdatePhotoInput,
} from '../GraphQLInputs/photoInput';
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
        userId: data.userId,
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

  async updatePhoto(data: UpdatePhotoInput): Promise<Photo | null> {
    const updatedPhoto = await this.PrismaService.photo.update({
      where: {
        id: data.id,
      },
      data,
    });

    return updatedPhoto;
  }

  async deletePhoto(data: DeletePhotoInput): Promise<void> {
    await this.PrismaService.photo.delete({
      where: {
        id: data.id,
      },
    });
  }

  async getPhotosByUser(data: GetPhotosByUserInput): Promise<Photo[]> {
    const photos = await this.PrismaService.photo.findMany({
      where: {
        userId: data.userId,
      },
    });
    return photos;
  }
}
