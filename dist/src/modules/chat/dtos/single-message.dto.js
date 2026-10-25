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
exports.SingleMessageDto = void 0;
const class_transformer_1 = require("class-transformer");
const room_participant_dto_1 = require("./room-participant.dto");
const class_validator_1 = require("class-validator");
class SingleMessageDto {
    id;
    is_read;
    is_delivered;
    chatRoom_id;
    is_mine;
    sender;
    receiver;
    message;
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
exports.SingleMessageDto = SingleMessageDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SingleMessageDto.prototype, "is_read", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SingleMessageDto.prototype, "is_delivered", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "chatRoom_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SingleMessageDto.prototype, "is_mine", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => room_participant_dto_1.RoomParticipantDto),
    __metadata("design:type", room_participant_dto_1.RoomParticipantDto)
], SingleMessageDto.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => room_participant_dto_1.RoomParticipantDto),
    __metadata("design:type", room_participant_dto_1.RoomParticipantDto)
], SingleMessageDto.prototype, "receiver", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "encryptionType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SingleMessageDto.prototype, "encryptionVersion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "senderKeyId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "receiverKeyId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "nonce", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "file_url", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "file_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SingleMessageDto.prototype, "file_size", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SingleMessageDto.prototype, "file_mime_type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SingleMessageDto.prototype, "durationSeconds", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], SingleMessageDto.prototype, "waveform", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        name: "createdAt"
    }),
    __metadata("design:type", Date)
], SingleMessageDto.prototype, "timestamps", void 0);
//# sourceMappingURL=single-message.dto.js.map