import CustomClient from "@/components/UI/common/CustomClient/CustomClient";
import TaskItemList from "./units/TaskItemList";
import { TaskType } from "@/types/TaskType";

const getTasks = async () => {
    try {
        const data = await (await fetch("http://localhost:3000/api/v1/tasks", { cache: "no-cache" })).json();
        console.log("data", data)
        return data;
    } catch (err) {
        console.log("err", err);
    }
};

export const dynamic = 'force-dynamic';

const TaskItemsList = async () => {
    const tasksList = await getTasks();

    return (
        <div className="mt-3 bg-cyan-200 p-3 rounded-lg flex flex-col gap-3">
            <CustomClient tasksTotalNums={Array.isArray(tasksList) ? tasksList.length : 0} />
            {Array.isArray(tasksList) && tasksList.map((listItem: TaskType) => (
                <TaskItemList key={listItem.id} listItem={listItem} />
            ))}
        </div>
    );
}

export default TaskItemsList;