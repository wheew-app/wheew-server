import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingAreaRatingModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingAreaRatingPayload>;
export type AggregateParkingAreaRating = {
    _count: ParkingAreaRatingCountAggregateOutputType | null;
    _avg: ParkingAreaRatingAvgAggregateOutputType | null;
    _sum: ParkingAreaRatingSumAggregateOutputType | null;
    _min: ParkingAreaRatingMinAggregateOutputType | null;
    _max: ParkingAreaRatingMaxAggregateOutputType | null;
};
export type ParkingAreaRatingAvgAggregateOutputType = {
    rating: number | null;
};
export type ParkingAreaRatingSumAggregateOutputType = {
    rating: number | null;
};
export type ParkingAreaRatingMinAggregateOutputType = {
    id: string | null;
    parkingAreaId: string | null;
    userId: string | null;
    rating: number | null;
    review: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingAreaRatingMaxAggregateOutputType = {
    id: string | null;
    parkingAreaId: string | null;
    userId: string | null;
    rating: number | null;
    review: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingAreaRatingCountAggregateOutputType = {
    id: number;
    parkingAreaId: number;
    userId: number;
    rating: number;
    review: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkingAreaRatingAvgAggregateInputType = {
    rating?: true;
};
export type ParkingAreaRatingSumAggregateInputType = {
    rating?: true;
};
export type ParkingAreaRatingMinAggregateInputType = {
    id?: true;
    parkingAreaId?: true;
    userId?: true;
    rating?: true;
    review?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingAreaRatingMaxAggregateInputType = {
    id?: true;
    parkingAreaId?: true;
    userId?: true;
    rating?: true;
    review?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingAreaRatingCountAggregateInputType = {
    id?: true;
    parkingAreaId?: true;
    userId?: true;
    rating?: true;
    review?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkingAreaRatingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaRatingWhereInput;
    orderBy?: Prisma.ParkingAreaRatingOrderByWithRelationInput | Prisma.ParkingAreaRatingOrderByWithRelationInput[];
    cursor?: Prisma.ParkingAreaRatingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingAreaRatingCountAggregateInputType;
    _avg?: ParkingAreaRatingAvgAggregateInputType;
    _sum?: ParkingAreaRatingSumAggregateInputType;
    _min?: ParkingAreaRatingMinAggregateInputType;
    _max?: ParkingAreaRatingMaxAggregateInputType;
};
export type GetParkingAreaRatingAggregateType<T extends ParkingAreaRatingAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingAreaRating]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingAreaRating[P]> : Prisma.GetScalarType<T[P], AggregateParkingAreaRating[P]>;
};
export type ParkingAreaRatingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaRatingWhereInput;
    orderBy?: Prisma.ParkingAreaRatingOrderByWithAggregationInput | Prisma.ParkingAreaRatingOrderByWithAggregationInput[];
    by: Prisma.ParkingAreaRatingScalarFieldEnum[] | Prisma.ParkingAreaRatingScalarFieldEnum;
    having?: Prisma.ParkingAreaRatingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingAreaRatingCountAggregateInputType | true;
    _avg?: ParkingAreaRatingAvgAggregateInputType;
    _sum?: ParkingAreaRatingSumAggregateInputType;
    _min?: ParkingAreaRatingMinAggregateInputType;
    _max?: ParkingAreaRatingMaxAggregateInputType;
};
export type ParkingAreaRatingGroupByOutputType = {
    id: string;
    parkingAreaId: string;
    userId: string;
    rating: number;
    review: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkingAreaRatingCountAggregateOutputType | null;
    _avg: ParkingAreaRatingAvgAggregateOutputType | null;
    _sum: ParkingAreaRatingSumAggregateOutputType | null;
    _min: ParkingAreaRatingMinAggregateOutputType | null;
    _max: ParkingAreaRatingMaxAggregateOutputType | null;
};
type GetParkingAreaRatingGroupByPayload<T extends ParkingAreaRatingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingAreaRatingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingAreaRatingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingAreaRatingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingAreaRatingGroupByOutputType[P]>;
}>>;
export type ParkingAreaRatingWhereInput = {
    AND?: Prisma.ParkingAreaRatingWhereInput | Prisma.ParkingAreaRatingWhereInput[];
    OR?: Prisma.ParkingAreaRatingWhereInput[];
    NOT?: Prisma.ParkingAreaRatingWhereInput | Prisma.ParkingAreaRatingWhereInput[];
    id?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    parkingAreaId?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    userId?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    rating?: Prisma.IntFilter<"ParkingAreaRating"> | number;
    review?: Prisma.StringNullableFilter<"ParkingAreaRating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ParkingAreaRating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingAreaRating"> | Date | string;
    parkingArea?: Prisma.XOR<Prisma.ParkingAreaScalarRelationFilter, Prisma.ParkingAreaWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ParkingAreaRatingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parkingAreaId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parkingArea?: Prisma.ParkingAreaOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ParkingAreaRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    parkingAreaId_userId?: Prisma.ParkingAreaRatingParkingAreaIdUserIdCompoundUniqueInput;
    AND?: Prisma.ParkingAreaRatingWhereInput | Prisma.ParkingAreaRatingWhereInput[];
    OR?: Prisma.ParkingAreaRatingWhereInput[];
    NOT?: Prisma.ParkingAreaRatingWhereInput | Prisma.ParkingAreaRatingWhereInput[];
    parkingAreaId?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    userId?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    rating?: Prisma.IntFilter<"ParkingAreaRating"> | number;
    review?: Prisma.StringNullableFilter<"ParkingAreaRating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ParkingAreaRating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingAreaRating"> | Date | string;
    parkingArea?: Prisma.XOR<Prisma.ParkingAreaScalarRelationFilter, Prisma.ParkingAreaWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "parkingAreaId_userId">;
export type ParkingAreaRatingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parkingAreaId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingAreaRatingCountOrderByAggregateInput;
    _avg?: Prisma.ParkingAreaRatingAvgOrderByAggregateInput;
    _max?: Prisma.ParkingAreaRatingMaxOrderByAggregateInput;
    _min?: Prisma.ParkingAreaRatingMinOrderByAggregateInput;
    _sum?: Prisma.ParkingAreaRatingSumOrderByAggregateInput;
};
export type ParkingAreaRatingScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingAreaRatingScalarWhereWithAggregatesInput | Prisma.ParkingAreaRatingScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingAreaRatingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingAreaRatingScalarWhereWithAggregatesInput | Prisma.ParkingAreaRatingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingAreaRating"> | string;
    parkingAreaId?: Prisma.StringWithAggregatesFilter<"ParkingAreaRating"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ParkingAreaRating"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"ParkingAreaRating"> | number;
    review?: Prisma.StringNullableWithAggregatesFilter<"ParkingAreaRating"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingAreaRating"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingAreaRating"> | Date | string;
};
export type ParkingAreaRatingCreateInput = {
    id?: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parkingArea: Prisma.ParkingAreaCreateNestedOneWithoutRatingsInput;
    user: Prisma.UserCreateNestedOneWithoutParkingAreaRatingsInput;
};
export type ParkingAreaRatingUncheckedCreateInput = {
    id?: string;
    parkingAreaId: string;
    userId: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingAreaRatingUpdateInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parkingArea?: Prisma.ParkingAreaUpdateOneRequiredWithoutRatingsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutParkingAreaRatingsNestedInput;
};
export type ParkingAreaRatingUncheckedUpdateInput = {
    parkingAreaId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingCreateManyInput = {
    id?: string;
    parkingAreaId: string;
    userId: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingAreaRatingUpdateManyMutationInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingUncheckedUpdateManyInput = {
    parkingAreaId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingListRelationFilter = {
    every?: Prisma.ParkingAreaRatingWhereInput;
    some?: Prisma.ParkingAreaRatingWhereInput;
    none?: Prisma.ParkingAreaRatingWhereInput;
};
export type ParkingAreaRatingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParkingAreaRatingParkingAreaIdUserIdCompoundUniqueInput = {
    parkingAreaId: string;
    userId: string;
};
export type ParkingAreaRatingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkingAreaId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingAreaRatingAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ParkingAreaRatingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkingAreaId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingAreaRatingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkingAreaId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingAreaRatingSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ParkingAreaRatingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput> | Prisma.ParkingAreaRatingCreateWithoutUserInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyUserInputEnvelope;
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
};
export type ParkingAreaRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput> | Prisma.ParkingAreaRatingCreateWithoutUserInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyUserInputEnvelope;
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
};
export type ParkingAreaRatingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput> | Prisma.ParkingAreaRatingCreateWithoutUserInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutUserInput | Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyUserInputEnvelope;
    set?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    disconnect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    delete?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    update?: Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutUserInput | Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutUserInput | Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParkingAreaRatingScalarWhereInput | Prisma.ParkingAreaRatingScalarWhereInput[];
};
export type ParkingAreaRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput> | Prisma.ParkingAreaRatingCreateWithoutUserInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutUserInput | Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyUserInputEnvelope;
    set?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    disconnect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    delete?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    update?: Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutUserInput | Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutUserInput | Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParkingAreaRatingScalarWhereInput | Prisma.ParkingAreaRatingScalarWhereInput[];
};
export type ParkingAreaRatingCreateNestedManyWithoutParkingAreaInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput> | Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyParkingAreaInputEnvelope;
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
};
export type ParkingAreaRatingUncheckedCreateNestedManyWithoutParkingAreaInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput> | Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyParkingAreaInputEnvelope;
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
};
export type ParkingAreaRatingUpdateManyWithoutParkingAreaNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput> | Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput[];
    upsert?: Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutParkingAreaInput | Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutParkingAreaInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyParkingAreaInputEnvelope;
    set?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    disconnect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    delete?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    update?: Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutParkingAreaInput | Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutParkingAreaInput[];
    updateMany?: Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutParkingAreaInput | Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutParkingAreaInput[];
    deleteMany?: Prisma.ParkingAreaRatingScalarWhereInput | Prisma.ParkingAreaRatingScalarWhereInput[];
};
export type ParkingAreaRatingUncheckedUpdateManyWithoutParkingAreaNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput> | Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput[] | Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput[];
    connectOrCreate?: Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput | Prisma.ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput[];
    upsert?: Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutParkingAreaInput | Prisma.ParkingAreaRatingUpsertWithWhereUniqueWithoutParkingAreaInput[];
    createMany?: Prisma.ParkingAreaRatingCreateManyParkingAreaInputEnvelope;
    set?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    disconnect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    delete?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    connect?: Prisma.ParkingAreaRatingWhereUniqueInput | Prisma.ParkingAreaRatingWhereUniqueInput[];
    update?: Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutParkingAreaInput | Prisma.ParkingAreaRatingUpdateWithWhereUniqueWithoutParkingAreaInput[];
    updateMany?: Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutParkingAreaInput | Prisma.ParkingAreaRatingUpdateManyWithWhereWithoutParkingAreaInput[];
    deleteMany?: Prisma.ParkingAreaRatingScalarWhereInput | Prisma.ParkingAreaRatingScalarWhereInput[];
};
export type ParkingAreaRatingCreateWithoutUserInput = {
    id?: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parkingArea: Prisma.ParkingAreaCreateNestedOneWithoutRatingsInput;
};
export type ParkingAreaRatingUncheckedCreateWithoutUserInput = {
    id?: string;
    parkingAreaId: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingAreaRatingCreateOrConnectWithoutUserInput = {
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput>;
};
export type ParkingAreaRatingCreateManyUserInputEnvelope = {
    data: Prisma.ParkingAreaRatingCreateManyUserInput | Prisma.ParkingAreaRatingCreateManyUserInput[];
};
export type ParkingAreaRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingAreaRatingUpdateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutUserInput>;
};
export type ParkingAreaRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingAreaRatingUpdateWithoutUserInput, Prisma.ParkingAreaRatingUncheckedUpdateWithoutUserInput>;
};
export type ParkingAreaRatingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ParkingAreaRatingScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingAreaRatingUpdateManyMutationInput, Prisma.ParkingAreaRatingUncheckedUpdateManyWithoutUserInput>;
};
export type ParkingAreaRatingScalarWhereInput = {
    AND?: Prisma.ParkingAreaRatingScalarWhereInput | Prisma.ParkingAreaRatingScalarWhereInput[];
    OR?: Prisma.ParkingAreaRatingScalarWhereInput[];
    NOT?: Prisma.ParkingAreaRatingScalarWhereInput | Prisma.ParkingAreaRatingScalarWhereInput[];
    id?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    parkingAreaId?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    userId?: Prisma.StringFilter<"ParkingAreaRating"> | string;
    rating?: Prisma.IntFilter<"ParkingAreaRating"> | number;
    review?: Prisma.StringNullableFilter<"ParkingAreaRating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ParkingAreaRating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingAreaRating"> | Date | string;
};
export type ParkingAreaRatingCreateWithoutParkingAreaInput = {
    id?: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutParkingAreaRatingsInput;
};
export type ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput = {
    id?: string;
    userId: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingAreaRatingCreateOrConnectWithoutParkingAreaInput = {
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput>;
};
export type ParkingAreaRatingCreateManyParkingAreaInputEnvelope = {
    data: Prisma.ParkingAreaRatingCreateManyParkingAreaInput | Prisma.ParkingAreaRatingCreateManyParkingAreaInput[];
};
export type ParkingAreaRatingUpsertWithWhereUniqueWithoutParkingAreaInput = {
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingAreaRatingUpdateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedUpdateWithoutParkingAreaInput>;
    create: Prisma.XOR<Prisma.ParkingAreaRatingCreateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedCreateWithoutParkingAreaInput>;
};
export type ParkingAreaRatingUpdateWithWhereUniqueWithoutParkingAreaInput = {
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingAreaRatingUpdateWithoutParkingAreaInput, Prisma.ParkingAreaRatingUncheckedUpdateWithoutParkingAreaInput>;
};
export type ParkingAreaRatingUpdateManyWithWhereWithoutParkingAreaInput = {
    where: Prisma.ParkingAreaRatingScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingAreaRatingUpdateManyMutationInput, Prisma.ParkingAreaRatingUncheckedUpdateManyWithoutParkingAreaInput>;
};
export type ParkingAreaRatingCreateManyUserInput = {
    id?: string;
    parkingAreaId: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingAreaRatingUpdateWithoutUserInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parkingArea?: Prisma.ParkingAreaUpdateOneRequiredWithoutRatingsNestedInput;
};
export type ParkingAreaRatingUncheckedUpdateWithoutUserInput = {
    parkingAreaId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingUncheckedUpdateManyWithoutUserInput = {
    parkingAreaId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingCreateManyParkingAreaInput = {
    id?: string;
    userId: string;
    rating: number;
    review?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingAreaRatingUpdateWithoutParkingAreaInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutParkingAreaRatingsNestedInput;
};
export type ParkingAreaRatingUncheckedUpdateWithoutParkingAreaInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingUncheckedUpdateManyWithoutParkingAreaInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingAreaRatingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkingAreaId?: boolean;
    userId?: boolean;
    rating?: boolean;
    review?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parkingArea?: boolean | Prisma.ParkingAreaDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingAreaRating"]>;
export type ParkingAreaRatingSelectScalar = {
    id?: boolean;
    parkingAreaId?: boolean;
    userId?: boolean;
    rating?: boolean;
    review?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkingAreaRatingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parkingAreaId" | "userId" | "rating" | "review" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingAreaRating"]>;
export type ParkingAreaRatingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parkingArea?: boolean | Prisma.ParkingAreaDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ParkingAreaRatingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingAreaRating";
    objects: {
        parkingArea: Prisma.$ParkingAreaPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parkingAreaId: string;
        userId: string;
        rating: number;
        review: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parkingAreaRating"]>;
    composites: {};
};
export type ParkingAreaRatingGetPayload<S extends boolean | null | undefined | ParkingAreaRatingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload, S>;
export type ParkingAreaRatingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingAreaRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingAreaRatingCountAggregateInputType | true;
};
export interface ParkingAreaRatingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingAreaRating'];
        meta: {
            name: 'ParkingAreaRating';
        };
    };
    findUnique<T extends ParkingAreaRatingFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingAreaRatingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingAreaRatingFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingAreaRatingFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingAreaRatingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingAreaRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingAreaRatingFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingAreaRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingAreaRatingCreateArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingAreaRatingCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingAreaRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingAreaRatingDeleteArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingAreaRatingUpdateArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingAreaRatingDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingAreaRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingAreaRatingUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingAreaRatingUpsertArgs>(args: Prisma.SelectSubset<T, ParkingAreaRatingUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaRatingClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingAreaRatingFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingAreaRatingAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingAreaRatingCountArgs>(args?: Prisma.Subset<T, ParkingAreaRatingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingAreaRatingCountAggregateOutputType> : number>;
    aggregate<T extends ParkingAreaRatingAggregateArgs>(args: Prisma.Subset<T, ParkingAreaRatingAggregateArgs>): Prisma.PrismaPromise<GetParkingAreaRatingAggregateType<T>>;
    groupBy<T extends ParkingAreaRatingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingAreaRatingGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingAreaRatingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingAreaRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingAreaRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingAreaRatingFieldRefs;
}
export interface Prisma__ParkingAreaRatingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parkingArea<T extends Prisma.ParkingAreaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkingAreaDefaultArgs<ExtArgs>>): Prisma.Prisma__ParkingAreaClient<runtime.Types.Result.GetResult<Prisma.$ParkingAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingAreaRatingFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingAreaRating", 'String'>;
    readonly parkingAreaId: Prisma.FieldRef<"ParkingAreaRating", 'String'>;
    readonly userId: Prisma.FieldRef<"ParkingAreaRating", 'String'>;
    readonly rating: Prisma.FieldRef<"ParkingAreaRating", 'Int'>;
    readonly review: Prisma.FieldRef<"ParkingAreaRating", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ParkingAreaRating", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingAreaRating", 'DateTime'>;
}
export type ParkingAreaRatingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
};
export type ParkingAreaRatingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
};
export type ParkingAreaRatingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingAreaRatingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingAreaRatingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParkingAreaRatingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingAreaRatingCreateInput, Prisma.ParkingAreaRatingUncheckedCreateInput>;
};
export type ParkingAreaRatingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingAreaRatingCreateManyInput | Prisma.ParkingAreaRatingCreateManyInput[];
};
export type ParkingAreaRatingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingAreaRatingUpdateInput, Prisma.ParkingAreaRatingUncheckedUpdateInput>;
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
};
export type ParkingAreaRatingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingAreaRatingUpdateManyMutationInput, Prisma.ParkingAreaRatingUncheckedUpdateManyInput>;
    where?: Prisma.ParkingAreaRatingWhereInput;
    limit?: number;
};
export type ParkingAreaRatingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingAreaRatingCreateInput, Prisma.ParkingAreaRatingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingAreaRatingUpdateInput, Prisma.ParkingAreaRatingUncheckedUpdateInput>;
};
export type ParkingAreaRatingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
    where: Prisma.ParkingAreaRatingWhereUniqueInput;
};
export type ParkingAreaRatingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingAreaRatingWhereInput;
    limit?: number;
};
export type ParkingAreaRatingFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingAreaRatingAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingAreaRatingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingAreaRatingSelect<ExtArgs> | null;
    omit?: Prisma.ParkingAreaRatingOmit<ExtArgs> | null;
    include?: Prisma.ParkingAreaRatingInclude<ExtArgs> | null;
};
export {};
