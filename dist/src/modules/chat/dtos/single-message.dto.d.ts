import { RoomParticipantDto } from "./room-participant.dto";
export declare class SingleMessageDto {
    id: string;
    is_read: boolean;
    is_delivered: boolean;
    chatRoom_id: string;
    is_mine: boolean;
    sender: RoomParticipantDto;
    receiver: RoomParticipantDto;
    message: string;
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
