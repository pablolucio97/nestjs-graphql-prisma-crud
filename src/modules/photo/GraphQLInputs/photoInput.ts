import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
  @Field(() => String)
  url: string;

  @Field(() => Number)
  likes: number;

  @Field(() => Boolean)
  isPrivate: boolean;

  @Field(() => String)
  userId: string;
}

@InputType()
export class GetPhotoInput {
  @Field(() => String)
  id: string;
}

@InputType()
export class UpdatePhotoInput {
  @Field(() => String)
  id: string;

  @Field(() => Boolean)
  isPrivate: boolean;

  @Field(() => Number)
  likes?: number;
}

@InputType()
export class DeletePhotoInput {
  @Field(() => String)
  id: string;
}

@InputType()
export class GetPhotosByUserInput {
  @Field(() => String)
  userId: string;
}
