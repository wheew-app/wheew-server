import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChatRoomModel = runtime.Types.Result.DefaultSelection<Prisma.$ChatRoomPayload>;
export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null;
    _min: ChatRoomMinAggregateOutputType | null;
    _max: ChatRoomMaxAggregateOutputType | null;
};
export type ChatRoomMinAggregateOutputType = {
    id: string | null;
    is_deleted: boolean | null;
    user1_id: string | null;
    user2_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChatRoomMaxAggregateOutputType = {
    id: string | null;
    is_deleted: boolean | null;
    user1_id: string | null;
    user2_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChatRoomCountAggregateOutputType = {
    id: number;
    is_deleted: number;
    user1_id: number;
    user2_id: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ChatRoomMinAggregateInputType = {
    id?: true;
    is_deleted?: true;
    user1_id?: true;
    user2_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChatRoomMaxAggregateInputType = {
    id?: true;
    is_deleted?: true;
    user1_id?: true;
    user2_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChatRoomCountAggregateInputType = {
    id?: true;
    is_deleted?: true;
    user1_id?: true;
    user2_id?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ChatRoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatRoomWhereInput;
    orderBy?: Prisma.ChatRoomOrderByWithRelationInput | Prisma.ChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.ChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChatRoomCountAggregateInputType;
    _min?: ChatRoomMinAggregateInputType;
    _max?: ChatRoomMaxAggregateInputType;
};
export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
    [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChatRoom[P]> : Prisma.GetScalarType<T[P], AggregateChatRoom[P]>;
};
export type ChatRoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatRoomWhereInput;
    orderBy?: Prisma.ChatRoomOrderByWithAggregationInput | Prisma.ChatRoomOrderByWithAggregationInput[];
    by: Prisma.ChatRoomScalarFieldEnum[] | Prisma.ChatRoomScalarFieldEnum;
    having?: Prisma.ChatRoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatRoomCountAggregateInputType | true;
    _min?: ChatRoomMinAggregateInputType;
    _max?: ChatRoomMaxAggregateInputType;
};
export type ChatRoomGroupByOutputType = {
    id: string;
    is_deleted: boolean;
    user1_id: string;
    user2_id: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ChatRoomCountAggregateOutputType | null;
    _min: ChatRoomMinAggregateOutputType | null;
    _max: ChatRoomMaxAggregateOutputType | null;
};
type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatRoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatRoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatRoomGroupByOutputType[P]>;
}>>;
export type ChatRoomWhereInput = {
    AND?: Prisma.ChatRoomWhereInput | Prisma.ChatRoomWhereInput[];
    OR?: Prisma.ChatRoomWhereInput[];
    NOT?: Prisma.ChatRoomWhereInput | Prisma.ChatRoomWhereInput[];
    id?: Prisma.StringFilter<"ChatRoom"> | string;
    is_deleted?: Prisma.BoolFilter<"ChatRoom"> | boolean;
    user1_id?: Prisma.StringFilter<"ChatRoom"> | string;
    user2_id?: Prisma.StringFilter<"ChatRoom"> | string;
    createdAt?: Prisma.DateTimeFilter<"ChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatRoom"> | Date | string;
    user1?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    user2?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    chats?: Prisma.ChatListRelationFilter;
};
export type ChatRoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    user1_id?: Prisma.SortOrder;
    user2_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user1?: Prisma.UserOrderByWithRelationInput;
    user2?: Prisma.UserOrderByWithRelationInput;
    chats?: Prisma.ChatOrderByRelationAggregateInput;
};
export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user1_id_user2_id?: Prisma.ChatRoomUser1_idUser2_idCompoundUniqueInput;
    AND?: Prisma.ChatRoomWhereInput | Prisma.ChatRoomWhereInput[];
    OR?: Prisma.ChatRoomWhereInput[];
    NOT?: Prisma.ChatRoomWhereInput | Prisma.ChatRoomWhereInput[];
    is_deleted?: Prisma.BoolFilter<"ChatRoom"> | boolean;
    user1_id?: Prisma.StringFilter<"ChatRoom"> | string;
    user2_id?: Prisma.StringFilter<"ChatRoom"> | string;
    createdAt?: Prisma.DateTimeFilter<"ChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatRoom"> | Date | string;
    user1?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    user2?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    chats?: Prisma.ChatListRelationFilter;
}, "id" | "user1_id_user2_id">;
export type ChatRoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    user1_id?: Prisma.SortOrder;
    user2_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ChatRoomCountOrderByAggregateInput;
    _max?: Prisma.ChatRoomMaxOrderByAggregateInput;
    _min?: Prisma.ChatRoomMinOrderByAggregateInput;
};
export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChatRoomScalarWhereWithAggregatesInput | Prisma.ChatRoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChatRoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChatRoomScalarWhereWithAggregatesInput | Prisma.ChatRoomScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChatRoom"> | string;
    is_deleted?: Prisma.BoolWithAggregatesFilter<"ChatRoom"> | boolean;
    user1_id?: Prisma.StringWithAggregatesFilter<"ChatRoom"> | string;
    user2_id?: Prisma.StringWithAggregatesFilter<"ChatRoom"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string;
};
export type ChatRoomCreateInput = {
    id?: string;
    is_deleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user1: Prisma.UserCreateNestedOneWithoutChatRooms_user1Input;
    user2: Prisma.UserCreateNestedOneWithoutChatRooms_user2Input;
    chats?: Prisma.ChatCreateNestedManyWithoutChatRoomInput;
};
export type ChatRoomUncheckedCreateInput = {
    id?: string;
    is_deleted?: boolean;
    user1_id: string;
    user2_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutChatRoomInput;
};
export type ChatRoomUpdateInput = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user1?: Prisma.UserUpdateOneRequiredWithoutChatRooms_user1NestedInput;
    user2?: Prisma.UserUpdateOneRequiredWithoutChatRooms_user2NestedInput;
    chats?: Prisma.ChatUpdateManyWithoutChatRoomNestedInput;
};
export type ChatRoomUncheckedUpdateInput = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user1_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutChatRoomNestedInput;
};
export type ChatRoomCreateManyInput = {
    id?: string;
    is_deleted?: boolean;
    user1_id: string;
    user2_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatRoomUpdateManyMutationInput = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatRoomUncheckedUpdateManyInput = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user1_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatRoomListRelationFilter = {
    every?: Prisma.ChatRoomWhereInput;
    some?: Prisma.ChatRoomWhereInput;
    none?: Prisma.ChatRoomWhereInput;
};
export type ChatRoomOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChatRoomUser1_idUser2_idCompoundUniqueInput = {
    user1_id: string;
    user2_id: string;
};
export type ChatRoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    user1_id?: Prisma.SortOrder;
    user2_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatRoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    user1_id?: Prisma.SortOrder;
    user2_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatRoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    user1_id?: Prisma.SortOrder;
    user2_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatRoomScalarRelationFilter = {
    is?: Prisma.ChatRoomWhereInput;
    isNot?: Prisma.ChatRoomWhereInput;
};
export type ChatRoomCreateNestedManyWithoutUser1Input = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser1Input, Prisma.ChatRoomUncheckedCreateWithoutUser1Input> | Prisma.ChatRoomCreateWithoutUser1Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser1Input | Prisma.ChatRoomCreateOrConnectWithoutUser1Input[];
    createMany?: Prisma.ChatRoomCreateManyUser1InputEnvelope;
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
};
export type ChatRoomCreateNestedManyWithoutUser2Input = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser2Input, Prisma.ChatRoomUncheckedCreateWithoutUser2Input> | Prisma.ChatRoomCreateWithoutUser2Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser2Input | Prisma.ChatRoomCreateOrConnectWithoutUser2Input[];
    createMany?: Prisma.ChatRoomCreateManyUser2InputEnvelope;
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
};
export type ChatRoomUncheckedCreateNestedManyWithoutUser1Input = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser1Input, Prisma.ChatRoomUncheckedCreateWithoutUser1Input> | Prisma.ChatRoomCreateWithoutUser1Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser1Input | Prisma.ChatRoomCreateOrConnectWithoutUser1Input[];
    createMany?: Prisma.ChatRoomCreateManyUser1InputEnvelope;
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
};
export type ChatRoomUncheckedCreateNestedManyWithoutUser2Input = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser2Input, Prisma.ChatRoomUncheckedCreateWithoutUser2Input> | Prisma.ChatRoomCreateWithoutUser2Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser2Input | Prisma.ChatRoomCreateOrConnectWithoutUser2Input[];
    createMany?: Prisma.ChatRoomCreateManyUser2InputEnvelope;
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
};
export type ChatRoomUpdateManyWithoutUser1NestedInput = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser1Input, Prisma.ChatRoomUncheckedCreateWithoutUser1Input> | Prisma.ChatRoomCreateWithoutUser1Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser1Input | Prisma.ChatRoomCreateOrConnectWithoutUser1Input[];
    upsert?: Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser1Input | Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser1Input[];
    createMany?: Prisma.ChatRoomCreateManyUser1InputEnvelope;
    set?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    disconnect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    delete?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    update?: Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser1Input | Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser1Input[];
    updateMany?: Prisma.ChatRoomUpdateManyWithWhereWithoutUser1Input | Prisma.ChatRoomUpdateManyWithWhereWithoutUser1Input[];
    deleteMany?: Prisma.ChatRoomScalarWhereInput | Prisma.ChatRoomScalarWhereInput[];
};
export type ChatRoomUpdateManyWithoutUser2NestedInput = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser2Input, Prisma.ChatRoomUncheckedCreateWithoutUser2Input> | Prisma.ChatRoomCreateWithoutUser2Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser2Input | Prisma.ChatRoomCreateOrConnectWithoutUser2Input[];
    upsert?: Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser2Input | Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser2Input[];
    createMany?: Prisma.ChatRoomCreateManyUser2InputEnvelope;
    set?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    disconnect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    delete?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    update?: Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser2Input | Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser2Input[];
    updateMany?: Prisma.ChatRoomUpdateManyWithWhereWithoutUser2Input | Prisma.ChatRoomUpdateManyWithWhereWithoutUser2Input[];
    deleteMany?: Prisma.ChatRoomScalarWhereInput | Prisma.ChatRoomScalarWhereInput[];
};
export type ChatRoomUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser1Input, Prisma.ChatRoomUncheckedCreateWithoutUser1Input> | Prisma.ChatRoomCreateWithoutUser1Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser1Input | Prisma.ChatRoomCreateOrConnectWithoutUser1Input[];
    upsert?: Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser1Input | Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser1Input[];
    createMany?: Prisma.ChatRoomCreateManyUser1InputEnvelope;
    set?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    disconnect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    delete?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    update?: Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser1Input | Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser1Input[];
    updateMany?: Prisma.ChatRoomUpdateManyWithWhereWithoutUser1Input | Prisma.ChatRoomUpdateManyWithWhereWithoutUser1Input[];
    deleteMany?: Prisma.ChatRoomScalarWhereInput | Prisma.ChatRoomScalarWhereInput[];
};
export type ChatRoomUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser2Input, Prisma.ChatRoomUncheckedCreateWithoutUser2Input> | Prisma.ChatRoomCreateWithoutUser2Input[] | Prisma.ChatRoomUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutUser2Input | Prisma.ChatRoomCreateOrConnectWithoutUser2Input[];
    upsert?: Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser2Input | Prisma.ChatRoomUpsertWithWhereUniqueWithoutUser2Input[];
    createMany?: Prisma.ChatRoomCreateManyUser2InputEnvelope;
    set?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    disconnect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    delete?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    connect?: Prisma.ChatRoomWhereUniqueInput | Prisma.ChatRoomWhereUniqueInput[];
    update?: Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser2Input | Prisma.ChatRoomUpdateWithWhereUniqueWithoutUser2Input[];
    updateMany?: Prisma.ChatRoomUpdateManyWithWhereWithoutUser2Input | Prisma.ChatRoomUpdateManyWithWhereWithoutUser2Input[];
    deleteMany?: Prisma.ChatRoomScalarWhereInput | Prisma.ChatRoomScalarWhereInput[];
};
export type ChatRoomCreateNestedOneWithoutChatsInput = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutChatsInput, Prisma.ChatRoomUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutChatsInput;
    connect?: Prisma.ChatRoomWhereUniqueInput;
};
export type ChatRoomUpdateOneRequiredWithoutChatsNestedInput = {
    create?: Prisma.XOR<Prisma.ChatRoomCreateWithoutChatsInput, Prisma.ChatRoomUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.ChatRoomCreateOrConnectWithoutChatsInput;
    upsert?: Prisma.ChatRoomUpsertWithoutChatsInput;
    connect?: Prisma.ChatRoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChatRoomUpdateToOneWithWhereWithoutChatsInput, Prisma.ChatRoomUpdateWithoutChatsInput>, Prisma.ChatRoomUncheckedUpdateWithoutChatsInput>;
};
export type ChatRoomCreateWithoutUser1Input = {
    id?: string;
    is_deleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user2: Prisma.UserCreateNestedOneWithoutChatRooms_user2Input;
    chats?: Prisma.ChatCreateNestedManyWithoutChatRoomInput;
};
export type ChatRoomUncheckedCreateWithoutUser1Input = {
    id?: string;
    is_deleted?: boolean;
    user2_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutChatRoomInput;
};
export type ChatRoomCreateOrConnectWithoutUser1Input = {
    where: Prisma.ChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser1Input, Prisma.ChatRoomUncheckedCreateWithoutUser1Input>;
};
export type ChatRoomCreateManyUser1InputEnvelope = {
    data: Prisma.ChatRoomCreateManyUser1Input | Prisma.ChatRoomCreateManyUser1Input[];
};
export type ChatRoomCreateWithoutUser2Input = {
    id?: string;
    is_deleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user1: Prisma.UserCreateNestedOneWithoutChatRooms_user1Input;
    chats?: Prisma.ChatCreateNestedManyWithoutChatRoomInput;
};
export type ChatRoomUncheckedCreateWithoutUser2Input = {
    id?: string;
    is_deleted?: boolean;
    user1_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutChatRoomInput;
};
export type ChatRoomCreateOrConnectWithoutUser2Input = {
    where: Prisma.ChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser2Input, Prisma.ChatRoomUncheckedCreateWithoutUser2Input>;
};
export type ChatRoomCreateManyUser2InputEnvelope = {
    data: Prisma.ChatRoomCreateManyUser2Input | Prisma.ChatRoomCreateManyUser2Input[];
};
export type ChatRoomUpsertWithWhereUniqueWithoutUser1Input = {
    where: Prisma.ChatRoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChatRoomUpdateWithoutUser1Input, Prisma.ChatRoomUncheckedUpdateWithoutUser1Input>;
    create: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser1Input, Prisma.ChatRoomUncheckedCreateWithoutUser1Input>;
};
export type ChatRoomUpdateWithWhereUniqueWithoutUser1Input = {
    where: Prisma.ChatRoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChatRoomUpdateWithoutUser1Input, Prisma.ChatRoomUncheckedUpdateWithoutUser1Input>;
};
export type ChatRoomUpdateManyWithWhereWithoutUser1Input = {
    where: Prisma.ChatRoomScalarWhereInput;
    data: Prisma.XOR<Prisma.ChatRoomUpdateManyMutationInput, Prisma.ChatRoomUncheckedUpdateManyWithoutUser1Input>;
};
export type ChatRoomScalarWhereInput = {
    AND?: Prisma.ChatRoomScalarWhereInput | Prisma.ChatRoomScalarWhereInput[];
    OR?: Prisma.ChatRoomScalarWhereInput[];
    NOT?: Prisma.ChatRoomScalarWhereInput | Prisma.ChatRoomScalarWhereInput[];
    id?: Prisma.StringFilter<"ChatRoom"> | string;
    is_deleted?: Prisma.BoolFilter<"ChatRoom"> | boolean;
    user1_id?: Prisma.StringFilter<"ChatRoom"> | string;
    user2_id?: Prisma.StringFilter<"ChatRoom"> | string;
    createdAt?: Prisma.DateTimeFilter<"ChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatRoom"> | Date | string;
};
export type ChatRoomUpsertWithWhereUniqueWithoutUser2Input = {
    where: Prisma.ChatRoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChatRoomUpdateWithoutUser2Input, Prisma.ChatRoomUncheckedUpdateWithoutUser2Input>;
    create: Prisma.XOR<Prisma.ChatRoomCreateWithoutUser2Input, Prisma.ChatRoomUncheckedCreateWithoutUser2Input>;
};
export type ChatRoomUpdateWithWhereUniqueWithoutUser2Input = {
    where: Prisma.ChatRoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChatRoomUpdateWithoutUser2Input, Prisma.ChatRoomUncheckedUpdateWithoutUser2Input>;
};
export type ChatRoomUpdateManyWithWhereWithoutUser2Input = {
    where: Prisma.ChatRoomScalarWhereInput;
    data: Prisma.XOR<Prisma.ChatRoomUpdateManyMutationInput, Prisma.ChatRoomUncheckedUpdateManyWithoutUser2Input>;
};
export type ChatRoomCreateWithoutChatsInput = {
    id?: string;
    is_deleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user1: Prisma.UserCreateNestedOneWithoutChatRooms_user1Input;
    user2: Prisma.UserCreateNestedOneWithoutChatRooms_user2Input;
};
export type ChatRoomUncheckedCreateWithoutChatsInput = {
    id?: string;
    is_deleted?: boolean;
    user1_id: string;
    user2_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatRoomCreateOrConnectWithoutChatsInput = {
    where: Prisma.ChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatRoomCreateWithoutChatsInput, Prisma.ChatRoomUncheckedCreateWithoutChatsInput>;
};
export type ChatRoomUpsertWithoutChatsInput = {
    update: Prisma.XOR<Prisma.ChatRoomUpdateWithoutChatsInput, Prisma.ChatRoomUncheckedUpdateWithoutChatsInput>;
    create: Prisma.XOR<Prisma.ChatRoomCreateWithoutChatsInput, Prisma.ChatRoomUncheckedCreateWithoutChatsInput>;
    where?: Prisma.ChatRoomWhereInput;
};
export type ChatRoomUpdateToOneWithWhereWithoutChatsInput = {
    where?: Prisma.ChatRoomWhereInput;
    data: Prisma.XOR<Prisma.ChatRoomUpdateWithoutChatsInput, Prisma.ChatRoomUncheckedUpdateWithoutChatsInput>;
};
export type ChatRoomUpdateWithoutChatsInput = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user1?: Prisma.UserUpdateOneRequiredWithoutChatRooms_user1NestedInput;
    user2?: Prisma.UserUpdateOneRequiredWithoutChatRooms_user2NestedInput;
};
export type ChatRoomUncheckedUpdateWithoutChatsInput = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user1_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatRoomCreateManyUser1Input = {
    id?: string;
    is_deleted?: boolean;
    user2_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatRoomCreateManyUser2Input = {
    id?: string;
    is_deleted?: boolean;
    user1_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatRoomUpdateWithoutUser1Input = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user2?: Prisma.UserUpdateOneRequiredWithoutChatRooms_user2NestedInput;
    chats?: Prisma.ChatUpdateManyWithoutChatRoomNestedInput;
};
export type ChatRoomUncheckedUpdateWithoutUser1Input = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user2_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutChatRoomNestedInput;
};
export type ChatRoomUncheckedUpdateManyWithoutUser1Input = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user2_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatRoomUpdateWithoutUser2Input = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user1?: Prisma.UserUpdateOneRequiredWithoutChatRooms_user1NestedInput;
    chats?: Prisma.ChatUpdateManyWithoutChatRoomNestedInput;
};
export type ChatRoomUncheckedUpdateWithoutUser2Input = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user1_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutChatRoomNestedInput;
};
export type ChatRoomUncheckedUpdateManyWithoutUser2Input = {
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user1_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatRoomCountOutputType = {
    chats: number;
};
export type ChatRoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chats?: boolean | ChatRoomCountOutputTypeCountChatsArgs;
};
export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomCountOutputTypeSelect<ExtArgs> | null;
};
export type ChatRoomCountOutputTypeCountChatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatWhereInput;
};
export type ChatRoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    is_deleted?: boolean;
    user1_id?: boolean;
    user2_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chats?: boolean | Prisma.ChatRoom$chatsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatRoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatRoom"]>;
