import { useRouter } from "next/navigation";

const deleteTask = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res
    } catch (err) {
        // console.log("err", err);
    }
};

const useTaskItemDelete = (taskId: string) => {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            await deleteTask(taskId);
            // router.push("/");
            if (window) window.location.href = "/";
        } catch (err) {
            // console.log("err", err);
        }
    }
    return { handleDelete }
}

export default useTaskItemDelete;