import EditTask from "@/components/UI/pages/editTask/EditTask";

const getTask = async (id: string) => {
    try {
        const data = await (await fetch(`http://localhost:3000/api/v1/tasks/${id}`, { cache: "no-cache" })).json();
        // console.log("data", data)
        return data;
    } catch (err) {
        // console.log("err", err);
    }
};

type Params = {
    taskId: string;
}
type Props = {
    params: Params;
}

const EditTaskPage = async ({ params }: Props) => {
    const { taskId } = params
    const taskItem = await getTask(taskId);

    return (
        <main className="min-h-[calc(100vh-4rem-1.5rem-0.5rem)]">
            <EditTask taskItem={taskItem} taskId={taskId} />
        </main>
    );
}

export default EditTaskPage;
