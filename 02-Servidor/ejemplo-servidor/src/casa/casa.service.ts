import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CasaService {
  constructor(
    @Inject('CASA_REPOSITORY')
    private photoRepository: Repository<Casa>,
  ) {}

  obtenerTodos(options?: FindManyOptions<Casa> | undefined) {
    return this.photoRepository.find(options);
  }

  crearUno(nombre: string, valor: number, imagenUrl: string) {
    const nuevaInstancia = this.photoRepository.create();
    nuevaInstancia.nombre = nombre;
    nuevaInstancia.valor = valor;
    nuevaInstancia.imagenURL = imagenUrl;
    return this.photoRepository.save(nuevaInstancia);
  }
}
