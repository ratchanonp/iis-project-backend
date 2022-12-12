import { Controller, Get, Param, Post } from '@nestjs/common';
import { CafeteriaService } from './cafeteria.service';

@Controller('cafeteria')
export class CafeteriaController {
  constructor(private readonly cafeteriaService: CafeteriaService) {}

  @Get('')
  async getCafeterias(@Param() params: any) {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.cafeteriaService.cafeterias({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  @Get(':id')
  async getCafeteria(@Param('id') id: string) {
    return await this.cafeteriaService.cafeteria({ id });
  }

  @Post('')
  async createCafeteria(@Param() data: any) {
    return await this.cafeteriaService.createCafeteria(data);
  }
}
