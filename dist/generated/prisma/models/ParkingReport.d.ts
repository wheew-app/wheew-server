import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingReportModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingReportPayload>;
export type AggregateParkingReport = {
    _count: ParkingReportCountAggregateOutputType | null;
    _avg: ParkingReportAvgAggregateOutputType | null;
    _sum: ParkingReportSumAggregateOutputType | null;
    _min: ParkingReportMinAggregateOutputType | null;
    _max: ParkingReportMaxAggregateOutputType | null;
};
export type ParkingReportAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type ParkingReportSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type ParkingReportMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    latitude: number | null;
    longitude: number | null;
    parking_cost: $Enums.ParkingCost | null;
    electric_charging: boolean | null;
    disabled_facility: boolean | null;
    disabled_facility_location: $Enums.DisabledFacilityLocation | null;
    is_active: boolean | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    spotId: string | null;
    updatedAt: Date | null;
};
export type ParkingReportMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    latitude: number | null;
    longitude: number | null;
    parking_cost: $Enums.ParkingCost | null;
    electric_charging: boolean | null;
    disabled_facility: boolean | null;
    disabled_facility_location: $Enums.DisabledFacilityLocation | null;
    is_active: boolean | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    spotId: string | null;
    updatedAt: Date | null;
};
export type ParkingReportCountAggregateOutputType = {
    id: number;
    user_id: number;
    latitude: number;
    longitude: number;
    parking_cost: number;
    electric_charging: number;
    disabled_facility: number;
    disabled_facility_location: number;
    is_active: number;
    createdAt: number;
    expiresAt: number;
    spotId: number;
    updatedAt: number;
    _all: number;
};
export type ParkingReportAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type ParkingReportSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type ParkingReportMinAggregateInputType = {
    id?: true;
    user_id?: true;
    latitude?: true;
    longitude?: true;
    parking_cost?: true;
    electric_charging?: true;
    disabled_facility?: true;
    disabled_facility_location?: true;
    is_active?: true;
    createdAt?: true;
    expiresAt?: true;
    spotId?: true;
    updatedAt?: true;
};
export type ParkingReportMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    latitude?: true;
    longitude?: true;
    parking_cost?: true;
    electric_charging?: true;
    disabled_facility?: true;
    disabled_facility_location?: true;
    is_active?: true;
    createdAt?: true;
    expiresAt?: true;
    spotId?: true;
    updatedAt?: true;
};
export type ParkingReportCountAggregateInputType = {
    id?: true;
    user_id?: true;
    latitude?: true;
    longitude?: true;
    parking_cost?: true;
    electric_charging?: true;
    disabled_facility?: true;
    disabled_facility_location?: true;
    is_active?: true;
    createdAt?: true;
    expiresAt?: true;
    spotId?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkingReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingReportWhereInput;
    orderBy?: Prisma.ParkingReportOrderByWithRelationInput | Prisma.ParkingReportOrderByWithRelationInput[];
    cursor?: Prisma.ParkingReportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingReportCountAggregateInputType;
    _avg?: ParkingReportAvgAggregateInputType;
    _sum?: ParkingReportSumAggregateInputType;
    _min?: ParkingReportMinAggregateInputType;
    _max?: ParkingReportMaxAggregateInputType;
};
export type GetParkingReportAggregateType<T extends ParkingReportAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingReport[P]> : Prisma.GetScalarType<T[P], AggregateParkingReport[P]>;
};
export type ParkingReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingReportWhereInput;
    orderBy?: Prisma.ParkingReportOrderByWithAggregationInput | Prisma.ParkingReportOrderByWithAggregationInput[];
    by: Prisma.ParkingReportScalarFieldEnum[] | Prisma.ParkingReportScalarFieldEnum;
    having?: Prisma.ParkingReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingReportCountAggregateInputType | true;
    _avg?: ParkingReportAvgAggregateInputType;
    _sum?: ParkingReportSumAggregateInputType;
    _min?: ParkingReportMinAggregateInputType;
    _max?: ParkingReportMaxAggregateInputType;
};
export type ParkingReportGroupByOutputType = {
    id: string;
    user_id: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location: $Enums.DisabledFacilityLocation | null;
    is_active: boolean;
    createdAt: Date;
    expiresAt: Date | null;
    spotId: string | null;
    updatedAt: Date;
    _count: ParkingReportCountAggregateOutputType | null;
    _avg: ParkingReportAvgAggregateOutputType | null;
    _sum: ParkingReportSumAggregateOutputType | null;
    _min: ParkingReportMinAggregateOutputType | null;
    _max: ParkingReportMaxAggregateOutputType | null;
};
type GetParkingReportGroupByPayload<T extends ParkingReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingReportGroupByOutputType[P]>;
}>>;
export type ParkingReportWhereInput = {
    AND?: Prisma.ParkingReportWhereInput | Prisma.ParkingReportWhereInput[];
    OR?: Prisma.ParkingReportWhereInput[];
    NOT?: Prisma.ParkingReportWhereInput | Prisma.ParkingReportWhereInput[];
    id?: Prisma.StringFilter<"ParkingReport"> | string;
    user_id?: Prisma.StringFilter<"ParkingReport"> | string;
    latitude?: Prisma.FloatFilter<"ParkingReport"> | number;
    longitude?: Prisma.FloatFilter<"ParkingReport"> | number;
    parking_cost?: Prisma.EnumParkingCostFilter<"ParkingReport"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    disabled_facility?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingReport"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ParkingReport"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ParkingReport"> | Date | string | null;
    spotId?: Prisma.StringNullableFilter<"ParkingReport"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ParkingReport"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    spot?: Prisma.XOR<Prisma.ParkingSpotNullableScalarRelationFilter, Prisma.ParkingSpotWhereInput> | null;
};
export type ParkingReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    spot?: Prisma.ParkingSpotOrderByWithRelationInput;
};
export type ParkingReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkingReportWhereInput | Prisma.ParkingReportWhereInput[];
    OR?: Prisma.ParkingReportWhereInput[];
    NOT?: Prisma.ParkingReportWhereInput | Prisma.ParkingReportWhereInput[];
    user_id?: Prisma.StringFilter<"ParkingReport"> | string;
    latitude?: Prisma.FloatFilter<"ParkingReport"> | number;
    longitude?: Prisma.FloatFilter<"ParkingReport"> | number;
    parking_cost?: Prisma.EnumParkingCostFilter<"ParkingReport"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    disabled_facility?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingReport"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ParkingReport"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ParkingReport"> | Date | string | null;
    spotId?: Prisma.StringNullableFilter<"ParkingReport"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ParkingReport"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    spot?: Prisma.XOR<Prisma.ParkingSpotNullableScalarRelationFilter, Prisma.ParkingSpotWhereInput> | null;
}, "id">;
export type ParkingReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingReportCountOrderByAggregateInput;
    _avg?: Prisma.ParkingReportAvgOrderByAggregateInput;
    _max?: Prisma.ParkingReportMaxOrderByAggregateInput;
    _min?: Prisma.ParkingReportMinOrderByAggregateInput;
    _sum?: Prisma.ParkingReportSumOrderByAggregateInput;
};
export type ParkingReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingReportScalarWhereWithAggregatesInput | Prisma.ParkingReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingReportScalarWhereWithAggregatesInput | Prisma.ParkingReportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingReport"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"ParkingReport"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"ParkingReport"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"ParkingReport"> | number;
    parking_cost?: Prisma.EnumParkingCostWithAggregatesFilter<"ParkingReport"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolWithAggregatesFilter<"ParkingReport"> | boolean;
    disabled_facility?: Prisma.BoolWithAggregatesFilter<"ParkingReport"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableWithAggregatesFilter<"ParkingReport"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"ParkingReport"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingReport"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingReport"> | Date | string | null;
    spotId?: Prisma.StringNullableWithAggregatesFilter<"ParkingReport"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingReport"> | Date | string;
};
export type ParkingReportCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutParkingReportsInput;
    spot?: Prisma.ParkingSpotCreateNestedOneWithoutReportsInput;
};
export type ParkingReportUncheckedCreateInput = {
    id?: string;
    user_id: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    spotId?: string | null;
    updatedAt?: Date | string;
};
export type ParkingReportUpdateInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutParkingReportsNestedInput;
    spot?: Prisma.ParkingSpotUpdateOneWithoutReportsNestedInput;
};
export type ParkingReportUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportCreateManyInput = {
    id?: string;
    user_id: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    spotId?: string | null;
    updatedAt?: Date | string;
};
export type ParkingReportUpdateManyMutationInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportListRelationFilter = {
    every?: Prisma.ParkingReportWhereInput;
    some?: Prisma.ParkingReportWhereInput;
    none?: Prisma.ParkingReportWhereInput;
};
export type ParkingReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParkingReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingReportAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type ParkingReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    parking_cost?: Prisma.SortOrder;
    electric_charging?: Prisma.SortOrder;
    disabled_facility?: Prisma.SortOrder;
    disabled_facility_location?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingReportSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type ParkingReportCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutUserInput, Prisma.ParkingReportUncheckedCreateWithoutUserInput> | Prisma.ParkingReportCreateWithoutUserInput[] | Prisma.ParkingReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutUserInput | Prisma.ParkingReportCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParkingReportCreateManyUserInputEnvelope;
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
};
export type ParkingReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutUserInput, Prisma.ParkingReportUncheckedCreateWithoutUserInput> | Prisma.ParkingReportCreateWithoutUserInput[] | Prisma.ParkingReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutUserInput | Prisma.ParkingReportCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParkingReportCreateManyUserInputEnvelope;
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
};
export type ParkingReportUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutUserInput, Prisma.ParkingReportUncheckedCreateWithoutUserInput> | Prisma.ParkingReportCreateWithoutUserInput[] | Prisma.ParkingReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutUserInput | Prisma.ParkingReportCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParkingReportUpsertWithWhereUniqueWithoutUserInput | Prisma.ParkingReportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParkingReportCreateManyUserInputEnvelope;
    set?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    disconnect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    delete?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    update?: Prisma.ParkingReportUpdateWithWhereUniqueWithoutUserInput | Prisma.ParkingReportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParkingReportUpdateManyWithWhereWithoutUserInput | Prisma.ParkingReportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParkingReportScalarWhereInput | Prisma.ParkingReportScalarWhereInput[];
};
export type ParkingReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutUserInput, Prisma.ParkingReportUncheckedCreateWithoutUserInput> | Prisma.ParkingReportCreateWithoutUserInput[] | Prisma.ParkingReportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutUserInput | Prisma.ParkingReportCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParkingReportUpsertWithWhereUniqueWithoutUserInput | Prisma.ParkingReportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParkingReportCreateManyUserInputEnvelope;
    set?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    disconnect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    delete?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    update?: Prisma.ParkingReportUpdateWithWhereUniqueWithoutUserInput | Prisma.ParkingReportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParkingReportUpdateManyWithWhereWithoutUserInput | Prisma.ParkingReportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParkingReportScalarWhereInput | Prisma.ParkingReportScalarWhereInput[];
};
export type EnumParkingCostFieldUpdateOperationsInput = {
    set?: $Enums.ParkingCost;
};
export type NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput = {
    set?: $Enums.DisabledFacilityLocation | null;
    unset?: boolean;
};
export type ParkingReportCreateNestedManyWithoutSpotInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutSpotInput, Prisma.ParkingReportUncheckedCreateWithoutSpotInput> | Prisma.ParkingReportCreateWithoutSpotInput[] | Prisma.ParkingReportUncheckedCreateWithoutSpotInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutSpotInput | Prisma.ParkingReportCreateOrConnectWithoutSpotInput[];
    createMany?: Prisma.ParkingReportCreateManySpotInputEnvelope;
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
};
export type ParkingReportUncheckedCreateNestedManyWithoutSpotInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutSpotInput, Prisma.ParkingReportUncheckedCreateWithoutSpotInput> | Prisma.ParkingReportCreateWithoutSpotInput[] | Prisma.ParkingReportUncheckedCreateWithoutSpotInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutSpotInput | Prisma.ParkingReportCreateOrConnectWithoutSpotInput[];
    createMany?: Prisma.ParkingReportCreateManySpotInputEnvelope;
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
};
export type ParkingReportUpdateManyWithoutSpotNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutSpotInput, Prisma.ParkingReportUncheckedCreateWithoutSpotInput> | Prisma.ParkingReportCreateWithoutSpotInput[] | Prisma.ParkingReportUncheckedCreateWithoutSpotInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutSpotInput | Prisma.ParkingReportCreateOrConnectWithoutSpotInput[];
    upsert?: Prisma.ParkingReportUpsertWithWhereUniqueWithoutSpotInput | Prisma.ParkingReportUpsertWithWhereUniqueWithoutSpotInput[];
    createMany?: Prisma.ParkingReportCreateManySpotInputEnvelope;
    set?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    disconnect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    delete?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    update?: Prisma.ParkingReportUpdateWithWhereUniqueWithoutSpotInput | Prisma.ParkingReportUpdateWithWhereUniqueWithoutSpotInput[];
    updateMany?: Prisma.ParkingReportUpdateManyWithWhereWithoutSpotInput | Prisma.ParkingReportUpdateManyWithWhereWithoutSpotInput[];
    deleteMany?: Prisma.ParkingReportScalarWhereInput | Prisma.ParkingReportScalarWhereInput[];
};
export type ParkingReportUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingReportCreateWithoutSpotInput, Prisma.ParkingReportUncheckedCreateWithoutSpotInput> | Prisma.ParkingReportCreateWithoutSpotInput[] | Prisma.ParkingReportUncheckedCreateWithoutSpotInput[];
    connectOrCreate?: Prisma.ParkingReportCreateOrConnectWithoutSpotInput | Prisma.ParkingReportCreateOrConnectWithoutSpotInput[];
    upsert?: Prisma.ParkingReportUpsertWithWhereUniqueWithoutSpotInput | Prisma.ParkingReportUpsertWithWhereUniqueWithoutSpotInput[];
    createMany?: Prisma.ParkingReportCreateManySpotInputEnvelope;
    set?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    disconnect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    delete?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    connect?: Prisma.ParkingReportWhereUniqueInput | Prisma.ParkingReportWhereUniqueInput[];
    update?: Prisma.ParkingReportUpdateWithWhereUniqueWithoutSpotInput | Prisma.ParkingReportUpdateWithWhereUniqueWithoutSpotInput[];
    updateMany?: Prisma.ParkingReportUpdateManyWithWhereWithoutSpotInput | Prisma.ParkingReportUpdateManyWithWhereWithoutSpotInput[];
    deleteMany?: Prisma.ParkingReportScalarWhereInput | Prisma.ParkingReportScalarWhereInput[];
};
export type ParkingReportCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    updatedAt?: Date | string;
    spot?: Prisma.ParkingSpotCreateNestedOneWithoutReportsInput;
};
export type ParkingReportUncheckedCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    spotId?: string | null;
    updatedAt?: Date | string;
};
export type ParkingReportCreateOrConnectWithoutUserInput = {
    where: Prisma.ParkingReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingReportCreateWithoutUserInput, Prisma.ParkingReportUncheckedCreateWithoutUserInput>;
};
export type ParkingReportCreateManyUserInputEnvelope = {
    data: Prisma.ParkingReportCreateManyUserInput | Prisma.ParkingReportCreateManyUserInput[];
};
export type ParkingReportUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParkingReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingReportUpdateWithoutUserInput, Prisma.ParkingReportUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParkingReportCreateWithoutUserInput, Prisma.ParkingReportUncheckedCreateWithoutUserInput>;
};
export type ParkingReportUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParkingReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingReportUpdateWithoutUserInput, Prisma.ParkingReportUncheckedUpdateWithoutUserInput>;
};
export type ParkingReportUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ParkingReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingReportUpdateManyMutationInput, Prisma.ParkingReportUncheckedUpdateManyWithoutUserInput>;
};
export type ParkingReportScalarWhereInput = {
    AND?: Prisma.ParkingReportScalarWhereInput | Prisma.ParkingReportScalarWhereInput[];
    OR?: Prisma.ParkingReportScalarWhereInput[];
    NOT?: Prisma.ParkingReportScalarWhereInput | Prisma.ParkingReportScalarWhereInput[];
    id?: Prisma.StringFilter<"ParkingReport"> | string;
    user_id?: Prisma.StringFilter<"ParkingReport"> | string;
    latitude?: Prisma.FloatFilter<"ParkingReport"> | number;
    longitude?: Prisma.FloatFilter<"ParkingReport"> | number;
    parking_cost?: Prisma.EnumParkingCostFilter<"ParkingReport"> | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    disabled_facility?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    disabled_facility_location?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingReport"> | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFilter<"ParkingReport"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ParkingReport"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ParkingReport"> | Date | string | null;
    spotId?: Prisma.StringNullableFilter<"ParkingReport"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ParkingReport"> | Date | string;
};
export type ParkingReportCreateWithoutSpotInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutParkingReportsInput;
};
export type ParkingReportUncheckedCreateWithoutSpotInput = {
    id?: string;
    user_id: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ParkingReportCreateOrConnectWithoutSpotInput = {
    where: Prisma.ParkingReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingReportCreateWithoutSpotInput, Prisma.ParkingReportUncheckedCreateWithoutSpotInput>;
};
export type ParkingReportCreateManySpotInputEnvelope = {
    data: Prisma.ParkingReportCreateManySpotInput | Prisma.ParkingReportCreateManySpotInput[];
};
export type ParkingReportUpsertWithWhereUniqueWithoutSpotInput = {
    where: Prisma.ParkingReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingReportUpdateWithoutSpotInput, Prisma.ParkingReportUncheckedUpdateWithoutSpotInput>;
    create: Prisma.XOR<Prisma.ParkingReportCreateWithoutSpotInput, Prisma.ParkingReportUncheckedCreateWithoutSpotInput>;
};
export type ParkingReportUpdateWithWhereUniqueWithoutSpotInput = {
    where: Prisma.ParkingReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingReportUpdateWithoutSpotInput, Prisma.ParkingReportUncheckedUpdateWithoutSpotInput>;
};
export type ParkingReportUpdateManyWithWhereWithoutSpotInput = {
    where: Prisma.ParkingReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingReportUpdateManyMutationInput, Prisma.ParkingReportUncheckedUpdateManyWithoutSpotInput>;
};
export type ParkingReportCreateManyUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    spotId?: string | null;
    updatedAt?: Date | string;
};
export type ParkingReportUpdateWithoutUserInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    spot?: Prisma.ParkingSpotUpdateOneWithoutReportsNestedInput;
};
export type ParkingReportUncheckedUpdateWithoutUserInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportUncheckedUpdateManyWithoutUserInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportCreateManySpotInput = {
    id?: string;
    user_id: string;
    latitude: number;
    longitude: number;
    parking_cost: $Enums.ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location?: $Enums.DisabledFacilityLocation | null;
    is_active?: boolean;
    createdAt?: Date | string;
    expiresAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ParkingReportUpdateWithoutSpotInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutParkingReportsNestedInput;
};
export type ParkingReportUncheckedUpdateWithoutSpotInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportUncheckedUpdateManyWithoutSpotInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    parking_cost?: Prisma.EnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost;
    electric_charging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disabled_facility_location?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    parking_cost?: boolean;
    electric_charging?: boolean;
    disabled_facility?: boolean;
    disabled_facility_location?: boolean;
    is_active?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    spotId?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    spot?: boolean | Prisma.ParkingReport$spotArgs<ExtArgs>;
}, ExtArgs["result"]["parkingReport"]>;
export type ParkingReportSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    parking_cost?: boolean;
    electric_charging?: boolean;
    disabled_facility?: boolean;
    disabled_facility_location?: boolean;
    is_active?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    spotId?: boolean;
    updatedAt?: boolean;
};
export type ParkingReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "latitude" | "longitude" | "parking_cost" | "electric_charging" | "disabled_facility" | "disabled_facility_location" | "is_active" | "createdAt" | "expiresAt" | "spotId" | "updatedAt", ExtArgs["result"]["parkingReport"]>;
export type ParkingReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    spot?: boolean | Prisma.ParkingReport$spotArgs<ExtArgs>;
};
export type $ParkingReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingReport";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        spot: Prisma.$ParkingSpotPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        latitude: number;
        longitude: number;
        parking_cost: $Enums.ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: $Enums.DisabledFacilityLocation | null;
        is_active: boolean;
        createdAt: Date;
        expiresAt: Date | null;
        spotId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["parkingReport"]>;
    composites: {};
};
export type ParkingReportGetPayload<S extends boolean | null | undefined | ParkingReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload, S>;
export type ParkingReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingReportCountAggregateInputType | true;
};
export interface ParkingReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingReport'];
        meta: {
            name: 'ParkingReport';
        };
    };
    findUnique<T extends ParkingReportFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingReportFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingReportFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingReportCreateArgs>(args: Prisma.SelectSubset<T, ParkingReportCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingReportCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingReportDeleteArgs>(args: Prisma.SelectSubset<T, ParkingReportDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingReportUpdateArgs>(args: Prisma.SelectSubset<T, ParkingReportUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingReportUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingReportUpsertArgs>(args: Prisma.SelectSubset<T, ParkingReportUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingReportClient<runtime.Types.Result.GetResult<Prisma.$ParkingReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingReportFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingReportAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingReportCountArgs>(args?: Prisma.Subset<T, ParkingReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingReportCountAggregateOutputType> : number>;
    aggregate<T extends ParkingReportAggregateArgs>(args: Prisma.Subset<T, ParkingReportAggregateArgs>): Prisma.PrismaPromise<GetParkingReportAggregateType<T>>;
    groupBy<T extends ParkingReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingReportGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingReportFieldRefs;
}
export interface Prisma__ParkingReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    spot<T extends Prisma.ParkingReport$spotArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkingReport$spotArgs<ExtArgs>>): Prisma.Prisma__ParkingSpotClient<runtime.Types.Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingReportFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingReport", 'String'>;
    readonly user_id: Prisma.FieldRef<"ParkingReport", 'String'>;
    readonly latitude: Prisma.FieldRef<"ParkingReport", 'Float'>;
    readonly longitude: Prisma.FieldRef<"ParkingReport", 'Float'>;
    readonly parking_cost: Prisma.FieldRef<"ParkingReport", 'ParkingCost'>;
    readonly electric_charging: Prisma.FieldRef<"ParkingReport", 'Boolean'>;
    readonly disabled_facility: Prisma.FieldRef<"ParkingReport", 'Boolean'>;
    readonly disabled_facility_location: Prisma.FieldRef<"ParkingReport", 'DisabledFacilityLocation'>;
    readonly is_active: Prisma.FieldRef<"ParkingReport", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ParkingReport", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"ParkingReport", 'DateTime'>;
    readonly spotId: Prisma.FieldRef<"ParkingReport", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingReport", 'DateTime'>;
}
export type ParkingReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    where: Prisma.ParkingReportWhereUniqueInput;
};
export type ParkingReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    where: Prisma.ParkingReportWhereUniqueInput;
};
export type ParkingReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingReportCreateInput, Prisma.ParkingReportUncheckedCreateInput>;
};
export type ParkingReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingReportCreateManyInput | Prisma.ParkingReportCreateManyInput[];
};
export type ParkingReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingReportUpdateInput, Prisma.ParkingReportUncheckedUpdateInput>;
    where: Prisma.ParkingReportWhereUniqueInput;
};
export type ParkingReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingReportUpdateManyMutationInput, Prisma.ParkingReportUncheckedUpdateManyInput>;
    where?: Prisma.ParkingReportWhereInput;
    limit?: number;
};
export type ParkingReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    where: Prisma.ParkingReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingReportCreateInput, Prisma.ParkingReportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingReportUpdateInput, Prisma.ParkingReportUncheckedUpdateInput>;
};
export type ParkingReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
    where: Prisma.ParkingReportWhereUniqueInput;
};
export type ParkingReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingReportWhereInput;
    limit?: number;
};
export type ParkingReportFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingReportAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingReport$spotArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingSpotSelect<ExtArgs> | null;
    omit?: Prisma.ParkingSpotOmit<ExtArgs> | null;
    include?: Prisma.ParkingSpotInclude<ExtArgs> | null;
    where?: Prisma.ParkingSpotWhereInput;
};
export type ParkingReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingReportSelect<ExtArgs> | null;
    omit?: Prisma.ParkingReportOmit<ExtArgs> | null;
    include?: Prisma.ParkingReportInclude<ExtArgs> | null;
};
export {};
