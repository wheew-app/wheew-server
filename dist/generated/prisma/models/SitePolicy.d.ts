import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SitePolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$SitePolicyPayload>;
export type AggregateSitePolicy = {
    _count: SitePolicyCountAggregateOutputType | null;
    _min: SitePolicyMinAggregateOutputType | null;
    _max: SitePolicyMaxAggregateOutputType | null;
};
export type SitePolicyMinAggregateOutputType = {
    id: string | null;
    type: $Enums.PolicyType | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SitePolicyMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.PolicyType | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SitePolicyCountAggregateOutputType = {
    id: number;
    type: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SitePolicyMinAggregateInputType = {
    id?: true;
    type?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SitePolicyMaxAggregateInputType = {
    id?: true;
    type?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SitePolicyCountAggregateInputType = {
    id?: true;
    type?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SitePolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SitePolicyWhereInput;
    orderBy?: Prisma.SitePolicyOrderByWithRelationInput | Prisma.SitePolicyOrderByWithRelationInput[];
    cursor?: Prisma.SitePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SitePolicyCountAggregateInputType;
    _min?: SitePolicyMinAggregateInputType;
    _max?: SitePolicyMaxAggregateInputType;
};
export type GetSitePolicyAggregateType<T extends SitePolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateSitePolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSitePolicy[P]> : Prisma.GetScalarType<T[P], AggregateSitePolicy[P]>;
};
export type SitePolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SitePolicyWhereInput;
    orderBy?: Prisma.SitePolicyOrderByWithAggregationInput | Prisma.SitePolicyOrderByWithAggregationInput[];
    by: Prisma.SitePolicyScalarFieldEnum[] | Prisma.SitePolicyScalarFieldEnum;
    having?: Prisma.SitePolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SitePolicyCountAggregateInputType | true;
    _min?: SitePolicyMinAggregateInputType;
    _max?: SitePolicyMaxAggregateInputType;
};
export type SitePolicyGroupByOutputType = {
    id: string;
    type: $Enums.PolicyType;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SitePolicyCountAggregateOutputType | null;
    _min: SitePolicyMinAggregateOutputType | null;
    _max: SitePolicyMaxAggregateOutputType | null;
};
type GetSitePolicyGroupByPayload<T extends SitePolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SitePolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SitePolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SitePolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SitePolicyGroupByOutputType[P]>;
}>>;
export type SitePolicyWhereInput = {
    AND?: Prisma.SitePolicyWhereInput | Prisma.SitePolicyWhereInput[];
    OR?: Prisma.SitePolicyWhereInput[];
    NOT?: Prisma.SitePolicyWhereInput | Prisma.SitePolicyWhereInput[];
    id?: Prisma.StringFilter<"SitePolicy"> | string;
    type?: Prisma.EnumPolicyTypeFilter<"SitePolicy"> | $Enums.PolicyType;
    content?: Prisma.StringFilter<"SitePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"SitePolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SitePolicy"> | Date | string;
};
export type SitePolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SitePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SitePolicyWhereInput | Prisma.SitePolicyWhereInput[];
    OR?: Prisma.SitePolicyWhereInput[];
    NOT?: Prisma.SitePolicyWhereInput | Prisma.SitePolicyWhereInput[];
    type?: Prisma.EnumPolicyTypeFilter<"SitePolicy"> | $Enums.PolicyType;
    content?: Prisma.StringFilter<"SitePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"SitePolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SitePolicy"> | Date | string;
}, "id">;
export type SitePolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SitePolicyCountOrderByAggregateInput;
    _max?: Prisma.SitePolicyMaxOrderByAggregateInput;
    _min?: Prisma.SitePolicyMinOrderByAggregateInput;
};
export type SitePolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.SitePolicyScalarWhereWithAggregatesInput | Prisma.SitePolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.SitePolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SitePolicyScalarWhereWithAggregatesInput | Prisma.SitePolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SitePolicy"> | string;
    type?: Prisma.EnumPolicyTypeWithAggregatesFilter<"SitePolicy"> | $Enums.PolicyType;
    content?: Prisma.StringWithAggregatesFilter<"SitePolicy"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SitePolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SitePolicy"> | Date | string;
};
export type SitePolicyCreateInput = {
    id?: string;
    type: $Enums.PolicyType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SitePolicyUncheckedCreateInput = {
    id?: string;
    type: $Enums.PolicyType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SitePolicyUpdateInput = {
    type?: Prisma.EnumPolicyTypeFieldUpdateOperationsInput | $Enums.PolicyType;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SitePolicyUncheckedUpdateInput = {
    type?: Prisma.EnumPolicyTypeFieldUpdateOperationsInput | $Enums.PolicyType;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SitePolicyCreateManyInput = {
    id?: string;
    type: $Enums.PolicyType;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SitePolicyUpdateManyMutationInput = {
    type?: Prisma.EnumPolicyTypeFieldUpdateOperationsInput | $Enums.PolicyType;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SitePolicyUncheckedUpdateManyInput = {
    type?: Prisma.EnumPolicyTypeFieldUpdateOperationsInput | $Enums.PolicyType;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SitePolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SitePolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SitePolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumPolicyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PolicyType;
};
export type SitePolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sitePolicy"]>;
export type SitePolicySelectScalar = {
    id?: boolean;
    type?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SitePolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["sitePolicy"]>;
export type $SitePolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SitePolicy";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.PolicyType;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sitePolicy"]>;
    composites: {};
};
export type SitePolicyGetPayload<S extends boolean | null | undefined | SitePolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload, S>;
export type SitePolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SitePolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SitePolicyCountAggregateInputType | true;
};
export interface SitePolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SitePolicy'];
        meta: {
            name: 'SitePolicy';
        };
    };
    findUnique<T extends SitePolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, SitePolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SitePolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SitePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SitePolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, SitePolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SitePolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SitePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SitePolicyFindManyArgs>(args?: Prisma.SelectSubset<T, SitePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SitePolicyCreateArgs>(args: Prisma.SelectSubset<T, SitePolicyCreateArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SitePolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, SitePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SitePolicyDeleteArgs>(args: Prisma.SelectSubset<T, SitePolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SitePolicyUpdateArgs>(args: Prisma.SelectSubset<T, SitePolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SitePolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, SitePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SitePolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, SitePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SitePolicyUpsertArgs>(args: Prisma.SelectSubset<T, SitePolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__SitePolicyClient<runtime.Types.Result.GetResult<Prisma.$SitePolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.SitePolicyFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.SitePolicyAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends SitePolicyCountArgs>(args?: Prisma.Subset<T, SitePolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SitePolicyCountAggregateOutputType> : number>;
    aggregate<T extends SitePolicyAggregateArgs>(args: Prisma.Subset<T, SitePolicyAggregateArgs>): Prisma.PrismaPromise<GetSitePolicyAggregateType<T>>;
    groupBy<T extends SitePolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SitePolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: SitePolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SitePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SitePolicyFieldRefs;
}
export interface Prisma__SitePolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SitePolicyFieldRefs {
    readonly id: Prisma.FieldRef<"SitePolicy", 'String'>;
    readonly type: Prisma.FieldRef<"SitePolicy", 'PolicyType'>;
    readonly content: Prisma.FieldRef<"SitePolicy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SitePolicy", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SitePolicy", 'DateTime'>;
}
export type SitePolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where: Prisma.SitePolicyWhereUniqueInput;
};
export type SitePolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where: Prisma.SitePolicyWhereUniqueInput;
};
export type SitePolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where?: Prisma.SitePolicyWhereInput;
    orderBy?: Prisma.SitePolicyOrderByWithRelationInput | Prisma.SitePolicyOrderByWithRelationInput[];
    cursor?: Prisma.SitePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SitePolicyScalarFieldEnum | Prisma.SitePolicyScalarFieldEnum[];
};
export type SitePolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where?: Prisma.SitePolicyWhereInput;
    orderBy?: Prisma.SitePolicyOrderByWithRelationInput | Prisma.SitePolicyOrderByWithRelationInput[];
    cursor?: Prisma.SitePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SitePolicyScalarFieldEnum | Prisma.SitePolicyScalarFieldEnum[];
};
export type SitePolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where?: Prisma.SitePolicyWhereInput;
    orderBy?: Prisma.SitePolicyOrderByWithRelationInput | Prisma.SitePolicyOrderByWithRelationInput[];
    cursor?: Prisma.SitePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SitePolicyScalarFieldEnum | Prisma.SitePolicyScalarFieldEnum[];
};
export type SitePolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SitePolicyCreateInput, Prisma.SitePolicyUncheckedCreateInput>;
};
export type SitePolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SitePolicyCreateManyInput | Prisma.SitePolicyCreateManyInput[];
};
export type SitePolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SitePolicyUpdateInput, Prisma.SitePolicyUncheckedUpdateInput>;
    where: Prisma.SitePolicyWhereUniqueInput;
};
export type SitePolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SitePolicyUpdateManyMutationInput, Prisma.SitePolicyUncheckedUpdateManyInput>;
    where?: Prisma.SitePolicyWhereInput;
    limit?: number;
};
export type SitePolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where: Prisma.SitePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.SitePolicyCreateInput, Prisma.SitePolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SitePolicyUpdateInput, Prisma.SitePolicyUncheckedUpdateInput>;
};
export type SitePolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
    where: Prisma.SitePolicyWhereUniqueInput;
};
export type SitePolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SitePolicyWhereInput;
    limit?: number;
};
export type SitePolicyFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type SitePolicyAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type SitePolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SitePolicySelect<ExtArgs> | null;
    omit?: Prisma.SitePolicyOmit<ExtArgs> | null;
};
export {};
