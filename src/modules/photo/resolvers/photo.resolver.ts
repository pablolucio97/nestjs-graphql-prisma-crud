import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreatePhotoInput,
  DeletePhotoInput,
  GetPhotoInput,
  GetPhotosByUserInput,
  UpdatePhotoInput,
} from '../GraphQLInputs/photoInput';
import { Photo } from '../models/photo.model';
import { PhotosService } from '../services/photo.service';

@Resolver(() => Photo)
export class PhotoResolver {
  constructor(private photosService: PhotosService) {}

  @Query(() => [Photo], { name: 'listPhotos' })
  async listPhotos(): Promise<Photo[]> {
    const photos = await this.photosService.list();
    return photos;
  }

  @Query(() => Photo, { name: 'getPhoto' })
  async getPhoto(@Args('data') data: GetPhotoInput): Promise<Photo | null> {
    const photo = await this.photosService.getPhoto(data);
    return photo;
  }

  @Query(() => [Photo], { name: 'getPhotosByUser' })
  async getPhotosByUser(
    @Args('data') data: GetPhotosByUserInput,
  ): Promise<Photo[]> {
    const photos = await this.photosService.getPhotosByUser(data);
    return photos;
  }

  @Mutation(() => Photo, { name: 'createPhoto' })
  async createPhoto(@Args('data') data: CreatePhotoInput): Promise<Photo> {
    const photo = await this.photosService.create(data);
    return photo;
  }

  @Mutation(() => Photo, { name: 'updatePhoto', nullable: true })
  async updatePhoto(
    @Args('data') data: UpdatePhotoInput,
  ): Promise<Photo | null> {
    const updatedPhoto = await this.photosService.updatePhoto(data);
    return updatedPhoto;
  }

  @Mutation(() => Photo, { name: 'deletePhoto', nullable: true })
  async deletePhoto(@Args('data') data: DeletePhotoInput): Promise<void> {
    await this.photosService.deletePhoto(data);
  }
}
