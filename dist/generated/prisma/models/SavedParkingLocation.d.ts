import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SavedParkingLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$SavedParkingLocationPayload>;
export type AggregateSavedParkingLocation = {
    _count: SavedParkingLocationCountAggregateOutputType | null;
    _avg: SavedParkingLocationAvgAggregateOutputType | null;
    _sum: SavedParkingLocationSumAggregateOutputType | null;
    _min: SavedParkingLocationMinAggregateOutputType | null;
    _max: SavedParkingLocationMaxAggregateOutputType | null;
};
export type SavedParkingLocationAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    confidence: number | null;
};
export type SavedParkingLocationSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    confidence: number | null;
};
export type SavedParkingLocationMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    spotId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    confidence: number | null;
    source: $Enums.ParkingSaveSource | null;
    note: string | null;
    photoUrl: string | null;
    isActive: boolean | null;
    parkingType: $Enums.ParkingCost | null;
    paidExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavedParkingLocationMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    spotId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    confidence: number | null;
    source: $Enums.ParkingSaveSource | null;
    note: string | null;
    photoUrl: string | null;
    isActive: boolean | null;
    parkingType: $Enums.ParkingCost | null;
    paidExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavedParkingLocationCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    spotId: number;
    latitude: number;
    longitude: number;
    accuracy: number;
    confidence: number;
    source: number;
    note: number;
    photoUrl: number;
    isActive: number;
    parkingType: number;
    paidExpiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SavedParkingLocationAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    confidence?: true;
};
export type SavedParkingLocationSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    confidence?: true;
};
export type SavedParkingLocationMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    confidence?: true;
    source?: true;
    note?: true;
    photoUrl?: true;
    isActive?: true;
    parkingType?: true;
    paidExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavedParkingLocationMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    confidence?: true;
    source?: true;
    note?: true;
    photoUrl?: true;
    isActive?: true;
    parkingType?: true;
    paidExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavedParkingLocationCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    confidence?: true;
    source?: true;
    note?: true;
    photoUrl?: true;
    isActive?: true;
    parkingType?: true;
    paidExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SavedParkingLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedParkingLocationWhereInput;
    orderBy?: Prisma.SavedParkingLocationOrderByWithRelationInput | Prisma.SavedParkingLocationOrderByWithRelationInput[];
    cursor?: Prisma.SavedParkingLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SavedParkingLocationCountAggregateInputType;
    _avg?: SavedParkingLocationAvgAggregateInputType;
    _sum?: SavedParkingLocationSumAggregateInputType;
    _min?: SavedParkingLocationMinAggregateInputType;
    _max?: SavedParkingLocationMaxAggregateInputType;
};
export type GetSavedParkingLocationAggregateType<T extends SavedParkingLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateSavedParkingLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavedParkingLocation[P]> : Prisma.GetScalarType<T[P], AggregateSavedParkingLocation[P]>;
};
export type SavedParkingLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedParkingLocationWhereInput;
    orderBy?: Prisma.SavedParkingLocationOrderByWithAggregationInput | Prisma.SavedParkingLocationOrderByWithAggregationInput[];
    by: Prisma.SavedParkingLocationScalarFieldEnum[] | Prisma.SavedParkingLocationScalarFieldEnum;
    having?: Prisma.SavedParkingLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavedParkingLocationCountAggregateInputType | true;
    _avg?: SavedParkingLocationAvgAggregateInputType;
    _sum?: SavedParkingLocationSumAggregateInputType;
    _min?: SavedParkingLocationMinAggregateInputType;
    _max?: SavedParkingLocationMaxAggregateInputType;
};
export type SavedParkingLocationGroupByOutputType = {
    id: string;
    userId: string;
    name: string | null;
    spotId: string | null;
    latitude: number;
    longitude: number;
    accuracy: number | null;
    confidence: number | null;
    source: $Enums.ParkingSaveSource;
    note: string | null;
    photoUrl: string | null;
    isActive: boolean;
    parkingType: $Enums.ParkingCost | null;
    paidExpiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SavedParkingLocationCountAggregateOutputType | null;
    _avg: SavedParkingLocationAvgAggregateOutputType | null;
    _sum: SavedParkingLocationSumAggregateOutputType | null;
    _min: SavedParkingLocationMinAggregateOutputType | null;
    _max: SavedParkingLocationMaxAggregateOutputType | null;
};
type GetSavedParkingLocationGroupByPayload<T extends SavedParkingLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavedParkingLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavedParkingLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavedParkingLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavedParkingLocationGroupByOutputType[P]>;
}>>;
export type SavedParkingLocationWhereInput = {
    AND?: Prisma.SavedParkingLocationWhereInput | Prisma.SavedParkingLocationWhereInput[];
    OR?: Prisma.SavedParkingLocationWhereInput[];
    NOT?: Prisma.SavedParkingLocationWhereInput | Prisma.SavedParkingLocationWhereInput[];
    id?: Prisma.StringFilter<"SavedParkingLocation"> | string;
    userId?: Prisma.StringFilter<"SavedParkingLocation"> | string;
    name?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    spotId?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    latitude?: Prisma.FloatFilter<"SavedParkingLocation"> | number;
    longitude?: Prisma.FloatFilter<"SavedParkingLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"SavedParkingLocation"> | number | null;
    confidence?: Prisma.FloatNullableFilter<"SavedParkingLocation"> | number | null;
    source?: Prisma.EnumParkingSaveSourceFilter<"SavedParkingLocation"> | $Enums.ParkingSaveSource;
    note?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    photoUrl?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    isActive?: Prisma.BoolFilter<"SavedParkingLocation"> | boolean;
    parkingType?: Prisma.EnumParkingCostNullableFilter<"SavedParkingLocation"> | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.DateTimeNullableFilter<"SavedParkingLocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavedParkingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedParkingLocation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parkingArea?: Prisma.XOR<Prisma.ParkingAreaNullableScalarRelationFilter, Prisma.ParkingAreaWhereInput> | null;
};
export type SavedParkingLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    parkingType?: Prisma.SortOrder;
    paidExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    parkingArea?: Prisma.ParkingAreaOrderByWithRelationInput;
};
export type SavedParkingLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SavedParkingLocationWhereInput | Prisma.SavedParkingLocationWhereInput[];
    OR?: Prisma.SavedParkingLocationWhereInput[];
    NOT?: Prisma.SavedParkingLocationWhereInput | Prisma.SavedParkingLocationWhereInput[];
    userId?: Prisma.StringFilter<"SavedParkingLocation"> | string;
    name?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    spotId?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    latitude?: Prisma.FloatFilter<"SavedParkingLocation"> | number;
    longitude?: Prisma.FloatFilter<"SavedParkingLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"SavedParkingLocation"> | number | null;
    confidence?: Prisma.FloatNullableFilter<"SavedParkingLocation"> | number | null;
    source?: Prisma.EnumParkingSaveSourceFilter<"SavedParkingLocation"> | $Enums.ParkingSaveSource;
    note?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    photoUrl?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    isActive?: Prisma.BoolFilter<"SavedParkingLocation"> | boolean;
    parkingType?: Prisma.EnumParkingCostNullableFilter<"SavedParkingLocation"> | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.DateTimeNullableFilter<"SavedParkingLocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavedParkingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedParkingLocation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parkingArea?: Prisma.XOR<Prisma.ParkingAreaNullableScalarRelationFilter, Prisma.ParkingAreaWhereInput> | null;
}, "id">;
export type SavedParkingLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    parkingType?: Prisma.SortOrder;
    paidExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SavedParkingLocationCountOrderByAggregateInput;
    _avg?: Prisma.SavedParkingLocationAvgOrderByAggregateInput;
    _max?: Prisma.SavedParkingLocationMaxOrderByAggregateInput;
    _min?: Prisma.SavedParkingLocationMinOrderByAggregateInput;
    _sum?: Prisma.SavedParkingLocationSumOrderByAggregateInput;
};
export type SavedParkingLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavedParkingLocationScalarWhereWithAggregatesInput | Prisma.SavedParkingLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavedParkingLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavedParkingLocationScalarWhereWithAggregatesInput | Prisma.SavedParkingLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SavedParkingLocation"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SavedParkingLocation"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"SavedParkingLocation"> | string | null;
    spotId?: Prisma.StringNullableWithAggregatesFilter<"SavedParkingLocation"> | string | null;
    latitude?: Prisma.FloatWithAggregatesFilter<"SavedParkingLocation"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"SavedParkingLocation"> | number;
    accuracy?: Prisma.FloatNullableWithAggregatesFilter<"SavedParkingLocation"> | number | null;
    confidence?: Prisma.FloatNullableWithAggregatesFilter<"SavedParkingLocation"> | number | null;
    source?: Prisma.EnumParkingSaveSourceWithAggregatesFilter<"SavedParkingLocation"> | $Enums.ParkingSaveSource;
    note?: Prisma.StringNullableWithAggregatesFilter<"SavedParkingLocation"> | string | null;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"SavedParkingLocation"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"SavedParkingLocation"> | boolean;
    parkingType?: Prisma.EnumParkingCostNullableWithAggregatesFilter<"SavedParkingLocation"> | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SavedParkingLocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SavedParkingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SavedParkingLocation"> | Date | string;
};
export type SavedParkingLocationCreateInput = {
    id?: string;
    name?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavedParkingLocationsInput;
    parkingArea?: Prisma.ParkingAreaCreateNestedOneWithoutSavedParkingLocationsInput;
};
export type SavedParkingLocationUncheckedCreateInput = {
    id?: string;
    userId: string;
    name?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedParkingLocationUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavedParkingLocationsNestedInput;
    parkingArea?: Prisma.ParkingAreaUpdateOneWithoutSavedParkingLocationsNestedInput;
};
export type SavedParkingLocationUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationCreateManyInput = {
    id?: string;
    userId: string;
    name?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedParkingLocationUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationListRelationFilter = {
    every?: Prisma.SavedParkingLocationWhereInput;
    some?: Prisma.SavedParkingLocationWhereInput;
    none?: Prisma.SavedParkingLocationWhereInput;
};
export type SavedParkingLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavedParkingLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    parkingType?: Prisma.SortOrder;
    paidExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedParkingLocationAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type SavedParkingLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    parkingType?: Prisma.SortOrder;
    paidExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedParkingLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    parkingType?: Prisma.SortOrder;
    paidExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedParkingLocationSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type SavedParkingLocationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutUserInput, Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput> | Prisma.SavedParkingLocationCreateWithoutUserInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput | Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyUserInputEnvelope;
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
};
export type SavedParkingLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutUserInput, Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput> | Prisma.SavedParkingLocationCreateWithoutUserInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput | Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyUserInputEnvelope;
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
};
export type SavedParkingLocationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutUserInput, Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput> | Prisma.SavedParkingLocationCreateWithoutUserInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput | Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyUserInputEnvelope;
    set?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    disconnect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    delete?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    update?: Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedParkingLocationUpdateManyWithWhereWithoutUserInput | Prisma.SavedParkingLocationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedParkingLocationScalarWhereInput | Prisma.SavedParkingLocationScalarWhereInput[];
};
export type SavedParkingLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutUserInput, Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput> | Prisma.SavedParkingLocationCreateWithoutUserInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput | Prisma.SavedParkingLocationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyUserInputEnvelope;
    set?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    disconnect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    delete?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    update?: Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedParkingLocationUpdateManyWithWhereWithoutUserInput | Prisma.SavedParkingLocationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedParkingLocationScalarWhereInput | Prisma.SavedParkingLocationScalarWhereInput[];
};
export type EnumParkingSaveSourceFieldUpdateOperationsInput = {
    set?: $Enums.ParkingSaveSource;
};
export type NullableEnumParkingCostFieldUpdateOperationsInput = {
    set?: $Enums.ParkingCost | null;
    unset?: boolean;
};
export type SavedParkingLocationCreateNestedManyWithoutParkingAreaInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput> | Prisma.SavedParkingLocationCreateWithoutParkingAreaInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput | Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyParkingAreaInputEnvelope;
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
};
export type SavedParkingLocationUncheckedCreateNestedManyWithoutParkingAreaInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput> | Prisma.SavedParkingLocationCreateWithoutParkingAreaInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput | Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyParkingAreaInputEnvelope;
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
};
export type SavedParkingLocationUpdateManyWithoutParkingAreaNestedInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput> | Prisma.SavedParkingLocationCreateWithoutParkingAreaInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput | Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput[];
    upsert?: Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutParkingAreaInput | Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutParkingAreaInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyParkingAreaInputEnvelope;
    set?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    disconnect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    delete?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    update?: Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutParkingAreaInput | Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutParkingAreaInput[];
    updateMany?: Prisma.SavedParkingLocationUpdateManyWithWhereWithoutParkingAreaInput | Prisma.SavedParkingLocationUpdateManyWithWhereWithoutParkingAreaInput[];
    deleteMany?: Prisma.SavedParkingLocationScalarWhereInput | Prisma.SavedParkingLocationScalarWhereInput[];
};
export type SavedParkingLocationUncheckedUpdateManyWithoutParkingAreaNestedInput = {
    create?: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput> | Prisma.SavedParkingLocationCreateWithoutParkingAreaInput[] | Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput | Prisma.SavedParkingLocationCreateOrConnectWithoutParkingAreaInput[];
    upsert?: Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutParkingAreaInput | Prisma.SavedParkingLocationUpsertWithWhereUniqueWithoutParkingAreaInput[];
    createMany?: Prisma.SavedParkingLocationCreateManyParkingAreaInputEnvelope;
    set?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    disconnect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    delete?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    connect?: Prisma.SavedParkingLocationWhereUniqueInput | Prisma.SavedParkingLocationWhereUniqueInput[];
    update?: Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutParkingAreaInput | Prisma.SavedParkingLocationUpdateWithWhereUniqueWithoutParkingAreaInput[];
    updateMany?: Prisma.SavedParkingLocationUpdateManyWithWhereWithoutParkingAreaInput | Prisma.SavedParkingLocationUpdateManyWithWhereWithoutParkingAreaInput[];
    deleteMany?: Prisma.SavedParkingLocationScalarWhereInput | Prisma.SavedParkingLocationScalarWhereInput[];
};
export type SavedParkingLocationCreateWithoutUserInput = {
    id?: string;
    name?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parkingArea?: Prisma.ParkingAreaCreateNestedOneWithoutSavedParkingLocationsInput;
};
export type SavedParkingLocationUncheckedCreateWithoutUserInput = {
    id?: string;
    name?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedParkingLocationCreateOrConnectWithoutUserInput = {
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutUserInput, Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput>;
};
export type SavedParkingLocationCreateManyUserInputEnvelope = {
    data: Prisma.SavedParkingLocationCreateManyUserInput | Prisma.SavedParkingLocationCreateManyUserInput[];
};
export type SavedParkingLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedParkingLocationUpdateWithoutUserInput, Prisma.SavedParkingLocationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutUserInput, Prisma.SavedParkingLocationUncheckedCreateWithoutUserInput>;
};
export type SavedParkingLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedParkingLocationUpdateWithoutUserInput, Prisma.SavedParkingLocationUncheckedUpdateWithoutUserInput>;
};
export type SavedParkingLocationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SavedParkingLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedParkingLocationUpdateManyMutationInput, Prisma.SavedParkingLocationUncheckedUpdateManyWithoutUserInput>;
};
export type SavedParkingLocationScalarWhereInput = {
    AND?: Prisma.SavedParkingLocationScalarWhereInput | Prisma.SavedParkingLocationScalarWhereInput[];
    OR?: Prisma.SavedParkingLocationScalarWhereInput[];
    NOT?: Prisma.SavedParkingLocationScalarWhereInput | Prisma.SavedParkingLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"SavedParkingLocation"> | string;
    userId?: Prisma.StringFilter<"SavedParkingLocation"> | string;
    name?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    spotId?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    latitude?: Prisma.FloatFilter<"SavedParkingLocation"> | number;
    longitude?: Prisma.FloatFilter<"SavedParkingLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"SavedParkingLocation"> | number | null;
    confidence?: Prisma.FloatNullableFilter<"SavedParkingLocation"> | number | null;
    source?: Prisma.EnumParkingSaveSourceFilter<"SavedParkingLocation"> | $Enums.ParkingSaveSource;
    note?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    photoUrl?: Prisma.StringNullableFilter<"SavedParkingLocation"> | string | null;
    isActive?: Prisma.BoolFilter<"SavedParkingLocation"> | boolean;
    parkingType?: Prisma.EnumParkingCostNullableFilter<"SavedParkingLocation"> | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.DateTimeNullableFilter<"SavedParkingLocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavedParkingLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedParkingLocation"> | Date | string;
};
export type SavedParkingLocationCreateWithoutParkingAreaInput = {
    id?: string;
    name?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavedParkingLocationsInput;
};
export type SavedParkingLocationUncheckedCreateWithoutParkingAreaInput = {
    id?: string;
    userId: string;
    name?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedParkingLocationCreateOrConnectWithoutParkingAreaInput = {
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput>;
};
export type SavedParkingLocationCreateManyParkingAreaInputEnvelope = {
    data: Prisma.SavedParkingLocationCreateManyParkingAreaInput | Prisma.SavedParkingLocationCreateManyParkingAreaInput[];
};
export type SavedParkingLocationUpsertWithWhereUniqueWithoutParkingAreaInput = {
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedParkingLocationUpdateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedUpdateWithoutParkingAreaInput>;
    create: Prisma.XOR<Prisma.SavedParkingLocationCreateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedCreateWithoutParkingAreaInput>;
};
export type SavedParkingLocationUpdateWithWhereUniqueWithoutParkingAreaInput = {
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedParkingLocationUpdateWithoutParkingAreaInput, Prisma.SavedParkingLocationUncheckedUpdateWithoutParkingAreaInput>;
};
export type SavedParkingLocationUpdateManyWithWhereWithoutParkingAreaInput = {
    where: Prisma.SavedParkingLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedParkingLocationUpdateManyMutationInput, Prisma.SavedParkingLocationUncheckedUpdateManyWithoutParkingAreaInput>;
};
export type SavedParkingLocationCreateManyUserInput = {
    id?: string;
    name?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedParkingLocationUpdateWithoutUserInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parkingArea?: Prisma.ParkingAreaUpdateOneWithoutSavedParkingLocationsNestedInput;
};
export type SavedParkingLocationUncheckedUpdateWithoutUserInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationUncheckedUpdateManyWithoutUserInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationCreateManyParkingAreaInput = {
    id?: string;
    userId: string;
    name?: string | null;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    confidence?: number | null;
    source?: $Enums.ParkingSaveSource;
    note?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    parkingType?: $Enums.ParkingCost | null;
    paidExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedParkingLocationUpdateWithoutParkingAreaInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavedParkingLocationsNestedInput;
};
export type SavedParkingLocationUncheckedUpdateWithoutParkingAreaInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationUncheckedUpdateManyWithoutParkingAreaInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    source?: Prisma.EnumParkingSaveSourceFieldUpdateOperationsInput | $Enums.ParkingSaveSource;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    parkingType?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    paidExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedParkingLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    spotId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    confidence?: boolean;
    source?: boolean;
    note?: boolean;
    photoUrl?: boolean;
    isActive?: boolean;
    parkingType?: boolean;
    paidExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parkingArea?: boolean | Prisma.SavedParkingLocation$parkingAreaArgs<ExtArgs>;
}, ExtArgs["result"]["savedParkingLocation"]>;
export type SavedParkingLocationSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    spotId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    confidence?: boolean;
    source?: boolean;
    note?: boolean;
    photoUrl?: boolean;
    isActive?: boolean;
    parkingType?: boolean;
    paidExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SavedParkingLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "spotId" | "latitude" | "longitude" | "accuracy" | "confidence" | "source" | "note" | "photoUrl" | "isActive" | "parkingType" | "paidExpiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["savedParkingLocation"]>;
