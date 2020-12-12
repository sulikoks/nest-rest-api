import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('all')
  // @Redirect('https://google.com')
  getAll(): Promise<Cat[]> {
    return this.catsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCat: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCat);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cat> {
    return this.catsService.remove(id);
  }

  @Put(':id')
  update(
    @Param(':id') id: string,
    @Body() updateCat: UpdateCatDto,
  ): Promise<Cat> {
    return this.catsService.update(id, updateCat);
  }
}
