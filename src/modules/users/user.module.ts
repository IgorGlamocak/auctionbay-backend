import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
