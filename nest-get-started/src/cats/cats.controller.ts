import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Post()
  @HttpCode(204)
  createWithDifferentResponse() {
    return 'This action adds a new cat';
  }

  @Post()
  @Header('Cache-Control', 'none')
  createWithHeader() {
    return 'This action adds a new cat';
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('ab*cd')
  findAllWithPattern() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get(':id')
  findOneWithAnotherWay(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
