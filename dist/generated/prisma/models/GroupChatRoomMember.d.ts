import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GroupChatRoomMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$GroupChatRoomMemberPayload>;
export type AggregateGroupChatRoomMember = {
    _count: GroupChatRoomMemberCountAggregateOutputType | null;
    _min: GroupChatRoomMemberMinAggregateOutputType | null;
    _max: GroupChatRoomMemberMaxAggregateOutputType | null;
};
export type GroupChatRoomMemberMinAggregateOutputType = {
    id: string | null;
    groupChatRoom_id: string | null;
    user_id: string | null;
    last_read_message_id: string | null;
    group_role: $Enums.GroupRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GroupChatRoomMemberMaxAggregateOutputType = {
    id: string | null;
    groupChatRoom_id: string | null;
    user_id: string | null;
    last_read_message_id: string | null;
    group_role: $Enums.GroupRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GroupChatRoomMemberCountAggregateOutputType = {
    id: number;
    groupChatRoom_id: number;
    user_id: number;
    last_read_message_id: number;
    group_role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GroupChatRoomMemberMinAggregateInputType = {
    id?: true;
    groupChatRoom_id?: true;
    user_id?: true;
    last_read_message_id?: true;
    group_role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GroupChatRoomMemberMaxAggregateInputType = {
    id?: true;
    groupChatRoom_id?: true;
    user_id?: true;
    last_read_message_id?: true;
    group_role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GroupChatRoomMemberCountAggregateInputType = {
    id?: true;
    groupChatRoom_id?: true;
    user_id?: true;
    last_read_message_id?: true;
    group_role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GroupChatRoomMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomMemberWhereInput;
    orderBy?: Prisma.GroupChatRoomMemberOrderByWithRelationInput | Prisma.GroupChatRoomMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GroupChatRoomMemberCountAggregateInputType;
    _min?: GroupChatRoomMemberMinAggregateInputType;
    _max?: GroupChatRoomMemberMaxAggregateInputType;
};
export type GetGroupChatRoomMemberAggregateType<T extends GroupChatRoomMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateGroupChatRoomMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGroupChatRoomMember[P]> : Prisma.GetScalarType<T[P], AggregateGroupChatRoomMember[P]>;
};
export type GroupChatRoomMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomMemberWhereInput;
    orderBy?: Prisma.GroupChatRoomMemberOrderByWithAggregationInput | Prisma.GroupChatRoomMemberOrderByWithAggregationInput[];
    by: Prisma.GroupChatRoomMemberScalarFieldEnum[] | Prisma.GroupChatRoomMemberScalarFieldEnum;
    having?: Prisma.GroupChatRoomMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupChatRoomMemberCountAggregateInputType | true;
    _min?: GroupChatRoomMemberMinAggregateInputType;
    _max?: GroupChatRoomMemberMaxAggregateInputType;
};
export type GroupChatRoomMemberGroupByOutputType = {
    id: string;
    groupChatRoom_id: string;
    user_id: string;
    last_read_message_id: string | null;
    group_role: $Enums.GroupRole;
    createdAt: Date;
    updatedAt: Date;
    _count: GroupChatRoomMemberCountAggregateOutputType | null;
    _min: GroupChatRoomMemberMinAggregateOutputType | null;
    _max: GroupChatRoomMemberMaxAggregateOutputType | null;
};
type GetGroupChatRoomMemberGroupByPayload<T extends GroupChatRoomMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GroupChatRoomMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GroupChatRoomMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GroupChatRoomMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GroupChatRoomMemberGroupByOutputType[P]>;
}>>;
export type GroupChatRoomMemberWhereInput = {
    AND?: Prisma.GroupChatRoomMemberWhereInput | Prisma.GroupChatRoomMemberWhereInput[];
    OR?: Prisma.GroupChatRoomMemberWhereInput[];
    NOT?: Prisma.GroupChatRoomMemberWhereInput | Prisma.GroupChatRoomMemberWhereInput[];
    id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    groupChatRoom_id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    user_id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    last_read_message_id?: Prisma.StringNullableFilter<"GroupChatRoomMember"> | string | null;
    group_role?: Prisma.EnumGroupRoleFilter<"GroupChatRoomMember"> | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFilter<"GroupChatRoomMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GroupChatRoomMember"> | Date | string;
    groupChatRoom?: Prisma.XOR<Prisma.GroupChatRoomScalarRelationFilter, Prisma.GroupChatRoomWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type GroupChatRoomMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupChatRoom_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    last_read_message_id?: Prisma.SortOrder;
    group_role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    groupChatRoom?: Prisma.GroupChatRoomOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type GroupChatRoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    groupChatRoom_id_user_id?: Prisma.GroupChatRoomMemberGroupChatRoom_idUser_idCompoundUniqueInput;
    AND?: Prisma.GroupChatRoomMemberWhereInput | Prisma.GroupChatRoomMemberWhereInput[];
    OR?: Prisma.GroupChatRoomMemberWhereInput[];
    NOT?: Prisma.GroupChatRoomMemberWhereInput | Prisma.GroupChatRoomMemberWhereInput[];
    groupChatRoom_id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    user_id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    last_read_message_id?: Prisma.StringNullableFilter<"GroupChatRoomMember"> | string | null;
    group_role?: Prisma.EnumGroupRoleFilter<"GroupChatRoomMember"> | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFilter<"GroupChatRoomMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GroupChatRoomMember"> | Date | string;
    groupChatRoom?: Prisma.XOR<Prisma.GroupChatRoomScalarRelationFilter, Prisma.GroupChatRoomWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "groupChatRoom_id_user_id">;
export type GroupChatRoomMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupChatRoom_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    last_read_message_id?: Prisma.SortOrder;
    group_role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GroupChatRoomMemberCountOrderByAggregateInput;
    _max?: Prisma.GroupChatRoomMemberMaxOrderByAggregateInput;
    _min?: Prisma.GroupChatRoomMemberMinOrderByAggregateInput;
};
export type GroupChatRoomMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.GroupChatRoomMemberScalarWhereWithAggregatesInput | Prisma.GroupChatRoomMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.GroupChatRoomMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GroupChatRoomMemberScalarWhereWithAggregatesInput | Prisma.GroupChatRoomMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GroupChatRoomMember"> | string;
    groupChatRoom_id?: Prisma.StringWithAggregatesFilter<"GroupChatRoomMember"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"GroupChatRoomMember"> | string;
    last_read_message_id?: Prisma.StringNullableWithAggregatesFilter<"GroupChatRoomMember"> | string | null;
    group_role?: Prisma.EnumGroupRoleWithAggregatesFilter<"GroupChatRoomMember"> | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GroupChatRoomMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"GroupChatRoomMember"> | Date | string;
};
export type GroupChatRoomMemberCreateInput = {
    id?: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupChatRoom: Prisma.GroupChatRoomCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutGroupChatRoomsInput;
};
export type GroupChatRoomMemberUncheckedCreateInput = {
    id?: string;
    groupChatRoom_id: string;
    user_id: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomMemberUpdateInput = {
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupChatRoom?: Prisma.GroupChatRoomUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutGroupChatRoomsNestedInput;
};
export type GroupChatRoomMemberUncheckedUpdateInput = {
    groupChatRoom_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberCreateManyInput = {
    id?: string;
    groupChatRoom_id: string;
    user_id: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomMemberUpdateManyMutationInput = {
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberUncheckedUpdateManyInput = {
    groupChatRoom_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberListRelationFilter = {
    every?: Prisma.GroupChatRoomMemberWhereInput;
    some?: Prisma.GroupChatRoomMemberWhereInput;
    none?: Prisma.GroupChatRoomMemberWhereInput;
};
export type GroupChatRoomMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GroupChatRoomMemberGroupChatRoom_idUser_idCompoundUniqueInput = {
    groupChatRoom_id: string;
    user_id: string;
};
export type GroupChatRoomMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupChatRoom_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    last_read_message_id?: Prisma.SortOrder;
    group_role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GroupChatRoomMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupChatRoom_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    last_read_message_id?: Prisma.SortOrder;
    group_role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GroupChatRoomMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupChatRoom_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    last_read_message_id?: Prisma.SortOrder;
    group_role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GroupChatRoomMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput> | Prisma.GroupChatRoomMemberCreateWithoutUserInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyUserInputEnvelope;
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
};
export type GroupChatRoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput> | Prisma.GroupChatRoomMemberCreateWithoutUserInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyUserInputEnvelope;
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
};
export type GroupChatRoomMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput> | Prisma.GroupChatRoomMemberCreateWithoutUserInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyUserInputEnvelope;
    set?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    delete?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    update?: Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutUserInput | Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GroupChatRoomMemberScalarWhereInput | Prisma.GroupChatRoomMemberScalarWhereInput[];
};
export type GroupChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput> | Prisma.GroupChatRoomMemberCreateWithoutUserInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyUserInputEnvelope;
    set?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    delete?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    update?: Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutUserInput | Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GroupChatRoomMemberScalarWhereInput | Prisma.GroupChatRoomMemberScalarWhereInput[];
};
export type GroupChatRoomMemberCreateNestedManyWithoutGroupChatRoomInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput> | Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyGroupChatRoomInputEnvelope;
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
};
export type GroupChatRoomMemberUncheckedCreateNestedManyWithoutGroupChatRoomInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput> | Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyGroupChatRoomInputEnvelope;
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
};
export type GroupChatRoomMemberUpdateManyWithoutGroupChatRoomNestedInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput> | Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput[];
    upsert?: Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutGroupChatRoomInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyGroupChatRoomInputEnvelope;
    set?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    delete?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    update?: Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutGroupChatRoomInput[];
    updateMany?: Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutGroupChatRoomInput[];
    deleteMany?: Prisma.GroupChatRoomMemberScalarWhereInput | Prisma.GroupChatRoomMemberScalarWhereInput[];
};
export type GroupChatRoomMemberUncheckedUpdateManyWithoutGroupChatRoomNestedInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput> | Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput[] | Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput[];
    connectOrCreate?: Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput[];
    upsert?: Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberUpsertWithWhereUniqueWithoutGroupChatRoomInput[];
    createMany?: Prisma.GroupChatRoomMemberCreateManyGroupChatRoomInputEnvelope;
    set?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    delete?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    connect?: Prisma.GroupChatRoomMemberWhereUniqueInput | Prisma.GroupChatRoomMemberWhereUniqueInput[];
    update?: Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberUpdateWithWhereUniqueWithoutGroupChatRoomInput[];
    updateMany?: Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutGroupChatRoomInput | Prisma.GroupChatRoomMemberUpdateManyWithWhereWithoutGroupChatRoomInput[];
    deleteMany?: Prisma.GroupChatRoomMemberScalarWhereInput | Prisma.GroupChatRoomMemberScalarWhereInput[];
};
export type EnumGroupRoleFieldUpdateOperationsInput = {
    set?: $Enums.GroupRole;
};
export type GroupChatRoomMemberCreateWithoutUserInput = {
    id?: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupChatRoom: Prisma.GroupChatRoomCreateNestedOneWithoutMembersInput;
};
export type GroupChatRoomMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    groupChatRoom_id: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput>;
};
export type GroupChatRoomMemberCreateManyUserInputEnvelope = {
    data: Prisma.GroupChatRoomMemberCreateManyUserInput | Prisma.GroupChatRoomMemberCreateManyUserInput[];
};
export type GroupChatRoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutUserInput>;
};
export type GroupChatRoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateWithoutUserInput, Prisma.GroupChatRoomMemberUncheckedUpdateWithoutUserInput>;
};
export type GroupChatRoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GroupChatRoomMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateManyMutationInput, Prisma.GroupChatRoomMemberUncheckedUpdateManyWithoutUserInput>;
};
export type GroupChatRoomMemberScalarWhereInput = {
    AND?: Prisma.GroupChatRoomMemberScalarWhereInput | Prisma.GroupChatRoomMemberScalarWhereInput[];
    OR?: Prisma.GroupChatRoomMemberScalarWhereInput[];
    NOT?: Prisma.GroupChatRoomMemberScalarWhereInput | Prisma.GroupChatRoomMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    groupChatRoom_id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    user_id?: Prisma.StringFilter<"GroupChatRoomMember"> | string;
    last_read_message_id?: Prisma.StringNullableFilter<"GroupChatRoomMember"> | string | null;
    group_role?: Prisma.EnumGroupRoleFilter<"GroupChatRoomMember"> | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFilter<"GroupChatRoomMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GroupChatRoomMember"> | Date | string;
};
export type GroupChatRoomMemberCreateWithoutGroupChatRoomInput = {
    id?: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutGroupChatRoomsInput;
};
export type GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput = {
    id?: string;
    user_id: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomMemberCreateOrConnectWithoutGroupChatRoomInput = {
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput>;
};
export type GroupChatRoomMemberCreateManyGroupChatRoomInputEnvelope = {
    data: Prisma.GroupChatRoomMemberCreateManyGroupChatRoomInput | Prisma.GroupChatRoomMemberCreateManyGroupChatRoomInput[];
};
export type GroupChatRoomMemberUpsertWithWhereUniqueWithoutGroupChatRoomInput = {
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedUpdateWithoutGroupChatRoomInput>;
    create: Prisma.XOR<Prisma.GroupChatRoomMemberCreateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedCreateWithoutGroupChatRoomInput>;
};
export type GroupChatRoomMemberUpdateWithWhereUniqueWithoutGroupChatRoomInput = {
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateWithoutGroupChatRoomInput, Prisma.GroupChatRoomMemberUncheckedUpdateWithoutGroupChatRoomInput>;
};
export type GroupChatRoomMemberUpdateManyWithWhereWithoutGroupChatRoomInput = {
    where: Prisma.GroupChatRoomMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateManyMutationInput, Prisma.GroupChatRoomMemberUncheckedUpdateManyWithoutGroupChatRoomInput>;
};
export type GroupChatRoomMemberCreateManyUserInput = {
    id?: string;
    groupChatRoom_id: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomMemberUpdateWithoutUserInput = {
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupChatRoom?: Prisma.GroupChatRoomUpdateOneRequiredWithoutMembersNestedInput;
};
export type GroupChatRoomMemberUncheckedUpdateWithoutUserInput = {
    groupChatRoom_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberUncheckedUpdateManyWithoutUserInput = {
    groupChatRoom_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberCreateManyGroupChatRoomInput = {
    id?: string;
    user_id: string;
    last_read_message_id?: string | null;
    group_role?: $Enums.GroupRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomMemberUpdateWithoutGroupChatRoomInput = {
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutGroupChatRoomsNestedInput;
};
export type GroupChatRoomMemberUncheckedUpdateWithoutGroupChatRoomInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberUncheckedUpdateManyWithoutGroupChatRoomInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_read_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group_role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupChatRoom_id?: boolean;
    user_id?: boolean;
    last_read_message_id?: boolean;
    group_role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    groupChatRoom?: boolean | Prisma.GroupChatRoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["groupChatRoomMember"]>;
export type GroupChatRoomMemberSelectScalar = {
    id?: boolean;
    groupChatRoom_id?: boolean;
    user_id?: boolean;
    last_read_message_id?: boolean;
    group_role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GroupChatRoomMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupChatRoom_id" | "user_id" | "last_read_message_id" | "group_role" | "createdAt" | "updatedAt", ExtArgs["result"]["groupChatRoomMember"]>;
export type GroupChatRoomMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groupChatRoom?: boolean | Prisma.GroupChatRoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $GroupChatRoomMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GroupChatRoomMember";
    objects: {
        groupChatRoom: Prisma.$GroupChatRoomPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        groupChatRoom_id: string;
        user_id: string;
        last_read_message_id: string | null;
        group_role: $Enums.GroupRole;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["groupChatRoomMember"]>;
    composites: {};
};
export type GroupChatRoomMemberGetPayload<S extends boolean | null | undefined | GroupChatRoomMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload, S>;
export type GroupChatRoomMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GroupChatRoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GroupChatRoomMemberCountAggregateInputType | true;
};
export interface GroupChatRoomMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GroupChatRoomMember'];
        meta: {
            name: 'GroupChatRoomMember';
        };
    };
    findUnique<T extends GroupChatRoomMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GroupChatRoomMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GroupChatRoomMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GroupChatRoomMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GroupChatRoomMemberFindManyArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GroupChatRoomMemberCreateArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberCreateArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GroupChatRoomMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends GroupChatRoomMemberDeleteArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GroupChatRoomMemberUpdateArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GroupChatRoomMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GroupChatRoomMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends GroupChatRoomMemberUpsertArgs>(args: Prisma.SelectSubset<T, GroupChatRoomMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.GroupChatRoomMemberFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.GroupChatRoomMemberAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends GroupChatRoomMemberCountArgs>(args?: Prisma.Subset<T, GroupChatRoomMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GroupChatRoomMemberCountAggregateOutputType> : number>;
    aggregate<T extends GroupChatRoomMemberAggregateArgs>(args: Prisma.Subset<T, GroupChatRoomMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupChatRoomMemberAggregateType<T>>;
    groupBy<T extends GroupChatRoomMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GroupChatRoomMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: GroupChatRoomMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GroupChatRoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupChatRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GroupChatRoomMemberFieldRefs;
}
export interface Prisma__GroupChatRoomMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    groupChatRoom<T extends Prisma.GroupChatRoomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupChatRoomDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GroupChatRoomMemberFieldRefs {
    readonly id: Prisma.FieldRef<"GroupChatRoomMember", 'String'>;
    readonly groupChatRoom_id: Prisma.FieldRef<"GroupChatRoomMember", 'String'>;
    readonly user_id: Prisma.FieldRef<"GroupChatRoomMember", 'String'>;
    readonly last_read_message_id: Prisma.FieldRef<"GroupChatRoomMember", 'String'>;
    readonly group_role: Prisma.FieldRef<"GroupChatRoomMember", 'GroupRole'>;
    readonly createdAt: Prisma.FieldRef<"GroupChatRoomMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"GroupChatRoomMember", 'DateTime'>;
}
export type GroupChatRoomMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
};
export type GroupChatRoomMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
};
export type GroupChatRoomMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where?: Prisma.GroupChatRoomMemberWhereInput;
    orderBy?: Prisma.GroupChatRoomMemberOrderByWithRelationInput | Prisma.GroupChatRoomMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatRoomMemberScalarFieldEnum | Prisma.GroupChatRoomMemberScalarFieldEnum[];
};
export type GroupChatRoomMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where?: Prisma.GroupChatRoomMemberWhereInput;
    orderBy?: Prisma.GroupChatRoomMemberOrderByWithRelationInput | Prisma.GroupChatRoomMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatRoomMemberScalarFieldEnum | Prisma.GroupChatRoomMemberScalarFieldEnum[];
};
export type GroupChatRoomMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where?: Prisma.GroupChatRoomMemberWhereInput;
    orderBy?: Prisma.GroupChatRoomMemberOrderByWithRelationInput | Prisma.GroupChatRoomMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatRoomMemberScalarFieldEnum | Prisma.GroupChatRoomMemberScalarFieldEnum[];
};
export type GroupChatRoomMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupChatRoomMemberCreateInput, Prisma.GroupChatRoomMemberUncheckedCreateInput>;
};
export type GroupChatRoomMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GroupChatRoomMemberCreateManyInput | Prisma.GroupChatRoomMemberCreateManyInput[];
};
export type GroupChatRoomMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateInput, Prisma.GroupChatRoomMemberUncheckedUpdateInput>;
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
};
export type GroupChatRoomMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateManyMutationInput, Prisma.GroupChatRoomMemberUncheckedUpdateManyInput>;
    where?: Prisma.GroupChatRoomMemberWhereInput;
    limit?: number;
};
export type GroupChatRoomMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupChatRoomMemberCreateInput, Prisma.GroupChatRoomMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GroupChatRoomMemberUpdateInput, Prisma.GroupChatRoomMemberUncheckedUpdateInput>;
};
export type GroupChatRoomMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomMemberWhereUniqueInput;
};
export type GroupChatRoomMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomMemberWhereInput;
    limit?: number;
};
export type GroupChatRoomMemberFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type GroupChatRoomMemberAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type GroupChatRoomMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomMemberInclude<ExtArgs> | null;
};
export {};
