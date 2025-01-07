import AddTask from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";
import TaskFilterTabs from "@/components/module/tasks/TaskFilterTabs";
import { selactTasks } from "@/redux/features/task/taskSlice";
import { useAppSelactor } from "@/redux/hook";
const Task = () => {
  const tasks = useAppSelactor(selactTasks);
  return (
    <div className="border-2 border-red-200 max-w-7xl mx-auto px-5 mt-20 py-5">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <div className="flex gap-3 items-center">
          <TaskFilterTabs />
          <AddTask />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Task;
