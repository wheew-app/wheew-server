import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class GlobalHttpExceptionHandler implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
