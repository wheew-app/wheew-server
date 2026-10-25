import { CreateUpdatePolicyDto } from "./dtos/create-update-policy.dto";
import { PrivacyPolicyService } from "./privacypolicy.service";
import { GetSitePolicyDto } from "./dtos/get-site-policy.dto";
import { PolicyResponseDto } from "./dtos/policy-response.dto";
export declare class PrivacyPolicyController {
    private readonly privacyPolicyService;
    constructor(privacyPolicyService: PrivacyPolicyService);
    createUpdatePolicy(createUpdatePolicyDto: CreateUpdatePolicyDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("generated/prisma/enums").PolicyType;
        content: string;
    }>;
    getSitePolicy(getPolicyDto: GetSitePolicyDto): Promise<PolicyResponseDto>;
}
