import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$MessageRequestPayload>;
export type AggregateMessageRequest = {
    _count: MessageRequestCountAggregateOutputType | null;
    _min: MessageRequestMinAggregateOutputType | null;
    _max: MessageRequestMaxAggregateOutputType | null;
};
export type MessageRequestMinAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    receiverId: string | null;
    roomId: string | null;
    firstMessage: string | null;
    presetMessageId: string | null;
    status: $Enums.MessageRequestStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MessageRequestMaxAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    receiverId: string | null;
    roomId: string | null;
    firstMessage: string | null;
    presetMessageId: string | null;
    status: $Enums.MessageRequestStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MessageRequestCountAggregateOutputType = {
    id: number;
    senderId: number;
    receiverId: number;
    roomId: number;
    firstMessage: number;
    presetMessageId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MessageRequestMinAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    roomId?: true;
    firstMessage?: true;
    presetMessageId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MessageRequestMaxAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    roomId?: true;
    firstMessage?: true;
    presetMessageId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MessageRequestCountAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    roomId?: true;
    firstMessage?: true;
    presetMessageId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MessageRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageRequestWhereInput;
    orderBy?: Prisma.MessageRequestOrderByWithRelationInput | Prisma.MessageRequestOrderByWithRelationInput[];
    cursor?: Prisma.MessageRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageRequestCountAggregateInputType;
    _min?: MessageRequestMinAggregateInputType;
    _max?: MessageRequestMaxAggregateInputType;
};
export type GetMessageRequestAggregateType<T extends MessageRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateMessageRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessageRequest[P]> : Prisma.GetScalarType<T[P], AggregateMessageRequest[P]>;
};
export type MessageRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageRequestWhereInput;
    orderBy?: Prisma.MessageRequestOrderByWithAggregationInput | Prisma.MessageRequestOrderByWithAggregationInput[];
    by: Prisma.MessageRequestScalarFieldEnum[] | Prisma.MessageRequestScalarFieldEnum;
    having?: Prisma.MessageRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageRequestCountAggregateInputType | true;
    _min?: MessageRequestMinAggregateInputType;
    _max?: MessageRequestMaxAggregateInputType;
};
export type MessageRequestGroupByOutputType = {
    id: string;
    senderId: string;
    receiverId: string;
    roomId: string | null;
    firstMessage: string | null;
    presetMessageId: string | null;
    status: $Enums.MessageRequestStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: MessageRequestCountAggregateOutputType | null;
    _min: MessageRequestMinAggregateOutputType | null;
    _max: MessageRequestMaxAggregateOutputType | null;
};
type GetMessageRequestGroupByPayload<T extends MessageRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageRequestGroupByOutputType[P]>;
}>>;
export type MessageRequestWhereInput = {
    AND?: Prisma.MessageRequestWhereInput | Prisma.MessageRequestWhereInput[];
    OR?: Prisma.MessageRequestWhereInput[];
    NOT?: Prisma.MessageRequestWhereInput | Prisma.MessageRequestWhereInput[];
    id?: Prisma.StringFilter<"MessageRequest"> | string;
    senderId?: Prisma.StringFilter<"MessageRequest"> | string;
    receiverId?: Prisma.StringFilter<"MessageRequest"> | string;
    roomId?: Prisma.StringNullableFilter<"MessageRequest"> | string | null;
    firstMessage?: Prisma.StringNullableFilter<"MessageRequest"> | string | null;
    presetMessageId?: Prisma.StringNullableFilter<"MessageRequest"> | string | null;
    status?: Prisma.EnumMessageRequestStatusFilter<"MessageRequest"> | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeFilter<"MessageRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MessageRequest"> | Date | string;
};
export type MessageRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    firstMessage?: Prisma.SortOrder;
    presetMessageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MessageRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    senderId_receiverId?: Prisma.MessageRequestSenderIdReceiverIdCompoundUniqueInput;
    AND?: Prisma.MessageRequestWhereInput | Prisma.MessageRequestWhereInput[];
    OR?: Prisma.MessageRequestWhereInput[];
    NOT?: Prisma.MessageRequestWhereInput | Prisma.MessageRequestWhereInput[];
    senderId?: Prisma.StringFilter<"MessageRequest"> | string;
    receiverId?: Prisma.StringFilter<"MessageRequest"> | string;
    roomId?: Prisma.StringNullableFilter<"MessageRequest"> | string | null;
    firstMessage?: Prisma.StringNullableFilter<"MessageRequest"> | string | null;
    presetMessageId?: Prisma.StringNullableFilter<"MessageRequest"> | string | null;
    status?: Prisma.EnumMessageRequestStatusFilter<"MessageRequest"> | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeFilter<"MessageRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MessageRequest"> | Date | string;
}, "id" | "senderId_receiverId">;
export type MessageRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    firstMessage?: Prisma.SortOrder;
    presetMessageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MessageRequestCountOrderByAggregateInput;
    _max?: Prisma.MessageRequestMaxOrderByAggregateInput;
    _min?: Prisma.MessageRequestMinOrderByAggregateInput;
};
export type MessageRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageRequestScalarWhereWithAggregatesInput | Prisma.MessageRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageRequestScalarWhereWithAggregatesInput | Prisma.MessageRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MessageRequest"> | string;
    senderId?: Prisma.StringWithAggregatesFilter<"MessageRequest"> | string;
    receiverId?: Prisma.StringWithAggregatesFilter<"MessageRequest"> | string;
    roomId?: Prisma.StringNullableWithAggregatesFilter<"MessageRequest"> | string | null;
    firstMessage?: Prisma.StringNullableWithAggregatesFilter<"MessageRequest"> | string | null;
    presetMessageId?: Prisma.StringNullableWithAggregatesFilter<"MessageRequest"> | string | null;
    status?: Prisma.EnumMessageRequestStatusWithAggregatesFilter<"MessageRequest"> | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MessageRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MessageRequest"> | Date | string;
};
export type MessageRequestCreateInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    roomId?: string | null;
    firstMessage?: string | null;
    presetMessageId?: string | null;
    status?: $Enums.MessageRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MessageRequestUncheckedCreateInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    roomId?: string | null;
    firstMessage?: string | null;
    presetMessageId?: string | null;
    status?: $Enums.MessageRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MessageRequestUpdateInput = {
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presetMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMessageRequestStatusFieldUpdateOperationsInput | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageRequestUncheckedUpdateInput = {
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presetMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMessageRequestStatusFieldUpdateOperationsInput | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageRequestCreateManyInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    roomId?: string | null;
    firstMessage?: string | null;
    presetMessageId?: string | null;
    status?: $Enums.MessageRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MessageRequestUpdateManyMutationInput = {
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presetMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMessageRequestStatusFieldUpdateOperationsInput | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageRequestUncheckedUpdateManyInput = {
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presetMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMessageRequestStatusFieldUpdateOperationsInput | $Enums.MessageRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageRequestSenderIdReceiverIdCompoundUniqueInput = {
    senderId: string;
    receiverId: string;
};
export type MessageRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    firstMessage?: Prisma.SortOrder;
    presetMessageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MessageRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    firstMessage?: Prisma.SortOrder;
    presetMessageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MessageRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    firstMessage?: Prisma.SortOrder;
    presetMessageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumMessageRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageRequestStatus;
};
export type MessageRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    roomId?: boolean;
    firstMessage?: boolean;
    presetMessageId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["messageRequest"]>;
export type MessageRequestSelectScalar = {
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    roomId?: boolean;
    firstMessage?: boolean;
    presetMessageId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MessageRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "senderId" | "receiverId" | "roomId" | "firstMessage" | "presetMessageId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["messageRequest"]>;
export type $MessageRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageRequest";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        senderId: string;
        receiverId: string;
        roomId: string | null;
        firstMessage: string | null;
        presetMessageId: string | null;
        status: $Enums.MessageRequestStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["messageRequest"]>;
    composites: {};
};
export type MessageRequestGetPayload<S extends boolean | null | undefined | MessageRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload, S>;
export type MessageRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageRequestCountAggregateInputType | true;
};
export interface MessageRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MessageRequest'];
        meta: {
            name: 'MessageRequest';
        };
    };
    findUnique<T extends MessageRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageRequestFindManyArgs>(args?: Prisma.SelectSubset<T, MessageRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageRequestCreateArgs>(args: Prisma.SelectSubset<T, MessageRequestCreateArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MessageRequestDeleteArgs>(args: Prisma.SelectSubset<T, MessageRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageRequestUpdateArgs>(args: Prisma.SelectSubset<T, MessageRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MessageRequestUpsertArgs>(args: Prisma.SelectSubset<T, MessageRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageRequestClient<runtime.Types.Result.GetResult<Prisma.$MessageRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.MessageRequestFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.MessageRequestAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends MessageRequestCountArgs>(args?: Prisma.Subset<T, MessageRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageRequestCountAggregateOutputType> : number>;
    aggregate<T extends MessageRequestAggregateArgs>(args: Prisma.Subset<T, MessageRequestAggregateArgs>): Prisma.PrismaPromise<GetMessageRequestAggregateType<T>>;
    groupBy<T extends MessageRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageRequestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageRequestFieldRefs;
}
export interface Prisma__MessageRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageRequestFieldRefs {
    readonly id: Prisma.FieldRef<"MessageRequest", 'String'>;
    readonly senderId: Prisma.FieldRef<"MessageRequest", 'String'>;
    readonly receiverId: Prisma.FieldRef<"MessageRequest", 'String'>;
    readonly roomId: Prisma.FieldRef<"MessageRequest", 'String'>;
    readonly firstMessage: Prisma.FieldRef<"MessageRequest", 'String'>;
    readonly presetMessageId: Prisma.FieldRef<"MessageRequest", 'String'>;
    readonly status: Prisma.FieldRef<"MessageRequest", 'MessageRequestStatus'>;
    readonly createdAt: Prisma.FieldRef<"MessageRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MessageRequest", 'DateTime'>;
}
export type MessageRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where: Prisma.MessageRequestWhereUniqueInput;
};
export type MessageRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where: Prisma.MessageRequestWhereUniqueInput;
};
export type MessageRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where?: Prisma.MessageRequestWhereInput;
    orderBy?: Prisma.MessageRequestOrderByWithRelationInput | Prisma.MessageRequestOrderByWithRelationInput[];
    cursor?: Prisma.MessageRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageRequestScalarFieldEnum | Prisma.MessageRequestScalarFieldEnum[];
};
export type MessageRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where?: Prisma.MessageRequestWhereInput;
    orderBy?: Prisma.MessageRequestOrderByWithRelationInput | Prisma.MessageRequestOrderByWithRelationInput[];
    cursor?: Prisma.MessageRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageRequestScalarFieldEnum | Prisma.MessageRequestScalarFieldEnum[];
};
export type MessageRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where?: Prisma.MessageRequestWhereInput;
    orderBy?: Prisma.MessageRequestOrderByWithRelationInput | Prisma.MessageRequestOrderByWithRelationInput[];
    cursor?: Prisma.MessageRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageRequestScalarFieldEnum | Prisma.MessageRequestScalarFieldEnum[];
};
export type MessageRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageRequestCreateInput, Prisma.MessageRequestUncheckedCreateInput>;
};
export type MessageRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageRequestCreateManyInput | Prisma.MessageRequestCreateManyInput[];
};
export type MessageRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageRequestUpdateInput, Prisma.MessageRequestUncheckedUpdateInput>;
    where: Prisma.MessageRequestWhereUniqueInput;
};
export type MessageRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageRequestUpdateManyMutationInput, Prisma.MessageRequestUncheckedUpdateManyInput>;
    where?: Prisma.MessageRequestWhereInput;
    limit?: number;
};
export type MessageRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where: Prisma.MessageRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageRequestCreateInput, Prisma.MessageRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageRequestUpdateInput, Prisma.MessageRequestUncheckedUpdateInput>;
};
export type MessageRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
    where: Prisma.MessageRequestWhereUniqueInput;
};
export type MessageRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageRequestWhereInput;
    limit?: number;
};
export type MessageRequestFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type MessageRequestAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type MessageRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageRequestSelect<ExtArgs> | null;
    omit?: Prisma.MessageRequestOmit<ExtArgs> | null;
};
export {};
