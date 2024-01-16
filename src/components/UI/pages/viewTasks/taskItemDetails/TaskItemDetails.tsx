import EditSVG from "@/components/UI/common/SVG/EditSVG";
import Link from "next/link";
import DeleteBtn from "./units/DeleteBtn";

const getTask = async (id: string) => {
    try {
        const data = await (await fetch(`http://localhost:3000/api/v1/tasks/${id}`, { cache: "no-cache" })).json();
        // console.log("data", data)
        return data;
    } catch (err) {
        // console.log("err", err);
    }
};

type Props = {
    taskId: string;
}
const TaskItemDetails = async ({ taskId }: Props) => {
    const taskItem = await getTask(taskId);

    return (
        <section className="container p-3 mx-auto">
            <h1 className="font-bold text-center text-3xl mt-5">Task Details</h1>
            <div className="my-14">
                <div className="flex gap-5 p-3">
                    <Link href={`/edit-task/${taskItem?.id}`} className="flex gap-2 items-center mt-3">
                        <span className="flex items-center justify-center leading-none rounded px-2 py-1 h-10 w-10 bg-slate-600 text-white">
                            <EditSVG />
                        </span>
                        <span className="font-bold">Edit Task</span>
                    </Link>
                    <DeleteBtn taskId={taskId} />
                </div>
                <div className="flex flex-col gap-3 bg-cyan-100 rounded-lg p-3">

                    <div>
                        <h2 className="font-bold text-15">Title</h2>
                        <p>{taskItem?.title}</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-15">Description</h2>
                        <p>{taskItem?.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaskItemDetails;