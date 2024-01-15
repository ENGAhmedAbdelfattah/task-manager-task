import TaskItemDetails from "@/components/UI/pages/viewTasks/taskItemDetails/TaskItemDetails";

type Prams = {
  taskId: string;
}
type Props = {
  params: Prams
}
const TaskItemPage = ({ params }: Props) => {
  const {taskId} = params;
  return (
    <main className="min-h-[calc(100vh-4rem-1.5rem-0.5rem)]">
      <TaskItemDetails taskId={taskId} />
    </main>
  );
};

export default TaskItemPage;
