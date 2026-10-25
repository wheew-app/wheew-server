import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
export declare class AdminGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    handleDisconnect(client: any): void;
    handleConnection(client: any, ...args: any[]): void;
    afterInit(server: any): void;
}
