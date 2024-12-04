import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'photo' })
export class Photo {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  url: string;

  @Field(() => Int)
  likes: number;

  @Field(() => Boolean)
  isPrivate: boolean;

  @Field(() => Date)
  postedAt: Date;

  @Field(() => String)
  userId: string | null;
}
