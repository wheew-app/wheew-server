import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingSessionPayload>;
export type AggregateParkingSession = {
    _count: ParkingSessionCountAggregateOutputType | null;
    _avg: ParkingSessionAvgAggregateOutputType | null;
    _sum: ParkingSessionSumAggregateOutputType | null;
    _min: ParkingSessionMinAggregateOutputType | null;
    _max: ParkingSessionMaxAggregateOutputType | null;
};
export type ParkingSessionAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    durationMin: number | null;
};
export type ParkingSessionSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    durationMin: number | null;
};
export type ParkingSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    spotId: string | null;
    latitude: number | null;
    longitude: number | null;
    costType: $Enums.ParkingCost | null;
    durationMin: number | null;
    expiresAt: Date | null;
    expiryWarningSentAt: Date | null;
    status: $Enums.ParkingSessionStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    spotId: string | null;
    latitude: number | null;
    longitude: number | null;
    costType: $Enums.ParkingCost | null;
    durationMin: number | null;
    expiresAt: Date | null;
    expiryWarningSentAt: Date | null;
    status: $Enums.ParkingSessionStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    spotId: number;
    latitude: number;
    longitude: number;
    costType: number;
    durationMin: number;
    expiresAt: number;
    expiryWarningSentAt: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkingSessionAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    durationMin?: true;
};
export type ParkingSessionSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    durationMin?: true;
};
export type ParkingSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    costType?: true;
    durationMin?: true;
    expiresAt?: true;
    expiryWarningSentAt?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    costType?: true;
    durationMin?: true;
    expiresAt?: true;
    expiryWarningSentAt?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    costType?: true;
    durationMin?: true;
    expiresAt?: true;
    expiryWarningSentAt?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkingSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSessionWhereInput;
    orderBy?: Prisma.ParkingSessionOrderByWithRelationInput | Prisma.ParkingSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingSessionCountAggregateInputType;
    _avg?: ParkingSessionAvgAggregateInputType;
    _sum?: ParkingSessionSumAggregateInputType;
    _min?: ParkingSessionMinAggregateInputType;
    _max?: ParkingSessionMaxAggregateInputType;
};
export type GetParkingSessionAggregateType<T extends ParkingSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingSession[P]> : Prisma.GetScalarType<T[P], AggregateParkingSession[P]>;
};
export type ParkingSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSessionWhereInput;
    orderBy?: Prisma.ParkingSessionOrderByWithAggregationInput | Prisma.ParkingSessionOrderByWithAggregationInput[];
    by: Prisma.ParkingSessionScalarFieldEnum[] | Prisma.ParkingSessionScalarFieldEnum;
    having?: Prisma.ParkingSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingSessionCountAggregateInputType | true;
    _avg?: ParkingSessionAvgAggregateInputType;
    _sum?: ParkingSessionSumAggregateInputType;
    _min?: ParkingSessionMinAggregateInputType;
    _max?: ParkingSessionMaxAggregateInputType;
};
export type ParkingSessionGroupByOutputType = {
    id: string;
    userId: string;
    spotId: string | null;
    latitude: number;
    longitude: number;
    costType: $Enums.ParkingCost;
    durationMin: number | null;
    expiresAt: Date | null;
    expiryWarningSentAt: Date | null;
    status: $Enums.ParkingSessionStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkingSessionCountAggregateOutputType | null;
    _avg: ParkingSessionAvgAggregateOutputType | null;
    _sum: ParkingSessionSumAggregateOutputType | null;
    _min: ParkingSessionMinAggregateOutputType | null;
    _max: ParkingSessionMaxAggregateOutputType | null;
};
type GetParkingSessionGroupByPayload<T extends ParkingSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingSessionGroupByOutputType[P]>;
}>>;
export type ParkingSessionWhereInput = {
    AND?: Prisma.ParkingSessionWhereInput | Prisma.ParkingSessionWhereInput[];
    OR?: Prisma.ParkingSessionWhereInput[];
    NOT?: Prisma.ParkingSessionWhereInput | Prisma.ParkingSessionWhereInput[];
    id?: Prisma.StringFilter<"ParkingSession"> | string;
    userId?: Prisma.StringFilter<"ParkingSession"> | string;
    spotId?: Prisma.StringNullableFilter<"ParkingSession"> | string | null;
    latitude?: Prisma.FloatFilter<"ParkingSession"> | number;
    longitude?: Prisma.FloatFilter<"ParkingSession"> | number;
    costType?: Prisma.EnumParkingCostFilter<"ParkingSession"> | $Enums.ParkingCost;
    durationMin?: Prisma.IntNullableFilter<"ParkingSession"> | number | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"ParkingSession"> | Date | string | null;
    expiryWarningSentAt?: Prisma.DateTimeNullableFilter<"ParkingSession"> | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusFilter<"ParkingSession"> | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeFilter<"ParkingSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingSession"> | Date | string;
};
export type ParkingSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    expiryWarningSentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkingSessionWhereInput | Prisma.ParkingSessionWhereInput[];
    OR?: Prisma.ParkingSessionWhereInput[];
    NOT?: Prisma.ParkingSessionWhereInput | Prisma.ParkingSessionWhereInput[];
    userId?: Prisma.StringFilter<"ParkingSession"> | string;
    spotId?: Prisma.StringNullableFilter<"ParkingSession"> | string | null;
    latitude?: Prisma.FloatFilter<"ParkingSession"> | number;
    longitude?: Prisma.FloatFilter<"ParkingSession"> | number;
    costType?: Prisma.EnumParkingCostFilter<"ParkingSession"> | $Enums.ParkingCost;
    durationMin?: Prisma.IntNullableFilter<"ParkingSession"> | number | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"ParkingSession"> | Date | string | null;
    expiryWarningSentAt?: Prisma.DateTimeNullableFilter<"ParkingSession"> | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusFilter<"ParkingSession"> | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeFilter<"ParkingSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingSession"> | Date | string;
}, "id">;
export type ParkingSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    expiryWarningSentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingSessionCountOrderByAggregateInput;
    _avg?: Prisma.ParkingSessionAvgOrderByAggregateInput;
    _max?: Prisma.ParkingSessionMaxOrderByAggregateInput;
    _min?: Prisma.ParkingSessionMinOrderByAggregateInput;
    _sum?: Prisma.ParkingSessionSumOrderByAggregateInput;
};
export type ParkingSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingSessionScalarWhereWithAggregatesInput | Prisma.ParkingSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingSessionScalarWhereWithAggregatesInput | Prisma.ParkingSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingSession"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ParkingSession"> | string;
    spotId?: Prisma.StringNullableWithAggregatesFilter<"ParkingSession"> | string | null;
    latitude?: Prisma.FloatWithAggregatesFilter<"ParkingSession"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"ParkingSession"> | number;
    costType?: Prisma.EnumParkingCostWithAggregatesFilter<"ParkingSession"> | $Enums.ParkingCost;
    durationMin?: Prisma.IntNullableWithAggregatesFilter<"ParkingSession"> | number | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingSession"> | Date | string | null;
    expiryWarningSentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingSession"> | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusWithAggregatesFilter<"ParkingSession"> | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string;
};
export type ParkingSessionCreateInput = {
    id?: string;
    userId: string;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    costType: $Enums.ParkingCost;
    durationMin?: number | null;
    expiresAt?: Date | string | null;
    expiryWarningSentAt?: Date | string | null;
    status?: $Enums.ParkingSessionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    costType: $Enums.ParkingCost;
    durationMin?: number | null;
    expiresAt?: Date | string | null;
    expiryWarningSentAt?: Date | string | null;
    status?: $Enums.ParkingSessionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingSessionUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    durationMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryWarningSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusFieldUpdateOperationsInput | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSessionUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    durationMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryWarningSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusFieldUpdateOperationsInput | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSessionCreateManyInput = {
    id?: string;
    userId: string;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    costType: $Enums.ParkingCost;
    durationMin?: number | null;
    expiresAt?: Date | string | null;
    expiryWarningSentAt?: Date | string | null;
    status?: $Enums.ParkingSessionStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingSessionUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    durationMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryWarningSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusFieldUpdateOperationsInput | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSessionUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    durationMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryWarningSentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumParkingSessionStatusFieldUpdateOperationsInput | $Enums.ParkingSessionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    expiryWarningSentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSessionAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
};
export type ParkingSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    expiryWarningSentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    expiryWarningSentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingSessionSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    durationMin?: Prisma.SortOrder;
};
export type EnumParkingSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParkingSessionStatus;
};
export type ParkingSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    spotId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    costType?: boolean;
    durationMin?: boolean;
    expiresAt?: boolean;
    expiryWarningSentAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["parkingSession"]>;
