"use client"
import useEditTask from "@/hooks/pages/editTask/useEditTask";
import CustomForm from "../../common/formPages/CustomForm";
import { TaskType } from "@/types/TaskType";

type Props = {
    taskId: string;
    taskItem: TaskType;
}

const EditTask = ({ taskItem, taskId }: Props) => {
    const { formData, setFormData, formErrors, handleSubmit } = useEditTask(taskId, taskItem);
    return (
        <section className="w-full container p-3">
            <h1 className="font-bold text-center text-3xl mt-5">Edit Task</h1>
            <CustomForm formData={formData} setFormData={setFormData} formErrors={formErrors} handleSubmit={handleSubmit} />
        </section>
    );
}

export default EditTask;