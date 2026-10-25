import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserRatingModel = runtime.Types.Result.DefaultSelection<Prisma.$UserRatingPayload>;
export type AggregateUserRating = {
    _count: UserRatingCountAggregateOutputType | null;
    _avg: UserRatingAvgAggregateOutputType | null;
    _sum: UserRatingSumAggregateOutputType | null;
    _min: UserRatingMinAggregateOutputType | null;
    _max: UserRatingMaxAggregateOutputType | null;
};
export type UserRatingAvgAggregateOutputType = {
    rating: number | null;
};
export type UserRatingSumAggregateOutputType = {
    rating: number | null;
};
export type UserRatingMinAggregateOutputType = {
    id: string | null;
    rater_id: string | null;
    ratee_id: string | null;
    rating: number | null;
    review: string | null;
    status: $Enums.RatingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserRatingMaxAggregateOutputType = {
    id: string | null;
    rater_id: string | null;
    ratee_id: string | null;
    rating: number | null;
    review: string | null;
    status: $Enums.RatingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserRatingCountAggregateOutputType = {
    id: number;
    rater_id: number;
    ratee_id: number;
    rating: number;
    review: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserRatingAvgAggregateInputType = {
    rating?: true;
};
export type UserRatingSumAggregateInputType = {
    rating?: true;
};
export type UserRatingMinAggregateInputType = {
    id?: true;
    rater_id?: true;
    ratee_id?: true;
    rating?: true;
    review?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserRatingMaxAggregateInputType = {
    id?: true;
    rater_id?: true;
    ratee_id?: true;
    rating?: true;
    review?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserRatingCountAggregateInputType = {
    id?: true;
    rater_id?: true;
    ratee_id?: true;
    rating?: true;
    review?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserRatingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRatingWhereInput;
    orderBy?: Prisma.UserRatingOrderByWithRelationInput | Prisma.UserRatingOrderByWithRelationInput[];
    cursor?: Prisma.UserRatingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserRatingCountAggregateInputType;
    _avg?: UserRatingAvgAggregateInputType;
    _sum?: UserRatingSumAggregateInputType;
    _min?: UserRatingMinAggregateInputType;
    _max?: UserRatingMaxAggregateInputType;
};
export type GetUserRatingAggregateType<T extends UserRatingAggregateArgs> = {
    [P in keyof T & keyof AggregateUserRating]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserRating[P]> : Prisma.GetScalarType<T[P], AggregateUserRating[P]>;
};
export type UserRatingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRatingWhereInput;
    orderBy?: Prisma.UserRatingOrderByWithAggregationInput | Prisma.UserRatingOrderByWithAggregationInput[];
    by: Prisma.UserRatingScalarFieldEnum[] | Prisma.UserRatingScalarFieldEnum;
    having?: Prisma.UserRatingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserRatingCountAggregateInputType | true;
    _avg?: UserRatingAvgAggregateInputType;
    _sum?: UserRatingSumAggregateInputType;
    _min?: UserRatingMinAggregateInputType;
    _max?: UserRatingMaxAggregateInputType;
};
export type UserRatingGroupByOutputType = {
    id: string;
    rater_id: string;
    ratee_id: string;
    rating: number;
    review: string | null;
    status: $Enums.RatingStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: UserRatingCountAggregateOutputType | null;
    _avg: UserRatingAvgAggregateOutputType | null;
    _sum: UserRatingSumAggregateOutputType | null;
    _min: UserRatingMinAggregateOutputType | null;
    _max: UserRatingMaxAggregateOutputType | null;
};
type GetUserRatingGroupByPayload<T extends UserRatingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserRatingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserRatingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserRatingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserRatingGroupByOutputType[P]>;
}>>;
export type UserRatingWhereInput = {
    AND?: Prisma.UserRatingWhereInput | Prisma.UserRatingWhereInput[];
    OR?: Prisma.UserRatingWhereInput[];
    NOT?: Prisma.UserRatingWhereInput | Prisma.UserRatingWhereInput[];
    id?: Prisma.StringFilter<"UserRating"> | string;
    rater_id?: Prisma.StringFilter<"UserRating"> | string;
    ratee_id?: Prisma.StringFilter<"UserRating"> | string;
    rating?: Prisma.IntFilter<"UserRating"> | number;
    review?: Prisma.StringNullableFilter<"UserRating"> | string | null;
    status?: Prisma.EnumRatingStatusFilter<"UserRating"> | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFilter<"UserRating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserRating"> | Date | string;
    rater?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    ratee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserRatingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rater_id?: Prisma.SortOrder;
    ratee_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rater?: Prisma.UserOrderByWithRelationInput;
    ratee?: Prisma.UserOrderByWithRelationInput;
};
export type UserRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    rater_id_ratee_id?: Prisma.UserRatingRater_idRatee_idCompoundUniqueInput;
    AND?: Prisma.UserRatingWhereInput | Prisma.UserRatingWhereInput[];
    OR?: Prisma.UserRatingWhereInput[];
    NOT?: Prisma.UserRatingWhereInput | Prisma.UserRatingWhereInput[];
    rater_id?: Prisma.StringFilter<"UserRating"> | string;
    ratee_id?: Prisma.StringFilter<"UserRating"> | string;
    rating?: Prisma.IntFilter<"UserRating"> | number;
    review?: Prisma.StringNullableFilter<"UserRating"> | string | null;
    status?: Prisma.EnumRatingStatusFilter<"UserRating"> | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFilter<"UserRating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserRating"> | Date | string;
    rater?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    ratee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "rater_id_ratee_id">;
export type UserRatingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rater_id?: Prisma.SortOrder;
    ratee_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserRatingCountOrderByAggregateInput;
    _avg?: Prisma.UserRatingAvgOrderByAggregateInput;
    _max?: Prisma.UserRatingMaxOrderByAggregateInput;
    _min?: Prisma.UserRatingMinOrderByAggregateInput;
    _sum?: Prisma.UserRatingSumOrderByAggregateInput;
};
export type UserRatingScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserRatingScalarWhereWithAggregatesInput | Prisma.UserRatingScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserRatingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserRatingScalarWhereWithAggregatesInput | Prisma.UserRatingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserRating"> | string;
    rater_id?: Prisma.StringWithAggregatesFilter<"UserRating"> | string;
    ratee_id?: Prisma.StringWithAggregatesFilter<"UserRating"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"UserRating"> | number;
    review?: Prisma.StringNullableWithAggregatesFilter<"UserRating"> | string | null;
    status?: Prisma.EnumRatingStatusWithAggregatesFilter<"UserRating"> | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserRating"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserRating"> | Date | string;
};
export type UserRatingCreateInput = {
    id?: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rater: Prisma.UserCreateNestedOneWithoutUserRatingsGivenInput;
    ratee: Prisma.UserCreateNestedOneWithoutUserRatingsReceivedInput;
};
export type UserRatingUncheckedCreateInput = {
    id?: string;
    rater_id: string;
    ratee_id: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserRatingUpdateInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rater?: Prisma.UserUpdateOneRequiredWithoutUserRatingsGivenNestedInput;
    ratee?: Prisma.UserUpdateOneRequiredWithoutUserRatingsReceivedNestedInput;
};
export type UserRatingUncheckedUpdateInput = {
    rater_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratee_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingCreateManyInput = {
    id?: string;
    rater_id: string;
    ratee_id: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserRatingUpdateManyMutationInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingUncheckedUpdateManyInput = {
    rater_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratee_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingListRelationFilter = {
    every?: Prisma.UserRatingWhereInput;
    some?: Prisma.UserRatingWhereInput;
    none?: Prisma.UserRatingWhereInput;
};
export type UserRatingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserRatingRater_idRatee_idCompoundUniqueInput = {
    rater_id: string;
    ratee_id: string;
};
export type UserRatingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rater_id?: Prisma.SortOrder;
    ratee_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserRatingAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type UserRatingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rater_id?: Prisma.SortOrder;
    ratee_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserRatingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rater_id?: Prisma.SortOrder;
    ratee_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserRatingSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type UserRatingCreateNestedManyWithoutRaterInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRaterInput, Prisma.UserRatingUncheckedCreateWithoutRaterInput> | Prisma.UserRatingCreateWithoutRaterInput[] | Prisma.UserRatingUncheckedCreateWithoutRaterInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRaterInput | Prisma.UserRatingCreateOrConnectWithoutRaterInput[];
    createMany?: Prisma.UserRatingCreateManyRaterInputEnvelope;
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
};
export type UserRatingCreateNestedManyWithoutRateeInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRateeInput, Prisma.UserRatingUncheckedCreateWithoutRateeInput> | Prisma.UserRatingCreateWithoutRateeInput[] | Prisma.UserRatingUncheckedCreateWithoutRateeInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRateeInput | Prisma.UserRatingCreateOrConnectWithoutRateeInput[];
    createMany?: Prisma.UserRatingCreateManyRateeInputEnvelope;
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
};
export type UserRatingUncheckedCreateNestedManyWithoutRaterInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRaterInput, Prisma.UserRatingUncheckedCreateWithoutRaterInput> | Prisma.UserRatingCreateWithoutRaterInput[] | Prisma.UserRatingUncheckedCreateWithoutRaterInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRaterInput | Prisma.UserRatingCreateOrConnectWithoutRaterInput[];
    createMany?: Prisma.UserRatingCreateManyRaterInputEnvelope;
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
};
export type UserRatingUncheckedCreateNestedManyWithoutRateeInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRateeInput, Prisma.UserRatingUncheckedCreateWithoutRateeInput> | Prisma.UserRatingCreateWithoutRateeInput[] | Prisma.UserRatingUncheckedCreateWithoutRateeInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRateeInput | Prisma.UserRatingCreateOrConnectWithoutRateeInput[];
    createMany?: Prisma.UserRatingCreateManyRateeInputEnvelope;
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
};
export type UserRatingUpdateManyWithoutRaterNestedInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRaterInput, Prisma.UserRatingUncheckedCreateWithoutRaterInput> | Prisma.UserRatingCreateWithoutRaterInput[] | Prisma.UserRatingUncheckedCreateWithoutRaterInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRaterInput | Prisma.UserRatingCreateOrConnectWithoutRaterInput[];
    upsert?: Prisma.UserRatingUpsertWithWhereUniqueWithoutRaterInput | Prisma.UserRatingUpsertWithWhereUniqueWithoutRaterInput[];
    createMany?: Prisma.UserRatingCreateManyRaterInputEnvelope;
    set?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    disconnect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    delete?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    update?: Prisma.UserRatingUpdateWithWhereUniqueWithoutRaterInput | Prisma.UserRatingUpdateWithWhereUniqueWithoutRaterInput[];
    updateMany?: Prisma.UserRatingUpdateManyWithWhereWithoutRaterInput | Prisma.UserRatingUpdateManyWithWhereWithoutRaterInput[];
    deleteMany?: Prisma.UserRatingScalarWhereInput | Prisma.UserRatingScalarWhereInput[];
};
export type UserRatingUpdateManyWithoutRateeNestedInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRateeInput, Prisma.UserRatingUncheckedCreateWithoutRateeInput> | Prisma.UserRatingCreateWithoutRateeInput[] | Prisma.UserRatingUncheckedCreateWithoutRateeInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRateeInput | Prisma.UserRatingCreateOrConnectWithoutRateeInput[];
    upsert?: Prisma.UserRatingUpsertWithWhereUniqueWithoutRateeInput | Prisma.UserRatingUpsertWithWhereUniqueWithoutRateeInput[];
    createMany?: Prisma.UserRatingCreateManyRateeInputEnvelope;
    set?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    disconnect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    delete?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    update?: Prisma.UserRatingUpdateWithWhereUniqueWithoutRateeInput | Prisma.UserRatingUpdateWithWhereUniqueWithoutRateeInput[];
    updateMany?: Prisma.UserRatingUpdateManyWithWhereWithoutRateeInput | Prisma.UserRatingUpdateManyWithWhereWithoutRateeInput[];
    deleteMany?: Prisma.UserRatingScalarWhereInput | Prisma.UserRatingScalarWhereInput[];
};
export type UserRatingUncheckedUpdateManyWithoutRaterNestedInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRaterInput, Prisma.UserRatingUncheckedCreateWithoutRaterInput> | Prisma.UserRatingCreateWithoutRaterInput[] | Prisma.UserRatingUncheckedCreateWithoutRaterInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRaterInput | Prisma.UserRatingCreateOrConnectWithoutRaterInput[];
    upsert?: Prisma.UserRatingUpsertWithWhereUniqueWithoutRaterInput | Prisma.UserRatingUpsertWithWhereUniqueWithoutRaterInput[];
    createMany?: Prisma.UserRatingCreateManyRaterInputEnvelope;
    set?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    disconnect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    delete?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    update?: Prisma.UserRatingUpdateWithWhereUniqueWithoutRaterInput | Prisma.UserRatingUpdateWithWhereUniqueWithoutRaterInput[];
    updateMany?: Prisma.UserRatingUpdateManyWithWhereWithoutRaterInput | Prisma.UserRatingUpdateManyWithWhereWithoutRaterInput[];
    deleteMany?: Prisma.UserRatingScalarWhereInput | Prisma.UserRatingScalarWhereInput[];
};
export type UserRatingUncheckedUpdateManyWithoutRateeNestedInput = {
    create?: Prisma.XOR<Prisma.UserRatingCreateWithoutRateeInput, Prisma.UserRatingUncheckedCreateWithoutRateeInput> | Prisma.UserRatingCreateWithoutRateeInput[] | Prisma.UserRatingUncheckedCreateWithoutRateeInput[];
    connectOrCreate?: Prisma.UserRatingCreateOrConnectWithoutRateeInput | Prisma.UserRatingCreateOrConnectWithoutRateeInput[];
    upsert?: Prisma.UserRatingUpsertWithWhereUniqueWithoutRateeInput | Prisma.UserRatingUpsertWithWhereUniqueWithoutRateeInput[];
    createMany?: Prisma.UserRatingCreateManyRateeInputEnvelope;
    set?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    disconnect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    delete?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    connect?: Prisma.UserRatingWhereUniqueInput | Prisma.UserRatingWhereUniqueInput[];
    update?: Prisma.UserRatingUpdateWithWhereUniqueWithoutRateeInput | Prisma.UserRatingUpdateWithWhereUniqueWithoutRateeInput[];
    updateMany?: Prisma.UserRatingUpdateManyWithWhereWithoutRateeInput | Prisma.UserRatingUpdateManyWithWhereWithoutRateeInput[];
    deleteMany?: Prisma.UserRatingScalarWhereInput | Prisma.UserRatingScalarWhereInput[];
};
export type EnumRatingStatusFieldUpdateOperationsInput = {
    set?: $Enums.RatingStatus;
};
export type UserRatingCreateWithoutRaterInput = {
    id?: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ratee: Prisma.UserCreateNestedOneWithoutUserRatingsReceivedInput;
};
export type UserRatingUncheckedCreateWithoutRaterInput = {
    id?: string;
    ratee_id: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserRatingCreateOrConnectWithoutRaterInput = {
    where: Prisma.UserRatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRatingCreateWithoutRaterInput, Prisma.UserRatingUncheckedCreateWithoutRaterInput>;
};
export type UserRatingCreateManyRaterInputEnvelope = {
    data: Prisma.UserRatingCreateManyRaterInput | Prisma.UserRatingCreateManyRaterInput[];
};
export type UserRatingCreateWithoutRateeInput = {
    id?: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rater: Prisma.UserCreateNestedOneWithoutUserRatingsGivenInput;
};
export type UserRatingUncheckedCreateWithoutRateeInput = {
    id?: string;
    rater_id: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserRatingCreateOrConnectWithoutRateeInput = {
    where: Prisma.UserRatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRatingCreateWithoutRateeInput, Prisma.UserRatingUncheckedCreateWithoutRateeInput>;
};
export type UserRatingCreateManyRateeInputEnvelope = {
    data: Prisma.UserRatingCreateManyRateeInput | Prisma.UserRatingCreateManyRateeInput[];
};
export type UserRatingUpsertWithWhereUniqueWithoutRaterInput = {
    where: Prisma.UserRatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRatingUpdateWithoutRaterInput, Prisma.UserRatingUncheckedUpdateWithoutRaterInput>;
    create: Prisma.XOR<Prisma.UserRatingCreateWithoutRaterInput, Prisma.UserRatingUncheckedCreateWithoutRaterInput>;
};
export type UserRatingUpdateWithWhereUniqueWithoutRaterInput = {
    where: Prisma.UserRatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRatingUpdateWithoutRaterInput, Prisma.UserRatingUncheckedUpdateWithoutRaterInput>;
};
export type UserRatingUpdateManyWithWhereWithoutRaterInput = {
    where: Prisma.UserRatingScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRatingUpdateManyMutationInput, Prisma.UserRatingUncheckedUpdateManyWithoutRaterInput>;
};
export type UserRatingScalarWhereInput = {
    AND?: Prisma.UserRatingScalarWhereInput | Prisma.UserRatingScalarWhereInput[];
    OR?: Prisma.UserRatingScalarWhereInput[];
    NOT?: Prisma.UserRatingScalarWhereInput | Prisma.UserRatingScalarWhereInput[];
    id?: Prisma.StringFilter<"UserRating"> | string;
    rater_id?: Prisma.StringFilter<"UserRating"> | string;
    ratee_id?: Prisma.StringFilter<"UserRating"> | string;
    rating?: Prisma.IntFilter<"UserRating"> | number;
    review?: Prisma.StringNullableFilter<"UserRating"> | string | null;
    status?: Prisma.EnumRatingStatusFilter<"UserRating"> | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFilter<"UserRating"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserRating"> | Date | string;
};
export type UserRatingUpsertWithWhereUniqueWithoutRateeInput = {
    where: Prisma.UserRatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRatingUpdateWithoutRateeInput, Prisma.UserRatingUncheckedUpdateWithoutRateeInput>;
    create: Prisma.XOR<Prisma.UserRatingCreateWithoutRateeInput, Prisma.UserRatingUncheckedCreateWithoutRateeInput>;
};
export type UserRatingUpdateWithWhereUniqueWithoutRateeInput = {
    where: Prisma.UserRatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRatingUpdateWithoutRateeInput, Prisma.UserRatingUncheckedUpdateWithoutRateeInput>;
};
export type UserRatingUpdateManyWithWhereWithoutRateeInput = {
    where: Prisma.UserRatingScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRatingUpdateManyMutationInput, Prisma.UserRatingUncheckedUpdateManyWithoutRateeInput>;
};
export type UserRatingCreateManyRaterInput = {
    id?: string;
    ratee_id: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserRatingCreateManyRateeInput = {
    id?: string;
    rater_id: string;
    rating: number;
    review?: string | null;
    status?: $Enums.RatingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserRatingUpdateWithoutRaterInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ratee?: Prisma.UserUpdateOneRequiredWithoutUserRatingsReceivedNestedInput;
};
export type UserRatingUncheckedUpdateWithoutRaterInput = {
    ratee_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingUncheckedUpdateManyWithoutRaterInput = {
    ratee_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingUpdateWithoutRateeInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rater?: Prisma.UserUpdateOneRequiredWithoutUserRatingsGivenNestedInput;
};
export type UserRatingUncheckedUpdateWithoutRateeInput = {
    rater_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingUncheckedUpdateManyWithoutRateeInput = {
    rater_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRatingStatusFieldUpdateOperationsInput | $Enums.RatingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRatingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rater_id?: boolean;
    ratee_id?: boolean;
    rating?: boolean;
    review?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rater?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ratee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRating"]>;
export type UserRatingSelectScalar = {
    id?: boolean;
    rater_id?: boolean;
    ratee_id?: boolean;
    rating?: boolean;
    review?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserRatingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rater_id" | "ratee_id" | "rating" | "review" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userRating"]>;
export type UserRatingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rater?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    ratee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserRatingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserRating";
    objects: {
        rater: Prisma.$UserPayload<ExtArgs>;
        ratee: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rater_id: string;
        ratee_id: string;
        rating: number;
        review: string | null;
        status: $Enums.RatingStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userRating"]>;
    composites: {};
};
export type UserRatingGetPayload<S extends boolean | null | undefined | UserRatingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserRatingPayload, S>;
export type UserRatingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserRatingCountAggregateInputType | true;
};
export interface UserRatingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserRating'];
        meta: {
            name: 'UserRating';
        };
    };
    findUnique<T extends UserRatingFindUniqueArgs>(args: Prisma.SelectSubset<T, UserRatingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserRatingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserRatingFindFirstArgs>(args?: Prisma.SelectSubset<T, UserRatingFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserRatingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserRatingFindManyArgs>(args?: Prisma.SelectSubset<T, UserRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserRatingCreateArgs>(args: Prisma.SelectSubset<T, UserRatingCreateArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserRatingCreateManyArgs>(args?: Prisma.SelectSubset<T, UserRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserRatingDeleteArgs>(args: Prisma.SelectSubset<T, UserRatingDeleteArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserRatingUpdateArgs>(args: Prisma.SelectSubset<T, UserRatingUpdateArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserRatingDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserRatingUpdateManyArgs>(args: Prisma.SelectSubset<T, UserRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserRatingUpsertArgs>(args: Prisma.SelectSubset<T, UserRatingUpsertArgs<ExtArgs>>): Prisma.Prisma__UserRatingClient<runtime.Types.Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.UserRatingFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.UserRatingAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends UserRatingCountArgs>(args?: Prisma.Subset<T, UserRatingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserRatingCountAggregateOutputType> : number>;
    aggregate<T extends UserRatingAggregateArgs>(args: Prisma.Subset<T, UserRatingAggregateArgs>): Prisma.PrismaPromise<GetUserRatingAggregateType<T>>;
    groupBy<T extends UserRatingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserRatingGroupByArgs['orderBy'];
    } : {
        orderBy?: UserRatingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserRatingFieldRefs;
}
export interface Prisma__UserRatingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rater<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ratee<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserRatingFieldRefs {
    readonly id: Prisma.FieldRef<"UserRating", 'String'>;
    readonly rater_id: Prisma.FieldRef<"UserRating", 'String'>;
    readonly ratee_id: Prisma.FieldRef<"UserRating", 'String'>;
    readonly rating: Prisma.FieldRef<"UserRating", 'Int'>;
    readonly review: Prisma.FieldRef<"UserRating", 'String'>;
    readonly status: Prisma.FieldRef<"UserRating", 'RatingStatus'>;
    readonly createdAt: Prisma.FieldRef<"UserRating", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserRating", 'DateTime'>;
}
export type UserRatingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where: Prisma.UserRatingWhereUniqueInput;
};
export type UserRatingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where: Prisma.UserRatingWhereUniqueInput;
};
export type UserRatingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where?: Prisma.UserRatingWhereInput;
    orderBy?: Prisma.UserRatingOrderByWithRelationInput | Prisma.UserRatingOrderByWithRelationInput[];
    cursor?: Prisma.UserRatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRatingScalarFieldEnum | Prisma.UserRatingScalarFieldEnum[];
};
export type UserRatingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where?: Prisma.UserRatingWhereInput;
    orderBy?: Prisma.UserRatingOrderByWithRelationInput | Prisma.UserRatingOrderByWithRelationInput[];
    cursor?: Prisma.UserRatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRatingScalarFieldEnum | Prisma.UserRatingScalarFieldEnum[];
};
export type UserRatingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where?: Prisma.UserRatingWhereInput;
    orderBy?: Prisma.UserRatingOrderByWithRelationInput | Prisma.UserRatingOrderByWithRelationInput[];
    cursor?: Prisma.UserRatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRatingScalarFieldEnum | Prisma.UserRatingScalarFieldEnum[];
};
export type UserRatingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserRatingCreateInput, Prisma.UserRatingUncheckedCreateInput>;
};
export type UserRatingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserRatingCreateManyInput | Prisma.UserRatingCreateManyInput[];
};
export type UserRatingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserRatingUpdateInput, Prisma.UserRatingUncheckedUpdateInput>;
    where: Prisma.UserRatingWhereUniqueInput;
};
export type UserRatingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserRatingUpdateManyMutationInput, Prisma.UserRatingUncheckedUpdateManyInput>;
    where?: Prisma.UserRatingWhereInput;
    limit?: number;
};
export type UserRatingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where: Prisma.UserRatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRatingCreateInput, Prisma.UserRatingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserRatingUpdateInput, Prisma.UserRatingUncheckedUpdateInput>;
};
export type UserRatingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
    where: Prisma.UserRatingWhereUniqueInput;
};
export type UserRatingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRatingWhereInput;
    limit?: number;
};
export type UserRatingFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type UserRatingAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type UserRatingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRatingSelect<ExtArgs> | null;
    omit?: Prisma.UserRatingOmit<ExtArgs> | null;
    include?: Prisma.UserRatingInclude<ExtArgs> | null;
};
export {};
