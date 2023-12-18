import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { CreateUserAccountDto } from 'src/infrastructure/db/dto/create-user-account.dto';
import { UpdateUserAccountDto } from 'src/infrastructure/db/dto/update-user-account.dto';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Get()
  findAll() {
    return this.userAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const userAccount = await this.userAccountService.findOne(id);
    if (!userAccount) throw new NotFoundException('User account not found');
    return userAccount;
  }

  @Post()
  async create(@Body() body: CreateUserAccountDto) {
    try {
      return await this.userAccountService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyPattern.userName)
          throw new ConflictException('User name already exists');
        if (error.keyPattern.email)
          throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const userAccount = await this.userAccountService.delete(id);
    if (!userAccount) throw new NotFoundException('User account not found');
    return userAccount;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserAccountDto) {
    const userAccount = await this.userAccountService.update(id, body);
    if (!userAccount) throw new NotFoundException('User account not found');
    return userAccount;
  }
}
