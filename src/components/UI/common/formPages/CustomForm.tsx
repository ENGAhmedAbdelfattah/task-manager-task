import { Dispatch, SetStateAction } from "react";
import { FormData } from "@/types/TaskType";
type FormProps = {
    formData: FormData,
    setFormData: Dispatch<SetStateAction<FormData>>,
    formErrors: FormData,
    handleSubmit: (e: React.FormEvent) => void;
}
const CustomForm = ({ formData, setFormData, formErrors, handleSubmit }: FormProps) => {
    return (
        <form className="max-w-sm mx-auto my-20" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-90">Task title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ex: do homework"
                // required
                />
                <p className="text-red-600">{formErrors.title}</p>
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-90">Task description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="ex: homework should me clean and organized"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // required
                />
                <p className="text-red-600">{formErrors.description}</p>
            </div>
            <button
                type="submit"
                className="text-white bg-cyan-500 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Save Task
            </button>
        </form>
    );
}

export default CustomForm;