import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserAccountDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
