import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserAccount,
  UserAccountDocument,
} from 'src/infrastructure/db/schemas/user-account.schema';
import { CreateUserAccountDto } from 'src/infrastructure/db/dto/create-user-account.dto';
import { UpdateUserAccountDto } from 'src/infrastructure/db/dto/update-user-account.dto';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectModel(UserAccount.name)
    private userAccountModel: Model<UserAccountDocument>,
  ) {}

  async findAll() {
    return await this.userAccountModel.find();
  }

  async create(createUserAccount: CreateUserAccountDto) {
    const newUserAccount = new this.userAccountModel(createUserAccount);
    return await newUserAccount.save();
  }

  async findOne(id: string) {
    return await this.userAccountModel.findById(id);
  }

  async delete(id: string) {
    return this.userAccountModel.findByIdAndDelete(id);
  }

  async update(id: string, userAccount: UpdateUserAccountDto) {
    return this.userAccountModel.findByIdAndUpdate(id, userAccount, {
      new: true,
    });
  }
}
