import { Controller, Get, Param } from '@nestjs/common';
import { OmdbService } from '../service/omdb.service';
import { OmdbDTO } from '../dto/omdb.dto';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('title')
  findOmdbyTitle(@Param('title') title: string): OmdbDTO {
    return this.omdbService.findOmdbyTitle(title);
  }
}
