"use client";
import ReduxProv from "./ReduxProv";

type Props = {
    children: React.ReactNode;
};

function Providers({ children }: Props) {
    return <ReduxProv>{children}</ReduxProv>;
}

export default Providers;
