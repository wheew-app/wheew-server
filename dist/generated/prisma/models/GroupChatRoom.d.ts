import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GroupChatRoomModel = runtime.Types.Result.DefaultSelection<Prisma.$GroupChatRoomPayload>;
export type AggregateGroupChatRoom = {
    _count: GroupChatRoomCountAggregateOutputType | null;
    _avg: GroupChatRoomAvgAggregateOutputType | null;
    _sum: GroupChatRoomSumAggregateOutputType | null;
    _min: GroupChatRoomMinAggregateOutputType | null;
    _max: GroupChatRoomMaxAggregateOutputType | null;
};
export type GroupChatRoomAvgAggregateOutputType = {
    group_members_count: number | null;
};
export type GroupChatRoomSumAggregateOutputType = {
    group_members_count: number | null;
};
export type GroupChatRoomMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    image: string | null;
    is_deleted: boolean | null;
    group_members_count: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GroupChatRoomMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    image: string | null;
    is_deleted: boolean | null;
    group_members_count: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GroupChatRoomCountAggregateOutputType = {
    id: number;
    name: number;
    image: number;
    is_deleted: number;
    group_members_count: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GroupChatRoomAvgAggregateInputType = {
    group_members_count?: true;
};
export type GroupChatRoomSumAggregateInputType = {
    group_members_count?: true;
};
export type GroupChatRoomMinAggregateInputType = {
    id?: true;
    name?: true;
    image?: true;
    is_deleted?: true;
    group_members_count?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GroupChatRoomMaxAggregateInputType = {
    id?: true;
    name?: true;
    image?: true;
    is_deleted?: true;
    group_members_count?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GroupChatRoomCountAggregateInputType = {
    id?: true;
    name?: true;
    image?: true;
    is_deleted?: true;
    group_members_count?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GroupChatRoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomWhereInput;
    orderBy?: Prisma.GroupChatRoomOrderByWithRelationInput | Prisma.GroupChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GroupChatRoomCountAggregateInputType;
    _avg?: GroupChatRoomAvgAggregateInputType;
    _sum?: GroupChatRoomSumAggregateInputType;
    _min?: GroupChatRoomMinAggregateInputType;
    _max?: GroupChatRoomMaxAggregateInputType;
};
export type GetGroupChatRoomAggregateType<T extends GroupChatRoomAggregateArgs> = {
    [P in keyof T & keyof AggregateGroupChatRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGroupChatRoom[P]> : Prisma.GetScalarType<T[P], AggregateGroupChatRoom[P]>;
};
export type GroupChatRoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomWhereInput;
    orderBy?: Prisma.GroupChatRoomOrderByWithAggregationInput | Prisma.GroupChatRoomOrderByWithAggregationInput[];
    by: Prisma.GroupChatRoomScalarFieldEnum[] | Prisma.GroupChatRoomScalarFieldEnum;
    having?: Prisma.GroupChatRoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupChatRoomCountAggregateInputType | true;
    _avg?: GroupChatRoomAvgAggregateInputType;
    _sum?: GroupChatRoomSumAggregateInputType;
    _min?: GroupChatRoomMinAggregateInputType;
    _max?: GroupChatRoomMaxAggregateInputType;
};
export type GroupChatRoomGroupByOutputType = {
    id: string;
    name: string;
    image: string | null;
    is_deleted: boolean;
    group_members_count: number;
    createdAt: Date;
    updatedAt: Date;
    _count: GroupChatRoomCountAggregateOutputType | null;
    _avg: GroupChatRoomAvgAggregateOutputType | null;
    _sum: GroupChatRoomSumAggregateOutputType | null;
    _min: GroupChatRoomMinAggregateOutputType | null;
    _max: GroupChatRoomMaxAggregateOutputType | null;
};
type GetGroupChatRoomGroupByPayload<T extends GroupChatRoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GroupChatRoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GroupChatRoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GroupChatRoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GroupChatRoomGroupByOutputType[P]>;
}>>;
export type GroupChatRoomWhereInput = {
    AND?: Prisma.GroupChatRoomWhereInput | Prisma.GroupChatRoomWhereInput[];
    OR?: Prisma.GroupChatRoomWhereInput[];
    NOT?: Prisma.GroupChatRoomWhereInput | Prisma.GroupChatRoomWhereInput[];
    id?: Prisma.StringFilter<"GroupChatRoom"> | string;
    name?: Prisma.StringFilter<"GroupChatRoom"> | string;
    image?: Prisma.StringNullableFilter<"GroupChatRoom"> | string | null;
    is_deleted?: Prisma.BoolFilter<"GroupChatRoom"> | boolean;
    group_members_count?: Prisma.IntFilter<"GroupChatRoom"> | number;
    createdAt?: Prisma.DateTimeFilter<"GroupChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GroupChatRoom"> | Date | string;
    members?: Prisma.GroupChatRoomMemberListRelationFilter;
    chats?: Prisma.GroupChatListRelationFilter;
};
export type GroupChatRoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    group_members_count?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    members?: Prisma.GroupChatRoomMemberOrderByRelationAggregateInput;
    chats?: Prisma.GroupChatOrderByRelationAggregateInput;
};
export type GroupChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GroupChatRoomWhereInput | Prisma.GroupChatRoomWhereInput[];
    OR?: Prisma.GroupChatRoomWhereInput[];
    NOT?: Prisma.GroupChatRoomWhereInput | Prisma.GroupChatRoomWhereInput[];
    name?: Prisma.StringFilter<"GroupChatRoom"> | string;
    image?: Prisma.StringNullableFilter<"GroupChatRoom"> | string | null;
    is_deleted?: Prisma.BoolFilter<"GroupChatRoom"> | boolean;
    group_members_count?: Prisma.IntFilter<"GroupChatRoom"> | number;
    createdAt?: Prisma.DateTimeFilter<"GroupChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GroupChatRoom"> | Date | string;
    members?: Prisma.GroupChatRoomMemberListRelationFilter;
    chats?: Prisma.GroupChatListRelationFilter;
}, "id">;
export type GroupChatRoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    group_members_count?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GroupChatRoomCountOrderByAggregateInput;
    _avg?: Prisma.GroupChatRoomAvgOrderByAggregateInput;
    _max?: Prisma.GroupChatRoomMaxOrderByAggregateInput;
    _min?: Prisma.GroupChatRoomMinOrderByAggregateInput;
    _sum?: Prisma.GroupChatRoomSumOrderByAggregateInput;
};
export type GroupChatRoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.GroupChatRoomScalarWhereWithAggregatesInput | Prisma.GroupChatRoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.GroupChatRoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GroupChatRoomScalarWhereWithAggregatesInput | Prisma.GroupChatRoomScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GroupChatRoom"> | string;
    name?: Prisma.StringWithAggregatesFilter<"GroupChatRoom"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"GroupChatRoom"> | string | null;
    is_deleted?: Prisma.BoolWithAggregatesFilter<"GroupChatRoom"> | boolean;
    group_members_count?: Prisma.IntWithAggregatesFilter<"GroupChatRoom"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GroupChatRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"GroupChatRoom"> | Date | string;
};
export type GroupChatRoomCreateInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.GroupChatRoomMemberCreateNestedManyWithoutGroupChatRoomInput;
    chats?: Prisma.GroupChatCreateNestedManyWithoutGroupChatRoomInput;
};
export type GroupChatRoomUncheckedCreateInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.GroupChatRoomMemberUncheckedCreateNestedManyWithoutGroupChatRoomInput;
    chats?: Prisma.GroupChatUncheckedCreateNestedManyWithoutGroupChatRoomInput;
};
export type GroupChatRoomUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.GroupChatRoomMemberUpdateManyWithoutGroupChatRoomNestedInput;
    chats?: Prisma.GroupChatUpdateManyWithoutGroupChatRoomNestedInput;
};
export type GroupChatRoomUncheckedUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.GroupChatRoomMemberUncheckedUpdateManyWithoutGroupChatRoomNestedInput;
    chats?: Prisma.GroupChatUncheckedUpdateManyWithoutGroupChatRoomNestedInput;
};
export type GroupChatRoomCreateManyInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GroupChatRoomUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomUncheckedUpdateManyInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupChatRoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    group_members_count?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GroupChatRoomAvgOrderByAggregateInput = {
    group_members_count?: Prisma.SortOrder;
};
export type GroupChatRoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    group_members_count?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GroupChatRoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    group_members_count?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GroupChatRoomSumOrderByAggregateInput = {
    group_members_count?: Prisma.SortOrder;
};
export type GroupChatRoomScalarRelationFilter = {
    is?: Prisma.GroupChatRoomWhereInput;
    isNot?: Prisma.GroupChatRoomWhereInput;
};
export type GroupChatRoomCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutMembersInput, Prisma.GroupChatRoomUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.GroupChatRoomCreateOrConnectWithoutMembersInput;
    connect?: Prisma.GroupChatRoomWhereUniqueInput;
};
export type GroupChatRoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutMembersInput, Prisma.GroupChatRoomUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.GroupChatRoomCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.GroupChatRoomUpsertWithoutMembersInput;
    connect?: Prisma.GroupChatRoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupChatRoomUpdateToOneWithWhereWithoutMembersInput, Prisma.GroupChatRoomUpdateWithoutMembersInput>, Prisma.GroupChatRoomUncheckedUpdateWithoutMembersInput>;
};
export type GroupChatRoomCreateNestedOneWithoutChatsInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutChatsInput, Prisma.GroupChatRoomUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.GroupChatRoomCreateOrConnectWithoutChatsInput;
    connect?: Prisma.GroupChatRoomWhereUniqueInput;
};
export type GroupChatRoomUpdateOneRequiredWithoutChatsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutChatsInput, Prisma.GroupChatRoomUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.GroupChatRoomCreateOrConnectWithoutChatsInput;
    upsert?: Prisma.GroupChatRoomUpsertWithoutChatsInput;
    connect?: Prisma.GroupChatRoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupChatRoomUpdateToOneWithWhereWithoutChatsInput, Prisma.GroupChatRoomUpdateWithoutChatsInput>, Prisma.GroupChatRoomUncheckedUpdateWithoutChatsInput>;
};
export type GroupChatRoomCreateWithoutMembersInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chats?: Prisma.GroupChatCreateNestedManyWithoutGroupChatRoomInput;
};
export type GroupChatRoomUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chats?: Prisma.GroupChatUncheckedCreateNestedManyWithoutGroupChatRoomInput;
};
export type GroupChatRoomCreateOrConnectWithoutMembersInput = {
    where: Prisma.GroupChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutMembersInput, Prisma.GroupChatRoomUncheckedCreateWithoutMembersInput>;
};
export type GroupChatRoomUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.GroupChatRoomUpdateWithoutMembersInput, Prisma.GroupChatRoomUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutMembersInput, Prisma.GroupChatRoomUncheckedCreateWithoutMembersInput>;
    where?: Prisma.GroupChatRoomWhereInput;
};
export type GroupChatRoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.GroupChatRoomWhereInput;
    data: Prisma.XOR<Prisma.GroupChatRoomUpdateWithoutMembersInput, Prisma.GroupChatRoomUncheckedUpdateWithoutMembersInput>;
};
export type GroupChatRoomUpdateWithoutMembersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chats?: Prisma.GroupChatUpdateManyWithoutGroupChatRoomNestedInput;
};
export type GroupChatRoomUncheckedUpdateWithoutMembersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chats?: Prisma.GroupChatUncheckedUpdateManyWithoutGroupChatRoomNestedInput;
};
export type GroupChatRoomCreateWithoutChatsInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.GroupChatRoomMemberCreateNestedManyWithoutGroupChatRoomInput;
};
export type GroupChatRoomUncheckedCreateWithoutChatsInput = {
    id?: string;
    name: string;
    image?: string | null;
    is_deleted?: boolean;
    group_members_count?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.GroupChatRoomMemberUncheckedCreateNestedManyWithoutGroupChatRoomInput;
};
export type GroupChatRoomCreateOrConnectWithoutChatsInput = {
    where: Prisma.GroupChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutChatsInput, Prisma.GroupChatRoomUncheckedCreateWithoutChatsInput>;
};
export type GroupChatRoomUpsertWithoutChatsInput = {
    update: Prisma.XOR<Prisma.GroupChatRoomUpdateWithoutChatsInput, Prisma.GroupChatRoomUncheckedUpdateWithoutChatsInput>;
    create: Prisma.XOR<Prisma.GroupChatRoomCreateWithoutChatsInput, Prisma.GroupChatRoomUncheckedCreateWithoutChatsInput>;
    where?: Prisma.GroupChatRoomWhereInput;
};
export type GroupChatRoomUpdateToOneWithWhereWithoutChatsInput = {
    where?: Prisma.GroupChatRoomWhereInput;
    data: Prisma.XOR<Prisma.GroupChatRoomUpdateWithoutChatsInput, Prisma.GroupChatRoomUncheckedUpdateWithoutChatsInput>;
};
export type GroupChatRoomUpdateWithoutChatsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.GroupChatRoomMemberUpdateManyWithoutGroupChatRoomNestedInput;
};
export type GroupChatRoomUncheckedUpdateWithoutChatsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    group_members_count?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.GroupChatRoomMemberUncheckedUpdateManyWithoutGroupChatRoomNestedInput;
};
export type GroupChatRoomCountOutputType = {
    members: number;
    chats: number;
};
export type GroupChatRoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | GroupChatRoomCountOutputTypeCountMembersArgs;
    chats?: boolean | GroupChatRoomCountOutputTypeCountChatsArgs;
};
export type GroupChatRoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomCountOutputTypeSelect<ExtArgs> | null;
};
export type GroupChatRoomCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomMemberWhereInput;
};
export type GroupChatRoomCountOutputTypeCountChatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatWhereInput;
};
export type GroupChatRoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    image?: boolean;
    is_deleted?: boolean;
    group_members_count?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    members?: boolean | Prisma.GroupChatRoom$membersArgs<ExtArgs>;
    chats?: boolean | Prisma.GroupChatRoom$chatsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupChatRoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["groupChatRoom"]>;
