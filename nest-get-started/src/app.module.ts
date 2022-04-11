import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { CatsService } from './cats/cats.service';
import { DogsModule } from './dogs/dogs.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [DogsModule, CommonModule],
  controllers: [AppController, CatsController, AdminController],
  providers: [AppService, CatsService],
  exports: [CommonModule],
})
export class AppModule {}
