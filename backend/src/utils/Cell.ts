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
  private neighbors: Object[] = [];

  private status: CellStatus | null = null;
  constructor(id: number, rowIndex: number, colIndex: number) {
    this.id = id;
    this.y = rowIndex;
    this.x = colIndex;
  }

  addNeighbor = (cell: Cell) => {
    this.neighbors.push(cell);
  };

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

  getNeighbors = (): Cell[] => {
    return this.neighbors;
  };

  getZone = (): CellStatus | null => {
    return this.status;
  };

  getId = (): number => {
    return this.id;
  };

  getX = (): number => {
    return this.x;
  };

  getY = (): number => {
    return this.y;
  };

  getF = (): number => {
    return this.f;
  };

  getG = (): number => {
    return this.g;
  };

  getH = (): number => {
    return this.h;
  };

  getCell = () => this;

  getCellJSON = () => JSON.parse(JSON.stringify(this));
}
