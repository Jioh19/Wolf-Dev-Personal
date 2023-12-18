import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserAccountDocument = HydratedDocument<UserAccount>;

@Schema({
  timestamps: true,
})
export class UserAccount {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  userName: string;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
    trim: true,
  })
  password: string;

  //Relación con Profile
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  })
  profile: mongoose.Types.ObjectId[];
}

export const UserAccountSchema = SchemaFactory.createForClass(UserAccount);
