import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user-info/:name')
  async getUserInfo(@Param('name') name: string) {
    const exists = await this.appService.getUserInfo(name);
    return { exists }
  }

  @Post('create')
  async create(@Body() data:any) {
   return this.appService.save(data)
  }
}
