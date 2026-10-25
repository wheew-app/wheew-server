import { UsefulNumberCategoryDto } from './create-useful-number.dto';
export declare class UpdateUsefulNumberDto {
    title?: string;
    phone?: string;
    description?: string;
    category?: UsefulNumberCategoryDto;
    icon?: string;
    sortOrder?: number;
    isActive?: boolean;
    latitude?: number;
    longitude?: number;
}
