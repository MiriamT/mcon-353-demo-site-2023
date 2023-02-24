const TodoActions = {
  ADD: "ADD",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] };
    }
  }
};

const addAction = {
  type: TodoActions.ADD,
  todo: { title: "whatever", isComplete: false },
};
