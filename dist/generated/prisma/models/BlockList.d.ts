import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlockListModel = runtime.Types.Result.DefaultSelection<Prisma.$BlockListPayload>;
export type AggregateBlockList = {
    _count: BlockListCountAggregateOutputType | null;
    _min: BlockListMinAggregateOutputType | null;
    _max: BlockListMaxAggregateOutputType | null;
};
export type BlockListMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    blocked_user_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BlockListMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    blocked_user_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BlockListCountAggregateOutputType = {
    id: number;
    user_id: number;
    blocked_user_id: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BlockListMinAggregateInputType = {
    id?: true;
    user_id?: true;
    blocked_user_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BlockListMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    blocked_user_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BlockListCountAggregateInputType = {
    id?: true;
    user_id?: true;
    blocked_user_id?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BlockListAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockListWhereInput;
    orderBy?: Prisma.BlockListOrderByWithRelationInput | Prisma.BlockListOrderByWithRelationInput[];
    cursor?: Prisma.BlockListWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlockListCountAggregateInputType;
    _min?: BlockListMinAggregateInputType;
    _max?: BlockListMaxAggregateInputType;
};
export type GetBlockListAggregateType<T extends BlockListAggregateArgs> = {
    [P in keyof T & keyof AggregateBlockList]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlockList[P]> : Prisma.GetScalarType<T[P], AggregateBlockList[P]>;
};
export type BlockListGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockListWhereInput;
    orderBy?: Prisma.BlockListOrderByWithAggregationInput | Prisma.BlockListOrderByWithAggregationInput[];
    by: Prisma.BlockListScalarFieldEnum[] | Prisma.BlockListScalarFieldEnum;
    having?: Prisma.BlockListScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlockListCountAggregateInputType | true;
    _min?: BlockListMinAggregateInputType;
    _max?: BlockListMaxAggregateInputType;
};
export type BlockListGroupByOutputType = {
    id: string;
    user_id: string;
    blocked_user_id: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BlockListCountAggregateOutputType | null;
    _min: BlockListMinAggregateOutputType | null;
    _max: BlockListMaxAggregateOutputType | null;
};
type GetBlockListGroupByPayload<T extends BlockListGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlockListGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlockListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlockListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlockListGroupByOutputType[P]>;
}>>;
export type BlockListWhereInput = {
    AND?: Prisma.BlockListWhereInput | Prisma.BlockListWhereInput[];
    OR?: Prisma.BlockListWhereInput[];
    NOT?: Prisma.BlockListWhereInput | Prisma.BlockListWhereInput[];
    id?: Prisma.StringFilter<"BlockList"> | string;
    user_id?: Prisma.StringFilter<"BlockList"> | string;
    blocked_user_id?: Prisma.StringFilter<"BlockList"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlockList"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlockList"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    blocked_user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BlockListOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    blocked_user_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    blocked_user?: Prisma.UserOrderByWithRelationInput;
};
export type BlockListWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_blocked_user_id?: Prisma.BlockListUser_idBlocked_user_idCompoundUniqueInput;
    AND?: Prisma.BlockListWhereInput | Prisma.BlockListWhereInput[];
    OR?: Prisma.BlockListWhereInput[];
    NOT?: Prisma.BlockListWhereInput | Prisma.BlockListWhereInput[];
    user_id?: Prisma.StringFilter<"BlockList"> | string;
    blocked_user_id?: Prisma.StringFilter<"BlockList"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlockList"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlockList"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    blocked_user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "user_id_blocked_user_id">;
