import { RoomParticipantDto } from "./room-participant.dto";
declare class LatestMessageDto {
    message: string;
    is_read: boolean;
    is_mine: boolean;
    is_delivered: boolean;
    sender: RoomParticipantDto;
    type: string;
    encryptionType?: string;
    encryptionVersion?: number;
    senderKeyId?: string;
    receiverKeyId?: string;
    nonce?: string;
    file_url?: string;
    file_name?: string;
    file_size?: number;
    file_mime_type?: string;
    durationSeconds?: number;
    waveform?: number[];
    timestamps: Date;
}
export declare class RoomDto {
    id: string;
    new_message_count: number;
    partners: RoomParticipantDto[];
    latest_message: LatestMessageDto;
}
export {};
