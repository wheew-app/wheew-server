import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingSpotModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingSpotPayload>;
export type AggregateParkingSpot = {
    _count: ParkingSpotCountAggregateOutputType | null;
    _avg: ParkingSpotAvgAggregateOutputType | null;
    _sum: ParkingSpotSumAggregateOutputType | null;
    _min: ParkingSpotMinAggregateOutputType | null;
    _max: ParkingSpotMaxAggregateOutputType | null;
};
export type ParkingSpotAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type ParkingSpotSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type ParkingSpotMinAggregateOutputType = {
    id: string | null;
    latitude: number | null;
    longitude: number | null;
    parking_cost: $Enums.ParkingCost | null;
    electric_charging: boolean | null;
    disabled_facility: boolean | null;
    disabled_facility_location: $Enums.DisabledFacilityLocation | null;
    is_active: boolean | null;
    available: boolean | null;
    createdAt: Date | null;
};
export type ParkingSpotMaxAggregateOutputType = {
    id: string | null;
    latitude: number | null;
    longitude: number | null;
    parking_cost: $Enums.ParkingCost | null;
    electric_charging: boolean | null;
    disabled_facility: boolean | null;
    disabled_facility_location: $Enums.DisabledFacilityLocation | null;
    is_active: boolean | null;
    available: boolean | null;
    createdAt: Date | null;
};
export type ParkingSpotCountAggregateOutputType = {
    id: number;
    latitude: number;
    longitude: number;
    parking_cost: number;
    electric_charging: number;
    disabled_facility: number;
    disabled_facility_location: number;
    is_active: number;
    available: number;
    createdAt: number;
    _all: number;
};
export type ParkingSpotAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type ParkingSpotSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type ParkingSpotMinAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    parking_cost?: true;
    electric_charging?: true;
    disabled_facility?: true;
    disabled_facility_location?: true;
    is_active?: true;
    available?: true;
    createdAt?: true;
};
export type ParkingSpotMaxAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    parking_cost?: true;
    electric_charging?: true;
    disabled_facility?: true;
    disabled_facility_location?: true;
    is_active?: true;
    available?: true;
    createdAt?: true;
};
export type ParkingSpotCountAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    parking_cost?: true;
    electric_charging?: true;
    disabled_facility?: true;
    disabled_facility_location?: true;
    is_active?: true;
    available?: true;
    createdAt?: true;
    _all?: true;
};
export type ParkingSpotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSpotWhereInput;
    orderBy?: Prisma.ParkingSpotOrderByWithRelationInput | Prisma.ParkingSpotOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSpotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingSpotCountAggregateInputType;
    _avg?: ParkingSpotAvgAggregateInputType;
    _sum?: ParkingSpotSumAggregateInputType;
    _min?: ParkingSpotMinAggregateInputType;
    _max?: ParkingSpotMaxAggregateInputType;
};
export type GetParkingSpotAggregateType<T extends ParkingSpotAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingSpot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingSpot[P]> : Prisma.GetScalarType<T[P], AggregateParkingSpot[P]>;
};
export type ParkingSpotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSpotWhereInput;
    orderBy?: Prisma.ParkingSpotOrderByWithAggregationInput | Prisma.ParkingSpotOrderByWithAggregationInput[];
    by: Prisma.ParkingSpotScalarFieldEnum[] | Prisma.ParkingSpotScalarFieldEnum;
    having?: Prisma.ParkingSpotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingSpotCountAggregateInputType | true;
    _avg?: ParkingSpotAvgAggregateInputType;
    _sum?: ParkingSpotSumAggregateInputType;
    _min?: ParkingSpotMinAggregateInputType;
    _max?: ParkingSpotMaxAggregateInputType;
};
export type ParkingSpotGroupByOutputType = {
    id: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location: $Enums.DisabledFacilityLocation | null;
    is_active: boolean;
    available: boolean;
    createdAt: Date;
    _count: ParkingSpotCountAggregateOutputType | null;
    _avg: ParkingSpotAvgAggregateOutputType | null;
    _sum: ParkingSpotSumAggregateOutputType | null;
    _min: ParkingSpotMinAggregateOutputType | null;
    _max: ParkingSpotMaxAggregateOutputType | null;
};
type GetParkingSpotGroupByPayload<T extends ParkingSpotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingSpotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingSpotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingSpotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>;
}>>;
export type ParkingSpotWhereInput = {
    AND?: Prisma.ParkingSpotWhereInput | Prisma.ParkingSpotWhereInput[];
    OR?: Prisma.ParkingSpotWhereInput[];
    NOT?: Prisma.ParkingSpotWhereInput | Prisma.ParkingSpotWhereInput[];
    id?: Prisma.StringFilter<"ParkingSpot"> | string;
    latitude?: Prisma.FloatFilter<"ParkingSpot"> | number;
    longitude?: Prisma.FloatFilter<"ParkingSpot"> | number;
    parking_cost?: Prisma.EnumParkingCostFilter<"ParkingSpot"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    disabled_facility?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingSpot"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    available?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ParkingSpot"> | Date | string;
    reports?: Prisma.ParkingReportListRelationFilter;
};
export type ParkingSpotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    available?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reports?: Prisma.ParkingReportOrderByRelationAggregateInput;
};
export type ParkingSpotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkingSpotWhereInput | Prisma.ParkingSpotWhereInput[];
    OR?: Prisma.ParkingSpotWhereInput[];
    NOT?: Prisma.ParkingSpotWhereInput | Prisma.ParkingSpotWhereInput[];
    latitude?: Prisma.FloatFilter<"ParkingSpot"> | number;
    longitude?: Prisma.FloatFilter<"ParkingSpot"> | number;
    parking_cost?: Prisma.EnumParkingCostFilter<"ParkingSpot"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    disabled_facility?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingSpot"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    available?: Prisma.BoolFilter<"ParkingSpot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ParkingSpot"> | Date | string;
    reports?: Prisma.ParkingReportListRelationFilter;
}, "id">;
export type ParkingSpotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    available?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingSpotCountOrderByAggregateInput;
    _avg?: Prisma.ParkingSpotAvgOrderByAggregateInput;
    _max?: Prisma.ParkingSpotMaxOrderByAggregateInput;
    _min?: Prisma.ParkingSpotMinOrderByAggregateInput;
    _sum?: Prisma.ParkingSpotSumOrderByAggregateInput;
};
export type ParkingSpotScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingSpotScalarWhereWithAggregatesInput | Prisma.ParkingSpotScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingSpotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingSpotScalarWhereWithAggregatesInput | Prisma.ParkingSpotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingSpot"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"ParkingSpot"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"ParkingSpot"> | number;
    parking_cost?: Prisma.EnumParkingCostWithAggregatesFilter<"ParkingSpot"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolWithAggregatesFilter<"ParkingSpot"> | boolean;
    disabled_facility?: Prisma.BoolWithAggregatesFilter<"ParkingSpot"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableWithAggregatesFilter<"ParkingSpot"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"ParkingSpot"> | boolean;
    available?: Prisma.BoolWithAggregatesFilter<"ParkingSpot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingSpot"> | Date | string;
};
export type ParkingSpotCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    available?: boolean;
    createdAt?: Date | string;
    reports?: Prisma.ParkingReportCreateNestedManyWithoutSpotInput;
};
export type ParkingSpotUncheckedCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    available?: boolean;
    createdAt?: Date | string;
    reports?: Prisma.ParkingReportUncheckedCreateNestedManyWithoutSpotInput;
};
export type ParkingSpotUpdateInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reports?: Prisma.ParkingReportUpdateManyWithoutSpotNestedInput;
};
export type ParkingSpotUncheckedUpdateInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reports?: Prisma.ParkingReportUncheckedUpdateManyWithoutSpotNestedInput;
};
export type ParkingSpotCreateManyInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    available?: boolean;
    createdAt?: Date | string;
};
export type ParkingSpotUpdateManyMutationInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSpotUncheckedUpdateManyInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSpotNullableScalarRelationFilter = {
    is?: Prisma.ParkingSpotWhereInput | null;
    isNot?: Prisma.ParkingSpotWhereInput | null;
};
export type ParkingSpotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    available?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ParkingSpotAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type ParkingSpotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    available?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ParkingSpotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    available?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ParkingSpotSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type ParkingSpotCreateNestedOneWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.ParkingSpotCreateWithoutReportsInput, Prisma.ParkingSpotUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ParkingSpotCreateOrConnectWithoutReportsInput;
    connect?: Prisma.ParkingSpotWhereUniqueInput;
};
export type ParkingSpotUpdateOneWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingSpotCreateWithoutReportsInput, Prisma.ParkingSpotUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.ParkingSpotCreateOrConnectWithoutReportsInput;
    upsert?: Prisma.ParkingSpotUpsertWithoutReportsInput;
    disconnect?: boolean;
    delete?: Prisma.ParkingSpotWhereInput | boolean;
    connect?: Prisma.ParkingSpotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkingSpotUpdateToOneWithWhereWithoutReportsInput, Prisma.ParkingSpotUpdateWithoutReportsInput>, Prisma.ParkingSpotUncheckedUpdateWithoutReportsInput>;
};
export type ParkingSpotCreateWithoutReportsInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    available?: boolean;
    createdAt?: Date | string;
};
export type ParkingSpotUncheckedCreateWithoutReportsInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    available?: boolean;
    createdAt?: Date | string;
};
export type ParkingSpotCreateOrConnectWithoutReportsInput = {
    where: Prisma.ParkingSpotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingSpotCreateWithoutReportsInput, Prisma.ParkingSpotUncheckedCreateWithoutReportsInput>;
};
export type ParkingSpotUpsertWithoutReportsInput = {
    update: Prisma.XOR<Prisma.ParkingSpotUpdateWithoutReportsInput, Prisma.ParkingSpotUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.ParkingSpotCreateWithoutReportsInput, Prisma.ParkingSpotUncheckedCreateWithoutReportsInput>;
    where?: Prisma.ParkingSpotWhereInput;
};
export type ParkingSpotUpdateToOneWithWhereWithoutReportsInput = {
    where?: Prisma.ParkingSpotWhereInput;
    data: Prisma.XOR<Prisma.ParkingSpotUpdateWithoutReportsInput, Prisma.ParkingSpotUncheckedUpdateWithoutReportsInput>;
};
export type ParkingSpotUpdateWithoutReportsInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSpotUncheckedUpdateWithoutReportsInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingSpotCountOutputType = {
    reports: number;
};
export type ParkingSpotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reports?: boolean | ParkingSpotCountOutputTypeCountReportsArgs;
};
export type ParkingSpotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotCountOutputTypeSelect<ExtArgs> | null;
};
export type ParkingSpotCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingReportWhereInput;
};
export type ParkingSpotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    parking_cost?: boolean;
    electric_charging?: boolean;
    disabled_facility?: boolean;
    disabled_facility_location?: boolean;
    is_active?: boolean;
    available?: boolean;
    createdAt?: boolean;
    reports?: boolean | Prisma.ParkingSpot$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingSpot"]>;
