import { FormData } from "@/types/TaskType";
import { handleValidation } from "@/utils/validation/validFormTask";
import { useState } from "react";

const addTask = async (body: FormData) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/tasks/`, {
            method: "POST",
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

const useAddTask = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    const [formErrors, setFormErrors] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (handleValidation(formData, setFormErrors)) {
            await addTask(formData);
            setFormData({
                title: "",
                description: ""
            });
            setFormErrors({
                title: "",
                description: ""
            });
            if (window) window.location.href = "/";
        } else {
            // console.log("error here")
        }
    };

    return { formData, setFormData, formErrors, handleSubmit }
}

export default useAddTask;