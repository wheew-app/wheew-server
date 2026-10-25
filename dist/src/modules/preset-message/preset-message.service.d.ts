import { PrismaService } from '../prisma/prisma.service';
import { CreatePresetMessageDto } from './dtos/create-preset-message.dto';
import { UpdatePresetMessageDto } from './dtos/update-preset-message.dto';
export declare class PresetMessageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createPresetMessage(createPresetMessageDto: CreatePresetMessageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        type: import("../../../generated/prisma/enums").PresetMessageType;
        message: string;
        message_it: string;
    }>;
    getAllPresetMessages(page?: number, limit?: number): Promise<{
        messages: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
            type: import("../../../generated/prisma/enums").PresetMessageType;
            message: string;
            message_it: string;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getPresetMessageById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        type: import("../../../generated/prisma/enums").PresetMessageType;
        message: string;
        message_it: string;
    }>;
    updatePresetMessage(id: string, updatePresetMessageDto: UpdatePresetMessageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        type: import("../../../generated/prisma/enums").PresetMessageType;
        message: string;
        message_it: string;
    }>;
    deletePresetMessage(id: string): Promise<{
        message: string;
    }>;
}
