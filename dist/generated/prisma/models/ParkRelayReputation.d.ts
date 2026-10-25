import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkRelayReputationModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkRelayReputationPayload>;
export type AggregateParkRelayReputation = {
    _count: ParkRelayReputationCountAggregateOutputType | null;
    _avg: ParkRelayReputationAvgAggregateOutputType | null;
    _sum: ParkRelayReputationSumAggregateOutputType | null;
    _min: ParkRelayReputationMinAggregateOutputType | null;
    _max: ParkRelayReputationMaxAggregateOutputType | null;
};
export type ParkRelayReputationAvgAggregateOutputType = {
    successfulHandoffs: number | null;
    occupiedReports: number | null;
    cancelledHandoffs: number | null;
    expiredHandoffs: number | null;
    score: number | null;
};
export type ParkRelayReputationSumAggregateOutputType = {
    successfulHandoffs: number | null;
    occupiedReports: number | null;
    cancelledHandoffs: number | null;
    expiredHandoffs: number | null;
    score: number | null;
};
export type ParkRelayReputationMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    successfulHandoffs: number | null;
    occupiedReports: number | null;
    cancelledHandoffs: number | null;
    expiredHandoffs: number | null;
    score: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkRelayReputationMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    successfulHandoffs: number | null;
    occupiedReports: number | null;
    cancelledHandoffs: number | null;
    expiredHandoffs: number | null;
    score: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkRelayReputationCountAggregateOutputType = {
    id: number;
    userId: number;
    successfulHandoffs: number;
    occupiedReports: number;
    cancelledHandoffs: number;
    expiredHandoffs: number;
    score: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkRelayReputationAvgAggregateInputType = {
    successfulHandoffs?: true;
    occupiedReports?: true;
    cancelledHandoffs?: true;
    expiredHandoffs?: true;
    score?: true;
};
export type ParkRelayReputationSumAggregateInputType = {
    successfulHandoffs?: true;
    occupiedReports?: true;
    cancelledHandoffs?: true;
    expiredHandoffs?: true;
    score?: true;
};
export type ParkRelayReputationMinAggregateInputType = {
    id?: true;
    userId?: true;
    successfulHandoffs?: true;
    occupiedReports?: true;
    cancelledHandoffs?: true;
    expiredHandoffs?: true;
    score?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkRelayReputationMaxAggregateInputType = {
    id?: true;
    userId?: true;
    successfulHandoffs?: true;
    occupiedReports?: true;
    cancelledHandoffs?: true;
    expiredHandoffs?: true;
    score?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkRelayReputationCountAggregateInputType = {
    id?: true;
    userId?: true;
    successfulHandoffs?: true;
    occupiedReports?: true;
    cancelledHandoffs?: true;
    expiredHandoffs?: true;
    score?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkRelayReputationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkRelayReputationWhereInput;
    orderBy?: Prisma.ParkRelayReputationOrderByWithRelationInput | Prisma.ParkRelayReputationOrderByWithRelationInput[];
    cursor?: Prisma.ParkRelayReputationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkRelayReputationCountAggregateInputType;
    _avg?: ParkRelayReputationAvgAggregateInputType;
    _sum?: ParkRelayReputationSumAggregateInputType;
    _min?: ParkRelayReputationMinAggregateInputType;
    _max?: ParkRelayReputationMaxAggregateInputType;
};
export type GetParkRelayReputationAggregateType<T extends ParkRelayReputationAggregateArgs> = {
    [P in keyof T & keyof AggregateParkRelayReputation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkRelayReputation[P]> : Prisma.GetScalarType<T[P], AggregateParkRelayReputation[P]>;
};
export type ParkRelayReputationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkRelayReputationWhereInput;
    orderBy?: Prisma.ParkRelayReputationOrderByWithAggregationInput | Prisma.ParkRelayReputationOrderByWithAggregationInput[];
    by: Prisma.ParkRelayReputationScalarFieldEnum[] | Prisma.ParkRelayReputationScalarFieldEnum;
    having?: Prisma.ParkRelayReputationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkRelayReputationCountAggregateInputType | true;
    _avg?: ParkRelayReputationAvgAggregateInputType;
    _sum?: ParkRelayReputationSumAggregateInputType;
    _min?: ParkRelayReputationMinAggregateInputType;
    _max?: ParkRelayReputationMaxAggregateInputType;
};
export type ParkRelayReputationGroupByOutputType = {
    id: string;
    userId: string;
    successfulHandoffs: number;
    occupiedReports: number;
    cancelledHandoffs: number;
    expiredHandoffs: number;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkRelayReputationCountAggregateOutputType | null;
    _avg: ParkRelayReputationAvgAggregateOutputType | null;
    _sum: ParkRelayReputationSumAggregateOutputType | null;
    _min: ParkRelayReputationMinAggregateOutputType | null;
    _max: ParkRelayReputationMaxAggregateOutputType | null;
};
type GetParkRelayReputationGroupByPayload<T extends ParkRelayReputationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkRelayReputationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkRelayReputationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkRelayReputationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkRelayReputationGroupByOutputType[P]>;
}>>;
export type ParkRelayReputationWhereInput = {
    AND?: Prisma.ParkRelayReputationWhereInput | Prisma.ParkRelayReputationWhereInput[];
    OR?: Prisma.ParkRelayReputationWhereInput[];
    NOT?: Prisma.ParkRelayReputationWhereInput | Prisma.ParkRelayReputationWhereInput[];
    id?: Prisma.StringFilter<"ParkRelayReputation"> | string;
    userId?: Prisma.StringFilter<"ParkRelayReputation"> | string;
    successfulHandoffs?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    occupiedReports?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    cancelledHandoffs?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    expiredHandoffs?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    score?: Prisma.FloatFilter<"ParkRelayReputation"> | number;
    createdAt?: Prisma.DateTimeFilter<"ParkRelayReputation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkRelayReputation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ParkRelayReputationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ParkRelayReputationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ParkRelayReputationWhereInput | Prisma.ParkRelayReputationWhereInput[];
    OR?: Prisma.ParkRelayReputationWhereInput[];
    NOT?: Prisma.ParkRelayReputationWhereInput | Prisma.ParkRelayReputationWhereInput[];
    successfulHandoffs?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    occupiedReports?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    cancelledHandoffs?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    expiredHandoffs?: Prisma.IntFilter<"ParkRelayReputation"> | number;
    score?: Prisma.FloatFilter<"ParkRelayReputation"> | number;
    createdAt?: Prisma.DateTimeFilter<"ParkRelayReputation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParkRelayReputation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type ParkRelayReputationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkRelayReputationCountOrderByAggregateInput;
    _avg?: Prisma.ParkRelayReputationAvgOrderByAggregateInput;
    _max?: Prisma.ParkRelayReputationMaxOrderByAggregateInput;
    _min?: Prisma.ParkRelayReputationMinOrderByAggregateInput;
    _sum?: Prisma.ParkRelayReputationSumOrderByAggregateInput;
};
export type ParkRelayReputationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkRelayReputationScalarWhereWithAggregatesInput | Prisma.ParkRelayReputationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkRelayReputationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkRelayReputationScalarWhereWithAggregatesInput | Prisma.ParkRelayReputationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkRelayReputation"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ParkRelayReputation"> | string;
    successfulHandoffs?: Prisma.IntWithAggregatesFilter<"ParkRelayReputation"> | number;
    occupiedReports?: Prisma.IntWithAggregatesFilter<"ParkRelayReputation"> | number;
    cancelledHandoffs?: Prisma.IntWithAggregatesFilter<"ParkRelayReputation"> | number;
    expiredHandoffs?: Prisma.IntWithAggregatesFilter<"ParkRelayReputation"> | number;
    score?: Prisma.FloatWithAggregatesFilter<"ParkRelayReputation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkRelayReputation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParkRelayReputation"> | Date | string;
};
export type ParkRelayReputationCreateInput = {
    id?: string;
    successfulHandoffs?: number;
    occupiedReports?: number;
    cancelledHandoffs?: number;
    expiredHandoffs?: number;
    score?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutParkRelayReputationInput;
};
export type ParkRelayReputationUncheckedCreateInput = {
    id?: string;
    userId: string;
    successfulHandoffs?: number;
    occupiedReports?: number;
    cancelledHandoffs?: number;
    expiredHandoffs?: number;
    score?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkRelayReputationUpdateInput = {
    successfulHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    occupiedReports?: Prisma.IntFieldUpdateOperationsInput | number;
    cancelledHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    expiredHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutParkRelayReputationNestedInput;
};
export type ParkRelayReputationUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    successfulHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    occupiedReports?: Prisma.IntFieldUpdateOperationsInput | number;
    cancelledHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    expiredHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkRelayReputationCreateManyInput = {
    id?: string;
    userId: string;
    successfulHandoffs?: number;
    occupiedReports?: number;
    cancelledHandoffs?: number;
    expiredHandoffs?: number;
    score?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkRelayReputationUpdateManyMutationInput = {
    successfulHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    occupiedReports?: Prisma.IntFieldUpdateOperationsInput | number;
    cancelledHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    expiredHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkRelayReputationUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    successfulHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    occupiedReports?: Prisma.IntFieldUpdateOperationsInput | number;
    cancelledHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    expiredHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkRelayReputationNullableScalarRelationFilter = {
    is?: Prisma.ParkRelayReputationWhereInput | null;
    isNot?: Prisma.ParkRelayReputationWhereInput | null;
};
export type ParkRelayReputationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkRelayReputationAvgOrderByAggregateInput = {
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ParkRelayReputationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkRelayReputationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkRelayReputationSumOrderByAggregateInput = {
    successfulHandoffs?: Prisma.SortOrder;
    occupiedReports?: Prisma.SortOrder;
    cancelledHandoffs?: Prisma.SortOrder;
    expiredHandoffs?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type ParkRelayReputationCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkRelayReputationCreateWithoutUserInput, Prisma.ParkRelayReputationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParkRelayReputationCreateOrConnectWithoutUserInput;
    connect?: Prisma.ParkRelayReputationWhereUniqueInput;
};
export type ParkRelayReputationUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParkRelayReputationCreateWithoutUserInput, Prisma.ParkRelayReputationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParkRelayReputationCreateOrConnectWithoutUserInput;
    connect?: Prisma.ParkRelayReputationWhereUniqueInput;
};
export type ParkRelayReputationUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkRelayReputationCreateWithoutUserInput, Prisma.ParkRelayReputationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParkRelayReputationCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ParkRelayReputationUpsertWithoutUserInput;
    disconnect?: Prisma.ParkRelayReputationWhereInput | boolean;
    delete?: Prisma.ParkRelayReputationWhereInput | boolean;
    connect?: Prisma.ParkRelayReputationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkRelayReputationUpdateToOneWithWhereWithoutUserInput, Prisma.ParkRelayReputationUpdateWithoutUserInput>, Prisma.ParkRelayReputationUncheckedUpdateWithoutUserInput>;
};
export type ParkRelayReputationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParkRelayReputationCreateWithoutUserInput, Prisma.ParkRelayReputationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ParkRelayReputationCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ParkRelayReputationUpsertWithoutUserInput;
    disconnect?: Prisma.ParkRelayReputationWhereInput | boolean;
    delete?: Prisma.ParkRelayReputationWhereInput | boolean;
    connect?: Prisma.ParkRelayReputationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkRelayReputationUpdateToOneWithWhereWithoutUserInput, Prisma.ParkRelayReputationUpdateWithoutUserInput>, Prisma.ParkRelayReputationUncheckedUpdateWithoutUserInput>;
};
export type ParkRelayReputationCreateWithoutUserInput = {
    id?: string;
    successfulHandoffs?: number;
    occupiedReports?: number;
    cancelledHandoffs?: number;
    expiredHandoffs?: number;
    score?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkRelayReputationUncheckedCreateWithoutUserInput = {
    id?: string;
    successfulHandoffs?: number;
    occupiedReports?: number;
    cancelledHandoffs?: number;
    expiredHandoffs?: number;
    score?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkRelayReputationCreateOrConnectWithoutUserInput = {
    where: Prisma.ParkRelayReputationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkRelayReputationCreateWithoutUserInput, Prisma.ParkRelayReputationUncheckedCreateWithoutUserInput>;
};
export type ParkRelayReputationUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ParkRelayReputationUpdateWithoutUserInput, Prisma.ParkRelayReputationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParkRelayReputationCreateWithoutUserInput, Prisma.ParkRelayReputationUncheckedCreateWithoutUserInput>;
    where?: Prisma.ParkRelayReputationWhereInput;
};
export type ParkRelayReputationUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ParkRelayReputationWhereInput;
    data: Prisma.XOR<Prisma.ParkRelayReputationUpdateWithoutUserInput, Prisma.ParkRelayReputationUncheckedUpdateWithoutUserInput>;
};
export type ParkRelayReputationUpdateWithoutUserInput = {
    successfulHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    occupiedReports?: Prisma.IntFieldUpdateOperationsInput | number;
    cancelledHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    expiredHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkRelayReputationUncheckedUpdateWithoutUserInput = {
    successfulHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    occupiedReports?: Prisma.IntFieldUpdateOperationsInput | number;
    cancelledHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    expiredHandoffs?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkRelayReputationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    successfulHandoffs?: boolean;
    occupiedReports?: boolean;
    cancelledHandoffs?: boolean;
    expiredHandoffs?: boolean;
    score?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkRelayReputation"]>;
export type ParkRelayReputationSelectScalar = {
    id?: boolean;
    userId?: boolean;
    successfulHandoffs?: boolean;
    occupiedReports?: boolean;
    cancelledHandoffs?: boolean;
    expiredHandoffs?: boolean;
    score?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkRelayReputationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "successfulHandoffs" | "occupiedReports" | "cancelledHandoffs" | "expiredHandoffs" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["parkRelayReputation"]>;
export type ParkRelayReputationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ParkRelayReputationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkRelayReputation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        successfulHandoffs: number;
        occupiedReports: number;
        cancelledHandoffs: number;
        expiredHandoffs: number;
        score: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parkRelayReputation"]>;
    composites: {};
};
export type ParkRelayReputationGetPayload<S extends boolean | null | undefined | ParkRelayReputationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload, S>;
export type ParkRelayReputationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkRelayReputationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkRelayReputationCountAggregateInputType | true;
};
export interface ParkRelayReputationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkRelayReputation'];
        meta: {
            name: 'ParkRelayReputation';
        };
    };
    findUnique<T extends ParkRelayReputationFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkRelayReputationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkRelayReputationFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkRelayReputationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkRelayReputationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkRelayReputationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkRelayReputationFindManyArgs>(args?: Prisma.SelectSubset<T, ParkRelayReputationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkRelayReputationCreateArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationCreateArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkRelayReputationCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkRelayReputationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParkRelayReputationDeleteArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkRelayReputationUpdateArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkRelayReputationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkRelayReputationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkRelayReputationUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParkRelayReputationUpsertArgs>(args: Prisma.SelectSubset<T, ParkRelayReputationUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkRelayReputationClient<runtime.Types.Result.GetResult<Prisma.$ParkRelayReputationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findRaw(args?: Prisma.ParkRelayReputationFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    aggregateRaw(args?: Prisma.ParkRelayReputationAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    count<T extends ParkRelayReputationCountArgs>(args?: Prisma.Subset<T, ParkRelayReputationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkRelayReputationCountAggregateOutputType> : number>;
    aggregate<T extends ParkRelayReputationAggregateArgs>(args: Prisma.Subset<T, ParkRelayReputationAggregateArgs>): Prisma.PrismaPromise<GetParkRelayReputationAggregateType<T>>;
    groupBy<T extends ParkRelayReputationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkRelayReputationGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkRelayReputationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkRelayReputationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkRelayReputationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkRelayReputationFieldRefs;
}
export interface Prisma__ParkRelayReputationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkRelayReputationFieldRefs {
    readonly id: Prisma.FieldRef<"ParkRelayReputation", 'String'>;
    readonly userId: Prisma.FieldRef<"ParkRelayReputation", 'String'>;
    readonly successfulHandoffs: Prisma.FieldRef<"ParkRelayReputation", 'Int'>;
    readonly occupiedReports: Prisma.FieldRef<"ParkRelayReputation", 'Int'>;
    readonly cancelledHandoffs: Prisma.FieldRef<"ParkRelayReputation", 'Int'>;
    readonly expiredHandoffs: Prisma.FieldRef<"ParkRelayReputation", 'Int'>;
    readonly score: Prisma.FieldRef<"ParkRelayReputation", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"ParkRelayReputation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParkRelayReputation", 'DateTime'>;
}
export type ParkRelayReputationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where: Prisma.ParkRelayReputationWhereUniqueInput;
};
export type ParkRelayReputationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where: Prisma.ParkRelayReputationWhereUniqueInput;
};
export type ParkRelayReputationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where?: Prisma.ParkRelayReputationWhereInput;
    orderBy?: Prisma.ParkRelayReputationOrderByWithRelationInput | Prisma.ParkRelayReputationOrderByWithRelationInput[];
    cursor?: Prisma.ParkRelayReputationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkRelayReputationScalarFieldEnum | Prisma.ParkRelayReputationScalarFieldEnum[];
};
export type ParkRelayReputationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where?: Prisma.ParkRelayReputationWhereInput;
    orderBy?: Prisma.ParkRelayReputationOrderByWithRelationInput | Prisma.ParkRelayReputationOrderByWithRelationInput[];
    cursor?: Prisma.ParkRelayReputationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkRelayReputationScalarFieldEnum | Prisma.ParkRelayReputationScalarFieldEnum[];
};
export type ParkRelayReputationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where?: Prisma.ParkRelayReputationWhereInput;
    orderBy?: Prisma.ParkRelayReputationOrderByWithRelationInput | Prisma.ParkRelayReputationOrderByWithRelationInput[];
    cursor?: Prisma.ParkRelayReputationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkRelayReputationScalarFieldEnum | Prisma.ParkRelayReputationScalarFieldEnum[];
};
export type ParkRelayReputationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkRelayReputationCreateInput, Prisma.ParkRelayReputationUncheckedCreateInput>;
};
export type ParkRelayReputationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkRelayReputationCreateManyInput | Prisma.ParkRelayReputationCreateManyInput[];
};
export type ParkRelayReputationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkRelayReputationUpdateInput, Prisma.ParkRelayReputationUncheckedUpdateInput>;
    where: Prisma.ParkRelayReputationWhereUniqueInput;
};
export type ParkRelayReputationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkRelayReputationUpdateManyMutationInput, Prisma.ParkRelayReputationUncheckedUpdateManyInput>;
    where?: Prisma.ParkRelayReputationWhereInput;
    limit?: number;
};
export type ParkRelayReputationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where: Prisma.ParkRelayReputationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkRelayReputationCreateInput, Prisma.ParkRelayReputationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkRelayReputationUpdateInput, Prisma.ParkRelayReputationUncheckedUpdateInput>;
};
export type ParkRelayReputationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
    where: Prisma.ParkRelayReputationWhereUniqueInput;
};
export type ParkRelayReputationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkRelayReputationWhereInput;
    limit?: number;
};
export type ParkRelayReputationFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filter?: runtime.InputJsonValue;
    options?: runtime.InputJsonValue;
};
export type ParkRelayReputationAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pipeline?: runtime.InputJsonValue[];
    options?: runtime.InputJsonValue;
};
export type ParkRelayReputationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkRelayReputationSelect<ExtArgs> | null;
    omit?: Prisma.ParkRelayReputationOmit<ExtArgs> | null;
    include?: Prisma.ParkRelayReputationInclude<ExtArgs> | null;
};
export {};
