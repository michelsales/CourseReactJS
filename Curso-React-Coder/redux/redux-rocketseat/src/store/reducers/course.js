const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "michelzim no redux",
        lessons: [
          { id: 1, title: "primeira aula" },
          { id: 2, title: "segunda aula" },
          { id: 3, title: "terceira aula" },
        ],
      },
      {
        id: 2,
        title: "michelzim no HOOKS",
        lessons: [
          { id: 4, title: "primeira aula" },
          { id: 5, title: "segunda aula" },
          { id: 6, title: "terceira aula" },
        ],
      },
    ],
  };
  
  export default function course(state = INITIAL_STATE, action) {
    console.log(action);
    if (action.type === "TOGGLE_LESSON") {
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      };
    }
    return state;
  }
  