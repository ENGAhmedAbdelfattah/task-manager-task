import { baseUrl } from "@/baseApi/apiUrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
    try {
        const response = await fetch(`${baseUrl}/tasks/${params.taskId}`, {
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

export async function PUT(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
    const dataSend = await request.json();
    try {
        const response = await fetch(`${baseUrl}/tasks/${params.taskId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(dataSend),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log("err", err);
        NextResponse.json({ err, massage: "failed to update tasks" });
    }
}

export async function DELETE(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
    try {
        const response = await fetch(`${baseUrl}/tasks/${params.taskId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log("err", err);
        NextResponse.json({ err, massage: "failed to get tasks data" });
    }
}
