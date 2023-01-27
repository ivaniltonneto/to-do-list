export interface IPropsTaskForm {
  btnText: string;
  tasklist: ITask[];
  setTasklist: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: string, title: string, difficulty: number): void;
}

export interface ITask {
  id: string;
  title: string;
  difficulty: number;
}

export interface IPropsTaskList {
  taskList: ITask[];
  handleDelete(id: string): void;
  handleEdit(task: ITask): void;
}

export interface IChildrenModal {
  children: React.ReactNode;
}
