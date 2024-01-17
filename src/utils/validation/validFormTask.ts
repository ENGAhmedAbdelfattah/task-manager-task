import { FormData } from "@/types/TaskType";
import { Dispatch, SetStateAction } from "react";

export const handleValidation = (formData: FormData, setFormErrors: Dispatch<SetStateAction<FormData>>) => {
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