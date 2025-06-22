import {
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Query,
} from '@nestjs/common';

@Controller('casa')
export class CasaController {
  private readonly casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  @Get()
  @HttpCode(200)
  obtenerCasas(@Query('idCasa') idCasa?: string) {
    // Si no se proporciona idCasa, devolverá todas las casas
    if (!idCasa) {
      return {
        statusCode: 200,
        data: this.casas,
      };
    }

    const id = parseInt(idCasa, 10);
    const casa = this.casas.find((c) => c.id === id);

    if (!casa) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'No se encuentra',
      });
    }

    return {
      statusCode: 200,
      data: casa,
    };
  }
}
