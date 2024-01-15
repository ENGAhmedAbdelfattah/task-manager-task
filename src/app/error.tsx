'use client' // Error components must be Client Components
import { useEffect } from 'react'

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ error, reset }: Props) {

    useEffect(() => {
        console.error(error);
        console.log("Server Component ===> error.digest:", error.digest)
        console.log("Client Components ===> error.message:", error.message)
        // () =>reset() => rerender
    }, [error])

    // "هناك عطل في هذه الصفحة ونعمل حاليا علي إصلاحه"
    return (
        <main></main>
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