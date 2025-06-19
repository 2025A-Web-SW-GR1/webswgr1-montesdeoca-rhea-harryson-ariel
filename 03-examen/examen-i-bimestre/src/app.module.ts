import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasaController } from './casa.controller';

@Module({
  imports: [],
  controllers: [AppController, CasaController],
  providers: [AppService],
})
export class AppModule {}
