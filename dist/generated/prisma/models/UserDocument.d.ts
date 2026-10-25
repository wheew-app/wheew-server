import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$UserDocumentPayload>;
export type AggregateUserDocument = {
    _count: UserDocumentCountAggregateOutputType | null;
    _avg: UserDocumentAvgAggregateOutputType | null;
    _sum: UserDocumentSumAggregateOutputType | null;
    _min: UserDocumentMinAggregateOutputType | null;
    _max: UserDocumentMaxAggregateOutputType | null;
};
export type UserDocumentAvgAggregateOutputType = {
    last_expiry_notified_days: number | null;
};
export type UserDocumentSumAggregateOutputType = {
    last_expiry_notified_days: number | null;
};
export type UserDocumentMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    unique_id: string | null;
    expiry_date: Date | null;
    document_type: $Enums.DocumentType | null;
    document_url: string | null;
    is_verified: boolean | null;
    last_expiry_notified_days: number | null;
    expired_notified_at: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserDocumentMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    unique_id: string | null;
    expiry_date: Date | null;
    document_type: $Enums.DocumentType | null;
    document_url: string | null;
    is_verified: boolean | null;
    last_expiry_notified_days: number | null;
    expired_notified_at: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserDocumentCountAggregateOutputType = {
    id: number;
    user_id: number;
    unique_id: number;
    expiry_date: number;
    document_type: number;
    document_url: number;
    is_verified: number;
    last_expiry_notified_days: number;
    expired_notified_at: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserDocumentAvgAggregateInputType = {
    last_expiry_notified_days?: true;
};
export type UserDocumentSumAggregateInputType = {
    last_expiry_notified_days?: true;
};
export type UserDocumentMinAggregateInputType = {
    id?: true;
    user_id?: true;
    unique_id?: true;
    expiry_date?: true;
    document_type?: true;
    document_url?: true;
    is_verified?: true;
    last_expiry_notified_days?: true;
    expired_notified_at?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserDocumentMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    unique_id?: true;
    expiry_date?: true;
    document_type?: true;
    document_url?: true;
    is_verified?: true;
    last_expiry_notified_days?: true;
    expired_notified_at?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserDocumentCountAggregateInputType = {
    id?: true;
    user_id?: true;
    unique_id?: true;
    expiry_date?: true;
    document_type?: true;
    document_url?: true;
    is_verified?: true;
    last_expiry_notified_days?: true;
    expired_notified_at?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDocumentWhereInput;
    orderBy?: Prisma.UserDocumentOrderByWithRelationInput | Prisma.UserDocumentOrderByWithRelationInput[];
    cursor?: Prisma.UserDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserDocumentCountAggregateInputType;
    _avg?: UserDocumentAvgAggregateInputType;
    _sum?: UserDocumentSumAggregateInputType;
    _min?: UserDocumentMinAggregateInputType;
    _max?: UserDocumentMaxAggregateInputType;
};
export type GetUserDocumentAggregateType<T extends UserDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateUserDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserDocument[P]> : Prisma.GetScalarType<T[P], AggregateUserDocument[P]>;
};
export type UserDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDocumentWhereInput;
    orderBy?: Prisma.UserDocumentOrderByWithAggregationInput | Prisma.UserDocumentOrderByWithAggregationInput[];
    by: Prisma.UserDocumentScalarFieldEnum[] | Prisma.UserDocumentScalarFieldEnum;
    having?: Prisma.UserDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserDocumentCountAggregateInputType | true;
    _avg?: UserDocumentAvgAggregateInputType;
    _sum?: UserDocumentSumAggregateInputType;
    _min?: UserDocumentMinAggregateInputType;
    _max?: UserDocumentMaxAggregateInputType;
};
export type UserDocumentGroupByOutputType = {
    id: string;
    user_id: string;
    unique_id: string | null;
    expiry_date: Date | null;
    document_type: $Enums.DocumentType | null;
    document_url: string | null;
    is_verified: boolean;
    last_expiry_notified_days: number | null;
    expired_notified_at: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserDocumentCountAggregateOutputType | null;
    _avg: UserDocumentAvgAggregateOutputType | null;
    _sum: UserDocumentSumAggregateOutputType | null;
    _min: UserDocumentMinAggregateOutputType | null;
    _max: UserDocumentMaxAggregateOutputType | null;
};
type GetUserDocumentGroupByPayload<T extends UserDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserDocumentGroupByOutputType[P]>;
}>>;
export type UserDocumentWhereInput = {
    AND?: Prisma.UserDocumentWhereInput | Prisma.UserDocumentWhereInput[];
    OR?: Prisma.UserDocumentWhereInput[];
    NOT?: Prisma.UserDocumentWhereInput | Prisma.UserDocumentWhereInput[];
    id?: Prisma.StringFilter<"UserDocument"> | string;
    user_id?: Prisma.StringFilter<"UserDocument"> | string;
    unique_id?: Prisma.StringNullableFilter<"UserDocument"> | string | null;
    expiry_date?: Prisma.DateTimeNullableFilter<"UserDocument"> | Date | string | null;
    document_type?: Prisma.EnumDocumentTypeNullableFilter<"UserDocument"> | $Enums.DocumentType | null;
    document_url?: Prisma.StringNullableFilter<"UserDocument"> | string | null;
    is_verified?: Prisma.BoolFilter<"UserDocument"> | boolean;
    last_expiry_notified_days?: Prisma.IntNullableFilter<"UserDocument"> | number | null;
    expired_notified_at?: Prisma.DateTimeNullableFilter<"UserDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDocument"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    unique_id?: Prisma.SortOrder;
    expiry_date?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_url?: Prisma.SortOrder;
    is_verified?: Prisma.SortOrder;
    last_expiry_notified_days?: Prisma.SortOrder;
    expired_notified_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UserDocumentWhereInput | Prisma.UserDocumentWhereInput[];
    OR?: Prisma.UserDocumentWhereInput[];
    NOT?: Prisma.UserDocumentWhereInput | Prisma.UserDocumentWhereInput[];
    user_id?: Prisma.StringFilter<"UserDocument"> | string;
    unique_id?: Prisma.StringNullableFilter<"UserDocument"> | string | null;
    expiry_date?: Prisma.DateTimeNullableFilter<"UserDocument"> | Date | string | null;
    document_type?: Prisma.EnumDocumentTypeNullableFilter<"UserDocument"> | $Enums.DocumentType | null;
    document_url?: Prisma.StringNullableFilter<"UserDocument"> | string | null;
    is_verified?: Prisma.BoolFilter<"UserDocument"> | boolean;
    last_expiry_notified_days?: Prisma.IntNullableFilter<"UserDocument"> | number | null;
    expired_notified_at?: Prisma.DateTimeNullableFilter<"UserDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDocument"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type UserDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    unique_id?: Prisma.SortOrder;
    expiry_date?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_url?: Prisma.SortOrder;
    is_verified?: Prisma.SortOrder;
    last_expiry_notified_days?: Prisma.SortOrder;
    expired_notified_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserDocumentCountOrderByAggregateInput;
    _avg?: Prisma.UserDocumentAvgOrderByAggregateInput;
    _max?: Prisma.UserDocumentMaxOrderByAggregateInput;
    _min?: Prisma.UserDocumentMinOrderByAggregateInput;
    _sum?: Prisma.UserDocumentSumOrderByAggregateInput;
};
export type UserDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserDocumentScalarWhereWithAggregatesInput | Prisma.UserDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserDocumentScalarWhereWithAggregatesInput | Prisma.UserDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserDocument"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"UserDocument"> | string;
    unique_id?: Prisma.StringNullableWithAggregatesFilter<"UserDocument"> | string | null;
    expiry_date?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDocument"> | Date | string | null;
    document_type?: Prisma.EnumDocumentTypeNullableWithAggregatesFilter<"UserDocument"> | $Enums.DocumentType | null;
    document_url?: Prisma.StringNullableWithAggregatesFilter<"UserDocument"> | string | null;
    is_verified?: Prisma.BoolWithAggregatesFilter<"UserDocument"> | boolean;
    last_expiry_notified_days?: Prisma.IntNullableWithAggregatesFilter<"UserDocument"> | number | null;
    expired_notified_at?: Prisma.DateTimeNullableWithAggregatesFilter<"UserDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserDocument"> | Date | string;
};
export type UserDocumentCreateInput = {
    id?: string;
    unique_id?: string | null;
    expiry_date?: Date | string | null;
    document_type?: $Enums.DocumentType | null;
    document_url?: string | null;
    is_verified?: boolean;
    last_expiry_notified_days?: number | null;
    expired_notified_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDocumentsInput;
};
export type UserDocumentUncheckedCreateInput = {
    id?: string;
    user_id: string;
    unique_id?: string | null;
    expiry_date?: Date | string | null;
    document_type?: $Enums.DocumentType | null;
    document_url?: string | null;
    is_verified?: boolean;
    last_expiry_notified_days?: number | null;
    expired_notified_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDocumentUpdateInput = {
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type UserDocumentUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDocumentCreateManyInput = {
    id?: string;
    user_id: string;
    unique_id?: string | null;
    expiry_date?: Date | string | null;
    document_type?: $Enums.DocumentType | null;
    document_url?: string | null;
    is_verified?: boolean;
    last_expiry_notified_days?: number | null;
    expired_notified_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDocumentUpdateManyMutationInput = {
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDocumentUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDocumentListRelationFilter = {
    every?: Prisma.UserDocumentWhereInput;
    some?: Prisma.UserDocumentWhereInput;
    none?: Prisma.UserDocumentWhereInput;
};
export type UserDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    unique_id?: Prisma.SortOrder;
    expiry_date?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_url?: Prisma.SortOrder;
    is_verified?: Prisma.SortOrder;
    last_expiry_notified_days?: Prisma.SortOrder;
    expired_notified_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDocumentAvgOrderByAggregateInput = {
    last_expiry_notified_days?: Prisma.SortOrder;
};
export type UserDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    unique_id?: Prisma.SortOrder;
    expiry_date?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_url?: Prisma.SortOrder;
    is_verified?: Prisma.SortOrder;
    last_expiry_notified_days?: Prisma.SortOrder;
    expired_notified_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    unique_id?: Prisma.SortOrder;
    expiry_date?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_url?: Prisma.SortOrder;
    is_verified?: Prisma.SortOrder;
    last_expiry_notified_days?: Prisma.SortOrder;
    expired_notified_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDocumentSumOrderByAggregateInput = {
    last_expiry_notified_days?: Prisma.SortOrder;
};
export type UserDocumentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserDocumentCreateWithoutUserInput, Prisma.UserDocumentUncheckedCreateWithoutUserInput> | Prisma.UserDocumentCreateWithoutUserInput[] | Prisma.UserDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDocumentCreateOrConnectWithoutUserInput | Prisma.UserDocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserDocumentCreateManyUserInputEnvelope;
    connect?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
};
export type UserDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserDocumentCreateWithoutUserInput, Prisma.UserDocumentUncheckedCreateWithoutUserInput> | Prisma.UserDocumentCreateWithoutUserInput[] | Prisma.UserDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDocumentCreateOrConnectWithoutUserInput | Prisma.UserDocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserDocumentCreateManyUserInputEnvelope;
    connect?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
};
export type UserDocumentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserDocumentCreateWithoutUserInput, Prisma.UserDocumentUncheckedCreateWithoutUserInput> | Prisma.UserDocumentCreateWithoutUserInput[] | Prisma.UserDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDocumentCreateOrConnectWithoutUserInput | Prisma.UserDocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserDocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.UserDocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserDocumentCreateManyUserInputEnvelope;
    set?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    disconnect?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    delete?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    connect?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    update?: Prisma.UserDocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.UserDocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserDocumentUpdateManyWithWhereWithoutUserInput | Prisma.UserDocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserDocumentScalarWhereInput | Prisma.UserDocumentScalarWhereInput[];
};
export type UserDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserDocumentCreateWithoutUserInput, Prisma.UserDocumentUncheckedCreateWithoutUserInput> | Prisma.UserDocumentCreateWithoutUserInput[] | Prisma.UserDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDocumentCreateOrConnectWithoutUserInput | Prisma.UserDocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserDocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.UserDocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserDocumentCreateManyUserInputEnvelope;
    set?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    disconnect?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    delete?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    connect?: Prisma.UserDocumentWhereUniqueInput | Prisma.UserDocumentWhereUniqueInput[];
    update?: Prisma.UserDocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.UserDocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserDocumentUpdateManyWithWhereWithoutUserInput | Prisma.UserDocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserDocumentScalarWhereInput | Prisma.UserDocumentScalarWhereInput[];
};
export type NullableEnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType | null;
    unset?: boolean;
};
export type UserDocumentCreateWithoutUserInput = {
    id?: string;
    unique_id?: string | null;
    expiry_date?: Date | string | null;
    document_type?: $Enums.DocumentType | null;
    document_url?: string | null;
    is_verified?: boolean;
    last_expiry_notified_days?: number | null;
    expired_notified_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDocumentUncheckedCreateWithoutUserInput = {
    id?: string;
    unique_id?: string | null;
    expiry_date?: Date | string | null;
    document_type?: $Enums.DocumentType | null;
    document_url?: string | null;
    is_verified?: boolean;
    last_expiry_notified_days?: number | null;
    expired_notified_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDocumentCreateOrConnectWithoutUserInput = {
    where: Prisma.UserDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDocumentCreateWithoutUserInput, Prisma.UserDocumentUncheckedCreateWithoutUserInput>;
};
export type UserDocumentCreateManyUserInputEnvelope = {
    data: Prisma.UserDocumentCreateManyUserInput | Prisma.UserDocumentCreateManyUserInput[];
};
export type UserDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserDocumentUpdateWithoutUserInput, Prisma.UserDocumentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserDocumentCreateWithoutUserInput, Prisma.UserDocumentUncheckedCreateWithoutUserInput>;
};
export type UserDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserDocumentUpdateWithoutUserInput, Prisma.UserDocumentUncheckedUpdateWithoutUserInput>;
};
export type UserDocumentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.UserDocumentUpdateManyMutationInput, Prisma.UserDocumentUncheckedUpdateManyWithoutUserInput>;
};
export type UserDocumentScalarWhereInput = {
    AND?: Prisma.UserDocumentScalarWhereInput | Prisma.UserDocumentScalarWhereInput[];
    OR?: Prisma.UserDocumentScalarWhereInput[];
    NOT?: Prisma.UserDocumentScalarWhereInput | Prisma.UserDocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"UserDocument"> | string;
    user_id?: Prisma.StringFilter<"UserDocument"> | string;
    unique_id?: Prisma.StringNullableFilter<"UserDocument"> | string | null;
    expiry_date?: Prisma.DateTimeNullableFilter<"UserDocument"> | Date | string | null;
    document_type?: Prisma.EnumDocumentTypeNullableFilter<"UserDocument"> | $Enums.DocumentType | null;
    document_url?: Prisma.StringNullableFilter<"UserDocument"> | string | null;
    is_verified?: Prisma.BoolFilter<"UserDocument"> | boolean;
    last_expiry_notified_days?: Prisma.IntNullableFilter<"UserDocument"> | number | null;
    expired_notified_at?: Prisma.DateTimeNullableFilter<"UserDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDocument"> | Date | string;
};
export type UserDocumentCreateManyUserInput = {
    id?: string;
    unique_id?: string | null;
    expiry_date?: Date | string | null;
    document_type?: $Enums.DocumentType | null;
    document_url?: string | null;
    is_verified?: boolean;
    last_expiry_notified_days?: number | null;
    expired_notified_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDocumentUpdateWithoutUserInput = {
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDocumentUncheckedUpdateWithoutUserInput = {
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDocumentUncheckedUpdateManyWithoutUserInput = {
    unique_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiry_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document_type?: Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType | null;
    document_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_expiry_notified_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    expired_notified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    unique_id?: boolean;
    expiry_date?: boolean;
    document_type?: boolean;
    document_url?: boolean;
    is_verified?: boolean;
    last_expiry_notified_days?: boolean;
    expired_notified_at?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userDocument"]>;
export type UserDocumentSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    unique_id?: boolean;
    expiry_date?: boolean;
    document_type?: boolean;
    document_url?: boolean;
    is_verified?: boolean;
    last_expiry_notified_days?: boolean;
    expired_notified_at?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "unique_id" | "expiry_date" | "document_type" | "document_url" | "is_verified" | "last_expiry_notified_days" | "expired_notified_at" | "createdAt" | "updatedAt", ExtArgs["result"]["userDocument"]>;
export type UserDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserDocument";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        unique_id: string | null;
        expiry_date: Date | null;
        document_type: $Enums.DocumentType | null;
        document_url: string | null;
        is_verified: boolean;
        last_expiry_notified_days: number | null;
        expired_notified_at: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userDocument"]>;
    composites: {};
};
export type UserDocumentGetPayload<S extends boolean | null | undefined | UserDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload, S>;
export type UserDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserDocumentCountAggregateInputType | true;
};
export interface UserDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserDocument'];
        meta: {
            name: 'UserDocument';
        };
    };
    findUnique<T extends UserDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, UserDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, UserDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, UserDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserDocumentCreateArgs>(args: Prisma.SelectSubset<T, UserDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, UserDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserDocumentDeleteArgs>(args: Prisma.SelectSubset<T, UserDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserDocumentUpdateArgs>(args: Prisma.SelectSubset<T, UserDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, UserDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserDocumentUpsertArgs>(args: Prisma.SelectSubset<T, UserDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__UserDocumentClient<runtime.Types.Result.GetResult<Prisma.$UserDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.UserDocumentFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.UserDocumentAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends UserDocumentCountArgs>(args?: Prisma.Subset<T, UserDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserDocumentCountAggregateOutputType> : number>;
    aggregate<T extends UserDocumentAggregateArgs>(args: Prisma.Subset<T, UserDocumentAggregateArgs>): Prisma.PrismaPromise<GetUserDocumentAggregateType<T>>;
    groupBy<T extends UserDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: UserDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserDocumentFieldRefs;
}
export interface Prisma__UserDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"UserDocument", 'String'>;
    readonly user_id: Prisma.FieldRef<"UserDocument", 'String'>;
    readonly unique_id: Prisma.FieldRef<"UserDocument", 'String'>;
    readonly expiry_date: Prisma.FieldRef<"UserDocument", 'DateTime'>;
    readonly document_type: Prisma.FieldRef<"UserDocument", 'DocumentType'>;
    readonly document_url: Prisma.FieldRef<"UserDocument", 'String'>;
    readonly is_verified: Prisma.FieldRef<"UserDocument", 'Boolean'>;
    readonly last_expiry_notified_days: Prisma.FieldRef<"UserDocument", 'Int'>;
    readonly expired_notified_at: Prisma.FieldRef<"UserDocument", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"UserDocument", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserDocument", 'DateTime'>;
}
export type UserDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where: Prisma.UserDocumentWhereUniqueInput;
};
export type UserDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where: Prisma.UserDocumentWhereUniqueInput;
};
export type UserDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where?: Prisma.UserDocumentWhereInput;
    orderBy?: Prisma.UserDocumentOrderByWithRelationInput | Prisma.UserDocumentOrderByWithRelationInput[];
    cursor?: Prisma.UserDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDocumentScalarFieldEnum | Prisma.UserDocumentScalarFieldEnum[];
};
export type UserDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where?: Prisma.UserDocumentWhereInput;
    orderBy?: Prisma.UserDocumentOrderByWithRelationInput | Prisma.UserDocumentOrderByWithRelationInput[];
    cursor?: Prisma.UserDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDocumentScalarFieldEnum | Prisma.UserDocumentScalarFieldEnum[];
};
export type UserDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where?: Prisma.UserDocumentWhereInput;
    orderBy?: Prisma.UserDocumentOrderByWithRelationInput | Prisma.UserDocumentOrderByWithRelationInput[];
    cursor?: Prisma.UserDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDocumentScalarFieldEnum | Prisma.UserDocumentScalarFieldEnum[];
};
export type UserDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserDocumentCreateInput, Prisma.UserDocumentUncheckedCreateInput>;
};
export type UserDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserDocumentCreateManyInput | Prisma.UserDocumentCreateManyInput[];
};
export type UserDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserDocumentUpdateInput, Prisma.UserDocumentUncheckedUpdateInput>;
    where: Prisma.UserDocumentWhereUniqueInput;
};
export type UserDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserDocumentUpdateManyMutationInput, Prisma.UserDocumentUncheckedUpdateManyInput>;
    where?: Prisma.UserDocumentWhereInput;
    limit?: number;
};
export type UserDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where: Prisma.UserDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDocumentCreateInput, Prisma.UserDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserDocumentUpdateInput, Prisma.UserDocumentUncheckedUpdateInput>;
};
export type UserDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
    where: Prisma.UserDocumentWhereUniqueInput;
};
export type UserDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDocumentWhereInput;
    limit?: number;
};
export type UserDocumentFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type UserDocumentAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type UserDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDocumentSelect<ExtArgs> | null;
    omit?: Prisma.UserDocumentOmit<ExtArgs> | null;
    include?: Prisma.UserDocumentInclude<ExtArgs> | null;
};
export {};
