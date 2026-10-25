export declare class EncoderProvider {
    hashPassword(password: string, salt: number): Promise<string>;
    compare(password: string, hashed: string): Promise<boolean>;
}
