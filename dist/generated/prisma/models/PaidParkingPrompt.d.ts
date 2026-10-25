import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaidParkingPromptModel = runtime.Types.Result.DefaultSelection<Prisma.$PaidParkingPromptPayload>;
export type AggregatePaidParkingPrompt = {
    _count: PaidParkingPromptCountAggregateOutputType | null;
    _min: PaidParkingPromptMinAggregateOutputType | null;
    _max: PaidParkingPromptMaxAggregateOutputType | null;
};
export type PaidParkingPromptMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    savedParkingLocationId: string | null;
    status: $Enums.PaidParkingPromptStatus | null;
    answeredAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaidParkingPromptMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    savedParkingLocationId: string | null;
    status: $Enums.PaidParkingPromptStatus | null;
    answeredAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaidParkingPromptCountAggregateOutputType = {
    id: number;
    userId: number;
    savedParkingLocationId: number;
    status: number;
    answeredAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaidParkingPromptMinAggregateInputType = {
    id?: true;
    userId?: true;
    savedParkingLocationId?: true;
    status?: true;
    answeredAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaidParkingPromptMaxAggregateInputType = {
    id?: true;
    userId?: true;
    savedParkingLocationId?: true;
    status?: true;
    answeredAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaidParkingPromptCountAggregateInputType = {
    id?: true;
    userId?: true;
    savedParkingLocationId?: true;
    status?: true;
    answeredAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaidParkingPromptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaidParkingPromptWhereInput;
    orderBy?: Prisma.PaidParkingPromptOrderByWithRelationInput | Prisma.PaidParkingPromptOrderByWithRelationInput[];
    cursor?: Prisma.PaidParkingPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaidParkingPromptCountAggregateInputType;
    _min?: PaidParkingPromptMinAggregateInputType;
    _max?: PaidParkingPromptMaxAggregateInputType;
};
export type GetPaidParkingPromptAggregateType<T extends PaidParkingPromptAggregateArgs> = {
    [P in keyof T & keyof AggregatePaidParkingPrompt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaidParkingPrompt[P]> : Prisma.GetScalarType<T[P], AggregatePaidParkingPrompt[P]>;
};
export type PaidParkingPromptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaidParkingPromptWhereInput;
    orderBy?: Prisma.PaidParkingPromptOrderByWithAggregationInput | Prisma.PaidParkingPromptOrderByWithAggregationInput[];
    by: Prisma.PaidParkingPromptScalarFieldEnum[] | Prisma.PaidParkingPromptScalarFieldEnum;
    having?: Prisma.PaidParkingPromptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaidParkingPromptCountAggregateInputType | true;
    _min?: PaidParkingPromptMinAggregateInputType;
    _max?: PaidParkingPromptMaxAggregateInputType;
};
export type PaidParkingPromptGroupByOutputType = {
    id: string;
    userId: string;
    savedParkingLocationId: string;
    status: $Enums.PaidParkingPromptStatus;
    answeredAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PaidParkingPromptCountAggregateOutputType | null;
    _min: PaidParkingPromptMinAggregateOutputType | null;
    _max: PaidParkingPromptMaxAggregateOutputType | null;
};
type GetPaidParkingPromptGroupByPayload<T extends PaidParkingPromptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaidParkingPromptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaidParkingPromptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaidParkingPromptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaidParkingPromptGroupByOutputType[P]>;
}>>;
export type PaidParkingPromptWhereInput = {
    AND?: Prisma.PaidParkingPromptWhereInput | Prisma.PaidParkingPromptWhereInput[];
    OR?: Prisma.PaidParkingPromptWhereInput[];
    NOT?: Prisma.PaidParkingPromptWhereInput | Prisma.PaidParkingPromptWhereInput[];
    id?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    userId?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    savedParkingLocationId?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    status?: Prisma.EnumPaidParkingPromptStatusFilter<"PaidParkingPrompt"> | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.DateTimeNullableFilter<"PaidParkingPrompt"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaidParkingPrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaidParkingPrompt"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PaidParkingPromptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    savedParkingLocationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PaidParkingPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PaidParkingPromptWhereInput | Prisma.PaidParkingPromptWhereInput[];
    OR?: Prisma.PaidParkingPromptWhereInput[];
    NOT?: Prisma.PaidParkingPromptWhereInput | Prisma.PaidParkingPromptWhereInput[];
    userId?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    savedParkingLocationId?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    status?: Prisma.EnumPaidParkingPromptStatusFilter<"PaidParkingPrompt"> | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.DateTimeNullableFilter<"PaidParkingPrompt"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaidParkingPrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaidParkingPrompt"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PaidParkingPromptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    savedParkingLocationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaidParkingPromptCountOrderByAggregateInput;
    _max?: Prisma.PaidParkingPromptMaxOrderByAggregateInput;
    _min?: Prisma.PaidParkingPromptMinOrderByAggregateInput;
};
export type PaidParkingPromptScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaidParkingPromptScalarWhereWithAggregatesInput | Prisma.PaidParkingPromptScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaidParkingPromptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaidParkingPromptScalarWhereWithAggregatesInput | Prisma.PaidParkingPromptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PaidParkingPrompt"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PaidParkingPrompt"> | string;
    savedParkingLocationId?: Prisma.StringWithAggregatesFilter<"PaidParkingPrompt"> | string;
    status?: Prisma.EnumPaidParkingPromptStatusWithAggregatesFilter<"PaidParkingPrompt"> | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PaidParkingPrompt"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaidParkingPrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaidParkingPrompt"> | Date | string;
};
export type PaidParkingPromptCreateInput = {
    id?: string;
    savedParkingLocationId: string;
    status?: $Enums.PaidParkingPromptStatus;
    answeredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPaidParkingPromptsInput;
};
export type PaidParkingPromptUncheckedCreateInput = {
    id?: string;
    userId: string;
    savedParkingLocationId: string;
    status?: $Enums.PaidParkingPromptStatus;
    answeredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaidParkingPromptUpdateInput = {
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPaidParkingPromptsNestedInput;
};
export type PaidParkingPromptUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaidParkingPromptCreateManyInput = {
    id?: string;
    userId: string;
    savedParkingLocationId: string;
    status?: $Enums.PaidParkingPromptStatus;
    answeredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaidParkingPromptUpdateManyMutationInput = {
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaidParkingPromptUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaidParkingPromptListRelationFilter = {
    every?: Prisma.PaidParkingPromptWhereInput;
    some?: Prisma.PaidParkingPromptWhereInput;
    none?: Prisma.PaidParkingPromptWhereInput;
};
export type PaidParkingPromptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaidParkingPromptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    savedParkingLocationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaidParkingPromptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    savedParkingLocationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaidParkingPromptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    savedParkingLocationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaidParkingPromptCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PaidParkingPromptCreateWithoutUserInput, Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput> | Prisma.PaidParkingPromptCreateWithoutUserInput[] | Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput | Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PaidParkingPromptCreateManyUserInputEnvelope;
    connect?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
};
export type PaidParkingPromptUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PaidParkingPromptCreateWithoutUserInput, Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput> | Prisma.PaidParkingPromptCreateWithoutUserInput[] | Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput | Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PaidParkingPromptCreateManyUserInputEnvelope;
    connect?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
};
export type PaidParkingPromptUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PaidParkingPromptCreateWithoutUserInput, Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput> | Prisma.PaidParkingPromptCreateWithoutUserInput[] | Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput | Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PaidParkingPromptUpsertWithWhereUniqueWithoutUserInput | Prisma.PaidParkingPromptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PaidParkingPromptCreateManyUserInputEnvelope;
    set?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    disconnect?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    delete?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    connect?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    update?: Prisma.PaidParkingPromptUpdateWithWhereUniqueWithoutUserInput | Prisma.PaidParkingPromptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PaidParkingPromptUpdateManyWithWhereWithoutUserInput | Prisma.PaidParkingPromptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PaidParkingPromptScalarWhereInput | Prisma.PaidParkingPromptScalarWhereInput[];
};
export type PaidParkingPromptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PaidParkingPromptCreateWithoutUserInput, Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput> | Prisma.PaidParkingPromptCreateWithoutUserInput[] | Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput | Prisma.PaidParkingPromptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PaidParkingPromptUpsertWithWhereUniqueWithoutUserInput | Prisma.PaidParkingPromptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PaidParkingPromptCreateManyUserInputEnvelope;
    set?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    disconnect?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    delete?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    connect?: Prisma.PaidParkingPromptWhereUniqueInput | Prisma.PaidParkingPromptWhereUniqueInput[];
    update?: Prisma.PaidParkingPromptUpdateWithWhereUniqueWithoutUserInput | Prisma.PaidParkingPromptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PaidParkingPromptUpdateManyWithWhereWithoutUserInput | Prisma.PaidParkingPromptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PaidParkingPromptScalarWhereInput | Prisma.PaidParkingPromptScalarWhereInput[];
};
export type EnumPaidParkingPromptStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaidParkingPromptStatus;
};
export type PaidParkingPromptCreateWithoutUserInput = {
    id?: string;
    savedParkingLocationId: string;
    status?: $Enums.PaidParkingPromptStatus;
    answeredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaidParkingPromptUncheckedCreateWithoutUserInput = {
    id?: string;
    savedParkingLocationId: string;
    status?: $Enums.PaidParkingPromptStatus;
    answeredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaidParkingPromptCreateOrConnectWithoutUserInput = {
    where: Prisma.PaidParkingPromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaidParkingPromptCreateWithoutUserInput, Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput>;
};
export type PaidParkingPromptCreateManyUserInputEnvelope = {
    data: Prisma.PaidParkingPromptCreateManyUserInput | Prisma.PaidParkingPromptCreateManyUserInput[];
};
export type PaidParkingPromptUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PaidParkingPromptWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaidParkingPromptUpdateWithoutUserInput, Prisma.PaidParkingPromptUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PaidParkingPromptCreateWithoutUserInput, Prisma.PaidParkingPromptUncheckedCreateWithoutUserInput>;
};
export type PaidParkingPromptUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PaidParkingPromptWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaidParkingPromptUpdateWithoutUserInput, Prisma.PaidParkingPromptUncheckedUpdateWithoutUserInput>;
};
export type PaidParkingPromptUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PaidParkingPromptScalarWhereInput;
    data: Prisma.XOR<Prisma.PaidParkingPromptUpdateManyMutationInput, Prisma.PaidParkingPromptUncheckedUpdateManyWithoutUserInput>;
};
export type PaidParkingPromptScalarWhereInput = {
    AND?: Prisma.PaidParkingPromptScalarWhereInput | Prisma.PaidParkingPromptScalarWhereInput[];
    OR?: Prisma.PaidParkingPromptScalarWhereInput[];
    NOT?: Prisma.PaidParkingPromptScalarWhereInput | Prisma.PaidParkingPromptScalarWhereInput[];
    id?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    userId?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    savedParkingLocationId?: Prisma.StringFilter<"PaidParkingPrompt"> | string;
    status?: Prisma.EnumPaidParkingPromptStatusFilter<"PaidParkingPrompt"> | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.DateTimeNullableFilter<"PaidParkingPrompt"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaidParkingPrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaidParkingPrompt"> | Date | string;
};
export type PaidParkingPromptCreateManyUserInput = {
    id?: string;
    savedParkingLocationId: string;
    status?: $Enums.PaidParkingPromptStatus;
    answeredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaidParkingPromptUpdateWithoutUserInput = {
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaidParkingPromptUncheckedUpdateWithoutUserInput = {
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaidParkingPromptUncheckedUpdateManyWithoutUserInput = {
    savedParkingLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaidParkingPromptStatusFieldUpdateOperationsInput | $Enums.PaidParkingPromptStatus;
    answeredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaidParkingPromptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    savedParkingLocationId?: boolean;
    status?: boolean;
    answeredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paidParkingPrompt"]>;
export type PaidParkingPromptSelectScalar = {
    id?: boolean;
    userId?: boolean;
    savedParkingLocationId?: boolean;
    status?: boolean;
    answeredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaidParkingPromptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "savedParkingLocationId" | "status" | "answeredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["paidParkingPrompt"]>;
export type PaidParkingPromptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PaidParkingPromptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaidParkingPrompt";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        savedParkingLocationId: string;
        status: $Enums.PaidParkingPromptStatus;
        answeredAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paidParkingPrompt"]>;
    composites: {};
};
export type PaidParkingPromptGetPayload<S extends boolean | null | undefined | PaidParkingPromptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload, S>;
export type PaidParkingPromptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaidParkingPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaidParkingPromptCountAggregateInputType | true;
};
export interface PaidParkingPromptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaidParkingPrompt'];
        meta: {
            name: 'PaidParkingPrompt';
        };
    };
    findUnique<T extends PaidParkingPromptFindUniqueArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaidParkingPromptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaidParkingPromptFindFirstArgs>(args?: Prisma.SelectSubset<T, PaidParkingPromptFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaidParkingPromptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaidParkingPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaidParkingPromptFindManyArgs>(args?: Prisma.SelectSubset<T, PaidParkingPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaidParkingPromptCreateArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptCreateArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaidParkingPromptCreateManyArgs>(args?: Prisma.SelectSubset<T, PaidParkingPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends PaidParkingPromptDeleteArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptDeleteArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaidParkingPromptUpdateArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptUpdateArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaidParkingPromptDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaidParkingPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaidParkingPromptUpdateManyArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends PaidParkingPromptUpsertArgs>(args: Prisma.SelectSubset<T, PaidParkingPromptUpsertArgs<ExtArgs>>): Prisma.Prisma__PaidParkingPromptClient<runtime.Types.Result.GetResult<Prisma.$PaidParkingPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.PaidParkingPromptFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.PaidParkingPromptAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends PaidParkingPromptCountArgs>(args?: Prisma.Subset<T, PaidParkingPromptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaidParkingPromptCountAggregateOutputType> : number>;
    aggregate<T extends PaidParkingPromptAggregateArgs>(args: Prisma.Subset<T, PaidParkingPromptAggregateArgs>): Prisma.PrismaPromise<GetPaidParkingPromptAggregateType<T>>;
    groupBy<T extends PaidParkingPromptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaidParkingPromptGroupByArgs['orderBy'];
    } : {
        orderBy?: PaidParkingPromptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaidParkingPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaidParkingPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaidParkingPromptFieldRefs;
}
export interface Prisma__PaidParkingPromptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaidParkingPromptFieldRefs {
    readonly id: Prisma.FieldRef<"PaidParkingPrompt", 'String'>;
    readonly userId: Prisma.FieldRef<"PaidParkingPrompt", 'String'>;
    readonly savedParkingLocationId: Prisma.FieldRef<"PaidParkingPrompt", 'String'>;
    readonly status: Prisma.FieldRef<"PaidParkingPrompt", 'PaidParkingPromptStatus'>;
    readonly answeredAt: Prisma.FieldRef<"PaidParkingPrompt", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PaidParkingPrompt", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaidParkingPrompt", 'DateTime'>;
}
export type PaidParkingPromptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where: Prisma.PaidParkingPromptWhereUniqueInput;
};
export type PaidParkingPromptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where: Prisma.PaidParkingPromptWhereUniqueInput;
};
export type PaidParkingPromptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where?: Prisma.PaidParkingPromptWhereInput;
    orderBy?: Prisma.PaidParkingPromptOrderByWithRelationInput | Prisma.PaidParkingPromptOrderByWithRelationInput[];
    cursor?: Prisma.PaidParkingPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaidParkingPromptScalarFieldEnum | Prisma.PaidParkingPromptScalarFieldEnum[];
};
export type PaidParkingPromptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where?: Prisma.PaidParkingPromptWhereInput;
    orderBy?: Prisma.PaidParkingPromptOrderByWithRelationInput | Prisma.PaidParkingPromptOrderByWithRelationInput[];
    cursor?: Prisma.PaidParkingPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaidParkingPromptScalarFieldEnum | Prisma.PaidParkingPromptScalarFieldEnum[];
};
export type PaidParkingPromptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where?: Prisma.PaidParkingPromptWhereInput;
    orderBy?: Prisma.PaidParkingPromptOrderByWithRelationInput | Prisma.PaidParkingPromptOrderByWithRelationInput[];
    cursor?: Prisma.PaidParkingPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaidParkingPromptScalarFieldEnum | Prisma.PaidParkingPromptScalarFieldEnum[];
};
export type PaidParkingPromptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaidParkingPromptCreateInput, Prisma.PaidParkingPromptUncheckedCreateInput>;
};
export type PaidParkingPromptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaidParkingPromptCreateManyInput | Prisma.PaidParkingPromptCreateManyInput[];
};
export type PaidParkingPromptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaidParkingPromptUpdateInput, Prisma.PaidParkingPromptUncheckedUpdateInput>;
    where: Prisma.PaidParkingPromptWhereUniqueInput;
};
export type PaidParkingPromptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaidParkingPromptUpdateManyMutationInput, Prisma.PaidParkingPromptUncheckedUpdateManyInput>;
    where?: Prisma.PaidParkingPromptWhereInput;
    limit?: number;
};
export type PaidParkingPromptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where: Prisma.PaidParkingPromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaidParkingPromptCreateInput, Prisma.PaidParkingPromptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaidParkingPromptUpdateInput, Prisma.PaidParkingPromptUncheckedUpdateInput>;
};
export type PaidParkingPromptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
    where: Prisma.PaidParkingPromptWhereUniqueInput;
};
export type PaidParkingPromptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaidParkingPromptWhereInput;
    limit?: number;
};
export type PaidParkingPromptFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type PaidParkingPromptAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type PaidParkingPromptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaidParkingPromptSelect<ExtArgs> | null;
    omit?: Prisma.PaidParkingPromptOmit<ExtArgs> | null;
    include?: Prisma.PaidParkingPromptInclude<ExtArgs> | null;
};
export {};
