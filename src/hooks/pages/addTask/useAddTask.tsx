import { useRouter } from "next/navigation";
import { FormData } from "@/types/TaskType";
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
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        description: ""
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
            await addTask(formData);
            setFormData({
                title: "",
                description: ""
            });
            setFormErrors({
                title: "",
                description: ""
            });
            // router.push("/");
            if (window) window.location.href = "/";
        } else {
            // console.log("error here")
        }
    };

    return { formData, setFormData, formErrors, handleSubmit }
}

export default useAddTask;