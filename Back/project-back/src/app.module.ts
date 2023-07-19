import { Module } from '@nestjs/common';
import { OmdbModule } from './app/omdb/omdb.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OmdbModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
