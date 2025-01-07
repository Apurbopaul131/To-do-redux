import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { completeTask, removeTask } from "@/redux/features/task/taskSlice";
import { selactUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelactor } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";
interface PropTask {
  task: ITask;
}
const TaskCard = ({ task }: PropTask) => {
  const dispatch = useAppDispatch();
  const users = useAppSelactor(selactUser);
  const assignedTaskUser = users.find((user) => task.assignTo === user.id);
  console.log(assignedTaskUser);
  return (
    <div className="border px-5 py-5 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "high",
              "bg-yellow-500": task.priority === "meduim",
              "bg-red-500": task.priority === "low",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(completeTask(task.id))}
          />
        </div>
      </div>
      <p>AssignedTo - {assignedTaskUser ? assignedTaskUser.name : "no one"}</p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
