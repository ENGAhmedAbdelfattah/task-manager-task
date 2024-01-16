'use client' // Error components must be Client Components
import { useEffect } from 'react'

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ error, reset }: Props) {

    useEffect(() => {
        // console.error(error);
        // console.log("Server Component ===> error.digest:", error.digest)
        // console.log("Client Components ===> error.message:", error.message)
    }, [error])

    return (
        <main>
            <p className="text-center">There error in this page and we work to fix it</p>
        </main>
    )
}

{/* 
<div>
<h2>Something went wrong!</h2>
<p>{error.digest}</p>
<p>{error.message}</p>
<button
    onClick={
        // Attempt to recover by trying to re-render the segment
        () => reset()
    }
>
    Try again (Rerender)
</button>
</div> 
*/}