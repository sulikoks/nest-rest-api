import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

const cities = [];

@Injectable()
export class CitiesService {
  constructor(private readonly citiesModel = cities) {}

  async getAll(): Promise<any> {
    return this.citiesModel;
  }

  async getById(id: string): Promise<any> {
    return this.citiesModel.find((city) => city.id === id);
  }

  async create(city: CreateCityDto): Promise<any> {
    return this.citiesModel.push(city);
  }

  async remove(id: string): Promise<any> {
    return this.citiesModel.find((city) => city.id === id);
  }

  async update(id: string, city: UpdateCityDto): Promise<any> {
    console.log(city);
    return this.citiesModel.find((city) => city.id === id);
  }
}
