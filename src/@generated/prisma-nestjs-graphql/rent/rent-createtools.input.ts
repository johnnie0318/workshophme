import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class RentCreatetoolsInput {

    @Field(() => [GraphQLJSON], {nullable:false})
    set!: Array<any>;
}
