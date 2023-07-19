import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OmdbController } from './controller/omdb.controller';
import { OmdbServiceImpl } from './service/impl/omdb.service.impl';

@Module({
  imports: [HttpModule],
  providers: [OmdbServiceImpl],
  controllers: [OmdbController],
})
export class OmdbModule {}
