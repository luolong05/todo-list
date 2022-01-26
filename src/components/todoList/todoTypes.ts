export enum TodoStatus {
  DOING = 0,
  DONE = 1
}

export interface TodoType {
  id: number;
  label: string;
  status: TodoStatus;
}
