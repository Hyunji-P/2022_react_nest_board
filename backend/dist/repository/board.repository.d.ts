import { Board } from 'src/entity/board.entity';
export declare const BoardRepository: {
    provide: "BOARD_REPOSITORY";
    useValue: typeof Board;
}[];
