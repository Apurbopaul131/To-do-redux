export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  assignTo: string | null;
  priority: "high" | "meduim" | "low";
}
export interface IUser {
  id: string;
  name: string;
}
export type TFiltertab = "all" | "high" | "meduim" | "low";
export type TDraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignTo"
>;
export type TDraftUser = Pick<IUser, "name">;
