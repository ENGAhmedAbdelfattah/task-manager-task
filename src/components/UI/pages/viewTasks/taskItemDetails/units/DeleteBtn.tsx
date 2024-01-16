'use client'
import DeleteSVG from "@/components/UI/common/SVG/DeleteSVG";
import useTaskItemDelete from "@/hooks/pages/viewTasks/taskItemDetails/useTaskItemDelete";

type Props = {
    taskId: string;
}

const DeleteBtn = ({ taskId }: Props) => {
    const { handleDelete } = useTaskItemDelete(taskId);
    return (
        <button className="flex gap-2 items-center mt-3" onClick={handleDelete}>
            <span className="flex items-center justify-center leading-none rounded px-2 py-1 h-10 w-10 bg-slate-600 text-white">
                <DeleteSVG />
            </span>
            <span className="font-bold">Delete Task</span>
        </button>
    );
}

export default DeleteBtn;