import { Module } from '@nestjs/common';
import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';
import {
  UserAccount,
  UserAccountSchema,
} from 'src/infrastructure/db/schemas/user-account.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserAccount.name,
        schema: UserAccountSchema,
      },
    ]),
  ],
  controllers: [UserAccountController],
  providers: [UserAccountService],
})
export class UserAccountModule {}
