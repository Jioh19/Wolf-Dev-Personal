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
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const team = await this.teamService.findOne(id);
    if (!team) throw new NotFoundException('User account not found');
    return team;
  }

  @Post()
  async create(@Body() body: any) {
    try {
      return await this.teamService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyPattern.teamName)
          throw new ConflictException('Team name already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const team = await this.teamService.delete(id);
    if (!team) throw new NotFoundException('User account not found');
    return team;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const team = await this.teamService.update(id, body);
    if (!team) throw new NotFoundException('User account not found');
    return team;
  }
}
