import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAccountModule } from './application/user-account/user-account.module';
import { TeamModule } from './application/team/team.module';
import { ProfileModule } from './application/profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jioh19:jioh19@cluster0.3jxsbjs.mongodb.net/?retryWrites=true&w=majority',
      {
        autoIndex: true,
      },
    ),
    UserAccountModule,
    TeamModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
