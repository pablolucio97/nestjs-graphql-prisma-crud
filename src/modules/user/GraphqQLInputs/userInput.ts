import { Field, InputType } from '@nestjs/graphql';

/**
 * InputType representing the data required to create a new User.
 */
@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}

@InputType()
export class GetUserInput {
  @Field(() => String)
  id: string;
}
