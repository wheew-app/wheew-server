import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SupportTicketModel = runtime.Types.Result.DefaultSelection<Prisma.$SupportTicketPayload>;
export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null;
    _min: SupportTicketMinAggregateOutputType | null;
    _max: SupportTicketMaxAggregateOutputType | null;
};
export type SupportTicketMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    subject: string | null;
    description: string | null;
    adminReply: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SupportTicketMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    subject: string | null;
    description: string | null;
    adminReply: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SupportTicketCountAggregateOutputType = {
    id: number;
    userId: number;
    subject: number;
    description: number;
    adminReply: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SupportTicketMinAggregateInputType = {
    id?: true;
    userId?: true;
    subject?: true;
    description?: true;
    adminReply?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SupportTicketMaxAggregateInputType = {
    id?: true;
    userId?: true;
    subject?: true;
    description?: true;
    adminReply?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SupportTicketCountAggregateInputType = {
    id?: true;
    userId?: true;
    subject?: true;
    description?: true;
    adminReply?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SupportTicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SupportTicketCountAggregateInputType;
    _min?: SupportTicketMinAggregateInputType;
    _max?: SupportTicketMaxAggregateInputType;
};
export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
    [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupportTicket[P]> : Prisma.GetScalarType<T[P], AggregateSupportTicket[P]>;
};
export type SupportTicketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithAggregationInput | Prisma.SupportTicketOrderByWithAggregationInput[];
    by: Prisma.SupportTicketScalarFieldEnum[] | Prisma.SupportTicketScalarFieldEnum;
    having?: Prisma.SupportTicketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupportTicketCountAggregateInputType | true;
    _min?: SupportTicketMinAggregateInputType;
    _max?: SupportTicketMaxAggregateInputType;
};
export type SupportTicketGroupByOutputType = {
    id: string;
    userId: string;
    subject: string;
    description: string;
    adminReply: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SupportTicketCountAggregateOutputType | null;
    _min: SupportTicketMinAggregateOutputType | null;
    _max: SupportTicketMaxAggregateOutputType | null;
};
type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupportTicketGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupportTicketGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupportTicketGroupByOutputType[P]>;
}>>;
export type SupportTicketWhereInput = {
    AND?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    OR?: Prisma.SupportTicketWhereInput[];
    NOT?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    id?: Prisma.StringFilter<"SupportTicket"> | string;
    userId?: Prisma.StringFilter<"SupportTicket"> | string;
    subject?: Prisma.StringFilter<"SupportTicket"> | string;
    description?: Prisma.StringFilter<"SupportTicket"> | string;
    adminReply?: Prisma.StringNullableFilter<"SupportTicket"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SupportTicketOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    adminReply?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    OR?: Prisma.SupportTicketWhereInput[];
    NOT?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    userId?: Prisma.StringFilter<"SupportTicket"> | string;
    subject?: Prisma.StringFilter<"SupportTicket"> | string;
    description?: Prisma.StringFilter<"SupportTicket"> | string;
    adminReply?: Prisma.StringNullableFilter<"SupportTicket"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type SupportTicketOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    adminReply?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SupportTicketCountOrderByAggregateInput;
    _max?: Prisma.SupportTicketMaxOrderByAggregateInput;
    _min?: Prisma.SupportTicketMinOrderByAggregateInput;
};
export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupportTicketScalarWhereWithAggregatesInput | Prisma.SupportTicketScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupportTicketScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupportTicketScalarWhereWithAggregatesInput | Prisma.SupportTicketScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    subject?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    description?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    adminReply?: Prisma.StringNullableWithAggregatesFilter<"SupportTicket"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string;
};
export type SupportTicketCreateInput = {
    id?: string;
    subject: string;
    description: string;
    adminReply?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSupportTicketsInput;
};
export type SupportTicketUncheckedCreateInput = {
    id?: string;
    userId: string;
    subject: string;
    description: string;
    adminReply?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketUpdateInput = {
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSupportTicketsNestedInput;
};
export type SupportTicketUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketCreateManyInput = {
    id?: string;
    userId: string;
    subject: string;
    description: string;
    adminReply?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketUpdateManyMutationInput = {
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketListRelationFilter = {
    every?: Prisma.SupportTicketWhereInput;
    some?: Prisma.SupportTicketWhereInput;
    none?: Prisma.SupportTicketWhereInput;
};
export type SupportTicketOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupportTicketCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    adminReply?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SupportTicketMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    adminReply?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SupportTicketMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    adminReply?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SupportTicketCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
};
export type SupportTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
};
export type SupportTicketUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    set?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    disconnect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    delete?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    update?: Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput | Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
};
export type SupportTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    set?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    disconnect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    delete?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    update?: Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput | Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
};
export type SupportTicketCreateWithoutUserInput = {
    id?: string;
    subject: string;
    description: string;
    adminReply?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketUncheckedCreateWithoutUserInput = {
    id?: string;
    subject: string;
    description: string;
    adminReply?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketCreateOrConnectWithoutUserInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput>;
};
export type SupportTicketCreateManyUserInputEnvelope = {
    data: Prisma.SupportTicketCreateManyUserInput | Prisma.SupportTicketCreateManyUserInput[];
};
export type SupportTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupportTicketUpdateWithoutUserInput, Prisma.SupportTicketUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput>;
};
export type SupportTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupportTicketUpdateWithoutUserInput, Prisma.SupportTicketUncheckedUpdateWithoutUserInput>;
};
export type SupportTicketUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SupportTicketScalarWhereInput;
    data: Prisma.XOR<Prisma.SupportTicketUpdateManyMutationInput, Prisma.SupportTicketUncheckedUpdateManyWithoutUserInput>;
};
export type SupportTicketScalarWhereInput = {
    AND?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
    OR?: Prisma.SupportTicketScalarWhereInput[];
    NOT?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
    id?: Prisma.StringFilter<"SupportTicket"> | string;
    userId?: Prisma.StringFilter<"SupportTicket"> | string;
    subject?: Prisma.StringFilter<"SupportTicket"> | string;
    description?: Prisma.StringFilter<"SupportTicket"> | string;
    adminReply?: Prisma.StringNullableFilter<"SupportTicket"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
};
export type SupportTicketCreateManyUserInput = {
    id?: string;
    subject: string;
    description: string;
    adminReply?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketUpdateWithoutUserInput = {
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketUncheckedUpdateWithoutUserInput = {
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketUncheckedUpdateManyWithoutUserInput = {
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    adminReply?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    subject?: boolean;
    description?: boolean;
    adminReply?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportTicket"]>;
export type SupportTicketSelectScalar = {
    id?: boolean;
    userId?: boolean;
    subject?: boolean;
    description?: boolean;
    adminReply?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SupportTicketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "subject" | "description" | "adminReply" | "createdAt" | "updatedAt", ExtArgs["result"]["supportTicket"]>;
export type SupportTicketInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SupportTicketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupportTicket";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        subject: string;
        description: string;
        adminReply: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["supportTicket"]>;
    composites: {};
};
export type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload, S>;
export type SupportTicketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupportTicketCountAggregateInputType | true;
};
export interface SupportTicketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'];
        meta: {
            name: 'SupportTicket';
        };
    };
    findUnique<T extends SupportTicketFindUniqueArgs>(args: Prisma.SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SupportTicketFindFirstArgs>(args?: Prisma.SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SupportTicketFindManyArgs>(args?: Prisma.SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SupportTicketCreateArgs>(args: Prisma.SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SupportTicketCreateManyArgs>(args?: Prisma.SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SupportTicketDeleteArgs>(args: Prisma.SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SupportTicketUpdateArgs>(args: Prisma.SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SupportTicketUpdateManyArgs>(args: Prisma.SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SupportTicketUpsertArgs>(args: Prisma.SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.SupportTicketFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.SupportTicketAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends SupportTicketCountArgs>(args?: Prisma.Subset<T, SupportTicketCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupportTicketCountAggregateOutputType> : number>;
    aggregate<T extends SupportTicketAggregateArgs>(args: Prisma.Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>;
    groupBy<T extends SupportTicketGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupportTicketGroupByArgs['orderBy'];
    } : {
        orderBy?: SupportTicketGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SupportTicketFieldRefs;
}
export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SupportTicketFieldRefs {
    readonly id: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly userId: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly subject: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly description: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly adminReply: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SupportTicket", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SupportTicket", 'DateTime'>;
}
export type SupportTicketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
export type SupportTicketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
export type SupportTicketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportTicketCreateInput, Prisma.SupportTicketUncheckedCreateInput>;
};
export type SupportTicketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SupportTicketCreateManyInput | Prisma.SupportTicketCreateManyInput[];
};
export type SupportTicketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportTicketUpdateInput, Prisma.SupportTicketUncheckedUpdateInput>;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SupportTicketUpdateManyMutationInput, Prisma.SupportTicketUncheckedUpdateManyInput>;
    where?: Prisma.SupportTicketWhereInput;
    limit?: number;
};
export type SupportTicketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportTicketCreateInput, Prisma.SupportTicketUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SupportTicketUpdateInput, Prisma.SupportTicketUncheckedUpdateInput>;
};
export type SupportTicketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
    limit?: number;
};
export type SupportTicketFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type SupportTicketAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type SupportTicketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
};
export {};
