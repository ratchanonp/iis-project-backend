import { Injectable } from '@nestjs/common';
import { Cafeteria, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CafeteriaService {
  constructor(private prisma: PrismaService) {}

  async cafeterias(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CafeteriaWhereUniqueInput;
    where?: Prisma.CafeteriaWhereInput;
    orderBy?: Prisma.CafeteriaOrderByWithRelationInput;
  }): Promise<Cafeteria[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.cafeteria.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        restaurant: true,
      },
    });
  }

  async cafeteria(
    cafeteriaWhereUniqueInput: Prisma.CafeteriaWhereUniqueInput,
  ): Promise<Cafeteria | null> {
    return this.prisma.cafeteria.findUnique({
      where: cafeteriaWhereUniqueInput,
      include: {
        restaurant: true,
      },
    });
  }

  async createCafeteria(data: Prisma.CafeteriaCreateInput): Promise<Cafeteria> {
    return this.prisma.cafeteria.create({
      data,
    });
  }
}
