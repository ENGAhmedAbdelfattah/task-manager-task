import { TaskType } from "@/types/TaskType";
import Link from "next/link";

type Props = {
    listItem: TaskType;
}
const TaskItemList = ({ listItem }: Props) => {
    return (
        <Link href={`/view-tasks/${listItem?.id}`}>
            <div className="p-4  bg-cyan-500 rounded-lg text-white">
                <p>{listItem?.title}</p>
            </div>
        </Link>
    );
}

export default TaskItemList;