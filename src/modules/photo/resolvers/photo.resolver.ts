import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePhotoInput, GetPhotoInput } from '../GraphQLInputs/photoInput';
import { Photo } from '../models/photo.model';
import { PhotosService } from '../services/photo.service';

@Resolver(() => Photo)
export class PhotoResolver {
  constructor(private photosService: PhotosService) {}

  @Mutation(() => Photo, { name: 'createPhoto' })
  async createPhoto(@Args('data') data: CreatePhotoInput): Promise<Photo> {
    const photo = await this.photosService.create(data);
    return photo;
  }

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
}
