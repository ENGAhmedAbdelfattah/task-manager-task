import { FormData, TaskType } from "@/types/TaskType";
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

    const handleValidation = (formData: FormData) => {
        if (formData.title.trim() === "") {
            setFormErrors(prev => ({ ...prev, title: "title is required" }));
        } else {
            setFormErrors(prev => ({ ...prev, title: "" }));
        }
        if (formData.description.trim() === "") {
            setFormErrors(prev => ({ ...prev, description: "description is required" }));
        } else {
            setFormErrors(prev => ({ ...prev, description: "" }));
        }
        if (formData.title.trim() === "" || formData.description.trim() === "") {
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (handleValidation(formData)) {
            await updateTask(formData, taskId);
            setFormData({
                title: "",
                description: ""
            });
            setFormErrors({
                title: "",
                description: ""
            });
            if (window) window.location.href = `/view-tasks/${taskId}`;
        } else {
            // console.log("error here")
        }
    };
    return { formData, setFormData, formErrors, handleSubmit }
}

export default useEditTask;