let todoList = [
  {
    id: 1,
    title: 'Dare da mangiare alla tartaruga 🐢',
    completed: false,
  },
  {
    id: 2,
    title: 'Fare la spesa 🛒',
    completed: false,
  },
  {
    id: 3,
    title: 'Lavare la macchina 🚗',
    completed: true,
  },
  {
    id: 4,
    title: 'Riparare la sedia 🛠️',
    completed: true,
  },
];

function getTodos() {
  return todoList;
}

// cambia il completed da true a false e viceversa
function setTodos(id: number) {
  todoList = todoList.map((t) =>
    t.id == id ? { ...t, completed: !t.completed } : t
  );
}
