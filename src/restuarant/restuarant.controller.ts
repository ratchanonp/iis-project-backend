import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRestuarantDto } from './dto/create-restuarant.dto';
import { UpdateRestuarantDto } from './dto/update-restuarant.dto';
import { RestuarantService } from './restuarant.service';

@Controller('restaurant')
export class RestuarantController {
  constructor(private readonly restuarantService: RestuarantService) {}

  @Post()
  create(@Body() data: CreateRestuarantDto) {
    return this.restuarantService.create(data);
  }

  @Get()
  findAll() {
    return this.restuarantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restuarantService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestuarantDto: UpdateRestuarantDto,
  ) {
    return this.restuarantService.update(id, updateRestuarantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restuarantService.remove(id);
  }
}
