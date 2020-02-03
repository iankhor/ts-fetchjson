import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logger(id, title, completed);
});

const logger = (id: number, title: string, completed: boolean) => {
  console.log(
    `
      Todo ID: ${id}
      Has a title of: ${title}
      Is finsihed?: ${completed}
    `
  );
};
