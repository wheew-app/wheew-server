export declare class SendFileDto {
    receiver_id: string;
    message?: string;
    encryptionType?: string;
    encryptionVersion?: number;
    senderKeyId?: string;
    receiverKeyId?: string;
    nonce?: string;
}
export declare class SendVoiceDto extends SendFileDto {
    durationSeconds?: number;
    waveform?: number[];
}
