import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingSearchSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingSearchSessionPayload>;
export type AggregateParkingSearchSession = {
    _count: ParkingSearchSessionCountAggregateOutputType | null;
    _avg: ParkingSearchSessionAvgAggregateOutputType | null;
    _sum: ParkingSearchSessionSumAggregateOutputType | null;
    _min: ParkingSearchSessionMinAggregateOutputType | null;
    _max: ParkingSearchSessionMaxAggregateOutputType | null;
};
export type ParkingSearchSessionAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
};
export type ParkingSearchSessionSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
};
export type ParkingSearchSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    status: $Enums.ParkingSearchStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingSearchSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    status: $Enums.ParkingSearchStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingSearchSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    latitude: number;
    longitude: number;
    accuracy: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkingSearchSessionAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
};
export type ParkingSearchSessionSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
};
export type ParkingSearchSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingSearchSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingSearchSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkingSearchSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSearchSessionWhereInput;
    orderBy?: Prisma.ParkingSearchSessionOrderByWithRelationInput | Prisma.ParkingSearchSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSearchSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingSearchSessionCountAggregateInputType;
    _avg?: ParkingSearchSessionAvgAggregateInputType;
    _sum?: ParkingSearchSessionSumAggregateInputType;
    _min?: ParkingSearchSessionMinAggregateInputType;
    _max?: ParkingSearchSessionMaxAggregateInputType;
};
export type GetParkingSearchSessionAggregateType<T extends ParkingSearchSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingSearchSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingSearchSession[P]> : Prisma.GetScalarType<T[P], AggregateParkingSearchSession[P]>;
};
export type ParkingSearchSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSearchSessionWhereInput;
    orderBy?: Prisma.ParkingSearchSessionOrderByWithAggregationInput | Prisma.ParkingSearchSessionOrderByWithAggregationInput[];
    by: Prisma.ParkingSearchSessionScalarFieldEnum[] | Prisma.ParkingSearchSessionScalarFieldEnum;
    having?: Prisma.ParkingSearchSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingSearchSessionCountAggregateInputType | true;
    _avg?: ParkingSearchSessionAvgAggregateInputType;
    _sum?: ParkingSearchSessionSumAggregateInputType;
    _min?: ParkingSearchSessionMinAggregateInputType;
    _max?: ParkingSearchSessionMaxAggregateInputType;
};
export type ParkingSearchSessionGroupByOutputType = {
    id: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy: number | null;
    status: $Enums.ParkingSearchStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkingSearchSessionCountAggregateOutputType | null;
    _avg: ParkingSearchSessionAvgAggregateOutputType | null;
    _sum: ParkingSearchSessionSumAggregateOutputType | null;
    _min: ParkingSearchSessionMinAggregateOutputType | null;
    _max: ParkingSearchSessionMaxAggregateOutputType | null;
};
type GetParkingSearchSessionGroupByPayload<T extends ParkingSearchSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingSearchSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingSearchSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingSearchSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingSearchSessionGroupByOutputType[P]>;
}>>;
export type ParkingSearchSessionWhereInput = {
    AND?: Prisma.ParkingSearchSessionWhereInput | Prisma.ParkingSearchSessionWhereInput[];
    OR?: Prisma.ParkingSearchSessionWhereInput[];
    NOT?: Prisma.ParkingSearchSessionWhereInput | Prisma.ParkingSearchSessionWhereInput[];
    id?: Prisma.StringFilter<"ParkingSearchSession"> | string;
    userId?: Prisma.StringFilter<"ParkingSearchSession"> | string;
    latitude?: Prisma.FloatFilter<"ParkingSearchSession"> | number;
    longitude?: Prisma.FloatFilter<"ParkingSearchSession"> | number;
    accuracy?: Prisma.FloatNullableFilter<"ParkingSearchSession"> | number | null;
    status?: Prisma.EnumParkingSearchStatusFilter<"ParkingSearchSession"> | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeFilter<"ParkingSearchSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingSearchSession"> | Date | string;
};
export type ParkingSearchSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSearchSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ParkingSearchSessionWhereInput | Prisma.ParkingSearchSessionWhereInput[];
    OR?: Prisma.ParkingSearchSessionWhereInput[];
    NOT?: Prisma.ParkingSearchSessionWhereInput | Prisma.ParkingSearchSessionWhereInput[];
    latitude?: Prisma.FloatFilter<"ParkingSearchSession"> | number;
    longitude?: Prisma.FloatFilter<"ParkingSearchSession"> | number;
    accuracy?: Prisma.FloatNullableFilter<"ParkingSearchSession"> | number | null;
    status?: Prisma.EnumParkingSearchStatusFilter<"ParkingSearchSession"> | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeFilter<"ParkingSearchSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingSearchSession"> | Date | string;
}, "id" | "userId">;
export type ParkingSearchSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingSearchSessionCountOrderByAggregateInput;
    _avg?: Prisma.ParkingSearchSessionAvgOrderByAggregateInput;
    _max?: Prisma.ParkingSearchSessionMaxOrderByAggregateInput;
    _min?: Prisma.ParkingSearchSessionMinOrderByAggregateInput;
    _sum?: Prisma.ParkingSearchSessionSumOrderByAggregateInput;
};
export type ParkingSearchSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingSearchSessionScalarWhereWithAggregatesInput | Prisma.ParkingSearchSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingSearchSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingSearchSessionScalarWhereWithAggregatesInput | Prisma.ParkingSearchSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingSearchSession"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ParkingSearchSession"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"ParkingSearchSession"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"ParkingSearchSession"> | number;
    accuracy?: Prisma.FloatNullableWithAggregatesFilter<"ParkingSearchSession"> | number | null;
    status?: Prisma.EnumParkingSearchStatusWithAggregatesFilter<"ParkingSearchSession"> | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingSearchSession"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingSearchSession"> | Date | string;
};
export type ParkingSearchSessionCreateInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    status?: $Enums.ParkingSearchStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingSearchSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    status?: $Enums.ParkingSearchStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingSearchSessionUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumParkingSearchStatusFieldUpdateOperationsInput | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSearchSessionUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumParkingSearchStatusFieldUpdateOperationsInput | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSearchSessionCreateManyInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    status?: $Enums.ParkingSearchStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingSearchSessionUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumParkingSearchStatusFieldUpdateOperationsInput | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSearchSessionUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumParkingSearchStatusFieldUpdateOperationsInput | $Enums.ParkingSearchStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSearchSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSearchSessionAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
};
export type ParkingSearchSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSearchSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSearchSessionSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
};
export type EnumParkingSearchStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParkingSearchStatus;
};
export type ParkingSearchSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["parkingSearchSession"]>;
export type ParkingSearchSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkingSearchSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "latitude" | "longitude" | "accuracy" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingSearchSession"]>;
export type $ParkingSearchSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingSearchSession";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        latitude: number;
        longitude: number;
        accuracy: number | null;
        status: $Enums.ParkingSearchStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parkingSearchSession"]>;
    composites: {};
};
export type ParkingSearchSessionGetPayload<S extends boolean | null | undefined | ParkingSearchSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload, S>;
export type ParkingSearchSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingSearchSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingSearchSessionCountAggregateInputType | true;
};
export interface ParkingSearchSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingSearchSession'];
        meta: {
            name: 'ParkingSearchSession';
        };
    };
    findUnique<T extends ParkingSearchSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingSearchSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingSearchSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingSearchSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingSearchSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingSearchSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingSearchSessionFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingSearchSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingSearchSessionCreateArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingSearchSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingSearchSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingSearchSessionDeleteArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingSearchSessionUpdateArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingSearchSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingSearchSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingSearchSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingSearchSessionUpsertArgs>(args: Prisma.SelectSubset<T, ParkingSearchSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingSearchSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSearchSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingSearchSessionFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingSearchSessionAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingSearchSessionCountArgs>(args?: Prisma.Subset<T, ParkingSearchSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingSearchSessionCountAggregateOutputType> : number>;
    aggregate<T extends ParkingSearchSessionAggregateArgs>(args: Prisma.Subset<T, ParkingSearchSessionAggregateArgs>): Prisma.PrismaPromise<GetParkingSearchSessionAggregateType<T>>;
    groupBy<T extends ParkingSearchSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingSearchSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingSearchSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingSearchSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSearchSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingSearchSessionFieldRefs;
}
export interface Prisma__ParkingSearchSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingSearchSessionFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingSearchSession", 'String'>;
    readonly userId: Prisma.FieldRef<"ParkingSearchSession", 'String'>;
    readonly latitude: Prisma.FieldRef<"ParkingSearchSession", 'Float'>;
    readonly longitude: Prisma.FieldRef<"ParkingSearchSession", 'Float'>;
    readonly accuracy: Prisma.FieldRef<"ParkingSearchSession", 'Float'>;
    readonly status: Prisma.FieldRef<"ParkingSearchSession", 'ParkingSearchStatus'>;
    readonly createdAt: Prisma.FieldRef<"ParkingSearchSession", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingSearchSession", 'DateTime'>;
}
export type ParkingSearchSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSearchSessionWhereUniqueInput;
};
export type ParkingSearchSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSearchSessionWhereUniqueInput;
};
export type ParkingSearchSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where?: Prisma.ParkingSearchSessionWhereInput;
    orderBy?: Prisma.ParkingSearchSessionOrderByWithRelationInput | Prisma.ParkingSearchSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSearchSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSearchSessionScalarFieldEnum | Prisma.ParkingSearchSessionScalarFieldEnum[];
};
export type ParkingSearchSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where?: Prisma.ParkingSearchSessionWhereInput;
    orderBy?: Prisma.ParkingSearchSessionOrderByWithRelationInput | Prisma.ParkingSearchSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSearchSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSearchSessionScalarFieldEnum | Prisma.ParkingSearchSessionScalarFieldEnum[];
};
export type ParkingSearchSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where?: Prisma.ParkingSearchSessionWhereInput;
    orderBy?: Prisma.ParkingSearchSessionOrderByWithRelationInput | Prisma.ParkingSearchSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSearchSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSearchSessionScalarFieldEnum | Prisma.ParkingSearchSessionScalarFieldEnum[];
};
export type ParkingSearchSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingSearchSessionCreateInput, Prisma.ParkingSearchSessionUncheckedCreateInput>;
};
export type ParkingSearchSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingSearchSessionCreateManyInput | Prisma.ParkingSearchSessionCreateManyInput[];
};
export type ParkingSearchSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingSearchSessionUpdateInput, Prisma.ParkingSearchSessionUncheckedUpdateInput>;
    where: Prisma.ParkingSearchSessionWhereUniqueInput;
};
export type ParkingSearchSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingSearchSessionUpdateManyMutationInput, Prisma.ParkingSearchSessionUncheckedUpdateManyInput>;
    where?: Prisma.ParkingSearchSessionWhereInput;
    limit?: number;
};
export type ParkingSearchSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSearchSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingSearchSessionCreateInput, Prisma.ParkingSearchSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingSearchSessionUpdateInput, Prisma.ParkingSearchSessionUncheckedUpdateInput>;
};
export type ParkingSearchSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSearchSessionWhereUniqueInput;
};
export type ParkingSearchSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSearchSessionWhereInput;
    limit?: number;
};
export type ParkingSearchSessionFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingSearchSessionAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingSearchSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSearchSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSearchSessionOmit<ExtArgs> | null;
};
export {};
