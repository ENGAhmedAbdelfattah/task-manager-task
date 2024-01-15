const AddTask = () => {
    return (
        <section className="w-full container p-3">
            <h1 className="font-bold text-center text-3xl mt-5">Add Task</h1>
            <form className="max-w-sm mx-auto my-20">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-90">Task title</label>
                    <input
                        type="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="ex: do homework"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="discription" className="block mb-2 text-sm font-medium text-gray-90">Task discription</label>
                    <textarea
                        id="discription"
                        placeholder="ex: homework should me clean and organized"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-cyan-500 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Save Task
                </button>
            </form>;

        </section>
    );
}

export default AddTask;