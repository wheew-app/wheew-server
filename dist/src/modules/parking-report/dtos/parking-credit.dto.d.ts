export declare class ParkingCreditResponseDto {
    parking_notifications_available: number;
    parking_reports_submitted: number;
    notifications_received?: number;
}
export declare class ParkingNotificationCreditTransactionDto {
    id: string;
    user_id: string;
    parking_report_id: string;
    transaction_type: 'EARNED' | 'CONSUMED';
    amount: number;
    balance: number;
    createdAt: Date;
}
