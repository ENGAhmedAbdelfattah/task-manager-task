import { FormData, TaskType } from "@/types/TaskType";
import { handleValidation } from "@/utils/validation/validFormTask";
import { useState } from "react";

const updateTask = async (body: FormData, id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res
    } catch (err) {
        // console.log("err", err);
    }
};

const useEditTask = (taskId: string, taskItem: TaskType) => {
    const [formData, setFormData] = useState({
        title: taskItem.title || "",
        description: taskItem.description || ""
    });

    const [formErrors, setFormErrors] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (handleValidation(formData, setFormErrors)) {
            await updateTask(formData, taskId);
            setFormData({
                title: "",
                description: ""
            });
            setFormErrors({
                title: "",
                description: ""
            });
            if (window) window.location.href = `/`;
        } else {
            // console.log("error here")
        }
    };
    return { formData, setFormData, formErrors, handleSubmit }
}

export default useEditTask;