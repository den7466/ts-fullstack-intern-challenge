import { Module } from '@nestjs/common';
import { LikesModule } from './likes/likes.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LikesModule, ConfigModule.forRoot(), DatabaseModule],
})
export class AppModule {}
