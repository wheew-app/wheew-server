import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingAreaModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingAreaPayload>;
export type AggregateParkingArea = {
    _count: ParkingAreaCountAggregateOutputType | null;
    _avg: ParkingAreaAvgAggregateOutputType | null;
    _sum: ParkingAreaSumAggregateOutputType | null;
    _min: ParkingAreaMinAggregateOutputType | null;
    _max: ParkingAreaMaxAggregateOutputType | null;
};
export type ParkingAreaAvgAggregateOutputType = {
    centerLat: number | null;
    centerLng: number | null;
    parkingFee: number | null;
    totalSpots: number | null;
    rating: number | null;
    reviewCount: number | null;
};
export type ParkingAreaSumAggregateOutputType = {
    centerLat: number | null;
    centerLng: number | null;
    parkingFee: number | null;
    totalSpots: number | null;
    rating: number | null;
    reviewCount: number | null;
};
export type ParkingAreaMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    centerLat: number | null;
    centerLng: number | null;
    parkingCost: $Enums.ParkingCost | null;
    parkingFee: number | null;
    disabledFacilityLocation: $Enums.DisabledFacilityLocation | null;
    totalSpots: number | null;
    isActive: boolean | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    rating: number | null;
    reviewCount: number | null;
};
export type ParkingAreaMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    centerLat: number | null;
    centerLng: number | null;
    parkingCost: $Enums.ParkingCost | null;
    parkingFee: number | null;
    disabledFacilityLocation: $Enums.DisabledFacilityLocation | null;
    totalSpots: number | null;
    isActive: boolean | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    rating: number | null;
    reviewCount: number | null;
};
export type ParkingAreaCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    centerLat: number;
    centerLng: number;
    polygon: number;
    parkingCost: number;
    parkingFee: number;
    parkingAreaTypes: number;
    disabledFacilityLocation: number;
    totalSpots: number;
    isActive: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    rating: number;
    reviewCount: number;
    _all: number;
};
export type ParkingAreaAvgAggregateInputType = {
    centerLat?: true;
    centerLng?: true;
    parkingFee?: true;
    totalSpots?: true;
    rating?: true;
    reviewCount?: true;
};
export type ParkingAreaSumAggregateInputType = {
    centerLat?: true;
    centerLng?: true;
    parkingFee?: true;
    totalSpots?: true;
    rating?: true;
    reviewCount?: true;
};
export type ParkingAreaMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    centerLat?: true;
    centerLng?: true;
    parkingCost?: true;
    parkingFee?: true;
    disabledFacilityLocation?: true;
    totalSpots?: true;
    isActive?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    rating?: true;
    reviewCount?: true;
};
export type ParkingAreaMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    centerLat?: true;
    centerLng?: true;
    parkingCost?: true;
    parkingFee?: true;
    disabledFacilityLocation?: true;
    totalSpots?: true;
    isActive?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    rating?: true;
    reviewCount?: true;
};
export type ParkingAreaCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    centerLat?: true;
    centerLng?: true;
    polygon?: true;
    parkingCost?: true;
    parkingFee?: true;
    parkingAreaTypes?: true;
    disabledFacilityLocation?: true;
    totalSpots?: true;
    isActive?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    rating?: true;
    reviewCount?: true;
    _all?: true;
};
export type ParkingAreaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaWhereInput;
    orderBy?: Prisma.ParkingAreaOrderByWithRelationInput | Prisma.ParkingAreaOrderByWithRelationInput[];
    cursor?: Prisma.ParkingAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingAreaCountAggregateInputType;
    _avg?: ParkingAreaAvgAggregateInputType;
    _sum?: ParkingAreaSumAggregateInputType;
    _min?: ParkingAreaMinAggregateInputType;
    _max?: ParkingAreaMaxAggregateInputType;
};
export type GetParkingAreaAggregateType<T extends ParkingAreaAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingArea]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingArea[P]> : Prisma.GetScalarType<T[P], AggregateParkingArea[P]>;
};
export type ParkingAreaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaWhereInput;
    orderBy?: Prisma.ParkingAreaOrderByWithAggregationInput | Prisma.ParkingAreaOrderByWithAggregationInput[];
    by: Prisma.ParkingAreaScalarFieldEnum[] | Prisma.ParkingAreaScalarFieldEnum;
    having?: Prisma.ParkingAreaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingAreaCountAggregateInputType | true;
    _avg?: ParkingAreaAvgAggregateInputType;
    _sum?: ParkingAreaSumAggregateInputType;
    _min?: ParkingAreaMinAggregateInputType;
    _max?: ParkingAreaMaxAggregateInputType;
};
export type ParkingAreaGroupByOutputType = {
    id: string;
    name: string | null;
    description: string | null;
    centerLat: number;
    centerLng: number;
    polygon: runtime.JsonValue | null;
    parkingCost: $Enums.ParkingCost | null;
    parkingFee: number | null;
    parkingAreaTypes: $Enums.ParkingAreaType[];
    disabledFacilityLocation: $Enums.DisabledFacilityLocation | null;
    totalSpots: number | null;
    isActive: boolean;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    rating: number | null;
    reviewCount: number;
    _count: ParkingAreaCountAggregateOutputType | null;
    _avg: ParkingAreaAvgAggregateOutputType | null;
    _sum: ParkingAreaSumAggregateOutputType | null;
    _min: ParkingAreaMinAggregateOutputType | null;
    _max: ParkingAreaMaxAggregateOutputType | null;
};
type GetParkingAreaGroupByPayload<T extends ParkingAreaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingAreaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingAreaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingAreaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingAreaGroupByOutputType[P]>;
}>>;
export type ParkingAreaWhereInput = {
    AND?: Prisma.ParkingAreaWhereInput | Prisma.ParkingAreaWhereInput[];
    OR?: Prisma.ParkingAreaWhereInput[];
    NOT?: Prisma.ParkingAreaWhereInput | Prisma.ParkingAreaWhereInput[];
    id?: Prisma.StringFilter<"ParkingArea"> | string;
    name?: Prisma.StringNullableFilter<"ParkingArea"> | string | null;
    description?: Prisma.StringNullableFilter<"ParkingArea"> | string | null;
    centerLat?: Prisma.FloatFilter<"ParkingArea"> | number;
    centerLng?: Prisma.FloatFilter<"ParkingArea"> | number;
    polygon?: Prisma.JsonNullableFilter<"ParkingArea">;
    parkingCost?: Prisma.EnumParkingCostNullableFilter<"ParkingArea"> | $Enums.ParkingCost | null;
    parkingFee?: Prisma.FloatNullableFilter<"ParkingArea"> | number | null;
    parkingAreaTypes?: Prisma.EnumParkingAreaTypeNullableListFilter<"ParkingArea">;
    disabledFacilityLocation?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingArea"> | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.IntNullableFilter<"ParkingArea"> | number | null;
    isActive?: Prisma.BoolFilter<"ParkingArea"> | boolean;
    createdById?: Prisma.StringFilter<"ParkingArea"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParkingArea"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingArea"> | Date | string;
    rating?: Prisma.FloatNullableFilter<"ParkingArea"> | number | null;
    reviewCount?: Prisma.IntFilter<"ParkingArea"> | number;
    ratings?: Prisma.ParkingAreaRatingListRelationFilter;
    savedParkingLocations?: Prisma.SavedParkingLocationListRelationFilter;
};
export type ParkingAreaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    polygon?: Prisma.SortOrder;
    parkingCost?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    parkingAreaTypes?: Prisma.SortOrder;
    disabledFacilityLocation?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    ratings?: Prisma.ParkingAreaRatingOrderByRelationAggregateInput;
    savedParkingLocations?: Prisma.SavedParkingLocationOrderByRelationAggregateInput;
};
export type ParkingAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkingAreaWhereInput | Prisma.ParkingAreaWhereInput[];
    OR?: Prisma.ParkingAreaWhereInput[];
    NOT?: Prisma.ParkingAreaWhereInput | Prisma.ParkingAreaWhereInput[];
    name?: Prisma.StringNullableFilter<"ParkingArea"> | string | null;
    description?: Prisma.StringNullableFilter<"ParkingArea"> | string | null;
    centerLat?: Prisma.FloatFilter<"ParkingArea"> | number;
    centerLng?: Prisma.FloatFilter<"ParkingArea"> | number;
    polygon?: Prisma.JsonNullableFilter<"ParkingArea">;
    parkingCost?: Prisma.EnumParkingCostNullableFilter<"ParkingArea"> | $Enums.ParkingCost | null;
    parkingFee?: Prisma.FloatNullableFilter<"ParkingArea"> | number | null;
    parkingAreaTypes?: Prisma.EnumParkingAreaTypeNullableListFilter<"ParkingArea">;
    disabledFacilityLocation?: Prisma.EnumDisabledFacilityLocationNullableFilter<"ParkingArea"> | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.IntNullableFilter<"ParkingArea"> | number | null;
    isActive?: Prisma.BoolFilter<"ParkingArea"> | boolean;
    createdById?: Prisma.StringFilter<"ParkingArea"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParkingArea"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingArea"> | Date | string;
    rating?: Prisma.FloatNullableFilter<"ParkingArea"> | number | null;
    reviewCount?: Prisma.IntFilter<"ParkingArea"> | number;
    ratings?: Prisma.ParkingAreaRatingListRelationFilter;
    savedParkingLocations?: Prisma.SavedParkingLocationListRelationFilter;
}, "id">;
export type ParkingAreaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    polygon?: Prisma.SortOrder;
    parkingCost?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    parkingAreaTypes?: Prisma.SortOrder;
    disabledFacilityLocation?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    _count?: Prisma.ParkingAreaCountOrderByAggregateInput;
    _avg?: Prisma.ParkingAreaAvgOrderByAggregateInput;
    _max?: Prisma.ParkingAreaMaxOrderByAggregateInput;
    _min?: Prisma.ParkingAreaMinOrderByAggregateInput;
    _sum?: Prisma.ParkingAreaSumOrderByAggregateInput;
};
export type ParkingAreaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingAreaScalarWhereWithAggregatesInput | Prisma.ParkingAreaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingAreaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingAreaScalarWhereWithAggregatesInput | Prisma.ParkingAreaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingArea"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"ParkingArea"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"ParkingArea"> | string | null;
    centerLat?: Prisma.FloatWithAggregatesFilter<"ParkingArea"> | number;
    centerLng?: Prisma.FloatWithAggregatesFilter<"ParkingArea"> | number;
    polygon?: Prisma.JsonNullableWithAggregatesFilter<"ParkingArea">;
    parkingCost?: Prisma.EnumParkingCostNullableWithAggregatesFilter<"ParkingArea"> | $Enums.ParkingCost | null;
    parkingFee?: Prisma.FloatNullableWithAggregatesFilter<"ParkingArea"> | number | null;
    parkingAreaTypes?: Prisma.EnumParkingAreaTypeNullableListFilter<"ParkingArea">;
    disabledFacilityLocation?: Prisma.EnumDisabledFacilityLocationNullableWithAggregatesFilter<"ParkingArea"> | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.IntNullableWithAggregatesFilter<"ParkingArea"> | number | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"ParkingArea"> | boolean;
    createdById?: Prisma.StringWithAggregatesFilter<"ParkingArea"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingArea"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingArea"> | Date | string;
    rating?: Prisma.FloatNullableWithAggregatesFilter<"ParkingArea"> | number | null;
    reviewCount?: Prisma.IntWithAggregatesFilter<"ParkingArea"> | number;
};
export type ParkingAreaCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
    ratings?: Prisma.ParkingAreaRatingCreateNestedManyWithoutParkingAreaInput;
    savedParkingLocations?: Prisma.SavedParkingLocationCreateNestedManyWithoutParkingAreaInput;
};
export type ParkingAreaUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
    ratings?: Prisma.ParkingAreaRatingUncheckedCreateNestedManyWithoutParkingAreaInput;
    savedParkingLocations?: Prisma.SavedParkingLocationUncheckedCreateNestedManyWithoutParkingAreaInput;
};
export type ParkingAreaUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    ratings?: Prisma.ParkingAreaRatingUpdateManyWithoutParkingAreaNestedInput;
    savedParkingLocations?: Prisma.SavedParkingLocationUpdateManyWithoutParkingAreaNestedInput;
};
export type ParkingAreaUncheckedUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    ratings?: Prisma.ParkingAreaRatingUncheckedUpdateManyWithoutParkingAreaNestedInput;
    savedParkingLocations?: Prisma.SavedParkingLocationUncheckedUpdateManyWithoutParkingAreaNestedInput;
};
export type ParkingAreaCreateManyInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
};
export type ParkingAreaUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingAreaUncheckedUpdateManyInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingAreaNullableScalarRelationFilter = {
    is?: Prisma.ParkingAreaWhereInput | null;
    isNot?: Prisma.ParkingAreaWhereInput | null;
};
export type EnumParkingAreaTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingAreaType[] | Prisma.ListEnumParkingAreaTypeFieldRefInput<$PrismaModel> | null;
    has?: $Enums.ParkingAreaType | Prisma.EnumParkingAreaTypeFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.ParkingAreaType[] | Prisma.ListEnumParkingAreaTypeFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.ParkingAreaType[] | Prisma.ListEnumParkingAreaTypeFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ParkingAreaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    polygon?: Prisma.SortOrder;
    parkingCost?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    parkingAreaTypes?: Prisma.SortOrder;
    disabledFacilityLocation?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
};
export type ParkingAreaAvgOrderByAggregateInput = {
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
};
export type ParkingAreaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    parkingCost?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    disabledFacilityLocation?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
};
export type ParkingAreaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    parkingCost?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    disabledFacilityLocation?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
};
export type ParkingAreaSumOrderByAggregateInput = {
    centerLat?: Prisma.SortOrder;
    centerLng?: Prisma.SortOrder;
    parkingFee?: Prisma.SortOrder;
    totalSpots?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
};
export type ParkingAreaScalarRelationFilter = {
    is?: Prisma.ParkingAreaWhereInput;
    isNot?: Prisma.ParkingAreaWhereInput;
};
export type ParkingAreaCreateNestedOneWithoutSavedParkingLocationsInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaCreateWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUncheckedCreateWithoutSavedParkingLocationsInput>;
    connectOrCreate?: Prisma.ParkingAreaCreateOrConnectWithoutSavedParkingLocationsInput;
    connect?: Prisma.ParkingAreaWhereUniqueInput;
};
export type ParkingAreaUpdateOneWithoutSavedParkingLocationsNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaCreateWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUncheckedCreateWithoutSavedParkingLocationsInput>;
    connectOrCreate?: Prisma.ParkingAreaCreateOrConnectWithoutSavedParkingLocationsInput;
    upsert?: Prisma.ParkingAreaUpsertWithoutSavedParkingLocationsInput;
    disconnect?: boolean;
    delete?: Prisma.ParkingAreaWhereInput | boolean;
    connect?: Prisma.ParkingAreaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkingAreaUpdateToOneWithWhereWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUpdateWithoutSavedParkingLocationsInput>, Prisma.ParkingAreaUncheckedUpdateWithoutSavedParkingLocationsInput>;
};
export type ParkingAreaCreateparkingAreaTypesInput = {
    set: $Enums.ParkingAreaType[];
};
export type ParkingAreaUpdateparkingAreaTypesInput = {
    set?: $Enums.ParkingAreaType[];
    push?: $Enums.ParkingAreaType | $Enums.ParkingAreaType[];
};
export type ParkingAreaCreateNestedOneWithoutRatingsInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaCreateWithoutRatingsInput, Prisma.ParkingAreaUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.ParkingAreaCreateOrConnectWithoutRatingsInput;
    connect?: Prisma.ParkingAreaWhereUniqueInput;
};
export type ParkingAreaUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaCreateWithoutRatingsInput, Prisma.ParkingAreaUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.ParkingAreaCreateOrConnectWithoutRatingsInput;
    upsert?: Prisma.ParkingAreaUpsertWithoutRatingsInput;
    connect?: Prisma.ParkingAreaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkingAreaUpdateToOneWithWhereWithoutRatingsInput, Prisma.ParkingAreaUpdateWithoutRatingsInput>, Prisma.ParkingAreaUncheckedUpdateWithoutRatingsInput>;
};
export type ParkingAreaCreateWithoutSavedParkingLocationsInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
    ratings?: Prisma.ParkingAreaRatingCreateNestedManyWithoutParkingAreaInput;
};
export type ParkingAreaUncheckedCreateWithoutSavedParkingLocationsInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
    ratings?: Prisma.ParkingAreaRatingUncheckedCreateNestedManyWithoutParkingAreaInput;
};
export type ParkingAreaCreateOrConnectWithoutSavedParkingLocationsInput = {
    where: Prisma.ParkingAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingAreaCreateWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUncheckedCreateWithoutSavedParkingLocationsInput>;
};
export type ParkingAreaUpsertWithoutSavedParkingLocationsInput = {
    update: Prisma.XOR<Prisma.ParkingAreaUpdateWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUncheckedUpdateWithoutSavedParkingLocationsInput>;
    create: Prisma.XOR<Prisma.ParkingAreaCreateWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUncheckedCreateWithoutSavedParkingLocationsInput>;
    where?: Prisma.ParkingAreaWhereInput;
};
export type ParkingAreaUpdateToOneWithWhereWithoutSavedParkingLocationsInput = {
    where?: Prisma.ParkingAreaWhereInput;
    data: Prisma.XOR<Prisma.ParkingAreaUpdateWithoutSavedParkingLocationsInput, Prisma.ParkingAreaUncheckedUpdateWithoutSavedParkingLocationsInput>;
};
export type ParkingAreaUpdateWithoutSavedParkingLocationsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    ratings?: Prisma.ParkingAreaRatingUpdateManyWithoutParkingAreaNestedInput;
};
export type ParkingAreaUncheckedUpdateWithoutSavedParkingLocationsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    ratings?: Prisma.ParkingAreaRatingUncheckedUpdateManyWithoutParkingAreaNestedInput;
};
export type ParkingAreaCreateWithoutRatingsInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
    savedParkingLocations?: Prisma.SavedParkingLocationCreateNestedManyWithoutParkingAreaInput;
};
export type ParkingAreaUncheckedCreateWithoutRatingsInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    centerLat: number;
    centerLng: number;
    polygon?: runtime.InputJsonValue | null;
    parkingCost?: $Enums.ParkingCost | null;
    parkingFee?: number | null;
    parkingAreaTypes?: Prisma.ParkingAreaCreateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: $Enums.DisabledFacilityLocation | null;
    totalSpots?: number | null;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number | null;
    reviewCount?: number;
    savedParkingLocations?: Prisma.SavedParkingLocationUncheckedCreateNestedManyWithoutParkingAreaInput;
};
export type ParkingAreaCreateOrConnectWithoutRatingsInput = {
    where: Prisma.ParkingAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingAreaCreateWithoutRatingsInput, Prisma.ParkingAreaUncheckedCreateWithoutRatingsInput>;
};
export type ParkingAreaUpsertWithoutRatingsInput = {
    update: Prisma.XOR<Prisma.ParkingAreaUpdateWithoutRatingsInput, Prisma.ParkingAreaUncheckedUpdateWithoutRatingsInput>;
    create: Prisma.XOR<Prisma.ParkingAreaCreateWithoutRatingsInput, Prisma.ParkingAreaUncheckedCreateWithoutRatingsInput>;
    where?: Prisma.ParkingAreaWhereInput;
};
export type ParkingAreaUpdateToOneWithWhereWithoutRatingsInput = {
    where?: Prisma.ParkingAreaWhereInput;
    data: Prisma.XOR<Prisma.ParkingAreaUpdateWithoutRatingsInput, Prisma.ParkingAreaUncheckedUpdateWithoutRatingsInput>;
};
export type ParkingAreaUpdateWithoutRatingsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    savedParkingLocations?: Prisma.SavedParkingLocationUpdateManyWithoutParkingAreaNestedInput;
};
export type ParkingAreaUncheckedUpdateWithoutRatingsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centerLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    centerLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    polygon?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    parkingCost?: Prisma.NullableEnumParkingCostFieldUpdateOperationsInput | $Enums.ParkingCost | null;
    parkingFee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    parkingAreaTypes?: Prisma.ParkingAreaUpdateparkingAreaTypesInput | $Enums.ParkingAreaType[];
    disabledFacilityLocation?: Prisma.NullableEnumDisabledFacilityLocationFieldUpdateOperationsInput | $Enums.DisabledFacilityLocation | null;
    totalSpots?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    savedParkingLocations?: Prisma.SavedParkingLocationUncheckedUpdateManyWithoutParkingAreaNestedInput;
};
export type ParkingAreaCountOutputType = {
    ratings: number;
    savedParkingLocations: number;
};
export type ParkingAreaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ratings?: boolean | ParkingAreaCountOutputTypeCountRatingsArgs;
    savedParkingLocations?: boolean | ParkingAreaCountOutputTypeCountSavedParkingLocationsArgs;
};
export type ParkingAreaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaCountOutputTypeSelect<ExtArgs> | null;
};
export type ParkingAreaCountOutputTypeCountRatingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaRatingWhereInput;
};
export type ParkingAreaCountOutputTypeCountSavedParkingLocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedParkingLocationWhereInput;
};
export type ParkingAreaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    centerLat?: boolean;
    centerLng?: boolean;
    polygon?: boolean;
    parkingCost?: boolean;
    parkingFee?: boolean;
    parkingAreaTypes?: boolean;
    disabledFacilityLocation?: boolean;
    totalSpots?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rating?: boolean;
    reviewCount?: boolean;
    ratings?: boolean | Prisma.ParkingArea$ratingsArgs<ExtArgs>;
    savedParkingLocations?: boolean | Prisma.ParkingArea$savedParkingLocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ParkingAreaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingArea"]>;
