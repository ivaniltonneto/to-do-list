import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IPropsTaskForm, ITask } from '../../interfaces';
import Form from './styles';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({
  btnText,
  tasklist,
  setTasklist,
  task,
  handleUpdate,
}: IPropsTaskForm) => {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task?.difficulty);
    }
  }, [task]);

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = uuidv4();
      const newTask: ITask = { id, title, difficulty };

      setTasklist([...tasklist, newTask]);
      setTitle('');
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name == 'title'
      ? setTitle(e.target.value)
      : setDifficulty(parseInt(e.target.value));
  };

  return (
    <>
      <Form onSubmit={addTaskHandle}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Título da tarefa"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input
            type="number"
            name="difficulty"
            placeholder="Dificuldade da tarefa"
            onChange={handleChange}
            value={difficulty}
          />
        </div>
        <input type="submit" value={btnText} />
      </Form>
    </>
  );
};

export default TaskForm;
