import type { ConfigType } from "@nestjs/config";
import firebaseConfigType from "src/config/firebase.config";
export declare class FireBaseClient {
    private readonly firebaseConfig;
    private readonly logger;
    private app;
    constructor(firebaseConfig: ConfigType<typeof firebaseConfigType>);
    sendPushNotification(tokens: string | string[], title: string, body: string): Promise<string | import("firebase-admin/messaging").BatchResponse>;
    private initializeFirebaseApp;
    isInitialized(): boolean;
}
