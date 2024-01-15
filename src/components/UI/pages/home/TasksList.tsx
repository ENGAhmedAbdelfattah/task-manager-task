import Link from "next/link";
import AddSVG from "../../common/SVG/AddSVG";
import TaskItemsList from "./block/TaskItemsList";

const TasksList = () => {
    return (
        <section className="container mx-auto">
            <div className="my-4 px-3">
                <h1 className="font-bold text-center text-3xl">Task List</h1>
                <Link href={"/add-task"} className="flex gap-2 items-center mt-3">
                    <span className="flex items-center justify-center leading-none rounded px-2 py-1 bg-slate-600 h-fit text-white">
                        <AddSVG />
                    </span>
                    <span className="font-bold">Add Task</span>
                </Link>
                <TaskItemsList />
            </div>
        </section>
    );
}

export default TasksList;