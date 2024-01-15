import { NextResponse } from "next/server";
import { baseUrl } from "@/baseApi/apiUrl";

export async function GET() {
    try {
        const response = await fetch(`${baseUrl}/todos/`, {
            headers: {
                "content-type": "application/json",
            },
            cache: "no-cache",
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log("err", err);
        NextResponse.json({ err, massage: "failed to get tasks data" });
    }
}
