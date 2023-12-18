import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SocialNetwork } from '../dto/enums';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  name: string;

  @Prop()
  avatar?: string;

  @Prop({ type: [Object] })
  socialNetworks?: SocialNetwork[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