export type ParkingSpotSelectScalar = {
    id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    parking_cost?: boolean;
    electric_charging?: boolean;
    disabled_facility?: boolean;
    disabled_facility_location?: boolean;
    is_active?: boolean;
    available?: boolean;
    createdAt?: boolean;
};
export type ParkingSpotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "latitude" | "longitude" | "parking_cost" | "electric_charging" | "disabled_facility" | "disabled_facility_location" | "is_active" | "available" | "createdAt", ExtArgs["result"]["parkingSpot"]>;
export type ParkingSpotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reports?: boolean | Prisma.ParkingSpot$reportsArgs<ExtArgs>;
    _count?: boolean | Prisma.ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ParkingSpotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingSpot";
    objects: {
        reports: Prisma.$ParkingReportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        latitude: number;
        longitude: number;
        parking_cost: $Enums.ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: $Enums.DisabledFacilityLocation | null;
        is_active: boolean;
        available: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["parkingSpot"]>;
    composites: {};
};
export type ParkingSpotGetPayload<S extends boolean | null | undefined | ParkingSpotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload, S>;
export type ParkingSpotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingSpotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingSpotCountAggregateInputType | true;
};
export interface ParkingSpotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingSpot'];
        meta: {
            name: 'ParkingSpot';
        };
    };
    findUnique<T extends ParkingSpotFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingSpotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingSpotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingSpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingSpotFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingSpotFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingSpotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingSpotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingSpotFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingSpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingSpotCreateArgs>(args: Prisma.SelectSubset<T, ParkingSpotCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingSpotCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingSpotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingSpotDeleteArgs>(args: Prisma.SelectSubset<T, ParkingSpotDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingSpotUpdateArgs>(args: Prisma.SelectSubset<T, ParkingSpotUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingSpotDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingSpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingSpotUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingSpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingSpotUpsertArgs>(args: Prisma.SelectSubset<T, ParkingSpotUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingSpotFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingSpotAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingSpotCountArgs>(args?: Prisma.Subset<T, ParkingSpotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingSpotCountAggregateOutputType> : number>;
    aggregate<T extends ParkingSpotAggregateArgs>(args: Prisma.Subset<T, ParkingSpotAggregateArgs>): Prisma.PrismaPromise<GetParkingSpotAggregateType<T>>;
    groupBy<T extends ParkingSpotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingSpotGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingSpotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingSpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingSpotFieldRefs;
}
export interface Prisma__ParkingSpotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reports<T extends Prisma.ParkingSpot$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkingSpot$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingSpotFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingSpot", 'String'>;
    readonly latitude: Prisma.FieldRef<"ParkingSpot", 'Float'>;
    readonly longitude: Prisma.FieldRef<"ParkingSpot", 'Float'>;
    readonly parking_cost: Prisma.FieldRef<"ParkingSpot", 'ParkingCost'>;
    readonly electric_charging: Prisma.FieldRef<"ParkingSpot", 'Boolean'>;
    readonly disabled_facility: Prisma.FieldRef<"ParkingSpot", 'Boolean'>;
    readonly disabled_facility_location: Prisma.FieldRef<"ParkingSpot", 'DisabledFacilityLocation'>;
    readonly is_active: Prisma.FieldRef<"ParkingSpot", 'Boolean'>;
    readonly available: Prisma.FieldRef<"ParkingSpot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ParkingSpot", 'DateTime'>;
}
export type ParkingSpotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where: Prisma.ParkingSpotWhereUniqueInput;
};
export type ParkingSpotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where: Prisma.ParkingSpotWhereUniqueInput;
};
export type ParkingSpotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where?: Prisma.ParkingSpotWhereInput;
    orderBy?: Prisma.ParkingSpotOrderByWithRelationInput | Prisma.ParkingSpotOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSpotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSpotScalarFieldEnum | Prisma.ParkingSpotScalarFieldEnum[];
};
export type ParkingSpotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where?: Prisma.ParkingSpotWhereInput;
    orderBy?: Prisma.ParkingSpotOrderByWithRelationInput | Prisma.ParkingSpotOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSpotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSpotScalarFieldEnum | Prisma.ParkingSpotScalarFieldEnum[];
};
export type ParkingSpotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where?: Prisma.ParkingSpotWhereInput;
    orderBy?: Prisma.ParkingSpotOrderByWithRelationInput | Prisma.ParkingSpotOrderByWithRelationInput[];
    cursor?: Prisma.ParkingSpotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingSpotScalarFieldEnum | Prisma.ParkingSpotScalarFieldEnum[];
};
export type ParkingSpotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingSpotCreateInput, Prisma.ParkingSpotUncheckedCreateInput>;
};
export type ParkingSpotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingSpotCreateManyInput | Prisma.ParkingSpotCreateManyInput[];
};
export type ParkingSpotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingSpotUpdateInput, Prisma.ParkingSpotUncheckedUpdateInput>;
    where: Prisma.ParkingSpotWhereUniqueInput;
};
export type ParkingSpotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingSpotUpdateManyMutationInput, Prisma.ParkingSpotUncheckedUpdateManyInput>;
    where?: Prisma.ParkingSpotWhereInput;
    limit?: number;
};
export type ParkingSpotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where: Prisma.ParkingSpotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingSpotCreateInput, Prisma.ParkingSpotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingSpotUpdateInput, Prisma.ParkingSpotUncheckedUpdateInput>;
};
export type ParkingSpotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where: Prisma.ParkingSpotWhereUniqueInput;
};
export type ParkingSpotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingSpotWhereInput;
    limit?: number;
};
export type ParkingSpotFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingSpotAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingSpot$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    where?: Prisma.ParkingReportWhereInput;
    orderBy?: Prisma.ParkingReportOrderByWithRelationInput | Prisma.ParkingReportOrderByWithRelationInput[];
    cursor?: Prisma.ParkingReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingReportScalarFieldEnum | Prisma.ParkingReportScalarFieldEnum[];
};
export type ParkingSpotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
};
export {};
