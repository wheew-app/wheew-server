import { ArgumentsHost } from '@nestjs/common';
import { BaseWsExceptionFilter } from '@nestjs/websockets';
export declare class WsExceptionsFilter extends BaseWsExceptionFilter {
    private readonly logger;
    catch(exception: any, host: ArgumentsHost): void;
}
