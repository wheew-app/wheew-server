import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$UserLocationPayload>;
export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null;
    _avg: UserLocationAvgAggregateOutputType | null;
    _sum: UserLocationSumAggregateOutputType | null;
    _min: UserLocationMinAggregateOutputType | null;
    _max: UserLocationMaxAggregateOutputType | null;
};
export type UserLocationAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
};
export type UserLocationSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
};
export type UserLocationMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserLocationMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserLocationCountAggregateOutputType = {
    id: number;
    userId: number;
    latitude: number;
    longitude: number;
    accuracy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserLocationAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
};
export type UserLocationSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
};
export type UserLocationMinAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserLocationMaxAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserLocationCountAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserLocationWhereInput;
    orderBy?: Prisma.UserLocationOrderByWithRelationInput | Prisma.UserLocationOrderByWithRelationInput[];
    cursor?: Prisma.UserLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserLocationCountAggregateInputType;
    _avg?: UserLocationAvgAggregateInputType;
    _sum?: UserLocationSumAggregateInputType;
    _min?: UserLocationMinAggregateInputType;
    _max?: UserLocationMaxAggregateInputType;
};
export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserLocation[P]> : Prisma.GetScalarType<T[P], AggregateUserLocation[P]>;
};
export type UserLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserLocationWhereInput;
    orderBy?: Prisma.UserLocationOrderByWithAggregationInput | Prisma.UserLocationOrderByWithAggregationInput[];
    by: Prisma.UserLocationScalarFieldEnum[] | Prisma.UserLocationScalarFieldEnum;
    having?: Prisma.UserLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserLocationCountAggregateInputType | true;
    _avg?: UserLocationAvgAggregateInputType;
    _sum?: UserLocationSumAggregateInputType;
    _min?: UserLocationMinAggregateInputType;
    _max?: UserLocationMaxAggregateInputType;
};
export type UserLocationGroupByOutputType = {
    id: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserLocationCountAggregateOutputType | null;
    _avg: UserLocationAvgAggregateOutputType | null;
    _sum: UserLocationSumAggregateOutputType | null;
    _min: UserLocationMinAggregateOutputType | null;
    _max: UserLocationMaxAggregateOutputType | null;
};
type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserLocationGroupByOutputType[P]>;
}>>;
export type UserLocationWhereInput = {
    AND?: Prisma.UserLocationWhereInput | Prisma.UserLocationWhereInput[];
    OR?: Prisma.UserLocationWhereInput[];
    NOT?: Prisma.UserLocationWhereInput | Prisma.UserLocationWhereInput[];
    id?: Prisma.StringFilter<"UserLocation"> | string;
    userId?: Prisma.StringFilter<"UserLocation"> | string;
    latitude?: Prisma.FloatFilter<"UserLocation"> | number;
    longitude?: Prisma.FloatFilter<"UserLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"UserLocation"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"UserLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserLocation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.UserLocationWhereInput | Prisma.UserLocationWhereInput[];
    OR?: Prisma.UserLocationWhereInput[];
    NOT?: Prisma.UserLocationWhereInput | Prisma.UserLocationWhereInput[];
    latitude?: Prisma.FloatFilter<"UserLocation"> | number;
    longitude?: Prisma.FloatFilter<"UserLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"UserLocation"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"UserLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserLocation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type UserLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserLocationCountOrderByAggregateInput;
    _avg?: Prisma.UserLocationAvgOrderByAggregateInput;
    _max?: Prisma.UserLocationMaxOrderByAggregateInput;
    _min?: Prisma.UserLocationMinOrderByAggregateInput;
    _sum?: Prisma.UserLocationSumOrderByAggregateInput;
};
export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserLocationScalarWhereWithAggregatesInput | Prisma.UserLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserLocationScalarWhereWithAggregatesInput | Prisma.UserLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserLocation"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserLocation"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"UserLocation"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"UserLocation"> | number;
    accuracy?: Prisma.FloatNullableWithAggregatesFilter<"UserLocation"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserLocation"> | Date | string;
};
export type UserLocationCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutUserLocationInput;
};
export type UserLocationUncheckedCreateInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserLocationUpdateInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutUserLocationNestedInput;
};
export type UserLocationUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserLocationCreateManyInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserLocationUpdateManyMutationInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserLocationUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserLocationNullableScalarRelationFilter = {
    is?: Prisma.UserLocationWhereInput | null;
    isNot?: Prisma.UserLocationWhereInput | null;
};
export type UserLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserLocationAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
};
export type UserLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserLocationSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
};
export type UserLocationCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserLocationCreateWithoutUserInput, Prisma.UserLocationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserLocationCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserLocationWhereUniqueInput;
};
export type UserLocationUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserLocationCreateWithoutUserInput, Prisma.UserLocationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserLocationCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserLocationWhereUniqueInput;
};
export type UserLocationUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserLocationCreateWithoutUserInput, Prisma.UserLocationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserLocationCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserLocationUpsertWithoutUserInput;
    disconnect?: Prisma.UserLocationWhereInput | boolean;
    delete?: Prisma.UserLocationWhereInput | boolean;
    connect?: Prisma.UserLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserLocationUpdateToOneWithWhereWithoutUserInput, Prisma.UserLocationUpdateWithoutUserInput>, Prisma.UserLocationUncheckedUpdateWithoutUserInput>;
};
export type UserLocationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserLocationCreateWithoutUserInput, Prisma.UserLocationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserLocationCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserLocationUpsertWithoutUserInput;
    disconnect?: Prisma.UserLocationWhereInput | boolean;
    delete?: Prisma.UserLocationWhereInput | boolean;
    connect?: Prisma.UserLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserLocationUpdateToOneWithWhereWithoutUserInput, Prisma.UserLocationUpdateWithoutUserInput>, Prisma.UserLocationUncheckedUpdateWithoutUserInput>;
};
export type UserLocationCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserLocationUncheckedCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserLocationCreateOrConnectWithoutUserInput = {
    where: Prisma.UserLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserLocationCreateWithoutUserInput, Prisma.UserLocationUncheckedCreateWithoutUserInput>;
};
export type UserLocationUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.UserLocationUpdateWithoutUserInput, Prisma.UserLocationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserLocationCreateWithoutUserInput, Prisma.UserLocationUncheckedCreateWithoutUserInput>;
    where?: Prisma.UserLocationWhereInput;
};
export type UserLocationUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.UserLocationWhereInput;
    data: Prisma.XOR<Prisma.UserLocationUpdateWithoutUserInput, Prisma.UserLocationUncheckedUpdateWithoutUserInput>;
};
export type UserLocationUpdateWithoutUserInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserLocationUncheckedUpdateWithoutUserInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userLocation"]>;
export type UserLocationSelectScalar = {
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "latitude" | "longitude" | "accuracy" | "createdAt" | "updatedAt", ExtArgs["result"]["userLocation"]>;
export type UserLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserLocation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        latitude: number;
        longitude: number;
        accuracy: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userLocation"]>;
    composites: {};
};
export type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserLocationPayload, S>;
export type UserLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserLocationCountAggregateInputType | true;
};
export interface UserLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'];
        meta: {
            name: 'UserLocation';
        };
    };
    findUnique<T extends UserLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserLocationFindManyArgs>(args?: Prisma.SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserLocationCreateArgs>(args: Prisma.SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserLocationDeleteArgs>(args: Prisma.SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserLocationUpdateArgs>(args: Prisma.SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserLocationUpsertArgs>(args: Prisma.SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__UserLocationClient<runtime.Types.Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.UserLocationFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.UserLocationAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends UserLocationCountArgs>(args?: Prisma.Subset<T, UserLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserLocationCountAggregateOutputType> : number>;
    aggregate<T extends UserLocationAggregateArgs>(args: Prisma.Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>;
    groupBy<T extends UserLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: UserLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserLocationFieldRefs;
}
export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserLocationFieldRefs {
    readonly id: Prisma.FieldRef<"UserLocation", 'String'>;
    readonly userId: Prisma.FieldRef<"UserLocation", 'String'>;
    readonly latitude: Prisma.FieldRef<"UserLocation", 'Float'>;
    readonly longitude: Prisma.FieldRef<"UserLocation", 'Float'>;
    readonly accuracy: Prisma.FieldRef<"UserLocation", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"UserLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserLocation", 'DateTime'>;
}
export type UserLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where: Prisma.UserLocationWhereUniqueInput;
};
export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where: Prisma.UserLocationWhereUniqueInput;
};
export type UserLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where?: Prisma.UserLocationWhereInput;
    orderBy?: Prisma.UserLocationOrderByWithRelationInput | Prisma.UserLocationOrderByWithRelationInput[];
    cursor?: Prisma.UserLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserLocationScalarFieldEnum | Prisma.UserLocationScalarFieldEnum[];
};
export type UserLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where?: Prisma.UserLocationWhereInput;
    orderBy?: Prisma.UserLocationOrderByWithRelationInput | Prisma.UserLocationOrderByWithRelationInput[];
    cursor?: Prisma.UserLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserLocationScalarFieldEnum | Prisma.UserLocationScalarFieldEnum[];
};
export type UserLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where?: Prisma.UserLocationWhereInput;
    orderBy?: Prisma.UserLocationOrderByWithRelationInput | Prisma.UserLocationOrderByWithRelationInput[];
    cursor?: Prisma.UserLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserLocationScalarFieldEnum | Prisma.UserLocationScalarFieldEnum[];
};
export type UserLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserLocationCreateInput, Prisma.UserLocationUncheckedCreateInput>;
};
export type UserLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserLocationCreateManyInput | Prisma.UserLocationCreateManyInput[];
};
export type UserLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserLocationUpdateInput, Prisma.UserLocationUncheckedUpdateInput>;
    where: Prisma.UserLocationWhereUniqueInput;
};
export type UserLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserLocationUpdateManyMutationInput, Prisma.UserLocationUncheckedUpdateManyInput>;
    where?: Prisma.UserLocationWhereInput;
    limit?: number;
};
export type UserLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where: Prisma.UserLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserLocationCreateInput, Prisma.UserLocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserLocationUpdateInput, Prisma.UserLocationUncheckedUpdateInput>;
};
export type UserLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
    where: Prisma.UserLocationWhereUniqueInput;
};
export type UserLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserLocationWhereInput;
    limit?: number;
};
export type UserLocationFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type UserLocationAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type UserLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserLocationSelect<ExtArgs> | null;
    omit?: Prisma.UserLocationOmit<ExtArgs> | null;
    include?: Prisma.UserLocationInclude<ExtArgs> | null;
};
export {};
