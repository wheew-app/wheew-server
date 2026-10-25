import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingHandoffModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingHandoffPayload>;
export type AggregateParkingHandoff = {
    _count: ParkingHandoffCountAggregateOutputType | null;
    _avg: ParkingHandoffAvgAggregateOutputType | null;
    _sum: ParkingHandoffSumAggregateOutputType | null;
    _min: ParkingHandoffMinAggregateOutputType | null;
    _max: ParkingHandoffMaxAggregateOutputType | null;
};
export type ParkingHandoffAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    approxLatitude: number | null;
    approxLongitude: number | null;
};
export type ParkingHandoffSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    approxLatitude: number | null;
    approxLongitude: number | null;
};
export type ParkingHandoffMinAggregateOutputType = {
    id: string | null;
    releaserId: string | null;
    seekerId: string | null;
    spotId: string | null;
    latitude: number | null;
    longitude: number | null;
    approxLatitude: number | null;
    approxLongitude: number | null;
    status: $Enums.HandoffStatus | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    cancelledAt: Date | null;
    foundAt: Date | null;
    occupiedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingHandoffMaxAggregateOutputType = {
    id: string | null;
    releaserId: string | null;
    seekerId: string | null;
    spotId: string | null;
    latitude: number | null;
    longitude: number | null;
    approxLatitude: number | null;
    approxLongitude: number | null;
    status: $Enums.HandoffStatus | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    cancelledAt: Date | null;
    foundAt: Date | null;
    occupiedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingHandoffCountAggregateOutputType = {
    id: number;
    releaserId: number;
    seekerId: number;
    spotId: number;
    latitude: number;
    longitude: number;
    approxLatitude: number;
    approxLongitude: number;
    status: number;
    expiresAt: number;
    acceptedAt: number;
    cancelledAt: number;
    foundAt: number;
    occupiedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkingHandoffAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    approxLatitude?: true;
    approxLongitude?: true;
};
export type ParkingHandoffSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    approxLatitude?: true;
    approxLongitude?: true;
};
export type ParkingHandoffMinAggregateInputType = {
    id?: true;
    releaserId?: true;
    seekerId?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    approxLatitude?: true;
    approxLongitude?: true;
    status?: true;
    expiresAt?: true;
    acceptedAt?: true;
    cancelledAt?: true;
    foundAt?: true;
    occupiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingHandoffMaxAggregateInputType = {
    id?: true;
    releaserId?: true;
    seekerId?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    approxLatitude?: true;
    approxLongitude?: true;
    status?: true;
    expiresAt?: true;
    acceptedAt?: true;
    cancelledAt?: true;
    foundAt?: true;
    occupiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingHandoffCountAggregateInputType = {
    id?: true;
    releaserId?: true;
    seekerId?: true;
    spotId?: true;
    latitude?: true;
    longitude?: true;
    approxLatitude?: true;
    approxLongitude?: true;
    status?: true;
    expiresAt?: true;
    acceptedAt?: true;
    cancelledAt?: true;
    foundAt?: true;
    occupiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkingHandoffAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingHandoffWhereInput;
    orderBy?: Prisma.ParkingHandoffOrderByWithRelationInput | Prisma.ParkingHandoffOrderByWithRelationInput[];
    cursor?: Prisma.ParkingHandoffWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingHandoffCountAggregateInputType;
    _avg?: ParkingHandoffAvgAggregateInputType;
    _sum?: ParkingHandoffSumAggregateInputType;
    _min?: ParkingHandoffMinAggregateInputType;
    _max?: ParkingHandoffMaxAggregateInputType;
};
export type GetParkingHandoffAggregateType<T extends ParkingHandoffAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingHandoff]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingHandoff[P]> : Prisma.GetScalarType<T[P], AggregateParkingHandoff[P]>;
};
export type ParkingHandoffGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingHandoffWhereInput;
    orderBy?: Prisma.ParkingHandoffOrderByWithAggregationInput | Prisma.ParkingHandoffOrderByWithAggregationInput[];
    by: Prisma.ParkingHandoffScalarFieldEnum[] | Prisma.ParkingHandoffScalarFieldEnum;
    having?: Prisma.ParkingHandoffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingHandoffCountAggregateInputType | true;
    _avg?: ParkingHandoffAvgAggregateInputType;
    _sum?: ParkingHandoffSumAggregateInputType;
    _min?: ParkingHandoffMinAggregateInputType;
    _max?: ParkingHandoffMaxAggregateInputType;
};
export type ParkingHandoffGroupByOutputType = {
    id: string;
    releaserId: string;
    seekerId: string | null;
    spotId: string | null;
    latitude: number;
    longitude: number;
    approxLatitude: number | null;
    approxLongitude: number | null;
    status: $Enums.HandoffStatus;
    expiresAt: Date;
    acceptedAt: Date | null;
    cancelledAt: Date | null;
    foundAt: Date | null;
    occupiedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkingHandoffCountAggregateOutputType | null;
    _avg: ParkingHandoffAvgAggregateOutputType | null;
    _sum: ParkingHandoffSumAggregateOutputType | null;
    _min: ParkingHandoffMinAggregateOutputType | null;
    _max: ParkingHandoffMaxAggregateOutputType | null;
};
type GetParkingHandoffGroupByPayload<T extends ParkingHandoffGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingHandoffGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingHandoffGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingHandoffGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingHandoffGroupByOutputType[P]>;
}>>;
export type ParkingHandoffWhereInput = {
    AND?: Prisma.ParkingHandoffWhereInput | Prisma.ParkingHandoffWhereInput[];
    OR?: Prisma.ParkingHandoffWhereInput[];
    NOT?: Prisma.ParkingHandoffWhereInput | Prisma.ParkingHandoffWhereInput[];
    id?: Prisma.StringFilter<"ParkingHandoff"> | string;
    releaserId?: Prisma.StringFilter<"ParkingHandoff"> | string;
    seekerId?: Prisma.StringNullableFilter<"ParkingHandoff"> | string | null;
    spotId?: Prisma.StringNullableFilter<"ParkingHandoff"> | string | null;
    latitude?: Prisma.FloatFilter<"ParkingHandoff"> | number;
    longitude?: Prisma.FloatFilter<"ParkingHandoff"> | number;
    approxLatitude?: Prisma.FloatNullableFilter<"ParkingHandoff"> | number | null;
    approxLongitude?: Prisma.FloatNullableFilter<"ParkingHandoff"> | number | null;
    status?: Prisma.EnumHandoffStatusFilter<"ParkingHandoff"> | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeFilter<"ParkingHandoff"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    foundAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    occupiedAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ParkingHandoff"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingHandoff"> | Date | string;
};
export type ParkingHandoffOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    releaserId?: Prisma.SortOrder;
    seekerId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    foundAt?: Prisma.SortOrder;
    occupiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingHandoffWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkingHandoffWhereInput | Prisma.ParkingHandoffWhereInput[];
    OR?: Prisma.ParkingHandoffWhereInput[];
    NOT?: Prisma.ParkingHandoffWhereInput | Prisma.ParkingHandoffWhereInput[];
    releaserId?: Prisma.StringFilter<"ParkingHandoff"> | string;
    seekerId?: Prisma.StringNullableFilter<"ParkingHandoff"> | string | null;
    spotId?: Prisma.StringNullableFilter<"ParkingHandoff"> | string | null;
    latitude?: Prisma.FloatFilter<"ParkingHandoff"> | number;
    longitude?: Prisma.FloatFilter<"ParkingHandoff"> | number;
    approxLatitude?: Prisma.FloatNullableFilter<"ParkingHandoff"> | number | null;
    approxLongitude?: Prisma.FloatNullableFilter<"ParkingHandoff"> | number | null;
    status?: Prisma.EnumHandoffStatusFilter<"ParkingHandoff"> | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeFilter<"ParkingHandoff"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    foundAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    occupiedAt?: Prisma.DateTimeNullableFilter<"ParkingHandoff"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ParkingHandoff"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingHandoff"> | Date | string;
}, "id">;
export type ParkingHandoffOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    releaserId?: Prisma.SortOrder;
    seekerId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    foundAt?: Prisma.SortOrder;
    occupiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingHandoffCountOrderByAggregateInput;
    _avg?: Prisma.ParkingHandoffAvgOrderByAggregateInput;
    _max?: Prisma.ParkingHandoffMaxOrderByAggregateInput;
    _min?: Prisma.ParkingHandoffMinOrderByAggregateInput;
    _sum?: Prisma.ParkingHandoffSumOrderByAggregateInput;
};
export type ParkingHandoffScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingHandoffScalarWhereWithAggregatesInput | Prisma.ParkingHandoffScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingHandoffScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingHandoffScalarWhereWithAggregatesInput | Prisma.ParkingHandoffScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingHandoff"> | string;
    releaserId?: Prisma.StringWithAggregatesFilter<"ParkingHandoff"> | string;
    seekerId?: Prisma.StringNullableWithAggregatesFilter<"ParkingHandoff"> | string | null;
    spotId?: Prisma.StringNullableWithAggregatesFilter<"ParkingHandoff"> | string | null;
    latitude?: Prisma.FloatWithAggregatesFilter<"ParkingHandoff"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"ParkingHandoff"> | number;
    approxLatitude?: Prisma.FloatNullableWithAggregatesFilter<"ParkingHandoff"> | number | null;
    approxLongitude?: Prisma.FloatNullableWithAggregatesFilter<"ParkingHandoff"> | number | null;
    status?: Prisma.EnumHandoffStatusWithAggregatesFilter<"ParkingHandoff"> | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingHandoff"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingHandoff"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingHandoff"> | Date | string | null;
    foundAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingHandoff"> | Date | string | null;
    occupiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingHandoff"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingHandoff"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingHandoff"> | Date | string;
};
export type ParkingHandoffCreateInput = {
    id?: string;
    releaserId: string;
    seekerId?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    approxLatitude?: number | null;
    approxLongitude?: number | null;
    status?: $Enums.HandoffStatus;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    foundAt?: Date | string | null;
    occupiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingHandoffUncheckedCreateInput = {
    id?: string;
    releaserId: string;
    seekerId?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    approxLatitude?: number | null;
    approxLongitude?: number | null;
    status?: $Enums.HandoffStatus;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    foundAt?: Date | string | null;
    occupiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingHandoffUpdateInput = {
    releaserId?: Prisma.StringFieldUpdateOperationsInput | string;
    seekerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    approxLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    approxLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumHandoffStatusFieldUpdateOperationsInput | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    foundAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    occupiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingHandoffUncheckedUpdateInput = {
    releaserId?: Prisma.StringFieldUpdateOperationsInput | string;
    seekerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    approxLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    approxLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumHandoffStatusFieldUpdateOperationsInput | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    foundAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    occupiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingHandoffCreateManyInput = {
    id?: string;
    releaserId: string;
    seekerId?: string | null;
    spotId?: string | null;
    latitude: number;
    longitude: number;
    approxLatitude?: number | null;
    approxLongitude?: number | null;
    status?: $Enums.HandoffStatus;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    foundAt?: Date | string | null;
    occupiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingHandoffUpdateManyMutationInput = {
    releaserId?: Prisma.StringFieldUpdateOperationsInput | string;
    seekerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    approxLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    approxLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumHandoffStatusFieldUpdateOperationsInput | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    foundAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    occupiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingHandoffUncheckedUpdateManyInput = {
    releaserId?: Prisma.StringFieldUpdateOperationsInput | string;
    seekerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spotId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    approxLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    approxLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumHandoffStatusFieldUpdateOperationsInput | $Enums.HandoffStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    foundAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    occupiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingHandoffCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    releaserId?: Prisma.SortOrder;
    seekerId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    foundAt?: Prisma.SortOrder;
    occupiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingHandoffAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
};
export type ParkingHandoffMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    releaserId?: Prisma.SortOrder;
    seekerId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    foundAt?: Prisma.SortOrder;
    occupiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingHandoffMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    releaserId?: Prisma.SortOrder;
    seekerId?: Prisma.SortOrder;
    spotId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    foundAt?: Prisma.SortOrder;
    occupiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingHandoffSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    approxLatitude?: Prisma.SortOrder;
    approxLongitude?: Prisma.SortOrder;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
};
export type EnumHandoffStatusFieldUpdateOperationsInput = {
    set?: $Enums.HandoffStatus;
};
export type ParkingHandoffSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    releaserId?: boolean;
    seekerId?: boolean;
    spotId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    approxLatitude?: boolean;
    approxLongitude?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    cancelledAt?: boolean;
    foundAt?: boolean;
    occupiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["parkingHandoff"]>;
export type ParkingHandoffSelectScalar = {
    id?: boolean;
    releaserId?: boolean;
    seekerId?: boolean;
    spotId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    approxLatitude?: boolean;
    approxLongitude?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    cancelledAt?: boolean;
    foundAt?: boolean;
    occupiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkingHandoffOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "releaserId" | "seekerId" | "spotId" | "latitude" | "longitude" | "approxLatitude" | "approxLongitude" | "status" | "expiresAt" | "acceptedAt" | "cancelledAt" | "foundAt" | "occupiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingHandoff"]>;
export type $ParkingHandoffPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingHandoff";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        releaserId: string;
        seekerId: string | null;
        spotId: string | null;
        latitude: number;
        longitude: number;
        approxLatitude: number | null;
        approxLongitude: number | null;
        status: $Enums.HandoffStatus;
        expiresAt: Date;
        acceptedAt: Date | null;
        cancelledAt: Date | null;
        foundAt: Date | null;
        occupiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parkingHandoff"]>;
    composites: {};
};
export type ParkingHandoffGetPayload<S extends boolean | null | undefined | ParkingHandoffDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload, S>;
export type ParkingHandoffCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingHandoffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingHandoffCountAggregateInputType | true;
};
export interface ParkingHandoffDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingHandoff'];
        meta: {
            name: 'ParkingHandoff';
        };
    };
    findUnique<T extends ParkingHandoffFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingHandoffFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingHandoffFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingHandoffFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingHandoffFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingHandoffFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingHandoffFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingHandoffFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingHandoffFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingHandoffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingHandoffCreateArgs>(args: Prisma.SelectSubset<T, ParkingHandoffCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingHandoffCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingHandoffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingHandoffDeleteArgs>(args: Prisma.SelectSubset<T, ParkingHandoffDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingHandoffUpdateArgs>(args: Prisma.SelectSubset<T, ParkingHandoffUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingHandoffDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingHandoffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingHandoffUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingHandoffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingHandoffUpsertArgs>(args: Prisma.SelectSubset<T, ParkingHandoffUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingHandoffClient<runtime.Types.Result.GetResult<Prisma.$ParkingHandoffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingHandoffFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingHandoffAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingHandoffCountArgs>(args?: Prisma.Subset<T, ParkingHandoffCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingHandoffCountAggregateOutputType> : number>;
    aggregate<T extends ParkingHandoffAggregateArgs>(args: Prisma.Subset<T, ParkingHandoffAggregateArgs>): Prisma.PrismaPromise<GetParkingHandoffAggregateType<T>>;
    groupBy<T extends ParkingHandoffGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingHandoffGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingHandoffGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingHandoffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingHandoffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingHandoffFieldRefs;
}
export interface Prisma__ParkingHandoffClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingHandoffFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingHandoff", 'String'>;
    readonly releaserId: Prisma.FieldRef<"ParkingHandoff", 'String'>;
    readonly seekerId: Prisma.FieldRef<"ParkingHandoff", 'String'>;
    readonly spotId: Prisma.FieldRef<"ParkingHandoff", 'String'>;
    readonly latitude: Prisma.FieldRef<"ParkingHandoff", 'Float'>;
    readonly longitude: Prisma.FieldRef<"ParkingHandoff", 'Float'>;
    readonly approxLatitude: Prisma.FieldRef<"ParkingHandoff", 'Float'>;
    readonly approxLongitude: Prisma.FieldRef<"ParkingHandoff", 'Float'>;
    readonly status: Prisma.FieldRef<"ParkingHandoff", 'HandoffStatus'>;
    readonly expiresAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
    readonly acceptedAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
    readonly foundAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
    readonly occupiedAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingHandoff", 'DateTime'>;
}
export type ParkingHandoffFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where: Prisma.ParkingHandoffWhereUniqueInput;
};
export type ParkingHandoffFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where: Prisma.ParkingHandoffWhereUniqueInput;
};
export type ParkingHandoffFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where?: Prisma.ParkingHandoffWhereInput;
    orderBy?: Prisma.ParkingHandoffOrderByWithRelationInput | Prisma.ParkingHandoffOrderByWithRelationInput[];
    cursor?: Prisma.ParkingHandoffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingHandoffScalarFieldEnum | Prisma.ParkingHandoffScalarFieldEnum[];
};
export type ParkingHandoffFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where?: Prisma.ParkingHandoffWhereInput;
    orderBy?: Prisma.ParkingHandoffOrderByWithRelationInput | Prisma.ParkingHandoffOrderByWithRelationInput[];
    cursor?: Prisma.ParkingHandoffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingHandoffScalarFieldEnum | Prisma.ParkingHandoffScalarFieldEnum[];
};
export type ParkingHandoffFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where?: Prisma.ParkingHandoffWhereInput;
    orderBy?: Prisma.ParkingHandoffOrderByWithRelationInput | Prisma.ParkingHandoffOrderByWithRelationInput[];
    cursor?: Prisma.ParkingHandoffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingHandoffScalarFieldEnum | Prisma.ParkingHandoffScalarFieldEnum[];
};
export type ParkingHandoffCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingHandoffCreateInput, Prisma.ParkingHandoffUncheckedCreateInput>;
};
export type ParkingHandoffCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingHandoffCreateManyInput | Prisma.ParkingHandoffCreateManyInput[];
};
export type ParkingHandoffUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingHandoffUpdateInput, Prisma.ParkingHandoffUncheckedUpdateInput>;
    where: Prisma.ParkingHandoffWhereUniqueInput;
};
export type ParkingHandoffUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingHandoffUpdateManyMutationInput, Prisma.ParkingHandoffUncheckedUpdateManyInput>;
    where?: Prisma.ParkingHandoffWhereInput;
    limit?: number;
};
export type ParkingHandoffUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where: Prisma.ParkingHandoffWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingHandoffCreateInput, Prisma.ParkingHandoffUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingHandoffUpdateInput, Prisma.ParkingHandoffUncheckedUpdateInput>;
};
export type ParkingHandoffDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
    where: Prisma.ParkingHandoffWhereUniqueInput;
};
export type ParkingHandoffDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingHandoffWhereInput;
    limit?: number;
};
export type ParkingHandoffFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingHandoffAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingHandoffDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingHandoffSelect<ExtArgs> | null;
    omit?: Prisma.ParkingHandoffOmit<ExtArgs> | null;
};
export {};
