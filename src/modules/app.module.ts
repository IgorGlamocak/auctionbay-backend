import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import * as process from 'process';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from '../config/schema.config';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
      UserModule,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
