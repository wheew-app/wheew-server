import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsefullNumberModel = runtime.Types.Result.DefaultSelection<Prisma.$UsefullNumberPayload>;
export type AggregateUsefullNumber = {
    _count: UsefullNumberCountAggregateOutputType | null;
    _avg: UsefullNumberAvgAggregateOutputType | null;
    _sum: UsefullNumberSumAggregateOutputType | null;
    _min: UsefullNumberMinAggregateOutputType | null;
    _max: UsefullNumberMaxAggregateOutputType | null;
};
export type UsefullNumberAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type UsefullNumberSumAggregateOutputType = {
    sortOrder: number | null;
};
export type UsefullNumberMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    phone: string | null;
    category: $Enums.UsefulNumberCategory | null;
    icon: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsefullNumberMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    phone: string | null;
    category: $Enums.UsefulNumberCategory | null;
    icon: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsefullNumberCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    phone: number;
    category: number;
    icon: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UsefullNumberAvgAggregateInputType = {
    sortOrder?: true;
};
export type UsefullNumberSumAggregateInputType = {
    sortOrder?: true;
};
export type UsefullNumberMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    phone?: true;
    category?: true;
    icon?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsefullNumberMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    phone?: true;
    category?: true;
    icon?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsefullNumberCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    phone?: true;
    category?: true;
    icon?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsefullNumberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsefullNumberWhereInput;
    orderBy?: Prisma.UsefullNumberOrderByWithRelationInput | Prisma.UsefullNumberOrderByWithRelationInput[];
    cursor?: Prisma.UsefullNumberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsefullNumberCountAggregateInputType;
    _avg?: UsefullNumberAvgAggregateInputType;
    _sum?: UsefullNumberSumAggregateInputType;
    _min?: UsefullNumberMinAggregateInputType;
    _max?: UsefullNumberMaxAggregateInputType;
};
export type GetUsefullNumberAggregateType<T extends UsefullNumberAggregateArgs> = {
    [P in keyof T & keyof AggregateUsefullNumber]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsefullNumber[P]> : Prisma.GetScalarType<T[P], AggregateUsefullNumber[P]>;
};
export type UsefullNumberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsefullNumberWhereInput;
    orderBy?: Prisma.UsefullNumberOrderByWithAggregationInput | Prisma.UsefullNumberOrderByWithAggregationInput[];
    by: Prisma.UsefullNumberScalarFieldEnum[] | Prisma.UsefullNumberScalarFieldEnum;
    having?: Prisma.UsefullNumberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsefullNumberCountAggregateInputType | true;
    _avg?: UsefullNumberAvgAggregateInputType;
    _sum?: UsefullNumberSumAggregateInputType;
    _min?: UsefullNumberMinAggregateInputType;
    _max?: UsefullNumberMaxAggregateInputType;
};
export type UsefullNumberGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    phone: string;
    category: $Enums.UsefulNumberCategory;
    icon: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UsefullNumberCountAggregateOutputType | null;
    _avg: UsefullNumberAvgAggregateOutputType | null;
    _sum: UsefullNumberSumAggregateOutputType | null;
    _min: UsefullNumberMinAggregateOutputType | null;
    _max: UsefullNumberMaxAggregateOutputType | null;
};
type GetUsefullNumberGroupByPayload<T extends UsefullNumberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsefullNumberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsefullNumberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsefullNumberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsefullNumberGroupByOutputType[P]>;
}>>;
export type UsefullNumberWhereInput = {
    AND?: Prisma.UsefullNumberWhereInput | Prisma.UsefullNumberWhereInput[];
    OR?: Prisma.UsefullNumberWhereInput[];
    NOT?: Prisma.UsefullNumberWhereInput | Prisma.UsefullNumberWhereInput[];
    id?: Prisma.StringFilter<"UsefullNumber"> | string;
    title?: Prisma.StringFilter<"UsefullNumber"> | string;
    description?: Prisma.StringNullableFilter<"UsefullNumber"> | string | null;
    phone?: Prisma.StringFilter<"UsefullNumber"> | string;
    category?: Prisma.EnumUsefulNumberCategoryFilter<"UsefullNumber"> | $Enums.UsefulNumberCategory;
    icon?: Prisma.StringNullableFilter<"UsefullNumber"> | string | null;
    sortOrder?: Prisma.IntFilter<"UsefullNumber"> | number;
    isActive?: Prisma.BoolFilter<"UsefullNumber"> | boolean;
    location?: Prisma.XOR<Prisma.LocationNullableCompositeFilter, Prisma.locationObjectEqualityInput> | null;
    geolocation?: Prisma.XOR<Prisma.GeolocationNullableCompositeFilter, Prisma.geolocationObjectEqualityInput> | null;
    createdAt?: Prisma.DateTimeFilter<"UsefullNumber"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UsefullNumber"> | Date | string;
};
export type UsefullNumberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    location?: Prisma.locationOrderByInput;
    geolocation?: Prisma.geolocationOrderByInput;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsefullNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UsefullNumberWhereInput | Prisma.UsefullNumberWhereInput[];
    OR?: Prisma.UsefullNumberWhereInput[];
    NOT?: Prisma.UsefullNumberWhereInput | Prisma.UsefullNumberWhereInput[];
    title?: Prisma.StringFilter<"UsefullNumber"> | string;
    description?: Prisma.StringNullableFilter<"UsefullNumber"> | string | null;
    phone?: Prisma.StringFilter<"UsefullNumber"> | string;
    category?: Prisma.EnumUsefulNumberCategoryFilter<"UsefullNumber"> | $Enums.UsefulNumberCategory;
    icon?: Prisma.StringNullableFilter<"UsefullNumber"> | string | null;
    sortOrder?: Prisma.IntFilter<"UsefullNumber"> | number;
    isActive?: Prisma.BoolFilter<"UsefullNumber"> | boolean;
    location?: Prisma.XOR<Prisma.LocationNullableCompositeFilter, Prisma.locationObjectEqualityInput> | null;
    geolocation?: Prisma.XOR<Prisma.GeolocationNullableCompositeFilter, Prisma.geolocationObjectEqualityInput> | null;
    createdAt?: Prisma.DateTimeFilter<"UsefullNumber"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UsefullNumber"> | Date | string;
}, "id">;
export type UsefullNumberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UsefullNumberCountOrderByAggregateInput;
    _avg?: Prisma.UsefullNumberAvgOrderByAggregateInput;
    _max?: Prisma.UsefullNumberMaxOrderByAggregateInput;
    _min?: Prisma.UsefullNumberMinOrderByAggregateInput;
    _sum?: Prisma.UsefullNumberSumOrderByAggregateInput;
};
export type UsefullNumberScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsefullNumberScalarWhereWithAggregatesInput | Prisma.UsefullNumberScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsefullNumberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsefullNumberScalarWhereWithAggregatesInput | Prisma.UsefullNumberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UsefullNumber"> | string;
    title?: Prisma.StringWithAggregatesFilter<"UsefullNumber"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"UsefullNumber"> | string | null;
    phone?: Prisma.StringWithAggregatesFilter<"UsefullNumber"> | string;
    category?: Prisma.EnumUsefulNumberCategoryWithAggregatesFilter<"UsefullNumber"> | $Enums.UsefulNumberCategory;
    icon?: Prisma.StringNullableWithAggregatesFilter<"UsefullNumber"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"UsefullNumber"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"UsefullNumber"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UsefullNumber"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UsefullNumber"> | Date | string;
};
export type UsefullNumberCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    phone: string;
    category?: $Enums.UsefulNumberCategory;
    icon?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    location?: Prisma.XOR<Prisma.locationNullableCreateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableCreateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsefullNumberUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    phone: string;
    category?: $Enums.UsefulNumberCategory;
    icon?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    location?: Prisma.XOR<Prisma.locationNullableCreateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableCreateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsefullNumberUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumUsefulNumberCategoryFieldUpdateOperationsInput | $Enums.UsefulNumberCategory;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    location?: Prisma.XOR<Prisma.locationNullableUpdateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableUpdateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsefullNumberUncheckedUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumUsefulNumberCategoryFieldUpdateOperationsInput | $Enums.UsefulNumberCategory;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    location?: Prisma.XOR<Prisma.locationNullableUpdateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableUpdateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsefullNumberCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    phone: string;
    category?: $Enums.UsefulNumberCategory;
    icon?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    location?: Prisma.XOR<Prisma.locationNullableCreateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableCreateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsefullNumberUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumUsefulNumberCategoryFieldUpdateOperationsInput | $Enums.UsefulNumberCategory;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    location?: Prisma.XOR<Prisma.locationNullableUpdateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableUpdateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsefullNumberUncheckedUpdateManyInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumUsefulNumberCategoryFieldUpdateOperationsInput | $Enums.UsefulNumberCategory;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    location?: Prisma.XOR<Prisma.locationNullableUpdateEnvelopeInput, Prisma.locationCreateInput> | null;
    geolocation?: Prisma.XOR<Prisma.geolocationNullableUpdateEnvelopeInput, Prisma.geolocationCreateInput> | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type locationObjectEqualityInput = {
    latitude: number;
    longitude: number;
};
export type geolocationObjectEqualityInput = {
    type: string;
    coordinates?: number[];
};
export type UsefullNumberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsefullNumberAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type UsefullNumberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsefullNumberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsefullNumberSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type locationCreateInput = {
    latitude: number;
    longitude: number;
};
export type geolocationCreateInput = {
    type: string;
    coordinates?: Prisma.geolocationCreatecoordinatesInput | number[];
};
export type EnumUsefulNumberCategoryFieldUpdateOperationsInput = {
    set?: $Enums.UsefulNumberCategory;
};
export type UsefullNumberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    phone?: boolean;
    category?: boolean;
    icon?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    location?: boolean | Prisma.locationDefaultArgs<ExtArgs>;
    geolocation?: boolean | Prisma.geolocationDefaultArgs<ExtArgs>;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["usefullNumber"]>;
