import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
export interface ApiResponse<T> {
    success: true;
    message: string;
    statusCode: number;
    data: T;
}
export declare class ResponseTransformerInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    private readonly reflector;
    constructor(reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<ApiResponse<T>> | Promise<Observable<ApiResponse<T>>>;
}
