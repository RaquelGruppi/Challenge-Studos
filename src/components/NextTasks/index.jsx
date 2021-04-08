import { useCallback, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useTheme } from 'react-jss';
import { useTasks } from '../../hooks/useTasks';
import { Loader } from '../Loader';
import { TaskCard } from '../TaskCard';

import { useStyles } from './styles';

export const NextTasks = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const {
    isLoading,
    newTasks,
    tasksInProgress,
    finishedTasks,
    searchTaskByTitle,
  } = useTasks();

  const [tasks, setTasks] = useState([]);
  const [taskStage, setTaskStage] = useState('new');
  const [searchTitle, setSearchTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (searchTitle) {
      const matchTasks = searchTaskByTitle({
        searchTitle,
        taskStage,
      });
      setTasks(matchTasks);
    } else {
      switch (taskStage) {
        case 'inProgress':
          setTasks(tasksInProgress);
          break;
        case 'finished':
          setTasks(finishedTasks);
          break;
        case 'new':
        default:
          setTasks(newTasks);
      }
    }
  }, [
    newTasks,
    tasksInProgress,
    finishedTasks,
    searchTaskByTitle,
    searchTitle,
    taskStage,
  ]);

  const loadNewTasks = useCallback(() => {
    setTaskStage('new');
  }, []);

  const loadTasksInProgress = useCallback(() => {
    setTaskStage('inProgress');
  }, []);

  const loadFinishedTasks = useCallback(() => {
    setTaskStage('finished');
  }, []);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={classes.container}>
      <h2>Próximas entregas</h2>

      <div
        className={
          isFocused
            ? `${classes.searchBox} ${classes.focusedSearchBox}`
            : classes.searchBox
        }
      >
        <input
          className={classes.input}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={event => setSearchTitle(event.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
        <AiOutlineSearch />
      </div>

      <div className={classes.navigationBar}>
        <button
          className={
            taskStage === 'new' ? classes.activeButton : classes.button
          }
          type="button"
          onClick={loadNewTasks}
        >
          Novas
        </button>
        <button
          className={
            taskStage === 'inProgress' ? classes.activeButton : classes.button
          }
          type="button"
          onClick={loadTasksInProgress}
        >
          Em andamento
        </button>
        <button
          className={
            taskStage === 'finished' ? classes.activeButton : classes.button
          }
          type="button"
          onClick={loadFinishedTasks}
        >
          Finalizadas
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.cardsList}>
          {tasks.map(task => (
            <TaskCard
              key={task.title}
              date={task.date}
              nearExpiry={task.nearExpiry}
              title={task.title}
              subject={task.subject}
              teacher={task.teacher}
              type={task.type}
              questionsCompleted={task.questionsCompleted}
              questions={task.questions}
            />
          ))}
        </div>
      )}
    </div>
  );
};
