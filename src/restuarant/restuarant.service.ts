import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Restaurant } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRestuarantDto } from './dto/update-restuarant.dto';

@Injectable()
export class RestuarantService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RestaurantCreateInput): Promise<Restaurant> {
    return this.prisma.restaurant.create({
      data: data,
    });
  }

  async findAll(): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany({
      include: {
        Cafeteria: true,
      },
    });
  }

  async findOne(id: string): Promise<Restaurant | null> {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: {
        id: id,
      },
      include: {
        Cafeteria: true,
        Review: true,
      },
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant #${id} not found`);
    }

    return restaurant;
  }

  update(id: string, updateRestuarantDto: UpdateRestuarantDto) {
    return this.prisma.restaurant.update({
      where: {
        id: id,
      },
      data: updateRestuarantDto,
    });
  }

  remove(id: string) {
    return this.prisma.restaurant.delete({
      where: {
        id: id,
      },
    });
  }
}
