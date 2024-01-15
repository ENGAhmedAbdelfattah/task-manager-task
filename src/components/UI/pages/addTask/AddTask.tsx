"use client"
import useAddTask from "@/hooks/pages/addTask/useAddTask";
import CustomForm from "../../common/formPages/CustomForm";

const AddTask = () => {
    const { formData, setFormData, formErrors,  handleSubmit } = useAddTask();

    return (
        <section className="w-full container p-3">
            <h1 className="font-bold text-center text-3xl mt-5">Add Task</h1>
            <CustomForm formData={formData} setFormData={setFormData} formErrors={formErrors} handleSubmit={handleSubmit} />
        </section>
    );
}

export default AddTask;