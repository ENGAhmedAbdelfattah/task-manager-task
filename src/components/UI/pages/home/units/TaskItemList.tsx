import Link from "next/link";

const TaskItemList = () => {
    return (
        <Link href={"/view-tasks/taskId"}>
            <div className="p-4  bg-cyan-500 rounded-lg text-white">
                <p>Title of Task</p>
            </div>
        </Link>
    );
}

export default TaskItemList;