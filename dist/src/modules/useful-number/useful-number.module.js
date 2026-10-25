"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsefulNumberModule = void 0;
const common_1 = require("@nestjs/common");
const useful_number_controller_1 = require("./useful-number.controller");
const useful_number_service_1 = require("./useful-number.service");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_service_1 = require("../prisma/prisma.service");
let UsefulNumberModule = class UsefulNumberModule {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async onModuleInit() {
        await this.prismaService.$runCommandRaw({
            createIndexes: 'useful_numbers',
            indexes: [
                {
                    key: {
                        geolocation: '2dsphere',
                    },
                    name: 'geolocation_2dsphere',
                },
            ],
        });
    }
};
exports.UsefulNumberModule = UsefulNumberModule;
exports.UsefulNumberModule = UsefulNumberModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [useful_number_controller_1.UsefulNumberController],
        providers: [useful_number_service_1.UsefulNumberService],
        exports: [useful_number_service_1.UsefulNumberService],
    }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsefulNumberModule);
//# sourceMappingURL=useful-number.module.js.map