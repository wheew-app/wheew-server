"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthListener {
    userService;
    encoderProvider;
    smtpProvider;
    constructor(userService, encoderProvider, smtpProvider) {
        this.userService = userService;
        this.encoderProvider = encoderProvider;
        this.smtpProvider = smtpProvider;
    }
    async handleSendWelcomeEmail(userId) {
        const user = await this.userService.findUserById(userId);
        if (!user) {
            console.error(`User with ID ${userId} not found.`);
            return;
        }
        try {
            await this.smtpProvider.sendMail(user.email, "Welcome to Our Service", `Hello ${user.name},\n\nThank you for registering with our service! We're excited to have you on board.\n\nBest regards,\nThe Team`);
            console.log(`Welcome email sent to ${user.email}`);
        }
        catch (error) {
            console.error(`Failed to send welcome email to ${user.email}:`, error);
        }
    }
}
//# sourceMappingURL=listener.js.map