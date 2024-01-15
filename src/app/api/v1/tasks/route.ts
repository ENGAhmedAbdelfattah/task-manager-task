import { NextRequest, NextResponse } from "next/server";
import { baseUrl } from "@/baseApi/apiUrl";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("taskId");
    console.log("id222222", id);
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

export async function POST(request: NextRequest) {
    try {
        const res = await fetch(`${baseUrl}/todos/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request.body),
        });
        const data = await res.json();
        return Response.json(data);
    } catch (err) {
        console.log("err", err);
        NextResponse.json({ err, massage: "failed to create task" });
    }
}

export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("taskId");
    try {
        const response = await fetch(`${baseUrl}/todos/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(request.body),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log("err", err);
        NextResponse.json({ err, massage: "failed to update tasks" });
    }
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("taskId");
    try {
        const response = await fetch(`${baseUrl}/todos/${id}`, {
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
