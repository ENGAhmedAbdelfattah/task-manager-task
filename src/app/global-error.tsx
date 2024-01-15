'use client'
import { useEffect } from "react";
// import TmPreload from "@/components/UI/common/tmPreLoad/TmPreload";

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}
function GlobalError({ error, reset }: Props) {
    useEffect(() => {
        console.error(error);
        console.log("Server Component ===> error.digest:", error.digest)
        console.log("Client Components ===> error.message:", error.message)
        // error in layout
        // () =>reset() => rerender
    }, [error])

    // "هناك عطل في الموقع ونعمل حاليا علي إصلاحه"
    return (
        <html>
            <body>
                <main></main>
            </body>
        </html>
    )
}

export default GlobalError;


{/*
 <h2>Something went wrong!</h2>
<button onClick={() => reset()}>Try again</button>
 */}
