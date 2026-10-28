import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional() @IsString() @IsNotEmpty() name?: string;
  @IsOptional() @IsEmail() email?: string;
  @IsOptional() @IsString() @IsNotEmpty() phone?: string;
  @IsOptional() @IsString() @IsNotEmpty() password?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(0) age?: number;
  @IsOptional() @Type(() => Number) @IsInt() @Min(0) yearsOfWorking?: number;
}
