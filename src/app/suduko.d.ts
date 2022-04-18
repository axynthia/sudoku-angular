export type Sudoku = SudokuField[][];

interface SudokuField {
  value?: number;
  notes?: number[];
  answer?: number;
  readonly?: boolean;
}