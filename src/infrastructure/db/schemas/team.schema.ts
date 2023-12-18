import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema({
  timestamps: true,
})
export class Team {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  teamName: string;

  //Relación con UserAccount para obtener el id de los jugadores
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount' }],
  })
  players: mongoose.Types.ObjectId[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
