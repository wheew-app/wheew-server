import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserDeviceKeyModel = runtime.Types.Result.DefaultSelection<Prisma.$UserDeviceKeyPayload>;
export type AggregateUserDeviceKey = {
    _count: UserDeviceKeyCountAggregateOutputType | null;
    _min: UserDeviceKeyMinAggregateOutputType | null;
    _max: UserDeviceKeyMaxAggregateOutputType | null;
};
export type UserDeviceKeyMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    deviceId: string | null;
    publicKey: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserDeviceKeyMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    deviceId: string | null;
    publicKey: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserDeviceKeyCountAggregateOutputType = {
    id: number;
    userId: number;
    deviceId: number;
    publicKey: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserDeviceKeyMinAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    publicKey?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserDeviceKeyMaxAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    publicKey?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserDeviceKeyCountAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    publicKey?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserDeviceKeyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDeviceKeyWhereInput;
    orderBy?: Prisma.UserDeviceKeyOrderByWithRelationInput | Prisma.UserDeviceKeyOrderByWithRelationInput[];
    cursor?: Prisma.UserDeviceKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserDeviceKeyCountAggregateInputType;
    _min?: UserDeviceKeyMinAggregateInputType;
    _max?: UserDeviceKeyMaxAggregateInputType;
};
export type GetUserDeviceKeyAggregateType<T extends UserDeviceKeyAggregateArgs> = {
    [P in keyof T & keyof AggregateUserDeviceKey]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserDeviceKey[P]> : Prisma.GetScalarType<T[P], AggregateUserDeviceKey[P]>;
};
export type UserDeviceKeyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDeviceKeyWhereInput;
    orderBy?: Prisma.UserDeviceKeyOrderByWithAggregationInput | Prisma.UserDeviceKeyOrderByWithAggregationInput[];
    by: Prisma.UserDeviceKeyScalarFieldEnum[] | Prisma.UserDeviceKeyScalarFieldEnum;
    having?: Prisma.UserDeviceKeyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserDeviceKeyCountAggregateInputType | true;
    _min?: UserDeviceKeyMinAggregateInputType;
    _max?: UserDeviceKeyMaxAggregateInputType;
};
export type UserDeviceKeyGroupByOutputType = {
    id: string;
    userId: string;
    deviceId: string;
    publicKey: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserDeviceKeyCountAggregateOutputType | null;
    _min: UserDeviceKeyMinAggregateOutputType | null;
    _max: UserDeviceKeyMaxAggregateOutputType | null;
};
type GetUserDeviceKeyGroupByPayload<T extends UserDeviceKeyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserDeviceKeyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserDeviceKeyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserDeviceKeyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserDeviceKeyGroupByOutputType[P]>;
}>>;
export type UserDeviceKeyWhereInput = {
    AND?: Prisma.UserDeviceKeyWhereInput | Prisma.UserDeviceKeyWhereInput[];
    OR?: Prisma.UserDeviceKeyWhereInput[];
    NOT?: Prisma.UserDeviceKeyWhereInput | Prisma.UserDeviceKeyWhereInput[];
    id?: Prisma.StringFilter<"UserDeviceKey"> | string;
    userId?: Prisma.StringFilter<"UserDeviceKey"> | string;
    deviceId?: Prisma.StringFilter<"UserDeviceKey"> | string;
    publicKey?: Prisma.StringFilter<"UserDeviceKey"> | string;
    isActive?: Prisma.BoolFilter<"UserDeviceKey"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"UserDeviceKey"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDeviceKey"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserDeviceKeyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserDeviceKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_deviceId?: Prisma.UserDeviceKeyUserIdDeviceIdCompoundUniqueInput;
    AND?: Prisma.UserDeviceKeyWhereInput | Prisma.UserDeviceKeyWhereInput[];
    OR?: Prisma.UserDeviceKeyWhereInput[];
    NOT?: Prisma.UserDeviceKeyWhereInput | Prisma.UserDeviceKeyWhereInput[];
    userId?: Prisma.StringFilter<"UserDeviceKey"> | string;
    deviceId?: Prisma.StringFilter<"UserDeviceKey"> | string;
    publicKey?: Prisma.StringFilter<"UserDeviceKey"> | string;
    isActive?: Prisma.BoolFilter<"UserDeviceKey"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"UserDeviceKey"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDeviceKey"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_deviceId">;
export type UserDeviceKeyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserDeviceKeyCountOrderByAggregateInput;
    _max?: Prisma.UserDeviceKeyMaxOrderByAggregateInput;
    _min?: Prisma.UserDeviceKeyMinOrderByAggregateInput;
};
export type UserDeviceKeyScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserDeviceKeyScalarWhereWithAggregatesInput | Prisma.UserDeviceKeyScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserDeviceKeyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserDeviceKeyScalarWhereWithAggregatesInput | Prisma.UserDeviceKeyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserDeviceKey"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserDeviceKey"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"UserDeviceKey"> | string;
    publicKey?: Prisma.StringWithAggregatesFilter<"UserDeviceKey"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"UserDeviceKey"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserDeviceKey"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserDeviceKey"> | Date | string;
};
export type UserDeviceKeyCreateInput = {
    id?: string;
    deviceId: string;
    publicKey: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDeviceKeysInput;
};
export type UserDeviceKeyUncheckedCreateInput = {
    id?: string;
    userId: string;
    deviceId: string;
    publicKey: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceKeyUpdateInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDeviceKeysNestedInput;
};
export type UserDeviceKeyUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceKeyCreateManyInput = {
    id?: string;
    userId: string;
    deviceId: string;
    publicKey: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceKeyUpdateManyMutationInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceKeyUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceKeyListRelationFilter = {
    every?: Prisma.UserDeviceKeyWhereInput;
    some?: Prisma.UserDeviceKeyWhereInput;
    none?: Prisma.UserDeviceKeyWhereInput;
};
export type UserDeviceKeyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserDeviceKeyUserIdDeviceIdCompoundUniqueInput = {
    userId: string;
    deviceId: string;
};
export type UserDeviceKeyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDeviceKeyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDeviceKeyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserDeviceKeyCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserDeviceKeyCreateWithoutUserInput, Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput> | Prisma.UserDeviceKeyCreateWithoutUserInput[] | Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput | Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserDeviceKeyCreateManyUserInputEnvelope;
    connect?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
};
export type UserDeviceKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserDeviceKeyCreateWithoutUserInput, Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput> | Prisma.UserDeviceKeyCreateWithoutUserInput[] | Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput | Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserDeviceKeyCreateManyUserInputEnvelope;
    connect?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
};
export type UserDeviceKeyUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceKeyCreateWithoutUserInput, Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput> | Prisma.UserDeviceKeyCreateWithoutUserInput[] | Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput | Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserDeviceKeyUpsertWithWhereUniqueWithoutUserInput | Prisma.UserDeviceKeyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserDeviceKeyCreateManyUserInputEnvelope;
    set?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    disconnect?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    delete?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    connect?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    update?: Prisma.UserDeviceKeyUpdateWithWhereUniqueWithoutUserInput | Prisma.UserDeviceKeyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserDeviceKeyUpdateManyWithWhereWithoutUserInput | Prisma.UserDeviceKeyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserDeviceKeyScalarWhereInput | Prisma.UserDeviceKeyScalarWhereInput[];
};
export type UserDeviceKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserDeviceKeyCreateWithoutUserInput, Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput> | Prisma.UserDeviceKeyCreateWithoutUserInput[] | Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput | Prisma.UserDeviceKeyCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserDeviceKeyUpsertWithWhereUniqueWithoutUserInput | Prisma.UserDeviceKeyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserDeviceKeyCreateManyUserInputEnvelope;
    set?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    disconnect?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    delete?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    connect?: Prisma.UserDeviceKeyWhereUniqueInput | Prisma.UserDeviceKeyWhereUniqueInput[];
    update?: Prisma.UserDeviceKeyUpdateWithWhereUniqueWithoutUserInput | Prisma.UserDeviceKeyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserDeviceKeyUpdateManyWithWhereWithoutUserInput | Prisma.UserDeviceKeyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserDeviceKeyScalarWhereInput | Prisma.UserDeviceKeyScalarWhereInput[];
};
export type UserDeviceKeyCreateWithoutUserInput = {
    id?: string;
    deviceId: string;
    publicKey: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceKeyUncheckedCreateWithoutUserInput = {
    id?: string;
    deviceId: string;
    publicKey: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceKeyCreateOrConnectWithoutUserInput = {
    where: Prisma.UserDeviceKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceKeyCreateWithoutUserInput, Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput>;
};
export type UserDeviceKeyCreateManyUserInputEnvelope = {
    data: Prisma.UserDeviceKeyCreateManyUserInput | Prisma.UserDeviceKeyCreateManyUserInput[];
};
export type UserDeviceKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserDeviceKeyWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserDeviceKeyUpdateWithoutUserInput, Prisma.UserDeviceKeyUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserDeviceKeyCreateWithoutUserInput, Prisma.UserDeviceKeyUncheckedCreateWithoutUserInput>;
};
export type UserDeviceKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserDeviceKeyWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserDeviceKeyUpdateWithoutUserInput, Prisma.UserDeviceKeyUncheckedUpdateWithoutUserInput>;
};
export type UserDeviceKeyUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserDeviceKeyScalarWhereInput;
    data: Prisma.XOR<Prisma.UserDeviceKeyUpdateManyMutationInput, Prisma.UserDeviceKeyUncheckedUpdateManyWithoutUserInput>;
};
export type UserDeviceKeyScalarWhereInput = {
    AND?: Prisma.UserDeviceKeyScalarWhereInput | Prisma.UserDeviceKeyScalarWhereInput[];
    OR?: Prisma.UserDeviceKeyScalarWhereInput[];
    NOT?: Prisma.UserDeviceKeyScalarWhereInput | Prisma.UserDeviceKeyScalarWhereInput[];
    id?: Prisma.StringFilter<"UserDeviceKey"> | string;
    userId?: Prisma.StringFilter<"UserDeviceKey"> | string;
    deviceId?: Prisma.StringFilter<"UserDeviceKey"> | string;
    publicKey?: Prisma.StringFilter<"UserDeviceKey"> | string;
    isActive?: Prisma.BoolFilter<"UserDeviceKey"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"UserDeviceKey"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserDeviceKey"> | Date | string;
};
export type UserDeviceKeyCreateManyUserInput = {
    id?: string;
    deviceId: string;
    publicKey: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserDeviceKeyUpdateWithoutUserInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceKeyUncheckedUpdateWithoutUserInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceKeyUncheckedUpdateManyWithoutUserInput = {
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserDeviceKeySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    publicKey?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userDeviceKey"]>;
export type UserDeviceKeySelectScalar = {
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    publicKey?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserDeviceKeyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "deviceId" | "publicKey" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["userDeviceKey"]>;
export type UserDeviceKeyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserDeviceKeyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserDeviceKey";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        deviceId: string;
        publicKey: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userDeviceKey"]>;
    composites: {};
};
export type UserDeviceKeyGetPayload<S extends boolean | null | undefined | UserDeviceKeyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload, S>;
export type UserDeviceKeyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserDeviceKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserDeviceKeyCountAggregateInputType | true;
};
export interface UserDeviceKeyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserDeviceKey'];
        meta: {
            name: 'UserDeviceKey';
        };
    };
    findUnique<T extends UserDeviceKeyFindUniqueArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserDeviceKeyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserDeviceKeyFindFirstArgs>(args?: Prisma.SelectSubset<T, UserDeviceKeyFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserDeviceKeyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserDeviceKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserDeviceKeyFindManyArgs>(args?: Prisma.SelectSubset<T, UserDeviceKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserDeviceKeyCreateArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyCreateArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserDeviceKeyCreateManyArgs>(args?: Prisma.SelectSubset<T, UserDeviceKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserDeviceKeyDeleteArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyDeleteArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserDeviceKeyUpdateArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyUpdateArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeviceKeyDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeviceKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserDeviceKeyUpdateManyArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserDeviceKeyUpsertArgs>(args: Prisma.SelectSubset<T, UserDeviceKeyUpsertArgs<ExtArgs>>): Prisma.Prisma__UserDeviceKeyClient<runtime.Types.Result.GetResult<Prisma.$UserDeviceKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.UserDeviceKeyFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.UserDeviceKeyAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends UserDeviceKeyCountArgs>(args?: Prisma.Subset<T, UserDeviceKeyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserDeviceKeyCountAggregateOutputType> : number>;
    aggregate<T extends UserDeviceKeyAggregateArgs>(args: Prisma.Subset<T, UserDeviceKeyAggregateArgs>): Prisma.PrismaPromise<GetUserDeviceKeyAggregateType<T>>;
    groupBy<T extends UserDeviceKeyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserDeviceKeyGroupByArgs['orderBy'];
    } : {
        orderBy?: UserDeviceKeyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserDeviceKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDeviceKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserDeviceKeyFieldRefs;
}
export interface Prisma__UserDeviceKeyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserDeviceKeyFieldRefs {
    readonly id: Prisma.FieldRef<"UserDeviceKey", 'String'>;
    readonly userId: Prisma.FieldRef<"UserDeviceKey", 'String'>;
    readonly deviceId: Prisma.FieldRef<"UserDeviceKey", 'String'>;
    readonly publicKey: Prisma.FieldRef<"UserDeviceKey", 'String'>;
    readonly isActive: Prisma.FieldRef<"UserDeviceKey", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"UserDeviceKey", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserDeviceKey", 'DateTime'>;
}
export type UserDeviceKeyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where: Prisma.UserDeviceKeyWhereUniqueInput;
};
export type UserDeviceKeyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where: Prisma.UserDeviceKeyWhereUniqueInput;
};
export type UserDeviceKeyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where?: Prisma.UserDeviceKeyWhereInput;
    orderBy?: Prisma.UserDeviceKeyOrderByWithRelationInput | Prisma.UserDeviceKeyOrderByWithRelationInput[];
    cursor?: Prisma.UserDeviceKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDeviceKeyScalarFieldEnum | Prisma.UserDeviceKeyScalarFieldEnum[];
};
export type UserDeviceKeyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where?: Prisma.UserDeviceKeyWhereInput;
    orderBy?: Prisma.UserDeviceKeyOrderByWithRelationInput | Prisma.UserDeviceKeyOrderByWithRelationInput[];
    cursor?: Prisma.UserDeviceKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDeviceKeyScalarFieldEnum | Prisma.UserDeviceKeyScalarFieldEnum[];
};
export type UserDeviceKeyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where?: Prisma.UserDeviceKeyWhereInput;
    orderBy?: Prisma.UserDeviceKeyOrderByWithRelationInput | Prisma.UserDeviceKeyOrderByWithRelationInput[];
    cursor?: Prisma.UserDeviceKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserDeviceKeyScalarFieldEnum | Prisma.UserDeviceKeyScalarFieldEnum[];
};
export type UserDeviceKeyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserDeviceKeyCreateInput, Prisma.UserDeviceKeyUncheckedCreateInput>;
};
export type UserDeviceKeyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserDeviceKeyCreateManyInput | Prisma.UserDeviceKeyCreateManyInput[];
};
export type UserDeviceKeyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserDeviceKeyUpdateInput, Prisma.UserDeviceKeyUncheckedUpdateInput>;
    where: Prisma.UserDeviceKeyWhereUniqueInput;
};
export type UserDeviceKeyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserDeviceKeyUpdateManyMutationInput, Prisma.UserDeviceKeyUncheckedUpdateManyInput>;
    where?: Prisma.UserDeviceKeyWhereInput;
    limit?: number;
};
export type UserDeviceKeyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where: Prisma.UserDeviceKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserDeviceKeyCreateInput, Prisma.UserDeviceKeyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserDeviceKeyUpdateInput, Prisma.UserDeviceKeyUncheckedUpdateInput>;
};
export type UserDeviceKeyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
    where: Prisma.UserDeviceKeyWhereUniqueInput;
};
export type UserDeviceKeyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserDeviceKeyWhereInput;
    limit?: number;
};
export type UserDeviceKeyFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type UserDeviceKeyAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type UserDeviceKeyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserDeviceKeySelect<ExtArgs> | null;
    omit?: Prisma.UserDeviceKeyOmit<ExtArgs> | null;
    include?: Prisma.UserDeviceKeyInclude<ExtArgs> | null;
};
export {};
