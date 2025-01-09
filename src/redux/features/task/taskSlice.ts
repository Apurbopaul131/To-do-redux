import { RootState } from "@/redux/store";
import { ITask, TDraftTask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
import { TFiltertab } from "./../../../types";

interface InitialStateTask {
  tasks: ITask[];
  filter: TFiltertab;
}
const initialState: InitialStateTask = {
  tasks: [
    {
      id: "S1C4R7YLqB_VefOar5hok",
      description:
        "The update part is the crutial part of the project. It is essentaial to create that feature.",
      dueDate: "06-01-2025",
      isCompleted: false,
      priority: "high",
      assignTo: null,
      title: "Create update in to do app",
    },
  ],
  filter: "all",
};

const createTask = (taskData: TDraftTask) => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignTo ? taskData.assignTo : null,
  };
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TDraftTask>) => {
      const newData = createTask(action.payload);
      state.tasks.push(newData as ITask);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          return (task.isCompleted = !task.isCompleted);
        }
        return task;
      });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterUpdate: (state, action: PayloadAction<TFiltertab>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) => {
        if (task.assignTo === action.payload) {
          return (task.assignTo = null);
        } else {
          return task;
        }
      });
    });
  },
});

export const selactTasks = (state: RootState) => {
  const filter = state.todo.filter;
  const allTask = state.todo.tasks;
  if (filter === "high") {
    return allTask.filter((task) => task.priority === "high");
  } else if (filter === "meduim") {
    return allTask.filter((task) => task.priority === "meduim");
  } else if (filter === "low") {
    return allTask.filter((task) => task.priority === "low");
  } else {
    return allTask;
  }
};
export const { addTask, completeTask, removeTask, filterUpdate } =
  taskSlice.actions;

export default taskSlice.reducer;
