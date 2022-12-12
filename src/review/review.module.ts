import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
