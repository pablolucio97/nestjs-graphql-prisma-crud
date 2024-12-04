import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'photo' })
export class Photo {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  url: string;

  @Field(() => Number)
  likes: number;

  @Field(() => Boolean)
  isPrivate: boolean;

  @Field(() => Date)
  postedAt: Date;
}
