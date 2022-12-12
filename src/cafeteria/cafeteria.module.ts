import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CafeteriaController } from './cafeteria.controller';
import { CafeteriaService } from './cafeteria.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [CafeteriaService],
  controllers: [CafeteriaController],
})
export class CafeteriaModule {}
