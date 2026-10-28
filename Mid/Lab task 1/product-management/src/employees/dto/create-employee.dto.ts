import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateEmployeeDto {
  @IsString() @IsNotEmpty() name: string;
  @IsEmail() email: string;
  @IsString() @IsNotEmpty() phone: string;
  @IsString() @IsNotEmpty() password: string;
  @Type(() => Number) @IsInt() @Min(0) age: number;
  @Type(() => Number) @IsInt() @Min(0) yearsOfWorking: number;
}
