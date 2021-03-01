import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { City } from './models/cities.model';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService) {}

  @Query(() => City)
  async recipe(@Args('id') id: string): Promise<City> {
    const recipe = await this.citiesService.getById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(() => [City])
  recipes(): Promise<City[]> {
    return this.citiesService.getAll();
  }

  @Mutation(() => City)
  async addCity(
    @Args('newCityData') newCityData: CreateCityDto,
  ): Promise<City> {
    return await this.citiesService.create(newCityData);
  }

  @Mutation(() => Boolean)
  async removeCity(@Args('id') id: string) {
    return this.citiesService.remove(id);
  }
}
