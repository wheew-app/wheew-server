export declare const MONGO_ID_FIELD_NAMES: Set<string>;
export declare function isValidMongoId(value: unknown): value is string;
export declare function isMongoIdFieldName(field: string): boolean;
export declare function collectMongoIdValidationErrors(value: unknown, path?: string): string[];
export declare function collectMongoIdValueValidationErrors(field: string, value: unknown): string[];
