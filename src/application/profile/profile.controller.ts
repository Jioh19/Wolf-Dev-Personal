import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const profile = await this.profileService.findOne(id);
    if (!profile) throw new NotFoundException('User account not found');
    return profile;
  }

  @Post()
  async create(@Body() body: any) {
    try {
      return await this.profileService.create(body);
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
    const profile = await this.profileService.delete(id);
    if (!profile) throw new NotFoundException('User account not found');
    return profile;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const profile = await this.profileService.update(id, body);
    if (!profile) throw new NotFoundException('User account not found');
    return profile;
  }
}
