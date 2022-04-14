import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // @Get()
  // getHello(): string {
  //   return this.blogService.getHello();
  // }

  @MessagePattern('getHello')
  getHello(name: string): string {
    return this.blogService.getHello(name);
  }
}
