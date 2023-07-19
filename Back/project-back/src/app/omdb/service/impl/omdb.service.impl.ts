import { Injectable } from '@nestjs/common';
import { OmdbService } from '../omdb.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { OmdbDTO } from '../../dto/omdb.dto';

@Injectable()
export class OmdbServiceImpl implements OmdbService {
  private readonly API_URL = process.env.API_URL;

  constructor(private readonly httpService: HttpService) {}

  async findOmdbyTitle(title: string) {
    const movieUrl = this.API_URL + title;

    const { data } = await firstValueFrom(
      this.httpService.get<OmdbDTO>(movieUrl),
    );

    const dto: OmdbDTO = await this.jsonToDTO(data);

    return dto;
  }

  async jsonToDTO(data: any): Promise<OmdbDTO> {
    const dto: OmdbDTO = new OmdbDTO();

    dto.title = data.Title;
    dto.actors = data.Actors;
    dto.plot = data.Plot;
    dto.poster = data.Poster;

    return dto;
  }
}
