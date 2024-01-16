import { NextRequest, NextResponse } from "next/server";
import { baseUrl } from "@/baseApi/apiUrl";

export async function GET() {
    try {
        const response = await fetch(`${baseUrl}/tasks/`, {
            headers: {
                "content-type": "application/json",
            },
            cache: "no-cache",
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        // console.log("err", err);
        NextResponse.json({ err, massage: "failed to get tasks data" });
    }
}

export async function POST(request: NextRequest) {
    const dataSend = await request.json();
    try {
        const res = await fetch(`${baseUrl}/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataSend),
        });
        const data = await res.json();
        return Response.json(data);
    } catch (err) {
        // console.log("err", err);
        NextResponse.json({ err, massage: "failed to create task" });
    }
}

// when use real database I will connect with it with this end point