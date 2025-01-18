import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MarkPublic } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MarkPublic()
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
