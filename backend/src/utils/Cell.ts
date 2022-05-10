export enum CellStatus {
  WALL = "WALL",
  EMPTY = "EMPTY",
  START = "START",
  END = "END",
}

export class Cell {
  private id: number;
  private status: CellStatus | null = null;
  constructor(id: number) {
    this.id = id;
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

  getCell = () => ({
    id: this.id,
    cell: this.status,
  });

  getInstance = () => {
    return this;
  };
}
