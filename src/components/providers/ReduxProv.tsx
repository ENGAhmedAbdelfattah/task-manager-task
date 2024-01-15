"use client";
import { Provider } from "react-redux";
import store from "@/redux/app/store";

type Props = {
    children: React.ReactNode;
};

function ReduxProv({ children }: Props) {
    return (
        <Provider store={store}>{children}</Provider>
    );
}

export default ReduxProv;
