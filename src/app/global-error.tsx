'use client'
import { useEffect } from "react";

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}
function GlobalError({ error, reset }: Props) {
    useEffect(() => {
        // console.error(error);
        // console.log("Server Component ===> error.digest:", error.digest)
        // console.log("Client Components ===> error.message:", error.message)
    }, [error])

    return (
        <html>
            <body>
                <main><p className="text-center">There error in our site and we work to fix it</p></main>
            </body>
        </html>
    )
}

export default GlobalError;

