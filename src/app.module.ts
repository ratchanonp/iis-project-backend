import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CafeteriaModule } from './cafeteria/cafeteria.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { RestuarantModule } from './restuarant/restuarant.module';
import { ReviewModule } from './review/review.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    UserModule,
    CafeteriaModule,
    PrismaModule,
    RestuarantModule,
    ReviewModule,
    AuthModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
