import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterUpdate } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";

const TaskFilterTabs = () => {
  const dispatch = useAppDispatch();
  return (
    <Tabs defaultValue="all">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger onClick={() => dispatch(filterUpdate("all"))} value="all">
          All
        </TabsTrigger>
        <TabsTrigger
          onClick={() => dispatch(filterUpdate("high"))}
          value="high"
        >
          High
        </TabsTrigger>
        <TabsTrigger
          onClick={() => dispatch(filterUpdate("meduim"))}
          value="meduim"
        >
          Meduim
        </TabsTrigger>
        <TabsTrigger onClick={() => dispatch(filterUpdate("low"))} value="low">
          Low
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TaskFilterTabs;
