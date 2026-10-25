import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsefulNumberModule implements OnModuleInit {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    onModuleInit(): Promise<void>;
}
