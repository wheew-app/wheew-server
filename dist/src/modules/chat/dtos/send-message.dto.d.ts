import type { FileBuffer } from "../types/file-buffer.type";
export declare class SendMessageDto {
    receiver_id: string;
    room_id: string;
    message: string;
    presetMessageId?: string;
    encryptionType?: string;
    encryptionVersion?: number;
    senderKeyId?: string;
    receiverKeyId?: string;
    nonce?: string;
    file: FileBuffer;
}
