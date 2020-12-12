import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async getById(id: string): Promise<Cat> {
    return this.catModel.findById(id);
  }

  async create(cat: CreateCatDto): Promise<Cat> {
    const newCat = new this.catModel(cat);
    return newCat.save();
  }

  async remove(id: string): Promise<Cat> {
    return this.catModel.findByIdAndRemove(id);
  }

  async update(id: string, cat: UpdateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, cat, { new: true });
  }
}
