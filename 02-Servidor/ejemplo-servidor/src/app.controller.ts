import {
  Controller,
  Get,
  Param,
  Query,
  Headers,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200)
  ejemplo(
    @Param('id') id, // Parametro de Ruta llamado 'id'
    @Query('hola') hola, // Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Parametro de cuerpo llamado 'monto'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto;
    // if(){} else{
    // throw NotFoundException('No encontrado')  }
  }
}
