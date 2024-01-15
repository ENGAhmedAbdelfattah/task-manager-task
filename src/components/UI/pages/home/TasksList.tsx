import Link from "next/link";
import TaskItemList from "./units/TaskItemList";

const TasksList = () => {
    return (
        <section className="container mx-auto">
            <div className="my-4 px-3">
                <h1 className="font-bold text-center text-3xl">Task List</h1>
                <Link href={"/add-task"} className="flex gap-2 items-center mt-3">
                    <span className="flex items-center justify-center leading-none rounded px-2 py-1 bg-slate-600 h-fit text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </span>
                    <span className="font-bold">Add Task</span>
                </Link>
                <div className="mt-3 bg-cyan-200 p-3 rounded-lg flex flex-col gap-3">
                    <TaskItemList />
                </div>
            </div>
        </section>
    );
}

export default TasksList;