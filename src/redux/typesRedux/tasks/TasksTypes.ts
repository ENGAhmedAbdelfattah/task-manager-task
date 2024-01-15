export type PayloadTask = {
    id: string;
    title: string;
    discription: string;
};

export type TasksState = {
    tasks: PayloadTask[];
};
