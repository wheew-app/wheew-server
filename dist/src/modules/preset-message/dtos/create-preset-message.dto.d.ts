export declare enum PresetMessageTypeDto {
    ALERT = "ALERT",
    CLASSIC = "CLASSIC"
}
export declare class CreatePresetMessageDto {
    message_en: string;
    message_it: string;
    type?: PresetMessageTypeDto;
    isActive?: boolean;
}
