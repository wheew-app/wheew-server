import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingNotificationCreditModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingNotificationCreditPayload>;
export type AggregateParkingNotificationCredit = {
    _count: ParkingNotificationCreditCountAggregateOutputType | null;
    _avg: ParkingNotificationCreditAvgAggregateOutputType | null;
    _sum: ParkingNotificationCreditSumAggregateOutputType | null;
    _min: ParkingNotificationCreditMinAggregateOutputType | null;
    _max: ParkingNotificationCreditMaxAggregateOutputType | null;
};
export type ParkingNotificationCreditAvgAggregateOutputType = {
    amount: number | null;
    balance: number | null;
};
export type ParkingNotificationCreditSumAggregateOutputType = {
    amount: number | null;
    balance: number | null;
};
export type ParkingNotificationCreditMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    parking_report_id: string | null;
    transaction_type: $Enums.TransactionType | null;
    amount: number | null;
    balance: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingNotificationCreditMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    parking_report_id: string | null;
    transaction_type: $Enums.TransactionType | null;
    amount: number | null;
    balance: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkingNotificationCreditCountAggregateOutputType = {
    id: number;
    user_id: number;
    parking_report_id: number;
    transaction_type: number;
    amount: number;
    balance: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkingNotificationCreditAvgAggregateInputType = {
    amount?: true;
    balance?: true;
};
export type ParkingNotificationCreditSumAggregateInputType = {
    amount?: true;
    balance?: true;
};
export type ParkingNotificationCreditMinAggregateInputType = {
    id?: true;
    user_id?: true;
    parking_report_id?: true;
    transaction_type?: true;
    amount?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingNotificationCreditMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    parking_report_id?: true;
    transaction_type?: true;
    amount?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkingNotificationCreditCountAggregateInputType = {
    id?: true;
    user_id?: true;
    parking_report_id?: true;
    transaction_type?: true;
    amount?: true;
    balance?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkingNotificationCreditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingNotificationCreditWhereInput;
    orderBy?: Prisma.ParkingNotificationCreditOrderByWithRelationInput | Prisma.ParkingNotificationCreditOrderByWithRelationInput[];
    cursor?: Prisma.ParkingNotificationCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingNotificationCreditCountAggregateInputType;
    _avg?: ParkingNotificationCreditAvgAggregateInputType;
    _sum?: ParkingNotificationCreditSumAggregateInputType;
    _min?: ParkingNotificationCreditMinAggregateInputType;
    _max?: ParkingNotificationCreditMaxAggregateInputType;
};
export type GetParkingNotificationCreditAggregateType<T extends ParkingNotificationCreditAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingNotificationCredit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingNotificationCredit[P]> : Prisma.GetScalarType<T[P], AggregateParkingNotificationCredit[P]>;
};
export type ParkingNotificationCreditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingNotificationCreditWhereInput;
    orderBy?: Prisma.ParkingNotificationCreditOrderByWithAggregationInput | Prisma.ParkingNotificationCreditOrderByWithAggregationInput[];
    by: Prisma.ParkingNotificationCreditScalarFieldEnum[] | Prisma.ParkingNotificationCreditScalarFieldEnum;
    having?: Prisma.ParkingNotificationCreditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingNotificationCreditCountAggregateInputType | true;
    _avg?: ParkingNotificationCreditAvgAggregateInputType;
    _sum?: ParkingNotificationCreditSumAggregateInputType;
    _min?: ParkingNotificationCreditMinAggregateInputType;
    _max?: ParkingNotificationCreditMaxAggregateInputType;
};
export type ParkingNotificationCreditGroupByOutputType = {
    id: string;
    user_id: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkingNotificationCreditCountAggregateOutputType | null;
    _avg: ParkingNotificationCreditAvgAggregateOutputType | null;
    _sum: ParkingNotificationCreditSumAggregateOutputType | null;
    _min: ParkingNotificationCreditMinAggregateOutputType | null;
    _max: ParkingNotificationCreditMaxAggregateOutputType | null;
};
type GetParkingNotificationCreditGroupByPayload<T extends ParkingNotificationCreditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingNotificationCreditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingNotificationCreditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingNotificationCreditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingNotificationCreditGroupByOutputType[P]>;
}>>;
export type ParkingNotificationCreditWhereInput = {
    AND?: Prisma.ParkingNotificationCreditWhereInput | Prisma.ParkingNotificationCreditWhereInput[];
    OR?: Prisma.ParkingNotificationCreditWhereInput[];
    NOT?: Prisma.ParkingNotificationCreditWhereInput | Prisma.ParkingNotificationCreditWhereInput[];
    id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    user_id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    parking_report_id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    transaction_type?: Prisma.EnumTransactionTypeFilter<"ParkingNotificationCredit"> | $Enums.TransactionType;
    amount?: Prisma.IntFilter<"ParkingNotificationCredit"> | number;
    balance?: Prisma.IntFilter<"ParkingNotificationCredit"> | number;
    createdAt?: Prisma.DateTimeFilter<"ParkingNotificationCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingNotificationCredit"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ParkingNotificationCreditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parking_report_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ParkingNotificationCreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkingNotificationCreditWhereInput | Prisma.ParkingNotificationCreditWhereInput[];
    OR?: Prisma.ParkingNotificationCreditWhereInput[];
    NOT?: Prisma.ParkingNotificationCreditWhereInput | Prisma.ParkingNotificationCreditWhereInput[];
    user_id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    parking_report_id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    transaction_type?: Prisma.EnumTransactionTypeFilter<"ParkingNotificationCredit"> | $Enums.TransactionType;
    amount?: Prisma.IntFilter<"ParkingNotificationCredit"> | number;
    balance?: Prisma.IntFilter<"ParkingNotificationCredit"> | number;
    createdAt?: Prisma.DateTimeFilter<"ParkingNotificationCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingNotificationCredit"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ParkingNotificationCreditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parking_report_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkingNotificationCreditCountOrderByAggregateInput;
    _avg?: Prisma.ParkingNotificationCreditAvgOrderByAggregateInput;
    _max?: Prisma.ParkingNotificationCreditMaxOrderByAggregateInput;
    _min?: Prisma.ParkingNotificationCreditMinOrderByAggregateInput;
    _sum?: Prisma.ParkingNotificationCreditSumOrderByAggregateInput;
};
export type ParkingNotificationCreditScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingNotificationCreditScalarWhereWithAggregatesInput | Prisma.ParkingNotificationCreditScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingNotificationCreditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingNotificationCreditScalarWhereWithAggregatesInput | Prisma.ParkingNotificationCreditScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkingNotificationCredit"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"ParkingNotificationCredit"> | string;
    parking_report_id?: Prisma.StringWithAggregatesFilter<"ParkingNotificationCredit"> | string;
    transaction_type?: Prisma.EnumTransactionTypeWithAggregatesFilter<"ParkingNotificationCredit"> | $Enums.TransactionType;
    amount?: Prisma.IntWithAggregatesFilter<"ParkingNotificationCredit"> | number;
    balance?: Prisma.IntWithAggregatesFilter<"ParkingNotificationCredit"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingNotificationCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkingNotificationCredit"> | Date | string;
};
export type ParkingNotificationCreditCreateInput = {
    id?: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutParkingNotificationCreditsInput;
};
export type ParkingNotificationCreditUncheckedCreateInput = {
    id?: string;
    user_id: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingNotificationCreditUpdateInput = {
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutParkingNotificationCreditsNestedInput;
};
export type ParkingNotificationCreditUncheckedUpdateInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingNotificationCreditCreateManyInput = {
    id?: string;
    user_id: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingNotificationCreditUpdateManyMutationInput = {
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingNotificationCreditUncheckedUpdateManyInput = {
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingNotificationCreditListRelationFilter = {
    every?: Prisma.ParkingNotificationCreditWhereInput;
    some?: Prisma.ParkingNotificationCreditWhereInput;
    none?: Prisma.ParkingNotificationCreditWhereInput;
};
export type ParkingNotificationCreditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParkingNotificationCreditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parking_report_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingNotificationCreditAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type ParkingNotificationCreditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parking_report_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingNotificationCreditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parking_report_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkingNotificationCreditSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type ParkingNotificationCreditCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkingNotificationCreditCreateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput> | Prisma.ParkingNotificationCreditCreateWithoutUserInput[] | Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput | Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParkingNotificationCreditCreateManyUserInputEnvelope;
    connect?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
};
export type ParkingNotificationCreditUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkingNotificationCreditCreateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput> | Prisma.ParkingNotificationCreditCreateWithoutUserInput[] | Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput | Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParkingNotificationCreditCreateManyUserInputEnvelope;
    connect?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
};
export type ParkingNotificationCreditUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingNotificationCreditCreateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput> | Prisma.ParkingNotificationCreditCreateWithoutUserInput[] | Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput | Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParkingNotificationCreditUpsertWithWhereUniqueWithoutUserInput | Prisma.ParkingNotificationCreditUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParkingNotificationCreditCreateManyUserInputEnvelope;
    set?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    disconnect?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    delete?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    connect?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    update?: Prisma.ParkingNotificationCreditUpdateWithWhereUniqueWithoutUserInput | Prisma.ParkingNotificationCreditUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParkingNotificationCreditUpdateManyWithWhereWithoutUserInput | Prisma.ParkingNotificationCreditUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParkingNotificationCreditScalarWhereInput | Prisma.ParkingNotificationCreditScalarWhereInput[];
};
export type ParkingNotificationCreditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingNotificationCreditCreateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput> | Prisma.ParkingNotificationCreditCreateWithoutUserInput[] | Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput | Prisma.ParkingNotificationCreditCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParkingNotificationCreditUpsertWithWhereUniqueWithoutUserInput | Prisma.ParkingNotificationCreditUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParkingNotificationCreditCreateManyUserInputEnvelope;
    set?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    disconnect?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    delete?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    connect?: Prisma.ParkingNotificationCreditWhereUniqueInput | Prisma.ParkingNotificationCreditWhereUniqueInput[];
    update?: Prisma.ParkingNotificationCreditUpdateWithWhereUniqueWithoutUserInput | Prisma.ParkingNotificationCreditUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParkingNotificationCreditUpdateManyWithWhereWithoutUserInput | Prisma.ParkingNotificationCreditUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParkingNotificationCreditScalarWhereInput | Prisma.ParkingNotificationCreditScalarWhereInput[];
};
export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
};
export type ParkingNotificationCreditCreateWithoutUserInput = {
    id?: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingNotificationCreditUncheckedCreateWithoutUserInput = {
    id?: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingNotificationCreditCreateOrConnectWithoutUserInput = {
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingNotificationCreditCreateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput>;
};
export type ParkingNotificationCreditCreateManyUserInputEnvelope = {
    data: Prisma.ParkingNotificationCreditCreateManyUserInput | Prisma.ParkingNotificationCreditCreateManyUserInput[];
};
export type ParkingNotificationCreditUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingNotificationCreditUpdateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParkingNotificationCreditCreateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedCreateWithoutUserInput>;
};
export type ParkingNotificationCreditUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingNotificationCreditUpdateWithoutUserInput, Prisma.ParkingNotificationCreditUncheckedUpdateWithoutUserInput>;
};
export type ParkingNotificationCreditUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ParkingNotificationCreditScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingNotificationCreditUpdateManyMutationInput, Prisma.ParkingNotificationCreditUncheckedUpdateManyWithoutUserInput>;
};
export type ParkingNotificationCreditScalarWhereInput = {
    AND?: Prisma.ParkingNotificationCreditScalarWhereInput | Prisma.ParkingNotificationCreditScalarWhereInput[];
    OR?: Prisma.ParkingNotificationCreditScalarWhereInput[];
    NOT?: Prisma.ParkingNotificationCreditScalarWhereInput | Prisma.ParkingNotificationCreditScalarWhereInput[];
    id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    user_id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    parking_report_id?: Prisma.StringFilter<"ParkingNotificationCredit"> | string;
    transaction_type?: Prisma.EnumTransactionTypeFilter<"ParkingNotificationCredit"> | $Enums.TransactionType;
    amount?: Prisma.IntFilter<"ParkingNotificationCredit"> | number;
    balance?: Prisma.IntFilter<"ParkingNotificationCredit"> | number;
    createdAt?: Prisma.DateTimeFilter<"ParkingNotificationCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkingNotificationCredit"> | Date | string;
};
export type ParkingNotificationCreditCreateManyUserInput = {
    id?: string;
    parking_report_id: string;
    transaction_type: $Enums.TransactionType;
    amount: number;
    balance: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkingNotificationCreditUpdateWithoutUserInput = {
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingNotificationCreditUncheckedUpdateWithoutUserInput = {
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingNotificationCreditUncheckedUpdateManyWithoutUserInput = {
    parking_report_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkingNotificationCreditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    parking_report_id?: boolean;
    transaction_type?: boolean;
    amount?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingNotificationCredit"]>;
export type ParkingNotificationCreditSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    parking_report_id?: boolean;
    transaction_type?: boolean;
    amount?: boolean;
    balance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkingNotificationCreditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "parking_report_id" | "transaction_type" | "amount" | "balance" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingNotificationCredit"]>;
export type ParkingNotificationCreditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ParkingNotificationCreditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingNotificationCredit";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        parking_report_id: string;
        transaction_type: $Enums.TransactionType;
        amount: number;
        balance: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parkingNotificationCredit"]>;
    composites: {};
};
export type ParkingNotificationCreditGetPayload<S extends boolean | null | undefined | ParkingNotificationCreditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload, S>;
export type ParkingNotificationCreditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingNotificationCreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingNotificationCreditCountAggregateInputType | true;
};
export interface ParkingNotificationCreditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingNotificationCredit'];
        meta: {
            name: 'ParkingNotificationCredit';
        };
    };
    findUnique<T extends ParkingNotificationCreditFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingNotificationCreditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingNotificationCreditFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingNotificationCreditFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingNotificationCreditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingNotificationCreditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingNotificationCreditFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingNotificationCreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingNotificationCreditCreateArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingNotificationCreditCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingNotificationCreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkingNotificationCreditDeleteArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingNotificationCreditUpdateArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingNotificationCreditDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingNotificationCreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingNotificationCreditUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkingNotificationCreditUpsertArgs>(args: Prisma.SelectSubset<T, ParkingNotificationCreditUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingNotificationCreditClient<runtime.Types.Result.GetResult<Prisma.$ParkingNotificationCreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkingNotificationCreditFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkingNotificationCreditAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkingNotificationCreditCountArgs>(args?: Prisma.Subset<T, ParkingNotificationCreditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingNotificationCreditCountAggregateOutputType> : number>;
    aggregate<T extends ParkingNotificationCreditAggregateArgs>(args: Prisma.Subset<T, ParkingNotificationCreditAggregateArgs>): Prisma.PrismaPromise<GetParkingNotificationCreditAggregateType<T>>;
    groupBy<T extends ParkingNotificationCreditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingNotificationCreditGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingNotificationCreditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingNotificationCreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingNotificationCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingNotificationCreditFieldRefs;
}
export interface Prisma__ParkingNotificationCreditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingNotificationCreditFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingNotificationCredit", 'String'>;
    readonly user_id: Prisma.FieldRef<"ParkingNotificationCredit", 'String'>;
    readonly parking_report_id: Prisma.FieldRef<"ParkingNotificationCredit", 'String'>;
    readonly transaction_type: Prisma.FieldRef<"ParkingNotificationCredit", 'TransactionType'>;
    readonly amount: Prisma.FieldRef<"ParkingNotificationCredit", 'Int'>;
    readonly balance: Prisma.FieldRef<"ParkingNotificationCredit", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ParkingNotificationCredit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkingNotificationCredit", 'DateTime'>;
}
export type ParkingNotificationCreditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
};
export type ParkingNotificationCreditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
};
export type ParkingNotificationCreditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where?: Prisma.ParkingNotificationCreditWhereInput;
    orderBy?: Prisma.ParkingNotificationCreditOrderByWithRelationInput | Prisma.ParkingNotificationCreditOrderByWithRelationInput[];
    cursor?: Prisma.ParkingNotificationCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingNotificationCreditScalarFieldEnum | Prisma.ParkingNotificationCreditScalarFieldEnum[];
};
export type ParkingNotificationCreditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where?: Prisma.ParkingNotificationCreditWhereInput;
    orderBy?: Prisma.ParkingNotificationCreditOrderByWithRelationInput | Prisma.ParkingNotificationCreditOrderByWithRelationInput[];
    cursor?: Prisma.ParkingNotificationCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingNotificationCreditScalarFieldEnum | Prisma.ParkingNotificationCreditScalarFieldEnum[];
};
export type ParkingNotificationCreditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where?: Prisma.ParkingNotificationCreditWhereInput;
    orderBy?: Prisma.ParkingNotificationCreditOrderByWithRelationInput | Prisma.ParkingNotificationCreditOrderByWithRelationInput[];
    cursor?: Prisma.ParkingNotificationCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingNotificationCreditScalarFieldEnum | Prisma.ParkingNotificationCreditScalarFieldEnum[];
};
export type ParkingNotificationCreditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingNotificationCreditCreateInput, Prisma.ParkingNotificationCreditUncheckedCreateInput>;
};
export type ParkingNotificationCreditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingNotificationCreditCreateManyInput | Prisma.ParkingNotificationCreditCreateManyInput[];
};
export type ParkingNotificationCreditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingNotificationCreditUpdateInput, Prisma.ParkingNotificationCreditUncheckedUpdateInput>;
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
};
export type ParkingNotificationCreditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingNotificationCreditUpdateManyMutationInput, Prisma.ParkingNotificationCreditUncheckedUpdateManyInput>;
    where?: Prisma.ParkingNotificationCreditWhereInput;
    limit?: number;
};
export type ParkingNotificationCreditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingNotificationCreditCreateInput, Prisma.ParkingNotificationCreditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingNotificationCreditUpdateInput, Prisma.ParkingNotificationCreditUncheckedUpdateInput>;
};
export type ParkingNotificationCreditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
    where: Prisma.ParkingNotificationCreditWhereUniqueInput;
};
export type ParkingNotificationCreditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingNotificationCreditWhereInput;
    limit?: number;
};
export type ParkingNotificationCreditFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkingNotificationCreditAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkingNotificationCreditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingNotificationCreditSelect<ExtArgs> | null;
    omit?: Prisma.ParkingNotificationCreditOmit<ExtArgs> | null;
    include?: Prisma.ParkingNotificationCreditInclude<ExtArgs> | null;
};
export {};
