import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
  @Field(() => String)
  url: string;

  @Field(() => Number)
  likes: number;

  @Field(() => Boolean)
  isPrivate: boolean;
}
