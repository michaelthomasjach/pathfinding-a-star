export enum CellStatus {
  WALL = "WALL",
  EMPTY = "EMPTY",
  START = "START",
  END = "END",
}

export class Cell {
  private id: number;
  private x: number;
  private y: number;
  private f: number = 0;
  private g: number = 0;
  private h: number = 0;

  private status: CellStatus | null = null;
  constructor(rowIndex: number, colIndex: number) {
    this.id = rowIndex * colIndex;
    this.y = rowIndex;
    this.x = colIndex;
  }

  setWall = () => {
    this.status = CellStatus.WALL;
  };

  setEmpty = () => {
    this.status = CellStatus.EMPTY;
  };

  setStart = () => {
    this.status = CellStatus.START;
  };

  setEnd = () => {
    this.status = CellStatus.END;
  };

  getZone = (): CellStatus | null => {
    return this.status;
  };

  getId = () => {
    return this.id;
  };

  getCell = () => this;
}
