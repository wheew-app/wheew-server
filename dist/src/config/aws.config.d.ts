export declare const awsConfigData: () => {
    access_key: string | undefined;
    secret_key: string | undefined;
    bucket_name: string | undefined;
    region: string | undefined;
};
declare const _default: (() => {
    access_key: string | undefined;
    secret_key: string | undefined;
    bucket_name: string | undefined;
    region: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    access_key: string | undefined;
    secret_key: string | undefined;
    bucket_name: string | undefined;
    region: string | undefined;
}>;
export default _default;
