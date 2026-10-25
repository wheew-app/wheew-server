export declare class SendGroupMessageDto {
    groupChatRoomId: string;
    message: string;
    encryptionType?: string;
    encryptionVersion?: number;
    senderKeyId?: string;
    nonce?: string;
    encryptedKeys?: Array<Record<string, any>> | string;
}
