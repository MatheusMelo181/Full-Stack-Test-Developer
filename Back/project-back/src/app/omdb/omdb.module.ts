import { Module } from '@nestjs/common';
import { OmdbService } from './service/omdb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [OmdbService],
})
export class OmdbModule {}
