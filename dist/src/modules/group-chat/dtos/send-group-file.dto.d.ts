export declare class SendGroupFileDto {
    groupChatRoomId: string;
    message?: string;
    encryptionType?: string;
    encryptionVersion?: number;
    senderKeyId?: string;
    nonce?: string;
    encryptedKeys?: Array<Record<string, any>> | string;
}
export declare class SendGroupVoiceDto extends SendGroupFileDto {
    durationSeconds?: number;
    waveform?: number[] | string;
}
