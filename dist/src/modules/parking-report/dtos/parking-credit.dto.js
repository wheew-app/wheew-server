"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingNotificationCreditTransactionDto = exports.ParkingCreditResponseDto = void 0;
class ParkingCreditResponseDto {
    parking_notifications_available;
    parking_reports_submitted;
    notifications_received;
}
exports.ParkingCreditResponseDto = ParkingCreditResponseDto;
class ParkingNotificationCreditTransactionDto {
    id;
    user_id;
    parking_report_id;
    transaction_type;
    amount;
    balance;
    createdAt;
}
exports.ParkingNotificationCreditTransactionDto = ParkingNotificationCreditTransactionDto;
//# sourceMappingURL=parking-credit.dto.js.map