export type ParkingSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    spotId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    costType?: boolean;
    durationMin?: boolean;
    expiresAt?: boolean;
    expiryWarningSentAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkingSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "spotId" | "latitude" | "longitude" | "costType" | "durationMin" | "expiresAt" | "expiryWarningSentAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingSession"]>;
export type $ParkingSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingSession";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        spotId: string | null;
        latitude: number;
        longitude: number;
        costType: $Enums.ParkingCost;
        durationMin: number | null;
        expiresAt: Date | null;
        expiryWarningSentAt: Date | null;
        status: $Enums.ParkingSessionStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parkingSession"]>;
    composites: {};
};
export type ParkingSessionGetPayload<S extends boolean | null | undefined | ParkingSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload, S>;
export type ParkingSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingSessionCountAggregateInputType | true;
};
export interface ParkingSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingSession'];
        meta: {
            name: 'ParkingSession';
        };
    };
    findUnique<T extends ParkingSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingSessionFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingSessionCreateArgs>(args: Prisma.SelectSubset<T, ParkingSessionCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingSessionDeleteArgs>(args: Prisma.SelectSubset<T, ParkingSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingSessionUpdateArgs>(args: Prisma.SelectSubset<T, ParkingSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingSessionUpsertArgs>(args: Prisma.SelectSubset<T, ParkingSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingSessionClient<runtime.Types.Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingSessionFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingSessionAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingSessionCountArgs>(args?: Prisma.Subset<T, ParkingSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingSessionCountAggregateOutputType> : number>;
    aggregate<T extends ParkingSessionAggregateArgs>(args: Prisma.Subset<T, ParkingSessionAggregateArgs>): Prisma.PrismaPromise<GetParkingSessionAggregateType<T>>;
    groupBy<T extends ParkingSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingSessionFieldRefs;
}
export interface Prisma__ParkingSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingSessionFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingSession", 'String'>;
    readonly userId: Prisma.FieldRef<"ParkingSession", 'String'>;
    readonly spotId: Prisma.FieldRef<"ParkingSession", 'String'>;
    readonly latitude: Prisma.FieldRef<"ParkingSession", 'Float'>;
    readonly longitude: Prisma.FieldRef<"ParkingSession", 'Float'>;
    readonly costType: Prisma.FieldRef<"ParkingSession", 'ParkingCost'>;
    readonly durationMin: Prisma.FieldRef<"ParkingSession", 'Int'>;
    readonly expiresAt: Prisma.FieldRef<"ParkingSession", 'DateTime'>;
    readonly expiryWarningSentAt: Prisma.FieldRef<"ParkingSession", 'DateTime'>;
    readonly status: Prisma.FieldRef<"ParkingSession", 'ParkingSessionStatus'>;
    readonly createdAt: Prisma.FieldRef<"ParkingSession", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingSession", 'DateTime'>;
}
export type ParkingSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSessionWhereUniqueInput;
};
export type ParkingSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSessionWhereUniqueInput;
};
export type ParkingSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where?: Prisma.ParkingSessionWhereInput;
    orderBy?: Prisma.ParkingSessionOrderByWithRelationInput | Prisma.ParkingSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSessionScalarFieldEnum | Prisma.ParkingSessionScalarFieldEnum[];
};
export type ParkingSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where?: Prisma.ParkingSessionWhereInput;
    orderBy?: Prisma.ParkingSessionOrderByWithRelationInput | Prisma.ParkingSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSessionScalarFieldEnum | Prisma.ParkingSessionScalarFieldEnum[];
};
export type ParkingSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where?: Prisma.ParkingSessionWhereInput;
    orderBy?: Prisma.ParkingSessionOrderByWithRelationInput | Prisma.ParkingSessionOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSessionScalarFieldEnum | Prisma.ParkingSessionScalarFieldEnum[];
};
export type ParkingSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingSessionCreateInput, Prisma.ParkingSessionUncheckedCreateInput>;
};
export type ParkingSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingSessionCreateManyInput | Prisma.ParkingSessionCreateManyInput[];
};
export type ParkingSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingSessionUpdateInput, Prisma.ParkingSessionUncheckedUpdateInput>;
    where: Prisma.ParkingSessionWhereUniqueInput;
};
export type ParkingSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingSessionUpdateManyMutationInput, Prisma.ParkingSessionUncheckedUpdateManyInput>;
    where?: Prisma.ParkingSessionWhereInput;
    limit?: number;
};
export type ParkingSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingSessionCreateInput, Prisma.ParkingSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingSessionUpdateInput, Prisma.ParkingSessionUncheckedUpdateInput>;
};
export type ParkingSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
    where: Prisma.ParkingSessionWhereUniqueInput;
};
export type ParkingSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSessionWhereInput;
    limit?: number;
};
export type ParkingSessionFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingSessionAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSessionSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSessionOmit<ExtArgs> | null;
};
export {};
