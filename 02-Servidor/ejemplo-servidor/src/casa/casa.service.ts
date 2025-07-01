import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Casa } from './casa.entity';

@Injectable()
export class CasaService {
  constructor(
    @Inject('CASA_REPOSITORY')
    private readonly casaRepository: Repository<Casa>,
  ) {}

  async obtenerTodos(): Promise<Casa[]> {
    return await this.casaRepository.find();
  }
}
