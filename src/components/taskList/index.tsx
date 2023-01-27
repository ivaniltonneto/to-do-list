import { IPropsTaskList } from '../../interfaces';
import Div from './styles';

const TaskList = ({ taskList, handleDelete, handleEdit }: IPropsTaskList) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <Div key={task.id}>
            <div className="details">
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="actions">
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </Div>
        ))
      ) : (
        <p>Não seja como um tambor, vazio, adicione alguma tarefa.</p>
      )}
    </>
  );
};

export default TaskList;
