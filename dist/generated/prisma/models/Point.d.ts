import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PointModel = runtime.Types.Result.DefaultSelection<Prisma.$PointPayload>;
export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null;
    _avg: PointAvgAggregateOutputType | null;
    _sum: PointSumAggregateOutputType | null;
    _min: PointMinAggregateOutputType | null;
    _max: PointMaxAggregateOutputType | null;
};
export type PointAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type PointSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type PointMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PointMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PointCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    latitude: number;
    longitude: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PointAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type PointSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type PointMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PointMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PointCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PointAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointWhereInput;
    orderBy?: Prisma.PointOrderByWithRelationInput | Prisma.PointOrderByWithRelationInput[];
    cursor?: Prisma.PointWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PointCountAggregateInputType;
    _avg?: PointAvgAggregateInputType;
    _sum?: PointSumAggregateInputType;
    _min?: PointMinAggregateInputType;
    _max?: PointMaxAggregateInputType;
};
export type GetPointAggregateType<T extends PointAggregateArgs> = {
    [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePoint[P]> : Prisma.GetScalarType<T[P], AggregatePoint[P]>;
};
export type PointGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointWhereInput;
    orderBy?: Prisma.PointOrderByWithAggregationInput | Prisma.PointOrderByWithAggregationInput[];
    by: Prisma.PointScalarFieldEnum[] | Prisma.PointScalarFieldEnum;
    having?: Prisma.PointScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PointCountAggregateInputType | true;
    _avg?: PointAvgAggregateInputType;
    _sum?: PointSumAggregateInputType;
    _min?: PointMinAggregateInputType;
    _max?: PointMaxAggregateInputType;
};
export type PointGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
    _count: PointCountAggregateOutputType | null;
    _avg: PointAvgAggregateOutputType | null;
    _sum: PointSumAggregateOutputType | null;
    _min: PointMinAggregateOutputType | null;
    _max: PointMaxAggregateOutputType | null;
};
type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PointGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PointGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PointGroupByOutputType[P]>;
}>>;
export type PointWhereInput = {
    AND?: Prisma.PointWhereInput | Prisma.PointWhereInput[];
    OR?: Prisma.PointWhereInput[];
    NOT?: Prisma.PointWhereInput | Prisma.PointWhereInput[];
    id?: Prisma.StringFilter<"Point"> | string;
    name?: Prisma.StringFilter<"Point"> | string;
    description?: Prisma.StringNullableFilter<"Point"> | string | null;
    latitude?: Prisma.FloatFilter<"Point"> | number;
    longitude?: Prisma.FloatFilter<"Point"> | number;
    createdAt?: Prisma.DateTimeFilter<"Point"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Point"> | Date | string;
};
export type PointOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PointWhereInput | Prisma.PointWhereInput[];
    OR?: Prisma.PointWhereInput[];
    NOT?: Prisma.PointWhereInput | Prisma.PointWhereInput[];
    name?: Prisma.StringFilter<"Point"> | string;
    description?: Prisma.StringNullableFilter<"Point"> | string | null;
    latitude?: Prisma.FloatFilter<"Point"> | number;
    longitude?: Prisma.FloatFilter<"Point"> | number;
    createdAt?: Prisma.DateTimeFilter<"Point"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Point"> | Date | string;
}, "id">;
export type PointOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PointCountOrderByAggregateInput;
    _avg?: Prisma.PointAvgOrderByAggregateInput;
    _max?: Prisma.PointMaxOrderByAggregateInput;
    _min?: Prisma.PointMinOrderByAggregateInput;
    _sum?: Prisma.PointSumOrderByAggregateInput;
};
export type PointScalarWhereWithAggregatesInput = {
    AND?: Prisma.PointScalarWhereWithAggregatesInput | Prisma.PointScalarWhereWithAggregatesInput[];
    OR?: Prisma.PointScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PointScalarWhereWithAggregatesInput | Prisma.PointScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Point"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Point"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Point"> | string | null;
    latitude?: Prisma.FloatWithAggregatesFilter<"Point"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Point"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Point"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Point"> | Date | string;
};
export type PointCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PointUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PointUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointUncheckedUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PointUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointUncheckedUpdateManyInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PointAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type PointMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PointMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PointSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PointSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["point"]>;
export type PointSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PointOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["point"]>;
export type $PointPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Point";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        latitude: number;
        longitude: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["point"]>;
    composites: {};
};
export type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PointPayload, S>;
export type PointCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PointCountAggregateInputType | true;
};
export interface PointDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Point'];
        meta: {
            name: 'Point';
        };
    };
    findUnique<T extends PointFindUniqueArgs>(args: Prisma.SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PointFindFirstArgs>(args?: Prisma.SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PointFindManyArgs>(args?: Prisma.SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PointCreateArgs>(args: Prisma.SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PointCreateManyArgs>(args?: Prisma.SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends PointDeleteArgs>(args: Prisma.SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PointUpdateArgs>(args: Prisma.SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PointDeleteManyArgs>(args?: Prisma.SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PointUpdateManyArgs>(args: Prisma.SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends PointUpsertArgs>(args: Prisma.SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma.Prisma__PointClient<runtime.Types.Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.PointFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.PointAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends PointCountArgs>(args?: Prisma.Subset<T, PointCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PointCountAggregateOutputType> : number>;
    aggregate<T extends PointAggregateArgs>(args: Prisma.Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>;
    groupBy<T extends PointGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PointGroupByArgs['orderBy'];
    } : {
        orderBy?: PointGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PointFieldRefs;
}
export interface Prisma__PointClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PointFieldRefs {
    readonly id: Prisma.FieldRef<"Point", 'String'>;
    readonly name: Prisma.FieldRef<"Point", 'String'>;
    readonly description: Prisma.FieldRef<"Point", 'String'>;
    readonly latitude: Prisma.FieldRef<"Point", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Point", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Point", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Point", 'DateTime'>;
}
export type PointFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where: Prisma.PointWhereUniqueInput;
};
export type PointFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where: Prisma.PointWhereUniqueInput;
};
export type PointFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where?: Prisma.PointWhereInput;
    orderBy?: Prisma.PointOrderByWithRelationInput | Prisma.PointOrderByWithRelationInput[];
    cursor?: Prisma.PointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PointScalarFieldEnum | Prisma.PointScalarFieldEnum[];
};
export type PointFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where?: Prisma.PointWhereInput;
    orderBy?: Prisma.PointOrderByWithRelationInput | Prisma.PointOrderByWithRelationInput[];
    cursor?: Prisma.PointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PointScalarFieldEnum | Prisma.PointScalarFieldEnum[];
};
export type PointFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where?: Prisma.PointWhereInput;
    orderBy?: Prisma.PointOrderByWithRelationInput | Prisma.PointOrderByWithRelationInput[];
    cursor?: Prisma.PointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PointScalarFieldEnum | Prisma.PointScalarFieldEnum[];
};
export type PointCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PointCreateInput, Prisma.PointUncheckedCreateInput>;
};
export type PointCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PointCreateManyInput | Prisma.PointCreateManyInput[];
};
export type PointUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PointUpdateInput, Prisma.PointUncheckedUpdateInput>;
    where: Prisma.PointWhereUniqueInput;
};
export type PointUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PointUpdateManyMutationInput, Prisma.PointUncheckedUpdateManyInput>;
    where?: Prisma.PointWhereInput;
    limit?: number;
};
export type PointUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where: Prisma.PointWhereUniqueInput;
    create: Prisma.XOR<Prisma.PointCreateInput, Prisma.PointUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PointUpdateInput, Prisma.PointUncheckedUpdateInput>;
};
export type PointDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
    where: Prisma.PointWhereUniqueInput;
};
export type PointDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointWhereInput;
    limit?: number;
};
export type PointFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type PointAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type PointDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointSelect<ExtArgs> | null;
    omit?: Prisma.PointOmit<ExtArgs> | null;
};
export {};
