export declare const jwtConfig: () => {
    jwt_secret: string | undefined;
    expires_in: string | undefined;
};
declare const _default: (() => {
    jwt_secret: string | undefined;
    expires_in: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    jwt_secret: string | undefined;
    expires_in: string | undefined;
}>;
export default _default;
