import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team, TeamSchema } from 'src/infrastructure/db/schemas/team.schema';
import {
  UserAccount,
  UserAccountSchema,
} from 'src/infrastructure/db/schemas/user-account.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Team.name,
        schema: TeamSchema,
      },
      { name: UserAccount.name, schema: UserAccountSchema },
    ]),
  ],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
