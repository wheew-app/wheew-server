import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class MongoIdValidationPipe implements PipeTransform {
    transform(value: unknown, metadata: ArgumentMetadata): {} | null | undefined;
    private throwIfInvalid;
}
