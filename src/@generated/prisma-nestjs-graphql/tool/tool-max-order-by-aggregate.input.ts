import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ToolMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalStock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceHour?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceDay?: keyof typeof SortOrder;
}