export type ParkingAreaSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    centerLat?: boolean;
    centerLng?: boolean;
    polygon?: boolean;
    parkingCost?: boolean;
    parkingFee?: boolean;
    parkingAreaTypes?: boolean;
    disabledFacilityLocation?: boolean;
    totalSpots?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rating?: boolean;
    reviewCount?: boolean;
};
export type ParkingAreaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "centerLat" | "centerLng" | "polygon" | "parkingCost" | "parkingFee" | "parkingAreaTypes" | "disabledFacilityLocation" | "totalSpots" | "isActive" | "createdById" | "createdAt" | "updatedAt" | "rating" | "reviewCount", ExtArgs["result"]["parkingArea"]>;
export type ParkingAreaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ratings?: boolean | Prisma.ParkingArea$ratingsArgs<ExtArgs>;
    savedParkingLocations?: boolean | Prisma.ParkingArea$savedParkingLocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ParkingAreaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ParkingAreaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingArea";
    objects: {
        ratings: Prisma.$ParkingAreaRatingPayload<ExtArgs>[];
        savedParkingLocations: Prisma.$SavedParkingLocationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string | null;
        description: string | null;
        centerLat: number;
        centerLng: number;
        polygon: runtime.JsonValue | null;
        parkingCost: $Enums.ParkingCost | null;
        parkingFee: number | null;
        parkingAreaTypes: $Enums.ParkingAreaType[];
        disabledFacilityLocation: $Enums.DisabledFacilityLocation | null;
        totalSpots: number | null;
        isActive: boolean;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number | null;
        reviewCount: number;
    }, ExtArgs["result"]["parkingArea"]>;
    composites: {};
};
export type ParkingAreaGetPayload<S extends boolean | null | undefined | ParkingAreaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload, S>;
export type ParkingAreaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingAreaCountAggregateInputType | true;
};
export interface ParkingAreaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingArea'];
        meta: {
            name: 'ParkingArea';
        };
    };
    findUnique<T extends ParkingAreaFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingAreaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingAreaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingAreaFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingAreaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingAreaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingAreaFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingAreaCreateArgs>(args: Prisma.SelectSubset<T, ParkingAreaCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingAreaCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingAreaDeleteArgs>(args: Prisma.SelectSubset<T, ParkingAreaDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingAreaUpdateArgs>(args: Prisma.SelectSubset<T, ParkingAreaUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingAreaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingAreaUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingAreaUpsertArgs>(args: Prisma.SelectSubset<T, ParkingAreaUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingAreaFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingAreaAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingAreaCountArgs>(args?: Prisma.Subset<T, ParkingAreaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingAreaCountAggregateOutputType> : number>;
    aggregate<T extends ParkingAreaAggregateArgs>(args: Prisma.Subset<T, ParkingAreaAggregateArgs>): Prisma.PrismaPromise<GetParkingAreaAggregateType<T>>;
    groupBy<T extends ParkingAreaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingAreaGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingAreaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingAreaFieldRefs;
}
export interface Prisma__ParkingAreaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ratings<T extends Prisma.ParkingArea$ratingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkingArea$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    savedParkingLocations<T extends Prisma.ParkingArea$savedParkingLocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkingArea$savedParkingLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedParkingLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingAreaFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingArea", 'String'>;
    readonly name: Prisma.FieldRef<"ParkingArea", 'String'>;
    readonly description: Prisma.FieldRef<"ParkingArea", 'String'>;
    readonly centerLat: Prisma.FieldRef<"ParkingArea", 'Float'>;
    readonly centerLng: Prisma.FieldRef<"ParkingArea", 'Float'>;
    readonly polygon: Prisma.FieldRef<"ParkingArea", 'Json'>;
    readonly parkingCost: Prisma.FieldRef<"ParkingArea", 'ParkingCost'>;
    readonly parkingFee: Prisma.FieldRef<"ParkingArea", 'Float'>;
    readonly parkingAreaTypes: Prisma.FieldRef<"ParkingArea", 'ParkingAreaType[]'>;
    readonly disabledFacilityLocation: Prisma.FieldRef<"ParkingArea", 'DisabledFacilityLocation'>;
    readonly totalSpots: Prisma.FieldRef<"ParkingArea", 'Int'>;
    readonly isActive: Prisma.FieldRef<"ParkingArea", 'Boolean'>;
    readonly createdById: Prisma.FieldRef<"ParkingArea", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ParkingArea", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingArea", 'DateTime'>;
    readonly rating: Prisma.FieldRef<"ParkingArea", 'Float'>;
    readonly reviewCount: Prisma.FieldRef<"ParkingArea", 'Int'>;
}
export type ParkingAreaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaWhereUniqueInput;
};
export type ParkingAreaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaWhereUniqueInput;
};
export type ParkingAreaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where?: Prisma.ParkingAreaWhereInput;
    orderBy?: Prisma.ParkingAreaOrderByWithRelationInput | Prisma.ParkingAreaOrderByWithRelationInput[];
    cursor?: Prisma.ParkingAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingAreaScalarFieldEnum | Prisma.ParkingAreaScalarFieldEnum[];
};
export type ParkingAreaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where?: Prisma.ParkingAreaWhereInput;
    orderBy?: Prisma.ParkingAreaOrderByWithRelationInput | Prisma.ParkingAreaOrderByWithRelationInput[];
    cursor?: Prisma.ParkingAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingAreaScalarFieldEnum | Prisma.ParkingAreaScalarFieldEnum[];
};
export type ParkingAreaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where?: Prisma.ParkingAreaWhereInput;
    orderBy?: Prisma.ParkingAreaOrderByWithRelationInput | Prisma.ParkingAreaOrderByWithRelationInput[];
    cursor?: Prisma.ParkingAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingAreaScalarFieldEnum | Prisma.ParkingAreaScalarFieldEnum[];
};
export type ParkingAreaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingAreaCreateInput, Prisma.ParkingAreaUncheckedCreateInput>;
};
export type ParkingAreaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingAreaCreateManyInput | Prisma.ParkingAreaCreateManyInput[];
};
export type ParkingAreaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingAreaUpdateInput, Prisma.ParkingAreaUncheckedUpdateInput>;
    where: Prisma.ParkingAreaWhereUniqueInput;
};
export type ParkingAreaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingAreaUpdateManyMutationInput, Prisma.ParkingAreaUncheckedUpdateManyInput>;
    where?: Prisma.ParkingAreaWhereInput;
    limit?: number;
};
export type ParkingAreaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingAreaCreateInput, Prisma.ParkingAreaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingAreaUpdateInput, Prisma.ParkingAreaUncheckedUpdateInput>;
};
export type ParkingAreaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaWhereUniqueInput;
};
export type ParkingAreaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaWhereInput;
    limit?: number;
};
export type ParkingAreaFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingAreaAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingArea$ratingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    where?: Prisma.ParkingAreaRatingWhereInput;
    orderBy?: Prisma.ParkingAreaRatingOrderByWithRelationInput | Prisma.ParkingAreaRatingOrderByWithRelationInput[];
    cursor?: Prisma.ParkingAreaRatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingAreaRatingScalarFieldEnum | Prisma.ParkingAreaRatingScalarFieldEnum[];
};
export type ParkingArea$savedParkingLocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingAreaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaInclude<ExtArgs> | null;
};
export {};
