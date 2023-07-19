import { Controller, Get, Param } from '@nestjs/common';
import { OmdbDTO } from '../dto/omdb.dto';
import { OmdbServiceImpl } from '../service/impl/omdb.service.impl';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbServiceImpl) {}

  @Get(':title')
  async findOmdbyTitle(@Param('title') title: string): Promise<OmdbDTO> {
    return await this.omdbService.findOmdbyTitle(title);
  }
}