export type GroupChatRoomSelectScalar = {
    id?: boolean;
    name?: boolean;
    image?: boolean;
    is_deleted?: boolean;
    group_members_count?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GroupChatRoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "image" | "is_deleted" | "group_members_count" | "createdAt" | "updatedAt", ExtArgs["result"]["groupChatRoom"]>;
export type GroupChatRoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | Prisma.GroupChatRoom$membersArgs<ExtArgs>;
    chats?: boolean | Prisma.GroupChatRoom$chatsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupChatRoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $GroupChatRoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GroupChatRoom";
    objects: {
        members: Prisma.$GroupChatRoomMemberPayload<ExtArgs>[];
        chats: Prisma.$GroupChatPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        image: string | null;
        is_deleted: boolean;
        group_members_count: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["groupChatRoom"]>;
    composites: {};
};
export type GroupChatRoomGetPayload<S extends boolean | null | undefined | GroupChatRoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload, S>;
export type GroupChatRoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GroupChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GroupChatRoomCountAggregateInputType | true;
};
export interface GroupChatRoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GroupChatRoom'];
        meta: {
            name: 'GroupChatRoom';
        };
    };
    findUnique<T extends GroupChatRoomFindUniqueArgs>(args: Prisma.SelectSubset<T, GroupChatRoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GroupChatRoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GroupChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GroupChatRoomFindFirstArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GroupChatRoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GroupChatRoomFindManyArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GroupChatRoomCreateArgs>(args: Prisma.SelectSubset<T, GroupChatRoomCreateArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GroupChatRoomCreateManyArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends GroupChatRoomDeleteArgs>(args: Prisma.SelectSubset<T, GroupChatRoomDeleteArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GroupChatRoomUpdateArgs>(args: Prisma.SelectSubset<T, GroupChatRoomUpdateArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GroupChatRoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, GroupChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GroupChatRoomUpdateManyArgs>(args: Prisma.SelectSubset<T, GroupChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends GroupChatRoomUpsertArgs>(args: Prisma.SelectSubset<T, GroupChatRoomUpsertArgs<ExtArgs>>): Prisma.Prisma__GroupChatRoomClient<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.GroupChatRoomFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.GroupChatRoomAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends GroupChatRoomCountArgs>(args?: Prisma.Subset<T, GroupChatRoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GroupChatRoomCountAggregateOutputType> : number>;
    aggregate<T extends GroupChatRoomAggregateArgs>(args: Prisma.Subset<T, GroupChatRoomAggregateArgs>): Prisma.PrismaPromise<GetGroupChatRoomAggregateType<T>>;
    groupBy<T extends GroupChatRoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GroupChatRoomGroupByArgs['orderBy'];
    } : {
        orderBy?: GroupChatRoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GroupChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GroupChatRoomFieldRefs;
}
export interface Prisma__GroupChatRoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Prisma.GroupChatRoom$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupChatRoom$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chats<T extends Prisma.GroupChatRoom$chatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupChatRoom$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GroupChatRoomFieldRefs {
    readonly id: Prisma.FieldRef<"GroupChatRoom", 'String'>;
    readonly name: Prisma.FieldRef<"GroupChatRoom", 'String'>;
    readonly image: Prisma.FieldRef<"GroupChatRoom", 'String'>;
    readonly is_deleted: Prisma.FieldRef<"GroupChatRoom", 'Boolean'>;
    readonly group_members_count: Prisma.FieldRef<"GroupChatRoom", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"GroupChatRoom", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"GroupChatRoom", 'DateTime'>;
}
export type GroupChatRoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomWhereUniqueInput;
};
export type GroupChatRoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomWhereUniqueInput;
};
export type GroupChatRoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where?: Prisma.GroupChatRoomWhereInput;
    orderBy?: Prisma.GroupChatRoomOrderByWithRelationInput | Prisma.GroupChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatRoomScalarFieldEnum | Prisma.GroupChatRoomScalarFieldEnum[];
};
export type GroupChatRoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where?: Prisma.GroupChatRoomWhereInput;
    orderBy?: Prisma.GroupChatRoomOrderByWithRelationInput | Prisma.GroupChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatRoomScalarFieldEnum | Prisma.GroupChatRoomScalarFieldEnum[];
};
export type GroupChatRoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where?: Prisma.GroupChatRoomWhereInput;
    orderBy?: Prisma.GroupChatRoomOrderByWithRelationInput | Prisma.GroupChatRoomOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatRoomScalarFieldEnum | Prisma.GroupChatRoomScalarFieldEnum[];
};
export type GroupChatRoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupChatRoomCreateInput, Prisma.GroupChatRoomUncheckedCreateInput>;
};
export type GroupChatRoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GroupChatRoomCreateManyInput | Prisma.GroupChatRoomCreateManyInput[];
};
export type GroupChatRoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupChatRoomUpdateInput, Prisma.GroupChatRoomUncheckedUpdateInput>;
    where: Prisma.GroupChatRoomWhereUniqueInput;
};
export type GroupChatRoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GroupChatRoomUpdateManyMutationInput, Prisma.GroupChatRoomUncheckedUpdateManyInput>;
    where?: Prisma.GroupChatRoomWhereInput;
    limit?: number;
};
export type GroupChatRoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupChatRoomCreateInput, Prisma.GroupChatRoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GroupChatRoomUpdateInput, Prisma.GroupChatRoomUncheckedUpdateInput>;
};
export type GroupChatRoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
    where: Prisma.GroupChatRoomWhereUniqueInput;
};
export type GroupChatRoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupChatRoomWhereInput;
    limit?: number;
};
export type GroupChatRoomFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type GroupChatRoomAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type GroupChatRoom$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupChatRoom$chatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatOmit<ExtArgs> | null;
    include?: Prisma.GroupChatInclude<ExtArgs> | null;
    where?: Prisma.GroupChatWhereInput;
    orderBy?: Prisma.GroupChatOrderByWithRelationInput | Prisma.GroupChatOrderByWithRelationInput[];
    cursor?: Prisma.GroupChatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupChatScalarFieldEnum | Prisma.GroupChatScalarFieldEnum[];
};
export type GroupChatRoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupChatRoomSelect<ExtArgs> | null;
    omit?: Prisma.GroupChatRoomOmit<ExtArgs> | null;
    include?: Prisma.GroupChatRoomInclude<ExtArgs> | null;
};
export {};
