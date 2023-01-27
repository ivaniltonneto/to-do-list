import { SetStateAction, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Modal from './components/modal';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import { ITask } from './interfaces';
import Main from './styles/app';
import Global from './styles/global';

function App() {
  const [taskList, setTasklist] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTaks = (id: string) => {
    setTasklist(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    display ? modal!.classList.remove('hide') : modal!.classList.add('hide');
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: string, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    setTasklist(updatedItems);
    hideOrShowModal(false);
  };

  return (
    <>
      <Global />
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            handleUpdate={updateTask}
            task={taskToUpdate}
            tasklist={taskList}
            setTasklist={function (value: SetStateAction<ITask[]>): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      />
      <Header />
      <Main>
        <h2>O que você vai fazer?</h2>
        <TaskForm
          btnText="Criar Tarefa"
          tasklist={taskList}
          setTasklist={setTasklist}
        />
        <h2>Suas tarefas:</h2>
        <TaskList
          taskList={taskList}
          handleDelete={deleteTaks}
          handleEdit={editTask}
        />
      </Main>
      <Footer />
    </>
  );
}

export default App;
