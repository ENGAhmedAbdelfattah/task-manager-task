'use client'

import { useAppDispatch } from "@/redux/app/hooks";
import { updateTasksNums } from "@/redux/features/local/tasks/tasksTotalSlice";
import { useEffect } from "react";

type Props = {
    tasksTotalNums: number
}
const CustomClient = ({ tasksTotalNums }: Props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(updateTasksNums(tasksTotalNums));
    }, [tasksTotalNums]);
    return (
        <>
        </>
    );
}

export default CustomClient;