export type BlockListOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    blocked_user_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BlockListCountOrderByAggregateInput;
    _max?: Prisma.BlockListMaxOrderByAggregateInput;
    _min?: Prisma.BlockListMinOrderByAggregateInput;
};
export type BlockListScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlockListScalarWhereWithAggregatesInput | Prisma.BlockListScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlockListScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlockListScalarWhereWithAggregatesInput | Prisma.BlockListScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BlockList"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"BlockList"> | string;
    blocked_user_id?: Prisma.StringWithAggregatesFilter<"BlockList"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BlockList"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BlockList"> | Date | string;
};
export type BlockListCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBlockListsInput;
    blocked_user: Prisma.UserCreateNestedOneWithoutBlockListsByInput;
};
export type BlockListUncheckedCreateInput = {
    id?: string;
    user_id: string;
    blocked_user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlockListUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBlockListsNestedInput;
    blocked_user?: Prisma.UserUpdateOneRequiredWithoutBlockListsByNestedInput;
};
export type BlockListUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    blocked_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListCreateManyInput = {
    id?: string;
    user_id: string;
    blocked_user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlockListUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    blocked_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListListRelationFilter = {
    every?: Prisma.BlockListWhereInput;
    some?: Prisma.BlockListWhereInput;
    none?: Prisma.BlockListWhereInput;
};
export type BlockListOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BlockListUser_idBlocked_user_idCompoundUniqueInput = {
    user_id: string;
    blocked_user_id: string;
};
export type BlockListCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    blocked_user_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlockListMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    blocked_user_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlockListMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    blocked_user_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlockListCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutUserInput, Prisma.BlockListUncheckedCreateWithoutUserInput> | Prisma.BlockListCreateWithoutUserInput[] | Prisma.BlockListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutUserInput | Prisma.BlockListCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BlockListCreateManyUserInputEnvelope;
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
};
export type BlockListCreateNestedManyWithoutBlocked_userInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutBlocked_userInput, Prisma.BlockListUncheckedCreateWithoutBlocked_userInput> | Prisma.BlockListCreateWithoutBlocked_userInput[] | Prisma.BlockListUncheckedCreateWithoutBlocked_userInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutBlocked_userInput | Prisma.BlockListCreateOrConnectWithoutBlocked_userInput[];
    createMany?: Prisma.BlockListCreateManyBlocked_userInputEnvelope;
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
};
export type BlockListUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutUserInput, Prisma.BlockListUncheckedCreateWithoutUserInput> | Prisma.BlockListCreateWithoutUserInput[] | Prisma.BlockListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutUserInput | Prisma.BlockListCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BlockListCreateManyUserInputEnvelope;
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
};
export type BlockListUncheckedCreateNestedManyWithoutBlocked_userInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutBlocked_userInput, Prisma.BlockListUncheckedCreateWithoutBlocked_userInput> | Prisma.BlockListCreateWithoutBlocked_userInput[] | Prisma.BlockListUncheckedCreateWithoutBlocked_userInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutBlocked_userInput | Prisma.BlockListCreateOrConnectWithoutBlocked_userInput[];
    createMany?: Prisma.BlockListCreateManyBlocked_userInputEnvelope;
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
};
export type BlockListUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutUserInput, Prisma.BlockListUncheckedCreateWithoutUserInput> | Prisma.BlockListCreateWithoutUserInput[] | Prisma.BlockListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutUserInput | Prisma.BlockListCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BlockListUpsertWithWhereUniqueWithoutUserInput | Prisma.BlockListUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BlockListCreateManyUserInputEnvelope;
    set?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    disconnect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    delete?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    update?: Prisma.BlockListUpdateWithWhereUniqueWithoutUserInput | Prisma.BlockListUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BlockListUpdateManyWithWhereWithoutUserInput | Prisma.BlockListUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BlockListScalarWhereInput | Prisma.BlockListScalarWhereInput[];
};
export type BlockListUpdateManyWithoutBlocked_userNestedInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutBlocked_userInput, Prisma.BlockListUncheckedCreateWithoutBlocked_userInput> | Prisma.BlockListCreateWithoutBlocked_userInput[] | Prisma.BlockListUncheckedCreateWithoutBlocked_userInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutBlocked_userInput | Prisma.BlockListCreateOrConnectWithoutBlocked_userInput[];
    upsert?: Prisma.BlockListUpsertWithWhereUniqueWithoutBlocked_userInput | Prisma.BlockListUpsertWithWhereUniqueWithoutBlocked_userInput[];
    createMany?: Prisma.BlockListCreateManyBlocked_userInputEnvelope;
    set?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    disconnect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    delete?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    update?: Prisma.BlockListUpdateWithWhereUniqueWithoutBlocked_userInput | Prisma.BlockListUpdateWithWhereUniqueWithoutBlocked_userInput[];
    updateMany?: Prisma.BlockListUpdateManyWithWhereWithoutBlocked_userInput | Prisma.BlockListUpdateManyWithWhereWithoutBlocked_userInput[];
    deleteMany?: Prisma.BlockListScalarWhereInput | Prisma.BlockListScalarWhereInput[];
};
export type BlockListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutUserInput, Prisma.BlockListUncheckedCreateWithoutUserInput> | Prisma.BlockListCreateWithoutUserInput[] | Prisma.BlockListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutUserInput | Prisma.BlockListCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BlockListUpsertWithWhereUniqueWithoutUserInput | Prisma.BlockListUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BlockListCreateManyUserInputEnvelope;
    set?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    disconnect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    delete?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    update?: Prisma.BlockListUpdateWithWhereUniqueWithoutUserInput | Prisma.BlockListUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BlockListUpdateManyWithWhereWithoutUserInput | Prisma.BlockListUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BlockListScalarWhereInput | Prisma.BlockListScalarWhereInput[];
};
export type BlockListUncheckedUpdateManyWithoutBlocked_userNestedInput = {
    create?: Prisma.XOR<Prisma.BlockListCreateWithoutBlocked_userInput, Prisma.BlockListUncheckedCreateWithoutBlocked_userInput> | Prisma.BlockListCreateWithoutBlocked_userInput[] | Prisma.BlockListUncheckedCreateWithoutBlocked_userInput[];
    connectOrCreate?: Prisma.BlockListCreateOrConnectWithoutBlocked_userInput | Prisma.BlockListCreateOrConnectWithoutBlocked_userInput[];
    upsert?: Prisma.BlockListUpsertWithWhereUniqueWithoutBlocked_userInput | Prisma.BlockListUpsertWithWhereUniqueWithoutBlocked_userInput[];
    createMany?: Prisma.BlockListCreateManyBlocked_userInputEnvelope;
    set?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    disconnect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    delete?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    connect?: Prisma.BlockListWhereUniqueInput | Prisma.BlockListWhereUniqueInput[];
    update?: Prisma.BlockListUpdateWithWhereUniqueWithoutBlocked_userInput | Prisma.BlockListUpdateWithWhereUniqueWithoutBlocked_userInput[];
    updateMany?: Prisma.BlockListUpdateManyWithWhereWithoutBlocked_userInput | Prisma.BlockListUpdateManyWithWhereWithoutBlocked_userInput[];
    deleteMany?: Prisma.BlockListScalarWhereInput | Prisma.BlockListScalarWhereInput[];
};
export type BlockListCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    blocked_user: Prisma.UserCreateNestedOneWithoutBlockListsByInput;
};
export type BlockListUncheckedCreateWithoutUserInput = {
    id?: string;
    blocked_user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlockListCreateOrConnectWithoutUserInput = {
    where: Prisma.BlockListWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockListCreateWithoutUserInput, Prisma.BlockListUncheckedCreateWithoutUserInput>;
};
export type BlockListCreateManyUserInputEnvelope = {
    data: Prisma.BlockListCreateManyUserInput | Prisma.BlockListCreateManyUserInput[];
};
export type BlockListCreateWithoutBlocked_userInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBlockListsInput;
};
export type BlockListUncheckedCreateWithoutBlocked_userInput = {
    id?: string;
    user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlockListCreateOrConnectWithoutBlocked_userInput = {
    where: Prisma.BlockListWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockListCreateWithoutBlocked_userInput, Prisma.BlockListUncheckedCreateWithoutBlocked_userInput>;
};
export type BlockListCreateManyBlocked_userInputEnvelope = {
    data: Prisma.BlockListCreateManyBlocked_userInput | Prisma.BlockListCreateManyBlocked_userInput[];
};
export type BlockListUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BlockListWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlockListUpdateWithoutUserInput, Prisma.BlockListUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BlockListCreateWithoutUserInput, Prisma.BlockListUncheckedCreateWithoutUserInput>;
};
export type BlockListUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BlockListWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlockListUpdateWithoutUserInput, Prisma.BlockListUncheckedUpdateWithoutUserInput>;
};
export type BlockListUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BlockListScalarWhereInput;
    data: Prisma.XOR<Prisma.BlockListUpdateManyMutationInput, Prisma.BlockListUncheckedUpdateManyWithoutUserInput>;
};
export type BlockListScalarWhereInput = {
    AND?: Prisma.BlockListScalarWhereInput | Prisma.BlockListScalarWhereInput[];
    OR?: Prisma.BlockListScalarWhereInput[];
    NOT?: Prisma.BlockListScalarWhereInput | Prisma.BlockListScalarWhereInput[];
    id?: Prisma.StringFilter<"BlockList"> | string;
    user_id?: Prisma.StringFilter<"BlockList"> | string;
    blocked_user_id?: Prisma.StringFilter<"BlockList"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlockList"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlockList"> | Date | string;
};
export type BlockListUpsertWithWhereUniqueWithoutBlocked_userInput = {
    where: Prisma.BlockListWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlockListUpdateWithoutBlocked_userInput, Prisma.BlockListUncheckedUpdateWithoutBlocked_userInput>;
    create: Prisma.XOR<Prisma.BlockListCreateWithoutBlocked_userInput, Prisma.BlockListUncheckedCreateWithoutBlocked_userInput>;
};
export type BlockListUpdateWithWhereUniqueWithoutBlocked_userInput = {
    where: Prisma.BlockListWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlockListUpdateWithoutBlocked_userInput, Prisma.BlockListUncheckedUpdateWithoutBlocked_userInput>;
};
export type BlockListUpdateManyWithWhereWithoutBlocked_userInput = {
    where: Prisma.BlockListScalarWhereInput;
    data: Prisma.XOR<Prisma.BlockListUpdateManyMutationInput, Prisma.BlockListUncheckedUpdateManyWithoutBlocked_userInput>;
};
export type BlockListCreateManyUserInput = {
    id?: string;
    blocked_user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlockListCreateManyBlocked_userInput = {
    id?: string;
    user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlockListUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blocked_user?: Prisma.UserUpdateOneRequiredWithoutBlockListsByNestedInput;
};
export type BlockListUncheckedUpdateWithoutUserInput = {
    blocked_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListUncheckedUpdateManyWithoutUserInput = {
    blocked_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListUpdateWithoutBlocked_userInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBlockListsNestedInput;
};
export type BlockListUncheckedUpdateWithoutBlocked_userInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListUncheckedUpdateManyWithoutBlocked_userInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    blocked_user_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked_user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blockList"]>;
export type BlockListSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    blocked_user_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BlockListOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "blocked_user_id" | "createdAt" | "updatedAt", ExtArgs["result"]["blockList"]>;
export type BlockListInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked_user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BlockListPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlockList";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        blocked_user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        blocked_user_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["blockList"]>;
    composites: {};
};
export type BlockListGetPayload<S extends boolean | null | undefined | BlockListDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlockListPayload, S>;
export type BlockListCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlockListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlockListCountAggregateInputType | true;
};
export interface BlockListDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlockList'];
        meta: {
            name: 'BlockList';
        };
    };
    findUnique<T extends BlockListFindUniqueArgs>(args: Prisma.SelectSubset<T, BlockListFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlockListFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlockListFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlockListFindFirstArgs>(args?: Prisma.SelectSubset<T, BlockListFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlockListFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlockListFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlockListFindManyArgs>(args?: Prisma.SelectSubset<T, BlockListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlockListCreateArgs>(args: Prisma.SelectSubset<T, BlockListCreateArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlockListCreateManyArgs>(args?: Prisma.SelectSubset<T, BlockListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BlockListDeleteArgs>(args: Prisma.SelectSubset<T, BlockListDeleteArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlockListUpdateArgs>(args: Prisma.SelectSubset<T, BlockListUpdateArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlockListDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlockListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlockListUpdateManyArgs>(args: Prisma.SelectSubset<T, BlockListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BlockListUpsertArgs>(args: Prisma.SelectSubset<T, BlockListUpsertArgs<ExtArgs>>): Prisma.Prisma__BlockListClient<runtime.Types.Result.GetResult<Prisma.$BlockListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.BlockListFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.BlockListAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends BlockListCountArgs>(args?: Prisma.Subset<T, BlockListCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlockListCountAggregateOutputType> : number>;
    aggregate<T extends BlockListAggregateArgs>(args: Prisma.Subset<T, BlockListAggregateArgs>): Prisma.PrismaPromise<GetBlockListAggregateType<T>>;
    groupBy<T extends BlockListGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlockListGroupByArgs['orderBy'];
    } : {
        orderBy?: BlockListGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlockListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlockListFieldRefs;
}
export interface Prisma__BlockListClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    blocked_user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlockListFieldRefs {
    readonly id: Prisma.FieldRef<"BlockList", 'String'>;
    readonly user_id: Prisma.FieldRef<"BlockList", 'String'>;
    readonly blocked_user_id: Prisma.FieldRef<"BlockList", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BlockList", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BlockList", 'DateTime'>;
}
export type BlockListFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where: Prisma.BlockListWhereUniqueInput;
};
export type BlockListFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where: Prisma.BlockListWhereUniqueInput;
};
export type BlockListFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where?: Prisma.BlockListWhereInput;
    orderBy?: Prisma.BlockListOrderByWithRelationInput | Prisma.BlockListOrderByWithRelationInput[];
    cursor?: Prisma.BlockListWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockListScalarFieldEnum | Prisma.BlockListScalarFieldEnum[];
};
export type BlockListFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where?: Prisma.BlockListWhereInput;
    orderBy?: Prisma.BlockListOrderByWithRelationInput | Prisma.BlockListOrderByWithRelationInput[];
    cursor?: Prisma.BlockListWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockListScalarFieldEnum | Prisma.BlockListScalarFieldEnum[];
};
export type BlockListFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where?: Prisma.BlockListWhereInput;
    orderBy?: Prisma.BlockListOrderByWithRelationInput | Prisma.BlockListOrderByWithRelationInput[];
    cursor?: Prisma.BlockListWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockListScalarFieldEnum | Prisma.BlockListScalarFieldEnum[];
};
export type BlockListCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockListCreateInput, Prisma.BlockListUncheckedCreateInput>;
};
export type BlockListCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlockListCreateManyInput | Prisma.BlockListCreateManyInput[];
};
export type BlockListUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockListUpdateInput, Prisma.BlockListUncheckedUpdateInput>;
    where: Prisma.BlockListWhereUniqueInput;
};
export type BlockListUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlockListUpdateManyMutationInput, Prisma.BlockListUncheckedUpdateManyInput>;
    where?: Prisma.BlockListWhereInput;
    limit?: number;
};
export type BlockListUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where: Prisma.BlockListWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockListCreateInput, Prisma.BlockListUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlockListUpdateInput, Prisma.BlockListUncheckedUpdateInput>;
};
export type BlockListDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
    where: Prisma.BlockListWhereUniqueInput;
};
export type BlockListDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockListWhereInput;
    limit?: number;
};
export type BlockListFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type BlockListAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type BlockListDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockListSelect<ExtArgs> | null;
    omit?: Prisma.BlockListOmit<ExtArgs> | null;
    include?: Prisma.BlockListInclude<ExtArgs> | null;
};
export {};
