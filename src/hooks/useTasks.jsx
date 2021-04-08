import axios from 'axios';
import PropTypes from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

const TasksContext = createContext({});

export const TasksProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [tasksInProgress, setTasksInProgress] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const nearExpiry = useCallback(date => {
    // set today as '2021-01-08' to work with the data example
    const today = new Date('2021-01-08');
    const numberOfDaysToAlert = 2;
    const numberOfDaysToExpiry = Math.floor(
      (new Date(date) - today) / (1000 * 60 * 60 * 24),
    );
    return numberOfDaysToExpiry <= numberOfDaysToAlert;
  }, []);

  useEffect(() => {
    const localStorageTasks = localStorage.getItem('@Studos:tasks');

    if (localStorageTasks) {
      setAllTasks(JSON.parse(localStorageTasks));
      setIsLoading(false);
    } else {
      axios
        .get('https://run.mocky.io/v3/865096e8-cdb8-49d7-b548-6488db4c8129')
        .then(response => response.data)
        .then(data =>
          data
            .replace(/'/g, `"`)
            .replace(/[A-Za-z]+:/g, matchedStr => {
              return `"${matchedStr.substring(0, matchedStr.length - 1)}":`;
            })
            .replace(/(\n|\s+\s)/g, '')
            .replace(/,}/g, '}'),
        )
        .then(string => JSON.parse(string))
        .then(jsObj => jsObj.data.entities)
        .then(rawTasks => {
          return rawTasks.map(rawTask => {
            const date = rawTask.date.replace(/\//g, '-');

            const TPosition = date.indexOf('T');

            if (TPosition !== -1) {
              return {
                ...rawTask,
                date: date.substr(0, TPosition),
              };
            }
            if (date.indexOf('-') === 4) {
              return { ...rawTask, date };
            }
            return {
              ...rawTask,
              date: date.split('-').reverse().join('-'),
            };
          });
        })
        .then(unorderedTasks => {
          const orderedTaskes = unorderedTasks.sort((a, b) => {
            if (a.date < b.date) {
              return -1;
            }
            if (a.date > b.date) {
              return 1;
            }
            return 0;
          });

          return orderedTaskes.map(task => ({
            ...task,
            nearExpiry: nearExpiry(task.date),
          }));
        })
        .then(tasks => {
          setAllTasks(tasks);
          localStorage.setItem('@Studos:tasks', JSON.stringify(tasks));
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          toast.error(
            'Ocorreu um error no carregamento das atividades, tente novamente.',
            {
              className: 'errorToast',
            },
          );
        });
    }
  }, [nearExpiry]);

  useEffect(() => {
    const newTasksTemp = [];
    const tasksInProgressTemp = [];
    const finishedTasksTemp = [];

    allTasks.forEach(task => {
      if (!task.started) {
        newTasksTemp.push(task);
      } else if (task.questions !== task.questionsCompleted) {
        tasksInProgressTemp.push(task);
      } else {
        finishedTasksTemp.push(task);
      }
    });

    setNewTasks(newTasksTemp);
    setTasksInProgress(tasksInProgressTemp);
    setFinishedTasks(finishedTasksTemp);
  }, [allTasks]);

  const searchTaskByTitle = ({ searchTitle, taskStage }) => {
    switch (taskStage) {
      case 'inProgress':
        return tasksInProgress.filter(
          task =>
            task.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1,
        );
      case 'finished':
        return finishedTasks.filter(
          task =>
            task.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1,
        );
      case 'new':
      default:
        return newTasks.filter(
          task =>
            task.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1,
        );
    }
  };

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        newTasks,
        tasksInProgress,
        finishedTasks,
        searchTaskByTitle,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTasks = () => {
  const context = useContext(TasksContext);

  return context;
};
