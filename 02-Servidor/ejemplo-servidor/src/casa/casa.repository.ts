import { DataSource, Repository } from 'typeorm';
import { Casa } from './casa.entity';

export const casaProviders = [
  {
    provide: 'CASA_REPOSITORY',
    useFactory: (dataSource: DataSource): Repository<Casa> => {
      return dataSource.getRepository(Casa);
    },
    inject: ['DATA_SOURCE'],
  },
];
