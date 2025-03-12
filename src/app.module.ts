import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers:  [AppService],
})
export class AppModule {}