export type SavedParkingLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parkingArea?: boolean | Prisma.SavedParkingLocation$parkingAreaArgs<ExtArgs>;
};
export type $SavedParkingLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavedParkingLocation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        parkingArea: Prisma.$ParkingAreaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string | null;
        spotId: string | null;
        latitude: number;
        longitude: number;
        accuracy: number | null;
        confidence: number | null;
        source: $Enums.ParkingSaveSource;
        note: string | null;
        photoUrl: string | null;
        isActive: boolean;
        parkingType: $Enums.ParkingCost | null;
        paidExpiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["savedParkingLocation"]>;
    composites: {};
};
export type SavedParkingLocationGetPayload<S extends boolean | null | undefined | SavedParkingLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload, S>;
export type SavedParkingLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavedParkingLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavedParkingLocationCountAggregateInputType | true;
};
export interface SavedParkingLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavedParkingLocation'];
        meta: {
            name: 'SavedParkingLocation';
        };
    };
    findUnique<T extends SavedParkingLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SavedParkingLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SavedParkingLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, SavedParkingLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SavedParkingLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavedParkingLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SavedParkingLocationFindManyArgs>(args?: Prisma.SelectSubset<T, SavedParkingLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SavedParkingLocationCreateArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationCreateArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SavedParkingLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, SavedParkingLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SavedParkingLocationDeleteArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SavedParkingLocationUpdateArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SavedParkingLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavedParkingLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SavedParkingLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SavedParkingLocationUpsertArgs>(args: Prisma.SelectSubset<T, SavedParkingLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__SavedParkingLocationClient<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.SavedParkingLocationFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.SavedParkingLocationAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends SavedParkingLocationCountArgs>(args?: Prisma.Subset<T, SavedParkingLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavedParkingLocationCountAggregateOutputType> : number>;
    aggregate<T extends SavedParkingLocationAggregateArgs>(args: Prisma.Subset<T, SavedParkingLocationAggregateArgs>): Prisma.PrismaPromise<GetSavedParkingLocationAggregateType<T>>;
    groupBy<T extends SavedParkingLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavedParkingLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: SavedParkingLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavedParkingLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedParkingLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SavedParkingLocationFieldRefs;
}
export interface Prisma__SavedParkingLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parkingArea<T extends Prisma.SavedParkingLocation$parkingAreaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavedParkingLocation$parkingAreaArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SavedParkingLocationFieldRefs {
    readonly id: Prisma.FieldRef<"SavedParkingLocation", 'String'>;
    readonly userId: Prisma.FieldRef<"SavedParkingLocation", 'String'>;
    readonly name: Prisma.FieldRef<"SavedParkingLocation", 'String'>;
    readonly spotId: Prisma.FieldRef<"SavedParkingLocation", 'String'>;
    readonly latitude: Prisma.FieldRef<"SavedParkingLocation", 'Float'>;
    readonly longitude: Prisma.FieldRef<"SavedParkingLocation", 'Float'>;
    readonly accuracy: Prisma.FieldRef<"SavedParkingLocation", 'Float'>;
    readonly confidence: Prisma.FieldRef<"SavedParkingLocation", 'Float'>;
    readonly source: Prisma.FieldRef<"SavedParkingLocation", 'ParkingSaveSource'>;
    readonly note: Prisma.FieldRef<"SavedParkingLocation", 'String'>;
    readonly photoUrl: Prisma.FieldRef<"SavedParkingLocation", 'String'>;
    readonly isActive: Prisma.FieldRef<"SavedParkingLocation", 'Boolean'>;
    readonly parkingType: Prisma.FieldRef<"SavedParkingLocation", 'ParkingCost'>;
    readonly paidExpiresAt: Prisma.FieldRef<"SavedParkingLocation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SavedParkingLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SavedParkingLocation", 'DateTime'>;
}
export type SavedParkingLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where: Prisma.SavedParkingLocationWhereUniqueInput;
};
export type SavedParkingLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where: Prisma.SavedParkingLocationWhereUniqueInput;
};
export type SavedParkingLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where?: Prisma.SavedParkingLocationWhereInput;
    orderBy?: Prisma.SavedParkingLocationOrderByWithRelationInput | Prisma.SavedParkingLocationOrderByWithRelationInput[];
    cursor?: Prisma.SavedParkingLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedParkingLocationScalarFieldEnum | Prisma.SavedParkingLocationScalarFieldEnum[];
};
export type SavedParkingLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where?: Prisma.SavedParkingLocationWhereInput;
    orderBy?: Prisma.SavedParkingLocationOrderByWithRelationInput | Prisma.SavedParkingLocationOrderByWithRelationInput[];
    cursor?: Prisma.SavedParkingLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedParkingLocationScalarFieldEnum | Prisma.SavedParkingLocationScalarFieldEnum[];
};
export type SavedParkingLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where?: Prisma.SavedParkingLocationWhereInput;
    orderBy?: Prisma.SavedParkingLocationOrderByWithRelationInput | Prisma.SavedParkingLocationOrderByWithRelationInput[];
    cursor?: Prisma.SavedParkingLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedParkingLocationScalarFieldEnum | Prisma.SavedParkingLocationScalarFieldEnum[];
};
export type SavedParkingLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedParkingLocationCreateInput, Prisma.SavedParkingLocationUncheckedCreateInput>;
};
export type SavedParkingLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SavedParkingLocationCreateManyInput | Prisma.SavedParkingLocationCreateManyInput[];
};
export type SavedParkingLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedParkingLocationUpdateInput, Prisma.SavedParkingLocationUncheckedUpdateInput>;
    where: Prisma.SavedParkingLocationWhereUniqueInput;
};
export type SavedParkingLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SavedParkingLocationUpdateManyMutationInput, Prisma.SavedParkingLocationUncheckedUpdateManyInput>;
    where?: Prisma.SavedParkingLocationWhereInput;
    limit?: number;
};
export type SavedParkingLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where: Prisma.SavedParkingLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedParkingLocationCreateInput, Prisma.SavedParkingLocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SavedParkingLocationUpdateInput, Prisma.SavedParkingLocationUncheckedUpdateInput>;
};
export type SavedParkingLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
    where: Prisma.SavedParkingLocationWhereUniqueInput;
};
export type SavedParkingLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedParkingLocationWhereInput;
    limit?: number;
};
export type SavedParkingLocationFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type SavedParkingLocationAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type SavedParkingLocation$parkingAreaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where?: Prisma.ParkingAreaWhereInput;
};
export type SavedParkingLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedParkingLocationSelect<ExtArgs> | null;
    omit?: Prisma.SavedParkingLocationOmit<ExtArgs> | null;
    include?: Prisma.SavedParkingLocationInclude<ExtArgs> | null;
};
export {};
