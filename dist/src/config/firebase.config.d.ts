export declare const firebaseConfig: () => {
    serviceAccountPath: string | undefined;
    serviceAccountJson: string | undefined;
    projectId: string | undefined;
    firebase_secrets: string | undefined;
};
declare const _default: (() => {
    serviceAccountPath: string | undefined;
    serviceAccountJson: string | undefined;
    projectId: string | undefined;
    firebase_secrets: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    serviceAccountPath: string | undefined;
    serviceAccountJson: string | undefined;
    projectId: string | undefined;
    firebase_secrets: string | undefined;
}>;
export default _default;
