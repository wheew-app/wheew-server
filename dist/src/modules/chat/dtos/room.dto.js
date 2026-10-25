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
exports.RoomDto = void 0;
const class_transformer_1 = require("class-transformer");
const room_participant_dto_1 = require("./room-participant.dto");
const class_validator_1 = require("class-validator");
class LatestMessageDto {
    message;
    is_read;
    is_mine;
    is_delivered;
    sender;
    type;
    encryptionType;
    encryptionVersion;
    senderKeyId;
    receiverKeyId;
    nonce;
    file_url;
    file_name;
    file_size;
    file_mime_type;
    durationSeconds;
    waveform;
    timestamps;
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LatestMessageDto.prototype, "is_read", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LatestMessageDto.prototype, "is_mine", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LatestMessageDto.prototype, "is_delivered", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => room_participant_dto_1.RoomParticipantDto),
    __metadata("design:type", room_participant_dto_1.RoomParticipantDto)
], LatestMessageDto.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "encryptionType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LatestMessageDto.prototype, "encryptionVersion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "senderKeyId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "receiverKeyId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "nonce", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "file_url", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "file_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LatestMessageDto.prototype, "file_size", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LatestMessageDto.prototype, "file_mime_type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LatestMessageDto.prototype, "durationSeconds", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], LatestMessageDto.prototype, "waveform", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        name: "createdAt"
    }),
    __metadata("design:type", Date)
], LatestMessageDto.prototype, "timestamps", void 0);
class RoomDto {
    id;
    new_message_count;
    partners;
    latest_message;
}
exports.RoomDto = RoomDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RoomDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        name: "new"
    }),
    __metadata("design:type", Number)
], RoomDto.prototype, "new_message_count", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        name: "members"
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => room_participant_dto_1.RoomParticipantDto),
    __metadata("design:type", Array)
], RoomDto.prototype, "partners", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        name: "latest_message"
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LatestMessageDto),
    __metadata("design:type", LatestMessageDto)
], RoomDto.prototype, "latest_message", void 0);
//# sourceMappingURL=room.dto.js.map