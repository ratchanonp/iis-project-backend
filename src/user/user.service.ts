import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new NotFoundException(`User #${email} not found`);
    }

    return user;
  }

  async findOne(id: string): Promise<User | null> {
    const user = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error(`User #${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string): Promise<User> {
    const removeUser = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!removeUser) {
      throw new Error(`User #${id} not found`);
    }

    return removeUser;
  }
}
