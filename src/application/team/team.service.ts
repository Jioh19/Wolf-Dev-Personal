import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from 'src/infrastructure/db/schemas/team.schema';
import {
  UserAccount,
  UserAccountDocument,
} from 'src/infrastructure/db/schemas/user-account.schema';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
    @InjectModel(UserAccount.name)
    private userAccountModel: Model<UserAccountDocument>,
  ) {}

  async findAll() {
    return await this.teamModel.find();
  }

  async create(team: any) {
    console.log(team);
    const newTeam = new this.teamModel(team);
    // const playersNames = await this.userAccountModel
    //   .find()
    //   .where('_id')
    //   .in(players)
    //   .exec();
    return await newTeam.save();
  }

  async findOne(id: string) {
    return await this.teamModel.findById(id);
  }

  async delete(id: string) {
    return this.teamModel.findByIdAndDelete(id);
  }

  async update(id: string, team: any) {
    return this.teamModel.findByIdAndUpdate(id, team, {
      new: true,
    });
  }
}
