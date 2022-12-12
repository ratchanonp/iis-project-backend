import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RestuarantController } from './restuarant.controller';
import { RestuarantService } from './restuarant.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  controllers: [RestuarantController],
  providers: [RestuarantService],
})
export class RestuarantModule {}
