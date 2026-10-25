import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
    }): runtime.Types.Utils.JsPromise<R>;
    $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get groupChatRoom(): Prisma.GroupChatRoomDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get groupChatRoomMember(): Prisma.GroupChatRoomMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get groupChat(): Prisma.GroupChatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get chat(): Prisma.ChatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get presetMessage(): Prisma.PresetMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get messageRequest(): Prisma.MessageRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get usefullNumber(): Prisma.UsefullNumberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userRating(): Prisma.UserRatingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blockList(): Prisma.BlockListDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sitePolicy(): Prisma.SitePolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userDeviceKey(): Prisma.UserDeviceKeyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get point(): Prisma.PointDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blackListedWord(): Prisma.BlackListedWordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get faq(): Prisma.FaqDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingReport(): Prisma.ParkingReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingSpot(): Prisma.ParkingSpotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingNotificationCredit(): Prisma.ParkingNotificationCreditDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingHandoff(): Prisma.ParkingHandoffDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingSearchSession(): Prisma.ParkingSearchSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get savedParkingLocation(): Prisma.SavedParkingLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingSession(): Prisma.ParkingSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paidParkingPrompt(): Prisma.PaidParkingPromptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkRelayReputation(): Prisma.ParkRelayReputationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingArea(): Prisma.ParkingAreaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parkingAreaRating(): Prisma.ParkingAreaRatingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notificationEvent(): Prisma.NotificationEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notificationPreference(): Prisma.NotificationPreferenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userLocation(): Prisma.UserLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userDocument(): Prisma.UserDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
