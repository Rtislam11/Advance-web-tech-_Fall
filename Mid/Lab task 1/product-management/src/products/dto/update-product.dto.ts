import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, Min, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  @IsOptional() @IsString() @IsNotEmpty() name?: string;
  @IsOptional() @IsString() @IsNotEmpty() category?: string;
  @IsOptional() @Type(() => Number) @IsNumber({ maxDecimalPlaces: 2 }) @Min(0) price?: number;
  @IsOptional() @Type(() => Number) @IsInt() @Min(0) quantity?: number;
}
