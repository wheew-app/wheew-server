import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationEventModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationEventPayload>;
export type AggregateNotificationEvent = {
    _count: NotificationEventCountAggregateOutputType | null;
    _min: NotificationEventMinAggregateOutputType | null;
    _max: NotificationEventMaxAggregateOutputType | null;
};
export type NotificationEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventType: $Enums.NotificationEventType | null;
    title: string | null;
    message: string | null;
    payload: string | null;
    isRead: boolean | null;
    sentAt: Date | null;
    readAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NotificationEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventType: $Enums.NotificationEventType | null;
    title: string | null;
    message: string | null;
    payload: string | null;
    isRead: boolean | null;
    sentAt: Date | null;
    readAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NotificationEventCountAggregateOutputType = {
    id: number;
    userId: number;
    eventType: number;
    title: number;
    message: number;
    payload: number;
    isRead: number;
    sentAt: number;
    readAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type NotificationEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    eventType?: true;
    title?: true;
    message?: true;
    payload?: true;
    isRead?: true;
    sentAt?: true;
    readAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NotificationEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    eventType?: true;
    title?: true;
    message?: true;
    payload?: true;
    isRead?: true;
    sentAt?: true;
    readAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NotificationEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    eventType?: true;
    title?: true;
    message?: true;
    payload?: true;
    isRead?: true;
    sentAt?: true;
    readAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type NotificationEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationEventWhereInput;
    orderBy?: Prisma.NotificationEventOrderByWithRelationInput | Prisma.NotificationEventOrderByWithRelationInput[];
    cursor?: Prisma.NotificationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationEventCountAggregateInputType;
    _min?: NotificationEventMinAggregateInputType;
    _max?: NotificationEventMaxAggregateInputType;
};
export type GetNotificationEventAggregateType<T extends NotificationEventAggregateArgs> = {
    [P in keyof T & keyof AggregateNotificationEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotificationEvent[P]> : Prisma.GetScalarType<T[P], AggregateNotificationEvent[P]>;
};
export type NotificationEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationEventWhereInput;
    orderBy?: Prisma.NotificationEventOrderByWithAggregationInput | Prisma.NotificationEventOrderByWithAggregationInput[];
    by: Prisma.NotificationEventScalarFieldEnum[] | Prisma.NotificationEventScalarFieldEnum;
    having?: Prisma.NotificationEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationEventCountAggregateInputType | true;
    _min?: NotificationEventMinAggregateInputType;
    _max?: NotificationEventMaxAggregateInputType;
};
export type NotificationEventGroupByOutputType = {
    id: string;
    userId: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload: string | null;
    isRead: boolean;
    sentAt: Date;
    readAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: NotificationEventCountAggregateOutputType | null;
    _min: NotificationEventMinAggregateOutputType | null;
    _max: NotificationEventMaxAggregateOutputType | null;
};
type GetNotificationEventGroupByPayload<T extends NotificationEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationEventGroupByOutputType[P]>;
}>>;
export type NotificationEventWhereInput = {
    AND?: Prisma.NotificationEventWhereInput | Prisma.NotificationEventWhereInput[];
    OR?: Prisma.NotificationEventWhereInput[];
    NOT?: Prisma.NotificationEventWhereInput | Prisma.NotificationEventWhereInput[];
    id?: Prisma.StringFilter<"NotificationEvent"> | string;
    userId?: Prisma.StringFilter<"NotificationEvent"> | string;
    eventType?: Prisma.EnumNotificationEventTypeFilter<"NotificationEvent"> | $Enums.NotificationEventType;
    title?: Prisma.StringFilter<"NotificationEvent"> | string;
    message?: Prisma.StringFilter<"NotificationEvent"> | string;
    payload?: Prisma.StringNullableFilter<"NotificationEvent"> | string | null;
    isRead?: Prisma.BoolFilter<"NotificationEvent"> | boolean;
    sentAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    readAt?: Prisma.DateTimeNullableFilter<"NotificationEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type NotificationEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type NotificationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotificationEventWhereInput | Prisma.NotificationEventWhereInput[];
    OR?: Prisma.NotificationEventWhereInput[];
    NOT?: Prisma.NotificationEventWhereInput | Prisma.NotificationEventWhereInput[];
    userId?: Prisma.StringFilter<"NotificationEvent"> | string;
    eventType?: Prisma.EnumNotificationEventTypeFilter<"NotificationEvent"> | $Enums.NotificationEventType;
    title?: Prisma.StringFilter<"NotificationEvent"> | string;
    message?: Prisma.StringFilter<"NotificationEvent"> | string;
    payload?: Prisma.StringNullableFilter<"NotificationEvent"> | string | null;
    isRead?: Prisma.BoolFilter<"NotificationEvent"> | boolean;
    sentAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    readAt?: Prisma.DateTimeNullableFilter<"NotificationEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type NotificationEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.NotificationEventCountOrderByAggregateInput;
    _max?: Prisma.NotificationEventMaxOrderByAggregateInput;
    _min?: Prisma.NotificationEventMinOrderByAggregateInput;
};
export type NotificationEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationEventScalarWhereWithAggregatesInput | Prisma.NotificationEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationEventScalarWhereWithAggregatesInput | Prisma.NotificationEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"NotificationEvent"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"NotificationEvent"> | string;
    eventType?: Prisma.EnumNotificationEventTypeWithAggregatesFilter<"NotificationEvent"> | $Enums.NotificationEventType;
    title?: Prisma.StringWithAggregatesFilter<"NotificationEvent"> | string;
    message?: Prisma.StringWithAggregatesFilter<"NotificationEvent"> | string;
    payload?: Prisma.StringNullableWithAggregatesFilter<"NotificationEvent"> | string | null;
    isRead?: Prisma.BoolWithAggregatesFilter<"NotificationEvent"> | boolean;
    sentAt?: Prisma.DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string;
    readAt?: Prisma.DateTimeNullableWithAggregatesFilter<"NotificationEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string;
};
export type NotificationEventCreateInput = {
    id?: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload?: string | null;
    isRead?: boolean;
    sentAt?: Date | string;
    readAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutNotificationEventsInput;
};
export type NotificationEventUncheckedCreateInput = {
    id?: string;
    userId: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload?: string | null;
    isRead?: boolean;
    sentAt?: Date | string;
    readAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationEventUpdateInput = {
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationEventsNestedInput;
};
export type NotificationEventUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationEventCreateManyInput = {
    id?: string;
    userId: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload?: string | null;
    isRead?: boolean;
    sentAt?: Date | string;
    readAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationEventUpdateManyMutationInput = {
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationEventUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationEventListRelationFilter = {
    every?: Prisma.NotificationEventWhereInput;
    some?: Prisma.NotificationEventWhereInput;
    none?: Prisma.NotificationEventWhereInput;
};
export type NotificationEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationEventCreateWithoutUserInput, Prisma.NotificationEventUncheckedCreateWithoutUserInput> | Prisma.NotificationEventCreateWithoutUserInput[] | Prisma.NotificationEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationEventCreateOrConnectWithoutUserInput | Prisma.NotificationEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationEventCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
};
export type NotificationEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationEventCreateWithoutUserInput, Prisma.NotificationEventUncheckedCreateWithoutUserInput> | Prisma.NotificationEventCreateWithoutUserInput[] | Prisma.NotificationEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationEventCreateOrConnectWithoutUserInput | Prisma.NotificationEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationEventCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
};
export type NotificationEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationEventCreateWithoutUserInput, Prisma.NotificationEventUncheckedCreateWithoutUserInput> | Prisma.NotificationEventCreateWithoutUserInput[] | Prisma.NotificationEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationEventCreateOrConnectWithoutUserInput | Prisma.NotificationEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationEventUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationEventCreateManyUserInputEnvelope;
    set?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    disconnect?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    delete?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    connect?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    update?: Prisma.NotificationEventUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationEventUpdateManyWithWhereWithoutUserInput | Prisma.NotificationEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationEventScalarWhereInput | Prisma.NotificationEventScalarWhereInput[];
};
export type NotificationEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationEventCreateWithoutUserInput, Prisma.NotificationEventUncheckedCreateWithoutUserInput> | Prisma.NotificationEventCreateWithoutUserInput[] | Prisma.NotificationEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationEventCreateOrConnectWithoutUserInput | Prisma.NotificationEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationEventUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationEventCreateManyUserInputEnvelope;
    set?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    disconnect?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    delete?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    connect?: Prisma.NotificationEventWhereUniqueInput | Prisma.NotificationEventWhereUniqueInput[];
    update?: Prisma.NotificationEventUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationEventUpdateManyWithWhereWithoutUserInput | Prisma.NotificationEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationEventScalarWhereInput | Prisma.NotificationEventScalarWhereInput[];
};
export type EnumNotificationEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationEventType;
};
export type NotificationEventCreateWithoutUserInput = {
    id?: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload?: string | null;
    isRead?: boolean;
    sentAt?: Date | string;
    readAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationEventUncheckedCreateWithoutUserInput = {
    id?: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload?: string | null;
    isRead?: boolean;
    sentAt?: Date | string;
    readAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationEventCreateOrConnectWithoutUserInput = {
    where: Prisma.NotificationEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationEventCreateWithoutUserInput, Prisma.NotificationEventUncheckedCreateWithoutUserInput>;
};
export type NotificationEventCreateManyUserInputEnvelope = {
    data: Prisma.NotificationEventCreateManyUserInput | Prisma.NotificationEventCreateManyUserInput[];
};
export type NotificationEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationEventUpdateWithoutUserInput, Prisma.NotificationEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NotificationEventCreateWithoutUserInput, Prisma.NotificationEventUncheckedCreateWithoutUserInput>;
};
export type NotificationEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationEventUpdateWithoutUserInput, Prisma.NotificationEventUncheckedUpdateWithoutUserInput>;
};
export type NotificationEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.NotificationEventScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationEventUpdateManyMutationInput, Prisma.NotificationEventUncheckedUpdateManyWithoutUserInput>;
};
export type NotificationEventScalarWhereInput = {
    AND?: Prisma.NotificationEventScalarWhereInput | Prisma.NotificationEventScalarWhereInput[];
    OR?: Prisma.NotificationEventScalarWhereInput[];
    NOT?: Prisma.NotificationEventScalarWhereInput | Prisma.NotificationEventScalarWhereInput[];
    id?: Prisma.StringFilter<"NotificationEvent"> | string;
    userId?: Prisma.StringFilter<"NotificationEvent"> | string;
    eventType?: Prisma.EnumNotificationEventTypeFilter<"NotificationEvent"> | $Enums.NotificationEventType;
    title?: Prisma.StringFilter<"NotificationEvent"> | string;
    message?: Prisma.StringFilter<"NotificationEvent"> | string;
    payload?: Prisma.StringNullableFilter<"NotificationEvent"> | string | null;
    isRead?: Prisma.BoolFilter<"NotificationEvent"> | boolean;
    sentAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    readAt?: Prisma.DateTimeNullableFilter<"NotificationEvent"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"NotificationEvent"> | Date | string;
};
export type NotificationEventCreateManyUserInput = {
    id?: string;
    eventType: $Enums.NotificationEventType;
    title: string;
    message: string;
    payload?: string | null;
    isRead?: boolean;
    sentAt?: Date | string;
    readAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NotificationEventUpdateWithoutUserInput = {
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationEventUncheckedUpdateWithoutUserInput = {
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationEventUncheckedUpdateManyWithoutUserInput = {
    eventType?: Prisma.EnumNotificationEventTypeFieldUpdateOperationsInput | $Enums.NotificationEventType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventType?: boolean;
    title?: boolean;
    message?: boolean;
    payload?: boolean;
    isRead?: boolean;
    sentAt?: boolean;
    readAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationEvent"]>;
export type NotificationEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    eventType?: boolean;
    title?: boolean;
    message?: boolean;
    payload?: boolean;
    isRead?: boolean;
    sentAt?: boolean;
    readAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type NotificationEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "eventType" | "title" | "message" | "payload" | "isRead" | "sentAt" | "readAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationEvent"]>;
export type NotificationEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $NotificationEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotificationEvent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        eventType: $Enums.NotificationEventType;
        title: string;
        message: string;
        payload: string | null;
        isRead: boolean;
        sentAt: Date;
        readAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["notificationEvent"]>;
    composites: {};
};
export type NotificationEventGetPayload<S extends boolean | null | undefined | NotificationEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload, S>;
export type NotificationEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationEventCountAggregateInputType | true;
};
export interface NotificationEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotificationEvent'];
        meta: {
            name: 'NotificationEvent';
        };
    };
    findUnique<T extends NotificationEventFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationEventFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationEventFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationEventCreateArgs>(args: Prisma.SelectSubset<T, NotificationEventCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationEventCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends NotificationEventDeleteArgs>(args: Prisma.SelectSubset<T, NotificationEventDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationEventUpdateArgs>(args: Prisma.SelectSubset<T, NotificationEventUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationEventUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends NotificationEventUpsertArgs>(args: Prisma.SelectSubset<T, NotificationEventUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationEventClient<runtime.Types.Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.NotificationEventFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.NotificationEventAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends NotificationEventCountArgs>(args?: Prisma.Subset<T, NotificationEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationEventCountAggregateOutputType> : number>;
    aggregate<T extends NotificationEventAggregateArgs>(args: Prisma.Subset<T, NotificationEventAggregateArgs>): Prisma.PrismaPromise<GetNotificationEventAggregateType<T>>;
    groupBy<T extends NotificationEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationEventGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationEventFieldRefs;
}
export interface Prisma__NotificationEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationEventFieldRefs {
    readonly id: Prisma.FieldRef<"NotificationEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"NotificationEvent", 'String'>;
    readonly eventType: Prisma.FieldRef<"NotificationEvent", 'NotificationEventType'>;
    readonly title: Prisma.FieldRef<"NotificationEvent", 'String'>;
    readonly message: Prisma.FieldRef<"NotificationEvent", 'String'>;
    readonly payload: Prisma.FieldRef<"NotificationEvent", 'String'>;
    readonly isRead: Prisma.FieldRef<"NotificationEvent", 'Boolean'>;
    readonly sentAt: Prisma.FieldRef<"NotificationEvent", 'DateTime'>;
    readonly readAt: Prisma.FieldRef<"NotificationEvent", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"NotificationEvent", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"NotificationEvent", 'DateTime'>;
}
export type NotificationEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where: Prisma.NotificationEventWhereUniqueInput;
};
export type NotificationEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where: Prisma.NotificationEventWhereUniqueInput;
};
export type NotificationEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where?: Prisma.NotificationEventWhereInput;
    orderBy?: Prisma.NotificationEventOrderByWithRelationInput | Prisma.NotificationEventOrderByWithRelationInput[];
    cursor?: Prisma.NotificationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationEventScalarFieldEnum | Prisma.NotificationEventScalarFieldEnum[];
};
export type NotificationEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where?: Prisma.NotificationEventWhereInput;
    orderBy?: Prisma.NotificationEventOrderByWithRelationInput | Prisma.NotificationEventOrderByWithRelationInput[];
    cursor?: Prisma.NotificationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationEventScalarFieldEnum | Prisma.NotificationEventScalarFieldEnum[];
};
export type NotificationEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where?: Prisma.NotificationEventWhereInput;
    orderBy?: Prisma.NotificationEventOrderByWithRelationInput | Prisma.NotificationEventOrderByWithRelationInput[];
    cursor?: Prisma.NotificationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationEventScalarFieldEnum | Prisma.NotificationEventScalarFieldEnum[];
};
export type NotificationEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationEventCreateInput, Prisma.NotificationEventUncheckedCreateInput>;
};
export type NotificationEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationEventCreateManyInput | Prisma.NotificationEventCreateManyInput[];
};
export type NotificationEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationEventUpdateInput, Prisma.NotificationEventUncheckedUpdateInput>;
    where: Prisma.NotificationEventWhereUniqueInput;
};
export type NotificationEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationEventUpdateManyMutationInput, Prisma.NotificationEventUncheckedUpdateManyInput>;
    where?: Prisma.NotificationEventWhereInput;
    limit?: number;
};
export type NotificationEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where: Prisma.NotificationEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationEventCreateInput, Prisma.NotificationEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationEventUpdateInput, Prisma.NotificationEventUncheckedUpdateInput>;
};
export type NotificationEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
    where: Prisma.NotificationEventWhereUniqueInput;
};
export type NotificationEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationEventWhereInput;
    limit?: number;
};
export type NotificationEventFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type NotificationEventAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type NotificationEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationEventSelect<ExtArgs> | null;
    omit?: Prisma.NotificationEventOmit<ExtArgs> | null;
    include?: Prisma.NotificationEventInclude<ExtArgs> | null;
};
export {};
