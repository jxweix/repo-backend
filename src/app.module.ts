import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import * as bodyParser from 'body-parser';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // เพิ่ม middleware เข้าไปใน consumer ใน AppModule
    consumer
      .apply(bodyParser.json())
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer
      .apply(bodyParser.urlencoded({ extended: true }))
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}