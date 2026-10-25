import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlackListedWordModel = runtime.Types.Result.DefaultSelection<Prisma.$BlackListedWordPayload>;
export type AggregateBlackListedWord = {
    _count: BlackListedWordCountAggregateOutputType | null;
    _min: BlackListedWordMinAggregateOutputType | null;
    _max: BlackListedWordMaxAggregateOutputType | null;
};
export type BlackListedWordMinAggregateOutputType = {
    id: string | null;
    word: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BlackListedWordMaxAggregateOutputType = {
    id: string | null;
    word: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BlackListedWordCountAggregateOutputType = {
    id: number;
    word: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BlackListedWordMinAggregateInputType = {
    id?: true;
    word?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BlackListedWordMaxAggregateInputType = {
    id?: true;
    word?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BlackListedWordCountAggregateInputType = {
    id?: true;
    word?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BlackListedWordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlackListedWordWhereInput;
    orderBy?: Prisma.BlackListedWordOrderByWithRelationInput | Prisma.BlackListedWordOrderByWithRelationInput[];
    cursor?: Prisma.BlackListedWordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlackListedWordCountAggregateInputType;
    _min?: BlackListedWordMinAggregateInputType;
    _max?: BlackListedWordMaxAggregateInputType;
};
export type GetBlackListedWordAggregateType<T extends BlackListedWordAggregateArgs> = {
    [P in keyof T & keyof AggregateBlackListedWord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlackListedWord[P]> : Prisma.GetScalarType<T[P], AggregateBlackListedWord[P]>;
};
export type BlackListedWordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlackListedWordWhereInput;
    orderBy?: Prisma.BlackListedWordOrderByWithAggregationInput | Prisma.BlackListedWordOrderByWithAggregationInput[];
    by: Prisma.BlackListedWordScalarFieldEnum[] | Prisma.BlackListedWordScalarFieldEnum;
    having?: Prisma.BlackListedWordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlackListedWordCountAggregateInputType | true;
    _min?: BlackListedWordMinAggregateInputType;
    _max?: BlackListedWordMaxAggregateInputType;
};
export type BlackListedWordGroupByOutputType = {
    id: string;
    word: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BlackListedWordCountAggregateOutputType | null;
    _min: BlackListedWordMinAggregateOutputType | null;
    _max: BlackListedWordMaxAggregateOutputType | null;
};
type GetBlackListedWordGroupByPayload<T extends BlackListedWordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlackListedWordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlackListedWordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlackListedWordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlackListedWordGroupByOutputType[P]>;
}>>;
export type BlackListedWordWhereInput = {
    AND?: Prisma.BlackListedWordWhereInput | Prisma.BlackListedWordWhereInput[];
    OR?: Prisma.BlackListedWordWhereInput[];
    NOT?: Prisma.BlackListedWordWhereInput | Prisma.BlackListedWordWhereInput[];
    id?: Prisma.StringFilter<"BlackListedWord"> | string;
    word?: Prisma.StringFilter<"BlackListedWord"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlackListedWord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlackListedWord"> | Date | string;
};
export type BlackListedWordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlackListedWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    word?: string;
    AND?: Prisma.BlackListedWordWhereInput | Prisma.BlackListedWordWhereInput[];
    OR?: Prisma.BlackListedWordWhereInput[];
    NOT?: Prisma.BlackListedWordWhereInput | Prisma.BlackListedWordWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"BlackListedWord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlackListedWord"> | Date | string;
}, "id" | "word">;
export type BlackListedWordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BlackListedWordCountOrderByAggregateInput;
    _max?: Prisma.BlackListedWordMaxOrderByAggregateInput;
    _min?: Prisma.BlackListedWordMinOrderByAggregateInput;
};
export type BlackListedWordScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlackListedWordScalarWhereWithAggregatesInput | Prisma.BlackListedWordScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlackListedWordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlackListedWordScalarWhereWithAggregatesInput | Prisma.BlackListedWordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BlackListedWord"> | string;
    word?: Prisma.StringWithAggregatesFilter<"BlackListedWord"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BlackListedWord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BlackListedWord"> | Date | string;
};
export type BlackListedWordCreateInput = {
    id?: string;
    word: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlackListedWordUncheckedCreateInput = {
    id?: string;
    word: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlackListedWordUpdateInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlackListedWordUncheckedUpdateInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlackListedWordCreateManyInput = {
    id?: string;
    word: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlackListedWordUpdateManyMutationInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlackListedWordUncheckedUpdateManyInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlackListedWordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlackListedWordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlackListedWordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlackListedWordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    word?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["blackListedWord"]>;
export type BlackListedWordSelectScalar = {
    id?: boolean;
    word?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BlackListedWordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "word" | "createdAt" | "updatedAt", ExtArgs["result"]["blackListedWord"]>;
export type $BlackListedWordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlackListedWord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        word: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["blackListedWord"]>;
    composites: {};
};
export type BlackListedWordGetPayload<S extends boolean | null | undefined | BlackListedWordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload, S>;
export type BlackListedWordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlackListedWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlackListedWordCountAggregateInputType | true;
};
export interface BlackListedWordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlackListedWord'];
        meta: {
            name: 'BlackListedWord';
        };
    };
    findUnique<T extends BlackListedWordFindUniqueArgs>(args: Prisma.SelectSubset<T, BlackListedWordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlackListedWordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlackListedWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlackListedWordFindFirstArgs>(args?: Prisma.SelectSubset<T, BlackListedWordFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlackListedWordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlackListedWordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlackListedWordFindManyArgs>(args?: Prisma.SelectSubset<T, BlackListedWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlackListedWordCreateArgs>(args: Prisma.SelectSubset<T, BlackListedWordCreateArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlackListedWordCreateManyArgs>(args?: Prisma.SelectSubset<T, BlackListedWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BlackListedWordDeleteArgs>(args: Prisma.SelectSubset<T, BlackListedWordDeleteArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlackListedWordUpdateArgs>(args: Prisma.SelectSubset<T, BlackListedWordUpdateArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlackListedWordDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlackListedWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlackListedWordUpdateManyArgs>(args: Prisma.SelectSubset<T, BlackListedWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BlackListedWordUpsertArgs>(args: Prisma.SelectSubset<T, BlackListedWordUpsertArgs<ExtArgs>>): Prisma.Prisma__BlackListedWordClient<runtime.Types.Result.GetResult<Prisma.$BlackListedWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.BlackListedWordFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.BlackListedWordAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends BlackListedWordCountArgs>(args?: Prisma.Subset<T, BlackListedWordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlackListedWordCountAggregateOutputType> : number>;
    aggregate<T extends BlackListedWordAggregateArgs>(args: Prisma.Subset<T, BlackListedWordAggregateArgs>): Prisma.PrismaPromise<GetBlackListedWordAggregateType<T>>;
    groupBy<T extends BlackListedWordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlackListedWordGroupByArgs['orderBy'];
    } : {
        orderBy?: BlackListedWordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlackListedWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlackListedWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlackListedWordFieldRefs;
}
export interface Prisma__BlackListedWordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlackListedWordFieldRefs {
    readonly id: Prisma.FieldRef<"BlackListedWord", 'String'>;
    readonly word: Prisma.FieldRef<"BlackListedWord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BlackListedWord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BlackListedWord", 'DateTime'>;
}
export type BlackListedWordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where: Prisma.BlackListedWordWhereUniqueInput;
};
export type BlackListedWordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where: Prisma.BlackListedWordWhereUniqueInput;
};
export type BlackListedWordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where?: Prisma.BlackListedWordWhereInput;
    orderBy?: Prisma.BlackListedWordOrderByWithRelationInput | Prisma.BlackListedWordOrderByWithRelationInput[];
    cursor?: Prisma.BlackListedWordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlackListedWordScalarFieldEnum | Prisma.BlackListedWordScalarFieldEnum[];
};
export type BlackListedWordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where?: Prisma.BlackListedWordWhereInput;
    orderBy?: Prisma.BlackListedWordOrderByWithRelationInput | Prisma.BlackListedWordOrderByWithRelationInput[];
    cursor?: Prisma.BlackListedWordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlackListedWordScalarFieldEnum | Prisma.BlackListedWordScalarFieldEnum[];
};
export type BlackListedWordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where?: Prisma.BlackListedWordWhereInput;
    orderBy?: Prisma.BlackListedWordOrderByWithRelationInput | Prisma.BlackListedWordOrderByWithRelationInput[];
    cursor?: Prisma.BlackListedWordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlackListedWordScalarFieldEnum | Prisma.BlackListedWordScalarFieldEnum[];
};
export type BlackListedWordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlackListedWordCreateInput, Prisma.BlackListedWordUncheckedCreateInput>;
};
export type BlackListedWordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlackListedWordCreateManyInput | Prisma.BlackListedWordCreateManyInput[];
};
export type BlackListedWordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlackListedWordUpdateInput, Prisma.BlackListedWordUncheckedUpdateInput>;
    where: Prisma.BlackListedWordWhereUniqueInput;
};
export type BlackListedWordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlackListedWordUpdateManyMutationInput, Prisma.BlackListedWordUncheckedUpdateManyInput>;
    where?: Prisma.BlackListedWordWhereInput;
    limit?: number;
};
export type BlackListedWordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where: Prisma.BlackListedWordWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlackListedWordCreateInput, Prisma.BlackListedWordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlackListedWordUpdateInput, Prisma.BlackListedWordUncheckedUpdateInput>;
};
export type BlackListedWordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
    where: Prisma.BlackListedWordWhereUniqueInput;
};
export type BlackListedWordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlackListedWordWhereInput;
    limit?: number;
};
export type BlackListedWordFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type BlackListedWordAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type BlackListedWordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlackListedWordSelect<ExtArgs> | null;
    omit?: Prisma.BlackListedWordOmit<ExtArgs> | null;
};
export {};
