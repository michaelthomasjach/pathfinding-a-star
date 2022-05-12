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
  private previousCell: Cell | null = null;
  private neighborsIDs: number[] = [];
  private status: CellStatus | null = null;

  constructor(
    id: number,
    rowIndex: number,
    colIndex: number,
    f: number = 0,
    g: number = 0,
    h: number = 0,
    neighborsIDs: number[] = []
  ) {
    this.id = id;
    this.y = rowIndex;
    this.x = colIndex;
    this.f = f;
    this.g = g;
    this.h = h;
    this.neighborsIDs = neighborsIDs;
  }

  addNeighbor = (id: number) => {
    this.neighborsIDs.push(id);
  };

  clearNeighbors = () => {
    this.neighborsIDs = [];
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

  setF = (f: number) => {
    this.f = f;
  };

  setG = (g: number) => {
    this.g = g;
  };

  setH = (h: number) => {
    this.h = h;
  };

  setPreviousCell = (cell: Cell) => {
    this.previousCell = cell;
  }

  getNeighborsIDs = (): number[] => {
    return this.neighborsIDs;
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

  getPreviousCell = () => {
    return this.previousCell;
  }

  getCell = () => this;

  getCellJSON = () => JSON.parse(JSON.stringify(this));

  // getCellJSON = () => this;
}