export type ChatRoomSelectScalar = {
    id?: boolean;
    is_deleted?: boolean;
    user1_id?: boolean;
    user2_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ChatRoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "is_deleted" | "user1_id" | "user2_id" | "createdAt" | "updatedAt", ExtArgs["result"]["chatRoom"]>;
export type ChatRoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chats?: boolean | Prisma.ChatRoom$chatsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatRoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ChatRoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChatRoom";
    objects: {
        user1: Prisma.$UserPayload<ExtArgs>;
        user2: Prisma.$UserPayload<ExtArgs>;
        chats: Prisma.$ChatPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        is_deleted: boolean;
        user1_id: string;
        user2_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["chatRoom"]>;
    composites: {};
};
export type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload, S>;
export type ChatRoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatRoomCountAggregateInputType | true;
};
export interface ChatRoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'];
        meta: {
            name: 'ChatRoom';
        };
    };
    findUnique<T extends ChatRoomFindUniqueArgs>(args: Prisma.SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChatRoomFindFirstArgs>(args?: Prisma.SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChatRoomFindManyArgs>(args?: Prisma.SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChatRoomCreateArgs>(args: Prisma.SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChatRoomCreateManyArgs>(args?: Prisma.SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ChatRoomDeleteArgs>(args: Prisma.SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChatRoomUpdateArgs>(args: Prisma.SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChatRoomUpdateManyArgs>(args: Prisma.SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ChatRoomUpsertArgs>(args: Prisma.SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma.Prisma__ChatRoomClient<runtime.Types.Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ChatRoomFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ChatRoomAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ChatRoomCountArgs>(args?: Prisma.Subset<T, ChatRoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatRoomCountAggregateOutputType> : number>;
    aggregate<T extends ChatRoomAggregateArgs>(args: Prisma.Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>;
    groupBy<T extends ChatRoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChatRoomGroupByArgs['orderBy'];
    } : {
        orderBy?: ChatRoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChatRoomFieldRefs;
}
export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user1<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user2<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chats<T extends Prisma.ChatRoom$chatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatRoom$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChatRoomFieldRefs {
    readonly id: Prisma.FieldRef<"ChatRoom", 'String'>;
    readonly is_deleted: Prisma.FieldRef<"ChatRoom", 'Boolean'>;
    readonly user1_id: Prisma.FieldRef<"ChatRoom", 'String'>;
    readonly user2_id: Prisma.FieldRef<"ChatRoom", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ChatRoom", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ChatRoom", 'DateTime'>;
}
export type ChatRoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where: Prisma.ChatRoomWhereUniqueInput;
};
export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where: Prisma.ChatRoomWhereUniqueInput;
};
export type ChatRoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where?: Prisma.ChatRoomWhereInput;
    orderBy?: Prisma.ChatRoomOrderByWithRelationInput | Prisma.ChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.ChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatRoomScalarFieldEnum | Prisma.ChatRoomScalarFieldEnum[];
};
export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where?: Prisma.ChatRoomWhereInput;
    orderBy?: Prisma.ChatRoomOrderByWithRelationInput | Prisma.ChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.ChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatRoomScalarFieldEnum | Prisma.ChatRoomScalarFieldEnum[];
};
export type ChatRoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where?: Prisma.ChatRoomWhereInput;
    orderBy?: Prisma.ChatRoomOrderByWithRelationInput | Prisma.ChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.ChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatRoomScalarFieldEnum | Prisma.ChatRoomScalarFieldEnum[];
};
export type ChatRoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatRoomCreateInput, Prisma.ChatRoomUncheckedCreateInput>;
};
export type ChatRoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChatRoomCreateManyInput | Prisma.ChatRoomCreateManyInput[];
};
export type ChatRoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatRoomUpdateInput, Prisma.ChatRoomUncheckedUpdateInput>;
    where: Prisma.ChatRoomWhereUniqueInput;
};
export type ChatRoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChatRoomUpdateManyMutationInput, Prisma.ChatRoomUncheckedUpdateManyInput>;
    where?: Prisma.ChatRoomWhereInput;
    limit?: number;
};
export type ChatRoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where: Prisma.ChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatRoomCreateInput, Prisma.ChatRoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChatRoomUpdateInput, Prisma.ChatRoomUncheckedUpdateInput>;
};
export type ChatRoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
    where: Prisma.ChatRoomWhereUniqueInput;
};
export type ChatRoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatRoomWhereInput;
    limit?: number;
};
export type ChatRoomFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ChatRoomAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ChatRoom$chatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatSelect<ExtArgs> | null;
    omit?: Prisma.ChatOmit<ExtArgs> | null;
    include?: Prisma.ChatInclude<ExtArgs> | null;
    where?: Prisma.ChatWhereInput;
    orderBy?: Prisma.ChatOrderByWithRelationInput | Prisma.ChatOrderByWithRelationInput[];
    cursor?: Prisma.ChatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatScalarFieldEnum | Prisma.ChatScalarFieldEnum[];
};
export type ChatRoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.ChatRoomOmit<ExtArgs> | null;
    include?: Prisma.ChatRoomInclude<ExtArgs> | null;
};
export {};