export type UsefullNumberSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    phone?: boolean;
    category?: boolean;
    icon?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UsefullNumberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "phone" | "category" | "icon" | "sortOrder" | "isActive" | "location" | "geolocation" | "createdAt" | "updatedAt", ExtArgs["result"]["usefullNumber"]>;
export type UsefullNumberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsefullNumberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UsefullNumber";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        phone: string;
        category: $Enums.UsefulNumberCategory;
        icon: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["usefullNumber"]>;
    composites: {
        location: Prisma.$locationPayload | null;
        geolocation: Prisma.$geolocationPayload | null;
    };
};
export type UsefullNumberGetPayload<S extends boolean | null | undefined | UsefullNumberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload, S>;
export type UsefullNumberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsefullNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsefullNumberCountAggregateInputType | true;
};
export interface UsefullNumberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UsefullNumber'];
        meta: {
            name: 'UsefullNumber';
        };
    };
    findUnique<T extends UsefullNumberFindUniqueArgs>(args: Prisma.SelectSubset<T, UsefullNumberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsefullNumberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsefullNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsefullNumberFindFirstArgs>(args?: Prisma.SelectSubset<T, UsefullNumberFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsefullNumberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsefullNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsefullNumberFindManyArgs>(args?: Prisma.SelectSubset<T, UsefullNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsefullNumberCreateArgs>(args: Prisma.SelectSubset<T, UsefullNumberCreateArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsefullNumberCreateManyArgs>(args?: Prisma.SelectSubset<T, UsefullNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UsefullNumberDeleteArgs>(args: Prisma.SelectSubset<T, UsefullNumberDeleteArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsefullNumberUpdateArgs>(args: Prisma.SelectSubset<T, UsefullNumberUpdateArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsefullNumberDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsefullNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsefullNumberUpdateManyArgs>(args: Prisma.SelectSubset<T, UsefullNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UsefullNumberUpsertArgs>(args: Prisma.SelectSubset<T, UsefullNumberUpsertArgs<ExtArgs>>): Prisma.Prisma__UsefullNumberClient<runtime.Types.Result.GetResult<Prisma.$UsefullNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.UsefullNumberFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.UsefullNumberAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends UsefullNumberCountArgs>(args?: Prisma.Subset<T, UsefullNumberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsefullNumberCountAggregateOutputType> : number>;
    aggregate<T extends UsefullNumberAggregateArgs>(args: Prisma.Subset<T, UsefullNumberAggregateArgs>): Prisma.PrismaPromise<GetUsefullNumberAggregateType<T>>;
    groupBy<T extends UsefullNumberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsefullNumberGroupByArgs['orderBy'];
    } : {
        orderBy?: UsefullNumberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsefullNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsefullNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsefullNumberFieldRefs;
}
export interface Prisma__UsefullNumberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsefullNumberFieldRefs {
    readonly id: Prisma.FieldRef<"UsefullNumber", 'String'>;
    readonly title: Prisma.FieldRef<"UsefullNumber", 'String'>;
    readonly description: Prisma.FieldRef<"UsefullNumber", 'String'>;
    readonly phone: Prisma.FieldRef<"UsefullNumber", 'String'>;
    readonly category: Prisma.FieldRef<"UsefullNumber", 'UsefulNumberCategory'>;
    readonly icon: Prisma.FieldRef<"UsefullNumber", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"UsefullNumber", 'Int'>;
    readonly isActive: Prisma.FieldRef<"UsefullNumber", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"UsefullNumber", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UsefullNumber", 'DateTime'>;
}
export type UsefullNumberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where: Prisma.UsefullNumberWhereUniqueInput;
};
export type UsefullNumberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where: Prisma.UsefullNumberWhereUniqueInput;
};
export type UsefullNumberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where?: Prisma.UsefullNumberWhereInput;
    orderBy?: Prisma.UsefullNumberOrderByWithRelationInput | Prisma.UsefullNumberOrderByWithRelationInput[];
    cursor?: Prisma.UsefullNumberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsefullNumberScalarFieldEnum | Prisma.UsefullNumberScalarFieldEnum[];
};
export type UsefullNumberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where?: Prisma.UsefullNumberWhereInput;
    orderBy?: Prisma.UsefullNumberOrderByWithRelationInput | Prisma.UsefullNumberOrderByWithRelationInput[];
    cursor?: Prisma.UsefullNumberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsefullNumberScalarFieldEnum | Prisma.UsefullNumberScalarFieldEnum[];
};
export type UsefullNumberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where?: Prisma.UsefullNumberWhereInput;
    orderBy?: Prisma.UsefullNumberOrderByWithRelationInput | Prisma.UsefullNumberOrderByWithRelationInput[];
    cursor?: Prisma.UsefullNumberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsefullNumberScalarFieldEnum | Prisma.UsefullNumberScalarFieldEnum[];
};
export type UsefullNumberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsefullNumberCreateInput, Prisma.UsefullNumberUncheckedCreateInput>;
};
export type UsefullNumberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsefullNumberCreateManyInput | Prisma.UsefullNumberCreateManyInput[];
};
export type UsefullNumberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsefullNumberUpdateInput, Prisma.UsefullNumberUncheckedUpdateInput>;
    where: Prisma.UsefullNumberWhereUniqueInput;
};
export type UsefullNumberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsefullNumberUpdateManyMutationInput, Prisma.UsefullNumberUncheckedUpdateManyInput>;
    where?: Prisma.UsefullNumberWhereInput;
    limit?: number;
};
export type UsefullNumberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where: Prisma.UsefullNumberWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsefullNumberCreateInput, Prisma.UsefullNumberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsefullNumberUpdateInput, Prisma.UsefullNumberUncheckedUpdateInput>;
};
export type UsefullNumberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
    where: Prisma.UsefullNumberWhereUniqueInput;
};
export type UsefullNumberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsefullNumberWhereInput;
    limit?: number;
};
export type UsefullNumberFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type UsefullNumberAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type UsefullNumberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsefullNumberSelect<ExtArgs> | null;
    omit?: Prisma.UsefullNumberOmit<ExtArgs> | null;
    include?: Prisma.UsefullNumberInclude<ExtArgs> | null;
};
export {};
