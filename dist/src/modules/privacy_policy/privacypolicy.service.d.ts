import { PrismaService } from "../prisma/prisma.service";
import { PolicyType } from "generated/prisma/enums";
import { CreateUpdatePolicyDto } from "./dtos/create-update-policy.dto";
export declare class PrivacyPolicyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    updateCreatePolicy(createUpdatePolicyDto: CreateUpdatePolicyDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: PolicyType;
        content: string;
    }>;
    getSitePolicy(type: PolicyType): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: PolicyType;
        content: string;
    }>;
}
