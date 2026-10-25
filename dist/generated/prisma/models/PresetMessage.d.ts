import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PresetMessageModel = runtime.Types.Result.DefaultSelection<Prisma.$PresetMessagePayload>;
export type AggregatePresetMessage = {
    _count: PresetMessageCountAggregateOutputType | null;
    _min: PresetMessageMinAggregateOutputType | null;
    _max: PresetMessageMaxAggregateOutputType | null;
};
export type PresetMessageMinAggregateOutputType = {
    id: string | null;
    message: string | null;
    message_it: string | null;
    type: $Enums.PresetMessageType | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PresetMessageMaxAggregateOutputType = {
    id: string | null;
    message: string | null;
    message_it: string | null;
    type: $Enums.PresetMessageType | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PresetMessageCountAggregateOutputType = {
    id: number;
    message: number;
    message_it: number;
    type: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PresetMessageMinAggregateInputType = {
    id?: true;
    message?: true;
    message_it?: true;
    type?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PresetMessageMaxAggregateInputType = {
    id?: true;
    message?: true;
    message_it?: true;
    type?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PresetMessageCountAggregateInputType = {
    id?: true;
    message?: true;
    message_it?: true;
    type?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PresetMessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresetMessageWhereInput;
    orderBy?: Prisma.PresetMessageOrderByWithRelationInput | Prisma.PresetMessageOrderByWithRelationInput[];
    cursor?: Prisma.PresetMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PresetMessageCountAggregateInputType;
    _min?: PresetMessageMinAggregateInputType;
    _max?: PresetMessageMaxAggregateInputType;
};
export type GetPresetMessageAggregateType<T extends PresetMessageAggregateArgs> = {
    [P in keyof T & keyof AggregatePresetMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePresetMessage[P]> : Prisma.GetScalarType<T[P], AggregatePresetMessage[P]>;
};
export type PresetMessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresetMessageWhereInput;
    orderBy?: Prisma.PresetMessageOrderByWithAggregationInput | Prisma.PresetMessageOrderByWithAggregationInput[];
    by: Prisma.PresetMessageScalarFieldEnum[] | Prisma.PresetMessageScalarFieldEnum;
    having?: Prisma.PresetMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PresetMessageCountAggregateInputType | true;
    _min?: PresetMessageMinAggregateInputType;
    _max?: PresetMessageMaxAggregateInputType;
};
export type PresetMessageGroupByOutputType = {
    id: string;
    message: string;
    message_it: string;
    type: $Enums.PresetMessageType;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PresetMessageCountAggregateOutputType | null;
    _min: PresetMessageMinAggregateOutputType | null;
    _max: PresetMessageMaxAggregateOutputType | null;
};
type GetPresetMessageGroupByPayload<T extends PresetMessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PresetMessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PresetMessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PresetMessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PresetMessageGroupByOutputType[P]>;
}>>;
export type PresetMessageWhereInput = {
    AND?: Prisma.PresetMessageWhereInput | Prisma.PresetMessageWhereInput[];
    OR?: Prisma.PresetMessageWhereInput[];
    NOT?: Prisma.PresetMessageWhereInput | Prisma.PresetMessageWhereInput[];
    id?: Prisma.StringFilter<"PresetMessage"> | string;
    message?: Prisma.StringFilter<"PresetMessage"> | string;
    message_it?: Prisma.StringFilter<"PresetMessage"> | string;
    type?: Prisma.EnumPresetMessageTypeFilter<"PresetMessage"> | $Enums.PresetMessageType;
    isActive?: Prisma.BoolFilter<"PresetMessage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PresetMessage"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PresetMessage"> | Date | string;
};
export type PresetMessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    message_it?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PresetMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PresetMessageWhereInput | Prisma.PresetMessageWhereInput[];
    OR?: Prisma.PresetMessageWhereInput[];
    NOT?: Prisma.PresetMessageWhereInput | Prisma.PresetMessageWhereInput[];
    message?: Prisma.StringFilter<"PresetMessage"> | string;
    message_it?: Prisma.StringFilter<"PresetMessage"> | string;
    type?: Prisma.EnumPresetMessageTypeFilter<"PresetMessage"> | $Enums.PresetMessageType;
    isActive?: Prisma.BoolFilter<"PresetMessage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PresetMessage"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PresetMessage"> | Date | string;
}, "id">;
export type PresetMessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    message_it?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PresetMessageCountOrderByAggregateInput;
    _max?: Prisma.PresetMessageMaxOrderByAggregateInput;
    _min?: Prisma.PresetMessageMinOrderByAggregateInput;
};
export type PresetMessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.PresetMessageScalarWhereWithAggregatesInput | Prisma.PresetMessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.PresetMessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PresetMessageScalarWhereWithAggregatesInput | Prisma.PresetMessageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PresetMessage"> | string;
    message?: Prisma.StringWithAggregatesFilter<"PresetMessage"> | string;
    message_it?: Prisma.StringWithAggregatesFilter<"PresetMessage"> | string;
    type?: Prisma.EnumPresetMessageTypeWithAggregatesFilter<"PresetMessage"> | $Enums.PresetMessageType;
    isActive?: Prisma.BoolWithAggregatesFilter<"PresetMessage"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PresetMessage"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PresetMessage"> | Date | string;
};
export type PresetMessageCreateInput = {
    id?: string;
    message: string;
    message_it: string;
    type?: $Enums.PresetMessageType;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PresetMessageUncheckedCreateInput = {
    id?: string;
    message: string;
    message_it: string;
    type?: $Enums.PresetMessageType;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PresetMessageUpdateInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    message_it?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPresetMessageTypeFieldUpdateOperationsInput | $Enums.PresetMessageType;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PresetMessageUncheckedUpdateInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    message_it?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPresetMessageTypeFieldUpdateOperationsInput | $Enums.PresetMessageType;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PresetMessageCreateManyInput = {
    id?: string;
    message: string;
    message_it: string;
    type?: $Enums.PresetMessageType;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PresetMessageUpdateManyMutationInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    message_it?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPresetMessageTypeFieldUpdateOperationsInput | $Enums.PresetMessageType;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PresetMessageUncheckedUpdateManyInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    message_it?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPresetMessageTypeFieldUpdateOperationsInput | $Enums.PresetMessageType;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PresetMessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    message_it?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PresetMessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    message_it?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PresetMessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    message_it?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumPresetMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.PresetMessageType;
};
export type PresetMessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    message?: boolean;
    message_it?: boolean;
    type?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["presetMessage"]>;
export type PresetMessageSelectScalar = {
    id?: boolean;
    message?: boolean;
    message_it?: boolean;
    type?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PresetMessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "message" | "message_it" | "type" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["presetMessage"]>;
export type $PresetMessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PresetMessage";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        message: string;
        message_it: string;
        type: $Enums.PresetMessageType;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["presetMessage"]>;
    composites: {};
};
export type PresetMessageGetPayload<S extends boolean | null | undefined | PresetMessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload, S>;
export type PresetMessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PresetMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PresetMessageCountAggregateInputType | true;
};
export interface PresetMessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PresetMessage'];
        meta: {
            name: 'PresetMessage';
        };
    };
    findUnique<T extends PresetMessageFindUniqueArgs>(args: Prisma.SelectSubset<T, PresetMessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PresetMessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PresetMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PresetMessageFindFirstArgs>(args?: Prisma.SelectSubset<T, PresetMessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PresetMessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PresetMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PresetMessageFindManyArgs>(args?: Prisma.SelectSubset<T, PresetMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PresetMessageCreateArgs>(args: Prisma.SelectSubset<T, PresetMessageCreateArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PresetMessageCreateManyArgs>(args?: Prisma.SelectSubset<T, PresetMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends PresetMessageDeleteArgs>(args: Prisma.SelectSubset<T, PresetMessageDeleteArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PresetMessageUpdateArgs>(args: Prisma.SelectSubset<T, PresetMessageUpdateArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PresetMessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, PresetMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PresetMessageUpdateManyArgs>(args: Prisma.SelectSubset<T, PresetMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends PresetMessageUpsertArgs>(args: Prisma.SelectSubset<T, PresetMessageUpsertArgs<ExtArgs>>): Prisma.Prisma__PresetMessageClient<runtime.Types.Result.GetResult<Prisma.$PresetMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.PresetMessageFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.PresetMessageAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends PresetMessageCountArgs>(args?: Prisma.Subset<T, PresetMessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PresetMessageCountAggregateOutputType> : number>;
    aggregate<T extends PresetMessageAggregateArgs>(args: Prisma.Subset<T, PresetMessageAggregateArgs>): Prisma.PrismaPromise<GetPresetMessageAggregateType<T>>;
    groupBy<T extends PresetMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PresetMessageGroupByArgs['orderBy'];
    } : {
        orderBy?: PresetMessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PresetMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PresetMessageFieldRefs;
}
export interface Prisma__PresetMessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PresetMessageFieldRefs {
    readonly id: Prisma.FieldRef<"PresetMessage", 'String'>;
    readonly message: Prisma.FieldRef<"PresetMessage", 'String'>;
    readonly message_it: Prisma.FieldRef<"PresetMessage", 'String'>;
    readonly type: Prisma.FieldRef<"PresetMessage", 'PresetMessageType'>;
    readonly isActive: Prisma.FieldRef<"PresetMessage", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PresetMessage", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PresetMessage", 'DateTime'>;
}
export type PresetMessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where: Prisma.PresetMessageWhereUniqueInput;
};
export type PresetMessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where: Prisma.PresetMessageWhereUniqueInput;
};
export type PresetMessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where?: Prisma.PresetMessageWhereInput;
    orderBy?: Prisma.PresetMessageOrderByWithRelationInput | Prisma.PresetMessageOrderByWithRelationInput[];
    cursor?: Prisma.PresetMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresetMessageScalarFieldEnum | Prisma.PresetMessageScalarFieldEnum[];
};
export type PresetMessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where?: Prisma.PresetMessageWhereInput;
    orderBy?: Prisma.PresetMessageOrderByWithRelationInput | Prisma.PresetMessageOrderByWithRelationInput[];
    cursor?: Prisma.PresetMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresetMessageScalarFieldEnum | Prisma.PresetMessageScalarFieldEnum[];
};
export type PresetMessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where?: Prisma.PresetMessageWhereInput;
    orderBy?: Prisma.PresetMessageOrderByWithRelationInput | Prisma.PresetMessageOrderByWithRelationInput[];
    cursor?: Prisma.PresetMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresetMessageScalarFieldEnum | Prisma.PresetMessageScalarFieldEnum[];
};
export type PresetMessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PresetMessageCreateInput, Prisma.PresetMessageUncheckedCreateInput>;
};
export type PresetMessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PresetMessageCreateManyInput | Prisma.PresetMessageCreateManyInput[];
};
export type PresetMessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PresetMessageUpdateInput, Prisma.PresetMessageUncheckedUpdateInput>;
    where: Prisma.PresetMessageWhereUniqueInput;
};
export type PresetMessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PresetMessageUpdateManyMutationInput, Prisma.PresetMessageUncheckedUpdateManyInput>;
    where?: Prisma.PresetMessageWhereInput;
    limit?: number;
};
export type PresetMessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where: Prisma.PresetMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PresetMessageCreateInput, Prisma.PresetMessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PresetMessageUpdateInput, Prisma.PresetMessageUncheckedUpdateInput>;
};
export type PresetMessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
    where: Prisma.PresetMessageWhereUniqueInput;
};
export type PresetMessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresetMessageWhereInput;
    limit?: number;
};
export type PresetMessageFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type PresetMessageAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type PresetMessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresetMessageSelect<ExtArgs> | null;
    omit?: Prisma.PresetMessageOmit<ExtArgs> | null;
};
export {};
