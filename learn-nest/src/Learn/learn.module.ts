import { Module } from '@nestjs/common';
import { LearnController } from './learn.controller';
import { LearnService } from './learn.service';

@Module({
  imports: [],
  controllers: [LearnController],
  providers: [LearnService],
})
export default class LearnModule {}
