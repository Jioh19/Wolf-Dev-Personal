import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Profile,
  ProfileDocument,
} from 'src/infrastructure/db/schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<ProfileDocument>,
  ) {}

  async findAll() {
    return await this.profileModel.find();
  }

  async create(createProfile: any) {
    const newProfile = new this.profileModel(createProfile);
    return await newProfile.save();
  }

  async findOne(id: string) {
    return await this.profileModel.findById(id);
  }

  async delete(id: string) {
    return this.profileModel.findByIdAndDelete(id);
  }

  async update(id: string, profile: any) {
    return this.profileModel.findByIdAndUpdate(id, profile, {
      new: true,
    });
  }
}
