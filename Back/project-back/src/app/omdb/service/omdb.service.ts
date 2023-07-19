import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OmdbService {
  async sendMovie(): Promise<any> {
    const url = 'http://www.omdbapi.com/?i=tt38 96198&apikey=ad8d99e5';
    const config = {
      data: {
        id: 'ad8d99e5',
      },
    };
    const response = await axios.get(url, config);
    console.log(response);
  }
}
