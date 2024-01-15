const TaskItemDetails = () => {
    return (
        <section className="container p-3 mx-auto">
            <h1 className="font-bold text-center text-3xl mt-5">Task Details</h1>
            <div className="flex flex-col gap-3 my-14 md:my-28 bg-cyan-200 rounded-lg p-3">
                <div>
                    <h2 className="font-bold text-15">Title</h2>
                    <p>Title of task</p>
                </div>
                <div>
                    <h2 className="font-bold text-15">Description</h2>
                    <p>Description of task</p>
                </div>
            </div>
        </section>
    );
}

export default TaskItemDetails;