import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly ChatRoom: "ChatRoom";
    readonly GroupChatRoom: "GroupChatRoom";
    readonly GroupChatRoomMember: "GroupChatRoomMember";
    readonly GroupChat: "GroupChat";
    readonly Chat: "Chat";
    readonly PresetMessage: "PresetMessage";
    readonly MessageRequest: "MessageRequest";
    readonly UsefullNumber: "UsefullNumber";
    readonly UserRating: "UserRating";
    readonly BlockList: "BlockList";
    readonly SitePolicy: "SitePolicy";
    readonly UserDeviceKey: "UserDeviceKey";
    readonly Point: "Point";
    readonly BlackListedWord: "BlackListedWord";
    readonly Faq: "Faq";
    readonly ParkingReport: "ParkingReport";
    readonly ParkingSpot: "ParkingSpot";
    readonly ParkingNotificationCredit: "ParkingNotificationCredit";
    readonly ParkingHandoff: "ParkingHandoff";
    readonly ParkingSearchSession: "ParkingSearchSession";
    readonly SavedParkingLocation: "SavedParkingLocation";
    readonly ParkingSession: "ParkingSession";
    readonly PaidParkingPrompt: "PaidParkingPrompt";
    readonly ParkRelayReputation: "ParkRelayReputation";
    readonly ParkingArea: "ParkingArea";
    readonly ParkingAreaRating: "ParkingAreaRating";
    readonly NotificationEvent: "NotificationEvent";
    readonly NotificationPreference: "NotificationPreference";
    readonly UserLocation: "UserLocation";
    readonly UserDocument: "UserDocument";
    readonly SupportTicket: "SupportTicket";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "chatRoom" | "groupChatRoom" | "groupChatRoomMember" | "groupChat" | "chat" | "presetMessage" | "messageRequest" | "usefullNumber" | "userRating" | "blockList" | "sitePolicy" | "userDeviceKey" | "point" | "blackListedWord" | "faq" | "parkingReport" | "parkingSpot" | "parkingNotificationCredit" | "parkingHandoff" | "parkingSearchSession" | "savedParkingLocation" | "parkingSession" | "paidParkingPrompt" | "parkRelayReputation" | "parkingArea" | "parkingAreaRating" | "notificationEvent" | "notificationPreference" | "userLocation" | "userDocument" | "supportTicket";
        txIsolationLevel: never;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UserFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UserAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        ChatRoom: {
            payload: Prisma.$ChatRoomPayload<ExtArgs>;
            fields: Prisma.ChatRoomFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
                };
                findFirst: {
                    args: Prisma.ChatRoomFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
                };
                findMany: {
                    args: Prisma.ChatRoomFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>[];
                };
                create: {
                    args: Prisma.ChatRoomCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
                };
                createMany: {
                    args: Prisma.ChatRoomCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChatRoomDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
                };
                update: {
                    args: Prisma.ChatRoomUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
                };
                deleteMany: {
                    args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChatRoomUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatRoomPayload>;
                };
                aggregate: {
                    args: Prisma.ChatRoomAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChatRoom>;
                };
                groupBy: {
                    args: Prisma.ChatRoomGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatRoomGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ChatRoomFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ChatRoomAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ChatRoomCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatRoomCountAggregateOutputType> | number;
                };
            };
        };
        GroupChatRoom: {
            payload: Prisma.$GroupChatRoomPayload<ExtArgs>;
            fields: Prisma.GroupChatRoomFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GroupChatRoomFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GroupChatRoomFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>;
                };
                findFirst: {
                    args: Prisma.GroupChatRoomFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GroupChatRoomFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>;
                };
                findMany: {
                    args: Prisma.GroupChatRoomFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>[];
                };
                create: {
                    args: Prisma.GroupChatRoomCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>;
                };
                createMany: {
                    args: Prisma.GroupChatRoomCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.GroupChatRoomDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>;
                };
                update: {
                    args: Prisma.GroupChatRoomUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>;
                };
                deleteMany: {
                    args: Prisma.GroupChatRoomDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GroupChatRoomUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.GroupChatRoomUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomPayload>;
                };
                aggregate: {
                    args: Prisma.GroupChatRoomAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGroupChatRoom>;
                };
                groupBy: {
                    args: Prisma.GroupChatRoomGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupChatRoomGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.GroupChatRoomFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.GroupChatRoomAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.GroupChatRoomCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupChatRoomCountAggregateOutputType> | number;
                };
            };
        };
        GroupChatRoomMember: {
            payload: Prisma.$GroupChatRoomMemberPayload<ExtArgs>;
            fields: Prisma.GroupChatRoomMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GroupChatRoomMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GroupChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>;
                };
                findFirst: {
                    args: Prisma.GroupChatRoomMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GroupChatRoomMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>;
                };
                findMany: {
                    args: Prisma.GroupChatRoomMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>[];
                };
                create: {
                    args: Prisma.GroupChatRoomMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>;
                };
                createMany: {
                    args: Prisma.GroupChatRoomMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.GroupChatRoomMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>;
                };
                update: {
                    args: Prisma.GroupChatRoomMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.GroupChatRoomMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GroupChatRoomMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.GroupChatRoomMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatRoomMemberPayload>;
                };
                aggregate: {
                    args: Prisma.GroupChatRoomMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGroupChatRoomMember>;
                };
                groupBy: {
                    args: Prisma.GroupChatRoomMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupChatRoomMemberGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.GroupChatRoomMemberFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.GroupChatRoomMemberAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.GroupChatRoomMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupChatRoomMemberCountAggregateOutputType> | number;
                };
            };
        };
        GroupChat: {
            payload: Prisma.$GroupChatPayload<ExtArgs>;
            fields: Prisma.GroupChatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GroupChatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GroupChatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>;
                };
                findFirst: {
                    args: Prisma.GroupChatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GroupChatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>;
                };
                findMany: {
                    args: Prisma.GroupChatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>[];
                };
                create: {
                    args: Prisma.GroupChatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>;
                };
                createMany: {
                    args: Prisma.GroupChatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.GroupChatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>;
                };
                update: {
                    args: Prisma.GroupChatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>;
                };
                deleteMany: {
                    args: Prisma.GroupChatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GroupChatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.GroupChatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupChatPayload>;
                };
                aggregate: {
                    args: Prisma.GroupChatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGroupChat>;
                };
                groupBy: {
                    args: Prisma.GroupChatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupChatGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.GroupChatFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.GroupChatAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.GroupChatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupChatCountAggregateOutputType> | number;
                };
            };
        };
        Chat: {
            payload: Prisma.$ChatPayload<ExtArgs>;
            fields: Prisma.ChatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                findFirst: {
                    args: Prisma.ChatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                findMany: {
                    args: Prisma.ChatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>[];
                };
                create: {
                    args: Prisma.ChatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                createMany: {
                    args: Prisma.ChatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                update: {
                    args: Prisma.ChatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                deleteMany: {
                    args: Prisma.ChatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                aggregate: {
                    args: Prisma.ChatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChat>;
                };
                groupBy: {
                    args: Prisma.ChatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ChatFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ChatAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ChatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatCountAggregateOutputType> | number;
                };
            };
        };
        PresetMessage: {
            payload: Prisma.$PresetMessagePayload<ExtArgs>;
            fields: Prisma.PresetMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PresetMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PresetMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>;
                };
                findFirst: {
                    args: Prisma.PresetMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PresetMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>;
                };
                findMany: {
                    args: Prisma.PresetMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>[];
                };
                create: {
                    args: Prisma.PresetMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>;
                };
                createMany: {
                    args: Prisma.PresetMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PresetMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>;
                };
                update: {
                    args: Prisma.PresetMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.PresetMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PresetMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PresetMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresetMessagePayload>;
                };
                aggregate: {
                    args: Prisma.PresetMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePresetMessage>;
                };
                groupBy: {
                    args: Prisma.PresetMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PresetMessageGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.PresetMessageFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.PresetMessageAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.PresetMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PresetMessageCountAggregateOutputType> | number;
                };
            };
        };
        MessageRequest: {
            payload: Prisma.$MessageRequestPayload<ExtArgs>;
            fields: Prisma.MessageRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>;
                };
                findFirst: {
                    args: Prisma.MessageRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>;
                };
                findMany: {
                    args: Prisma.MessageRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>[];
                };
                create: {
                    args: Prisma.MessageRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>;
                };
                createMany: {
                    args: Prisma.MessageRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MessageRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>;
                };
                update: {
                    args: Prisma.MessageRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.MessageRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MessageRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageRequestPayload>;
                };
                aggregate: {
                    args: Prisma.MessageRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessageRequest>;
                };
                groupBy: {
                    args: Prisma.MessageRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageRequestGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.MessageRequestFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.MessageRequestAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.MessageRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageRequestCountAggregateOutputType> | number;
                };
            };
        };
        UsefullNumber: {
            payload: Prisma.$UsefullNumberPayload<ExtArgs>;
            fields: Prisma.UsefullNumberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsefullNumberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsefullNumberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>;
                };
                findFirst: {
                    args: Prisma.UsefullNumberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsefullNumberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>;
                };
                findMany: {
                    args: Prisma.UsefullNumberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>[];
                };
                create: {
                    args: Prisma.UsefullNumberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>;
                };
                createMany: {
                    args: Prisma.UsefullNumberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UsefullNumberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>;
                };
                update: {
                    args: Prisma.UsefullNumberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>;
                };
                deleteMany: {
                    args: Prisma.UsefullNumberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsefullNumberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UsefullNumberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsefullNumberPayload>;
                };
                aggregate: {
                    args: Prisma.UsefullNumberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsefullNumber>;
                };
                groupBy: {
                    args: Prisma.UsefullNumberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsefullNumberGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UsefullNumberFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UsefullNumberAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UsefullNumberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsefullNumberCountAggregateOutputType> | number;
                };
            };
        };
        UserRating: {
            payload: Prisma.$UserRatingPayload<ExtArgs>;
            fields: Prisma.UserRatingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRatingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRatingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>;
                };
                findFirst: {
                    args: Prisma.UserRatingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRatingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>;
                };
                findMany: {
                    args: Prisma.UserRatingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>[];
                };
                create: {
                    args: Prisma.UserRatingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>;
                };
                createMany: {
                    args: Prisma.UserRatingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserRatingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>;
                };
                update: {
                    args: Prisma.UserRatingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>;
                };
                deleteMany: {
                    args: Prisma.UserRatingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRatingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserRatingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRatingPayload>;
                };
                aggregate: {
                    args: Prisma.UserRatingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRating>;
                };
                groupBy: {
                    args: Prisma.UserRatingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRatingGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UserRatingFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UserRatingAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UserRatingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRatingCountAggregateOutputType> | number;
                };
            };
        };
        BlockList: {
            payload: Prisma.$BlockListPayload<ExtArgs>;
            fields: Prisma.BlockListFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BlockListFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BlockListFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>;
                };
                findFirst: {
                    args: Prisma.BlockListFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BlockListFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>;
                };
                findMany: {
                    args: Prisma.BlockListFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>[];
                };
                create: {
                    args: Prisma.BlockListCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>;
                };
                createMany: {
                    args: Prisma.BlockListCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BlockListDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>;
                };
                update: {
                    args: Prisma.BlockListUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>;
                };
                deleteMany: {
                    args: Prisma.BlockListDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BlockListUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BlockListUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockListPayload>;
                };
                aggregate: {
                    args: Prisma.BlockListAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBlockList>;
                };
                groupBy: {
                    args: Prisma.BlockListGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlockListGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.BlockListFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.BlockListAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.BlockListCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlockListCountAggregateOutputType> | number;
                };
            };
        };
        SitePolicy: {
            payload: Prisma.$SitePolicyPayload<ExtArgs>;
            fields: Prisma.SitePolicyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SitePolicyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SitePolicyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>;
                };
                findFirst: {
                    args: Prisma.SitePolicyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SitePolicyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>;
                };
                findMany: {
                    args: Prisma.SitePolicyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>[];
                };
                create: {
                    args: Prisma.SitePolicyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>;
                };
                createMany: {
                    args: Prisma.SitePolicyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SitePolicyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>;
                };
                update: {
                    args: Prisma.SitePolicyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>;
                };
                deleteMany: {
                    args: Prisma.SitePolicyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SitePolicyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SitePolicyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SitePolicyPayload>;
                };
                aggregate: {
                    args: Prisma.SitePolicyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSitePolicy>;
                };
                groupBy: {
                    args: Prisma.SitePolicyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SitePolicyGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.SitePolicyFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.SitePolicyAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.SitePolicyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SitePolicyCountAggregateOutputType> | number;
                };
            };
        };
        UserDeviceKey: {
            payload: Prisma.$UserDeviceKeyPayload<ExtArgs>;
            fields: Prisma.UserDeviceKeyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserDeviceKeyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserDeviceKeyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>;
                };
                findFirst: {
                    args: Prisma.UserDeviceKeyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserDeviceKeyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>;
                };
                findMany: {
                    args: Prisma.UserDeviceKeyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>[];
                };
                create: {
                    args: Prisma.UserDeviceKeyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>;
                };
                createMany: {
                    args: Prisma.UserDeviceKeyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeviceKeyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>;
                };
                update: {
                    args: Prisma.UserDeviceKeyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeviceKeyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserDeviceKeyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserDeviceKeyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDeviceKeyPayload>;
                };
                aggregate: {
                    args: Prisma.UserDeviceKeyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserDeviceKey>;
                };
                groupBy: {
                    args: Prisma.UserDeviceKeyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserDeviceKeyGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UserDeviceKeyFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UserDeviceKeyAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UserDeviceKeyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserDeviceKeyCountAggregateOutputType> | number;
                };
            };
        };
        Point: {
            payload: Prisma.$PointPayload<ExtArgs>;
            fields: Prisma.PointFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PointFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>;
                };
                findFirst: {
                    args: Prisma.PointFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>;
                };
                findMany: {
                    args: Prisma.PointFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>[];
                };
                create: {
                    args: Prisma.PointCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>;
                };
                createMany: {
                    args: Prisma.PointCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PointDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>;
                };
                update: {
                    args: Prisma.PointUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>;
                };
                deleteMany: {
                    args: Prisma.PointDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PointUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PointUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointPayload>;
                };
                aggregate: {
                    args: Prisma.PointAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePoint>;
                };
                groupBy: {
                    args: Prisma.PointGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PointGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.PointFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.PointAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.PointCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PointCountAggregateOutputType> | number;
                };
            };
        };
        BlackListedWord: {
            payload: Prisma.$BlackListedWordPayload<ExtArgs>;
            fields: Prisma.BlackListedWordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BlackListedWordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BlackListedWordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>;
                };
                findFirst: {
                    args: Prisma.BlackListedWordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BlackListedWordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>;
                };
                findMany: {
                    args: Prisma.BlackListedWordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>[];
                };
                create: {
                    args: Prisma.BlackListedWordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>;
                };
                createMany: {
                    args: Prisma.BlackListedWordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BlackListedWordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>;
                };
                update: {
                    args: Prisma.BlackListedWordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>;
                };
                deleteMany: {
                    args: Prisma.BlackListedWordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BlackListedWordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BlackListedWordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlackListedWordPayload>;
                };
                aggregate: {
                    args: Prisma.BlackListedWordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBlackListedWord>;
                };
                groupBy: {
                    args: Prisma.BlackListedWordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlackListedWordGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.BlackListedWordFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.BlackListedWordAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.BlackListedWordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlackListedWordCountAggregateOutputType> | number;
                };
            };
        };
        Faq: {
            payload: Prisma.$FaqPayload<ExtArgs>;
            fields: Prisma.FaqFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FaqFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                findFirst: {
                    args: Prisma.FaqFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                findMany: {
                    args: Prisma.FaqFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>[];
                };
                create: {
                    args: Prisma.FaqCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                createMany: {
                    args: Prisma.FaqCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FaqDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                update: {
                    args: Prisma.FaqUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                deleteMany: {
                    args: Prisma.FaqDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FaqUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FaqUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                aggregate: {
                    args: Prisma.FaqAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFaq>;
                };
                groupBy: {
                    args: Prisma.FaqGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaqGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.FaqFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.FaqAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.FaqCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaqCountAggregateOutputType> | number;
                };
            };
        };
        ParkingReport: {
            payload: Prisma.$ParkingReportPayload<ExtArgs>;
            fields: Prisma.ParkingReportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingReportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingReportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingReportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingReportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>;
                };
                findMany: {
                    args: Prisma.ParkingReportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>[];
                };
                create: {
                    args: Prisma.ParkingReportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>;
                };
                createMany: {
                    args: Prisma.ParkingReportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingReportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>;
                };
                update: {
                    args: Prisma.ParkingReportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingReportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingReportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingReportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingReportPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingReportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingReport>;
                };
                groupBy: {
                    args: Prisma.ParkingReportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingReportGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingReportFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingReportAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingReportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingReportCountAggregateOutputType> | number;
                };
            };
        };
        ParkingSpot: {
            payload: Prisma.$ParkingSpotPayload<ExtArgs>;
            fields: Prisma.ParkingSpotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingSpotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingSpotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingSpotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingSpotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>;
                };
                findMany: {
                    args: Prisma.ParkingSpotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[];
                };
                create: {
                    args: Prisma.ParkingSpotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>;
                };
                createMany: {
                    args: Prisma.ParkingSpotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingSpotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>;
                };
                update: {
                    args: Prisma.ParkingSpotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingSpotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingSpotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingSpotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSpotPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingSpotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingSpot>;
                };
                groupBy: {
                    args: Prisma.ParkingSpotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingSpotGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingSpotFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingSpotAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingSpotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingSpotCountAggregateOutputType> | number;
                };
            };
        };
        ParkingNotificationCredit: {
            payload: Prisma.$ParkingNotificationCreditPayload<ExtArgs>;
            fields: Prisma.ParkingNotificationCreditFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingNotificationCreditFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingNotificationCreditFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingNotificationCreditFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingNotificationCreditFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>;
                };
                findMany: {
                    args: Prisma.ParkingNotificationCreditFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>[];
                };
                create: {
                    args: Prisma.ParkingNotificationCreditCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>;
                };
                createMany: {
                    args: Prisma.ParkingNotificationCreditCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingNotificationCreditDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>;
                };
                update: {
                    args: Prisma.ParkingNotificationCreditUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingNotificationCreditDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingNotificationCreditUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingNotificationCreditUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingNotificationCreditPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingNotificationCreditAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingNotificationCredit>;
                };
                groupBy: {
                    args: Prisma.ParkingNotificationCreditGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingNotificationCreditGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingNotificationCreditFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingNotificationCreditAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingNotificationCreditCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingNotificationCreditCountAggregateOutputType> | number;
                };
            };
        };
        ParkingHandoff: {
            payload: Prisma.$ParkingHandoffPayload<ExtArgs>;
            fields: Prisma.ParkingHandoffFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingHandoffFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingHandoffFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingHandoffFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingHandoffFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>;
                };
                findMany: {
                    args: Prisma.ParkingHandoffFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>[];
                };
                create: {
                    args: Prisma.ParkingHandoffCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>;
                };
                createMany: {
                    args: Prisma.ParkingHandoffCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingHandoffDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>;
                };
                update: {
                    args: Prisma.ParkingHandoffUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingHandoffDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingHandoffUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingHandoffUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingHandoffPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingHandoffAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingHandoff>;
                };
                groupBy: {
                    args: Prisma.ParkingHandoffGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingHandoffGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingHandoffFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingHandoffAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingHandoffCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingHandoffCountAggregateOutputType> | number;
                };
            };
        };
        ParkingSearchSession: {
            payload: Prisma.$ParkingSearchSessionPayload<ExtArgs>;
            fields: Prisma.ParkingSearchSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingSearchSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingSearchSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingSearchSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingSearchSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>;
                };
                findMany: {
                    args: Prisma.ParkingSearchSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>[];
                };
                create: {
                    args: Prisma.ParkingSearchSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>;
                };
                createMany: {
                    args: Prisma.ParkingSearchSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingSearchSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>;
                };
                update: {
                    args: Prisma.ParkingSearchSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingSearchSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingSearchSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingSearchSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSearchSessionPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingSearchSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingSearchSession>;
                };
                groupBy: {
                    args: Prisma.ParkingSearchSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingSearchSessionGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingSearchSessionFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingSearchSessionAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingSearchSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingSearchSessionCountAggregateOutputType> | number;
                };
            };
        };
        SavedParkingLocation: {
            payload: Prisma.$SavedParkingLocationPayload<ExtArgs>;
            fields: Prisma.SavedParkingLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SavedParkingLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SavedParkingLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>;
                };
                findFirst: {
                    args: Prisma.SavedParkingLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SavedParkingLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>;
                };
                findMany: {
                    args: Prisma.SavedParkingLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>[];
                };
                create: {
                    args: Prisma.SavedParkingLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>;
                };
                createMany: {
                    args: Prisma.SavedParkingLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SavedParkingLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>;
                };
                update: {
                    args: Prisma.SavedParkingLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.SavedParkingLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SavedParkingLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SavedParkingLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedParkingLocationPayload>;
                };
                aggregate: {
                    args: Prisma.SavedParkingLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSavedParkingLocation>;
                };
                groupBy: {
                    args: Prisma.SavedParkingLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SavedParkingLocationGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.SavedParkingLocationFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.SavedParkingLocationAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.SavedParkingLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SavedParkingLocationCountAggregateOutputType> | number;
                };
            };
        };
        ParkingSession: {
            payload: Prisma.$ParkingSessionPayload<ExtArgs>;
            fields: Prisma.ParkingSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>;
                };
                findMany: {
                    args: Prisma.ParkingSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[];
                };
                create: {
                    args: Prisma.ParkingSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>;
                };
                createMany: {
                    args: Prisma.ParkingSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>;
                };
                update: {
                    args: Prisma.ParkingSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingSessionPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingSession>;
                };
                groupBy: {
                    args: Prisma.ParkingSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingSessionGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingSessionFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingSessionAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingSessionCountAggregateOutputType> | number;
                };
            };
        };
        PaidParkingPrompt: {
            payload: Prisma.$PaidParkingPromptPayload<ExtArgs>;
            fields: Prisma.PaidParkingPromptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaidParkingPromptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaidParkingPromptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>;
                };
                findFirst: {
                    args: Prisma.PaidParkingPromptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaidParkingPromptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>;
                };
                findMany: {
                    args: Prisma.PaidParkingPromptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>[];
                };
                create: {
                    args: Prisma.PaidParkingPromptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>;
                };
                createMany: {
                    args: Prisma.PaidParkingPromptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PaidParkingPromptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>;
                };
                update: {
                    args: Prisma.PaidParkingPromptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>;
                };
                deleteMany: {
                    args: Prisma.PaidParkingPromptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaidParkingPromptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PaidParkingPromptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaidParkingPromptPayload>;
                };
                aggregate: {
                    args: Prisma.PaidParkingPromptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePaidParkingPrompt>;
                };
                groupBy: {
                    args: Prisma.PaidParkingPromptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaidParkingPromptGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.PaidParkingPromptFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.PaidParkingPromptAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.PaidParkingPromptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaidParkingPromptCountAggregateOutputType> | number;
                };
            };
        };
        ParkRelayReputation: {
            payload: Prisma.$ParkRelayReputationPayload<ExtArgs>;
            fields: Prisma.ParkRelayReputationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkRelayReputationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkRelayReputationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>;
                };
                findFirst: {
                    args: Prisma.ParkRelayReputationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkRelayReputationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>;
                };
                findMany: {
                    args: Prisma.ParkRelayReputationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>[];
                };
                create: {
                    args: Prisma.ParkRelayReputationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>;
                };
                createMany: {
                    args: Prisma.ParkRelayReputationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkRelayReputationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>;
                };
                update: {
                    args: Prisma.ParkRelayReputationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkRelayReputationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkRelayReputationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkRelayReputationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkRelayReputationPayload>;
                };
                aggregate: {
                    args: Prisma.ParkRelayReputationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkRelayReputation>;
                };
                groupBy: {
                    args: Prisma.ParkRelayReputationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkRelayReputationGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkRelayReputationFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkRelayReputationAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkRelayReputationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkRelayReputationCountAggregateOutputType> | number;
                };
            };
        };
        ParkingArea: {
            payload: Prisma.$ParkingAreaPayload<ExtArgs>;
            fields: Prisma.ParkingAreaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingAreaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingAreaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingAreaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingAreaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>;
                };
                findMany: {
                    args: Prisma.ParkingAreaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>[];
                };
                create: {
                    args: Prisma.ParkingAreaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>;
                };
                createMany: {
                    args: Prisma.ParkingAreaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingAreaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>;
                };
                update: {
                    args: Prisma.ParkingAreaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingAreaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingAreaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingAreaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingAreaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingArea>;
                };
                groupBy: {
                    args: Prisma.ParkingAreaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingAreaGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingAreaFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingAreaAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingAreaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingAreaCountAggregateOutputType> | number;
                };
            };
        };
        ParkingAreaRating: {
            payload: Prisma.$ParkingAreaRatingPayload<ExtArgs>;
            fields: Prisma.ParkingAreaRatingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkingAreaRatingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkingAreaRatingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>;
                };
                findFirst: {
                    args: Prisma.ParkingAreaRatingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkingAreaRatingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>;
                };
                findMany: {
                    args: Prisma.ParkingAreaRatingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>[];
                };
                create: {
                    args: Prisma.ParkingAreaRatingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>;
                };
                createMany: {
                    args: Prisma.ParkingAreaRatingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParkingAreaRatingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>;
                };
                update: {
                    args: Prisma.ParkingAreaRatingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkingAreaRatingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkingAreaRatingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParkingAreaRatingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkingAreaRatingPayload>;
                };
                aggregate: {
                    args: Prisma.ParkingAreaRatingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkingAreaRating>;
                };
                groupBy: {
                    args: Prisma.ParkingAreaRatingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingAreaRatingGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.ParkingAreaRatingFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.ParkingAreaRatingAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.ParkingAreaRatingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkingAreaRatingCountAggregateOutputType> | number;
                };
            };
        };
        NotificationEvent: {
            payload: Prisma.$NotificationEventPayload<ExtArgs>;
            fields: Prisma.NotificationEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>;
                };
                findMany: {
                    args: Prisma.NotificationEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>[];
                };
                create: {
                    args: Prisma.NotificationEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>;
                };
                createMany: {
                    args: Prisma.NotificationEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificationEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>;
                };
                update: {
                    args: Prisma.NotificationEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificationEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationEventPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificationEvent>;
                };
                groupBy: {
                    args: Prisma.NotificationEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationEventGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.NotificationEventFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.NotificationEventAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.NotificationEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationEventCountAggregateOutputType> | number;
                };
            };
        };
        NotificationPreference: {
            payload: Prisma.$NotificationPreferencePayload<ExtArgs>;
            fields: Prisma.NotificationPreferenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationPreferenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findFirst: {
                    args: Prisma.NotificationPreferenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findMany: {
                    args: Prisma.NotificationPreferenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                create: {
                    args: Prisma.NotificationPreferenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                createMany: {
                    args: Prisma.NotificationPreferenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificationPreferenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                update: {
                    args: Prisma.NotificationPreferenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationPreferenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationPreferenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificationPreferenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                aggregate: {
                    args: Prisma.NotificationPreferenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificationPreference>;
                };
                groupBy: {
                    args: Prisma.NotificationPreferenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.NotificationPreferenceFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.NotificationPreferenceAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.NotificationPreferenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceCountAggregateOutputType> | number;
                };
            };
        };
        UserLocation: {
            payload: Prisma.$UserLocationPayload<ExtArgs>;
            fields: Prisma.UserLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>;
                };
                findFirst: {
                    args: Prisma.UserLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>;
                };
                findMany: {
                    args: Prisma.UserLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>[];
                };
                create: {
                    args: Prisma.UserLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>;
                };
                createMany: {
                    args: Prisma.UserLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>;
                };
                update: {
                    args: Prisma.UserLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.UserLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserLocationPayload>;
                };
                aggregate: {
                    args: Prisma.UserLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserLocation>;
                };
                groupBy: {
                    args: Prisma.UserLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserLocationGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UserLocationFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UserLocationAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UserLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserLocationCountAggregateOutputType> | number;
                };
            };
        };
        UserDocument: {
            payload: Prisma.$UserDocumentPayload<ExtArgs>;
            fields: Prisma.UserDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.UserDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>;
                };
                findMany: {
                    args: Prisma.UserDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>[];
                };
                create: {
                    args: Prisma.UserDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>;
                };
                createMany: {
                    args: Prisma.UserDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>;
                };
                update: {
                    args: Prisma.UserDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.UserDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserDocument>;
                };
                groupBy: {
                    args: Prisma.UserDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserDocumentGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.UserDocumentFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.UserDocumentAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.UserDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserDocumentCountAggregateOutputType> | number;
                };
            };
        };
        SupportTicket: {
            payload: Prisma.$SupportTicketPayload<ExtArgs>;
            fields: Prisma.SupportTicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findFirst: {
                    args: Prisma.SupportTicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findMany: {
                    args: Prisma.SupportTicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                create: {
                    args: Prisma.SupportTicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                createMany: {
                    args: Prisma.SupportTicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SupportTicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                update: {
                    args: Prisma.SupportTicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                deleteMany: {
                    args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SupportTicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                aggregate: {
                    args: Prisma.SupportTicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupportTicket>;
                };
                groupBy: {
                    args: Prisma.SupportTicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketGroupByOutputType>[];
                };
                findRaw: {
                    args: Prisma.SupportTicketFindRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                aggregateRaw: {
                    args: Prisma.SupportTicketAggregateRawArgs<ExtArgs>;
                    result: Prisma.JsonObject;
                };
                count: {
                    args: Prisma.SupportTicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $runCommandRaw: {
                args: Prisma.InputJsonObject;
                result: JsonObject;
            };
        };
    };
};
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly avatar: "avatar";
    readonly fcm_token: "fcm_token";
    readonly email: "email";
    readonly name: "name";
    readonly licence_id: "licence_id";
    readonly nick_name: "nick_name";
    readonly password: "password";
    readonly auth_provider: "auth_provider";
    readonly firebase_uid: "firebase_uid";
    readonly google_sub: "google_sub";
    readonly apple_sub: "apple_sub";
    readonly is_more_options_accepted: "is_more_options_accepted";
    readonly designation: "designation";
    readonly gender: "gender";
    readonly birth_year: "birth_year";
    readonly is_blocked: "is_blocked";
    readonly is_deleted: "is_deleted";
    readonly email_verified: "email_verified";
    readonly license_no_verified: "license_no_verified";
    readonly account_type: "account_type";
    readonly qr_code: "qr_code";
    readonly vehicle_type: "vehicle_type";
    readonly vehicle_model: "vehicle_model";
    readonly vehicle_color: "vehicle_color";
    readonly is_vehicle_verified: "is_vehicle_verified";
    readonly is_vehicle_ownership_document_submitted: "is_vehicle_ownership_document_submitted";
    readonly country: "country";
    readonly city: "city";
    readonly otp: "otp";
    readonly otp_expires: "otp_expires";
    readonly otp_verification_token: "otp_verification_token";
    readonly role: "role";
    readonly parking_notifications_available: "parking_notifications_available";
    readonly parking_reports_submitted: "parking_reports_submitted";
    readonly lastSeenAt: "lastSeenAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ChatRoomScalarFieldEnum: {
    readonly id: "id";
    readonly is_deleted: "is_deleted";
    readonly user1_id: "user1_id";
    readonly user2_id: "user2_id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum];
export declare const GroupChatRoomScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly image: "image";
    readonly is_deleted: "is_deleted";
    readonly group_members_count: "group_members_count";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GroupChatRoomScalarFieldEnum = (typeof GroupChatRoomScalarFieldEnum)[keyof typeof GroupChatRoomScalarFieldEnum];
export declare const GroupChatRoomMemberScalarFieldEnum: {
    readonly id: "id";
    readonly groupChatRoom_id: "groupChatRoom_id";
    readonly user_id: "user_id";
    readonly last_read_message_id: "last_read_message_id";
    readonly group_role: "group_role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GroupChatRoomMemberScalarFieldEnum = (typeof GroupChatRoomMemberScalarFieldEnum)[keyof typeof GroupChatRoomMemberScalarFieldEnum];
export declare const GroupChatScalarFieldEnum: {
    readonly id: "id";
    readonly groupChatRoom_id: "groupChatRoom_id";
    readonly sender_id: "sender_id";
    readonly message: "message";
    readonly type: "type";
    readonly encryptionType: "encryptionType";
    readonly encryptionVersion: "encryptionVersion";
    readonly senderKeyId: "senderKeyId";
    readonly nonce: "nonce";
    readonly encryptedKeys: "encryptedKeys";
    readonly file_url: "file_url";
    readonly file_name: "file_name";
    readonly file_size: "file_size";
    readonly file_mime_type: "file_mime_type";
    readonly durationSeconds: "durationSeconds";
    readonly waveform: "waveform";
    readonly isDeletedForEveryone: "isDeletedForEveryone";
    readonly deletedAt: "deletedAt";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GroupChatScalarFieldEnum = (typeof GroupChatScalarFieldEnum)[keyof typeof GroupChatScalarFieldEnum];
export declare const ChatScalarFieldEnum: {
    readonly id: "id";
    readonly chatRoom_id: "chatRoom_id";
    readonly sender_id: "sender_id";
    readonly receiver_id: "receiver_id";
    readonly message: "message";
    readonly type: "type";
    readonly encryptionType: "encryptionType";
    readonly encryptionVersion: "encryptionVersion";
    readonly senderKeyId: "senderKeyId";
    readonly receiverKeyId: "receiverKeyId";
    readonly nonce: "nonce";
    readonly is_read: "is_read";
    readonly is_delivered: "is_delivered";
    readonly file_url: "file_url";
    readonly file_name: "file_name";
    readonly file_size: "file_size";
    readonly file_mime_type: "file_mime_type";
    readonly durationSeconds: "durationSeconds";
    readonly waveform: "waveform";
    readonly isDeletedForEveryone: "isDeletedForEveryone";
    readonly deletedAt: "deletedAt";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum];
export declare const PresetMessageScalarFieldEnum: {
    readonly id: "id";
    readonly message: "message";
    readonly message_it: "message_it";
    readonly type: "type";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PresetMessageScalarFieldEnum = (typeof PresetMessageScalarFieldEnum)[keyof typeof PresetMessageScalarFieldEnum];
export declare const MessageRequestScalarFieldEnum: {
    readonly id: "id";
    readonly senderId: "senderId";
    readonly receiverId: "receiverId";
    readonly roomId: "roomId";
    readonly firstMessage: "firstMessage";
    readonly presetMessageId: "presetMessageId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MessageRequestScalarFieldEnum = (typeof MessageRequestScalarFieldEnum)[keyof typeof MessageRequestScalarFieldEnum];
export declare const UsefullNumberScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly phone: "phone";
    readonly category: "category";
    readonly icon: "icon";
    readonly sortOrder: "sortOrder";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UsefullNumberScalarFieldEnum = (typeof UsefullNumberScalarFieldEnum)[keyof typeof UsefullNumberScalarFieldEnum];
export declare const UserRatingScalarFieldEnum: {
    readonly id: "id";
    readonly rater_id: "rater_id";
    readonly ratee_id: "ratee_id";
    readonly rating: "rating";
    readonly review: "review";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserRatingScalarFieldEnum = (typeof UserRatingScalarFieldEnum)[keyof typeof UserRatingScalarFieldEnum];
export declare const BlockListScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly blocked_user_id: "blocked_user_id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BlockListScalarFieldEnum = (typeof BlockListScalarFieldEnum)[keyof typeof BlockListScalarFieldEnum];
export declare const SitePolicyScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SitePolicyScalarFieldEnum = (typeof SitePolicyScalarFieldEnum)[keyof typeof SitePolicyScalarFieldEnum];
export declare const UserDeviceKeyScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly deviceId: "deviceId";
    readonly publicKey: "publicKey";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserDeviceKeyScalarFieldEnum = (typeof UserDeviceKeyScalarFieldEnum)[keyof typeof UserDeviceKeyScalarFieldEnum];
export declare const PointScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum];
export declare const BlackListedWordScalarFieldEnum: {
    readonly id: "id";
    readonly word: "word";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BlackListedWordScalarFieldEnum = (typeof BlackListedWordScalarFieldEnum)[keyof typeof BlackListedWordScalarFieldEnum];
export declare const FaqScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum];
export declare const ParkingReportScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly parking_cost: "parking_cost";
    readonly electric_charging: "electric_charging";
    readonly disabled_facility: "disabled_facility";
    readonly disabled_facility_location: "disabled_facility_location";
    readonly is_active: "is_active";
    readonly createdAt: "createdAt";
    readonly expiresAt: "expiresAt";
    readonly spotId: "spotId";
    readonly updatedAt: "updatedAt";
};
export type ParkingReportScalarFieldEnum = (typeof ParkingReportScalarFieldEnum)[keyof typeof ParkingReportScalarFieldEnum];
export declare const ParkingSpotScalarFieldEnum: {
    readonly id: "id";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly parking_cost: "parking_cost";
    readonly electric_charging: "electric_charging";
    readonly disabled_facility: "disabled_facility";
    readonly disabled_facility_location: "disabled_facility_location";
    readonly is_active: "is_active";
    readonly available: "available";
    readonly createdAt: "createdAt";
};
export type ParkingSpotScalarFieldEnum = (typeof ParkingSpotScalarFieldEnum)[keyof typeof ParkingSpotScalarFieldEnum];
export declare const ParkingNotificationCreditScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly parking_report_id: "parking_report_id";
    readonly transaction_type: "transaction_type";
    readonly amount: "amount";
    readonly balance: "balance";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkingNotificationCreditScalarFieldEnum = (typeof ParkingNotificationCreditScalarFieldEnum)[keyof typeof ParkingNotificationCreditScalarFieldEnum];
export declare const ParkingHandoffScalarFieldEnum: {
    readonly id: "id";
    readonly releaserId: "releaserId";
    readonly seekerId: "seekerId";
    readonly spotId: "spotId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly approxLatitude: "approxLatitude";
    readonly approxLongitude: "approxLongitude";
    readonly status: "status";
    readonly expiresAt: "expiresAt";
    readonly acceptedAt: "acceptedAt";
    readonly cancelledAt: "cancelledAt";
    readonly foundAt: "foundAt";
    readonly occupiedAt: "occupiedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkingHandoffScalarFieldEnum = (typeof ParkingHandoffScalarFieldEnum)[keyof typeof ParkingHandoffScalarFieldEnum];
export declare const ParkingSearchSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly accuracy: "accuracy";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkingSearchSessionScalarFieldEnum = (typeof ParkingSearchSessionScalarFieldEnum)[keyof typeof ParkingSearchSessionScalarFieldEnum];
export declare const SavedParkingLocationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly spotId: "spotId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly accuracy: "accuracy";
    readonly confidence: "confidence";
    readonly source: "source";
    readonly note: "note";
    readonly photoUrl: "photoUrl";
    readonly isActive: "isActive";
    readonly parkingType: "parkingType";
    readonly paidExpiresAt: "paidExpiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SavedParkingLocationScalarFieldEnum = (typeof SavedParkingLocationScalarFieldEnum)[keyof typeof SavedParkingLocationScalarFieldEnum];
export declare const ParkingSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly spotId: "spotId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly costType: "costType";
    readonly durationMin: "durationMin";
    readonly expiresAt: "expiresAt";
    readonly expiryWarningSentAt: "expiryWarningSentAt";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkingSessionScalarFieldEnum = (typeof ParkingSessionScalarFieldEnum)[keyof typeof ParkingSessionScalarFieldEnum];
export declare const PaidParkingPromptScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly savedParkingLocationId: "savedParkingLocationId";
    readonly status: "status";
    readonly answeredAt: "answeredAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaidParkingPromptScalarFieldEnum = (typeof PaidParkingPromptScalarFieldEnum)[keyof typeof PaidParkingPromptScalarFieldEnum];
export declare const ParkRelayReputationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly successfulHandoffs: "successfulHandoffs";
    readonly occupiedReports: "occupiedReports";
    readonly cancelledHandoffs: "cancelledHandoffs";
    readonly expiredHandoffs: "expiredHandoffs";
    readonly score: "score";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkRelayReputationScalarFieldEnum = (typeof ParkRelayReputationScalarFieldEnum)[keyof typeof ParkRelayReputationScalarFieldEnum];
export declare const ParkingAreaScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly centerLat: "centerLat";
    readonly centerLng: "centerLng";
    readonly polygon: "polygon";
    readonly parkingCost: "parkingCost";
    readonly parkingFee: "parkingFee";
    readonly parkingAreaTypes: "parkingAreaTypes";
    readonly disabledFacilityLocation: "disabledFacilityLocation";
    readonly totalSpots: "totalSpots";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly rating: "rating";
    readonly reviewCount: "reviewCount";
};
export type ParkingAreaScalarFieldEnum = (typeof ParkingAreaScalarFieldEnum)[keyof typeof ParkingAreaScalarFieldEnum];
export declare const ParkingAreaRatingScalarFieldEnum: {
    readonly id: "id";
    readonly parkingAreaId: "parkingAreaId";
    readonly userId: "userId";
    readonly rating: "rating";
    readonly review: "review";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkingAreaRatingScalarFieldEnum = (typeof ParkingAreaRatingScalarFieldEnum)[keyof typeof ParkingAreaRatingScalarFieldEnum];
export declare const NotificationEventScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly eventType: "eventType";
    readonly title: "title";
    readonly message: "message";
    readonly payload: "payload";
    readonly isRead: "isRead";
    readonly sentAt: "sentAt";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationEventScalarFieldEnum = (typeof NotificationEventScalarFieldEnum)[keyof typeof NotificationEventScalarFieldEnum];
export declare const NotificationPreferenceScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly parkingNotifications: "parkingNotifications";
    readonly chatNotifications: "chatNotifications";
    readonly ratingNotifications: "ratingNotifications";
    readonly groupChatNotifications: "groupChatNotifications";
    readonly systemNotifications: "systemNotifications";
    readonly notificationRadius: "notificationRadius";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum];
export declare const UserLocationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly accuracy: "accuracy";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum];
export declare const UserDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly unique_id: "unique_id";
    readonly expiry_date: "expiry_date";
    readonly document_type: "document_type";
    readonly document_url: "document_url";
    readonly is_verified: "is_verified";
    readonly last_expiry_notified_days: "last_expiry_notified_days";
    readonly expired_notified_at: "expired_notified_at";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserDocumentScalarFieldEnum = (typeof UserDocumentScalarFieldEnum)[keyof typeof UserDocumentScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly subject: "subject";
    readonly description: "description";
    readonly adminReply: "adminReply";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>;
export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>;
export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>;
export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>;
export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumGroupRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupRole'>;
export type ListEnumGroupRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupRole[]'>;
export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>;
export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumPresetMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresetMessageType'>;
export type ListEnumPresetMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresetMessageType[]'>;
export type EnumMessageRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRequestStatus'>;
export type ListEnumMessageRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRequestStatus[]'>;
export type EnumUsefulNumberCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsefulNumberCategory'>;
export type ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsefulNumberCategory[]'>;
export type EnumRatingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RatingStatus'>;
export type ListEnumRatingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RatingStatus[]'>;
export type EnumPolicyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyType'>;
export type ListEnumPolicyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumParkingCostFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingCost'>;
export type ListEnumParkingCostFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingCost[]'>;
export type EnumDisabledFacilityLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisabledFacilityLocation'>;
export type ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisabledFacilityLocation[]'>;
export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>;
export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>;
export type EnumHandoffStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HandoffStatus'>;
export type ListEnumHandoffStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HandoffStatus[]'>;
export type EnumParkingSearchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSearchStatus'>;
export type ListEnumParkingSearchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSearchStatus[]'>;
export type EnumParkingSaveSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSaveSource'>;
export type ListEnumParkingSaveSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSaveSource[]'>;
export type EnumParkingSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSessionStatus'>;
export type ListEnumParkingSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSessionStatus[]'>;
export type EnumPaidParkingPromptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaidParkingPromptStatus'>;
export type ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaidParkingPromptStatus[]'>;
export type ListEnumParkingAreaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingAreaType[]'>;
export type EnumParkingAreaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingAreaType'>;
export type EnumNotificationEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationEventType'>;
export type ListEnumNotificationEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationEventType[]'>;
export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>;
export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    chatRoom?: Prisma.ChatRoomOmit;
    groupChatRoom?: Prisma.GroupChatRoomOmit;
    groupChatRoomMember?: Prisma.GroupChatRoomMemberOmit;
    groupChat?: Prisma.GroupChatOmit;
    chat?: Prisma.ChatOmit;
    presetMessage?: Prisma.PresetMessageOmit;
    messageRequest?: Prisma.MessageRequestOmit;
    usefullNumber?: Prisma.UsefullNumberOmit;
    userRating?: Prisma.UserRatingOmit;
    blockList?: Prisma.BlockListOmit;
    sitePolicy?: Prisma.SitePolicyOmit;
    userDeviceKey?: Prisma.UserDeviceKeyOmit;
    point?: Prisma.PointOmit;
    blackListedWord?: Prisma.BlackListedWordOmit;
    faq?: Prisma.FaqOmit;
    parkingReport?: Prisma.ParkingReportOmit;
    parkingSpot?: Prisma.ParkingSpotOmit;
    parkingNotificationCredit?: Prisma.ParkingNotificationCreditOmit;
    parkingHandoff?: Prisma.ParkingHandoffOmit;
    parkingSearchSession?: Prisma.ParkingSearchSessionOmit;
    savedParkingLocation?: Prisma.SavedParkingLocationOmit;
    parkingSession?: Prisma.ParkingSessionOmit;
    paidParkingPrompt?: Prisma.PaidParkingPromptOmit;
    parkRelayReputation?: Prisma.ParkRelayReputationOmit;
    parkingArea?: Prisma.ParkingAreaOmit;
    parkingAreaRating?: Prisma.ParkingAreaRatingOmit;
    notificationEvent?: Prisma.NotificationEventOmit;
    notificationPreference?: Prisma.NotificationPreferenceOmit;
    userLocation?: Prisma.UserLocationOmit;
    userDocument?: Prisma.UserDocumentOmit;
    supportTicket?: Prisma.SupportTicketOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
