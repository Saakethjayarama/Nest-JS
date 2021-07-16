import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LearnController } from './Learn/learn.controller';
import LearnModule from './Learn/learn.module';
import { LearnService } from './Learn/learn.service';

@Module({
  imports: [LearnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
