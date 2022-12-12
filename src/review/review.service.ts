import { Injectable } from '@nestjs/common';
import { Prisma, Review } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ReviewCreateInput) {
    return await this.prisma.review.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.review.findMany();
  }

  async findOne(id: string): Promise<Review | null> {
    const review = this.prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      throw new Error(`Review #${id} not found`);
    }

    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    return this.prisma.review.update({
      where: {
        id: id,
      },
      data: updateReviewDto,
    });
  }

  async remove(id: string): Promise<Review> {
    return this.prisma.review.delete({
      where: {
        id: id,
      },
    });
  }
}
