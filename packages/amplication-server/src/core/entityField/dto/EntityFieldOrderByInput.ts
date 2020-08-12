import { Field, InputType } from '@nestjs/graphql';
import { OrderByArg } from 'src/enums/OrderByArg';

@InputType({
  isAbstract: true,
  description: undefined
})
export class EntityFieldOrderByInput {
  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  displayName?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  dataType?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  required?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  searchable?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  description?: keyof typeof OrderByArg | null;
}
