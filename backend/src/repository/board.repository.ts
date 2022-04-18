import { Board } from 'src/entity/board.entity';
import { NameMapper } from './mapper/name.mapper';

/**
 * @brief DB와 Entity를 맵핑해주는 provider
 * @author Hyunji Park
 * @date 2022.04.18
 */
export const BoardRepository = [
  {
    provide: NameMapper.BOARD,
    useValue: Board,
  },
];
