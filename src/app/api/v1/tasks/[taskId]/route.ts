import { baseUrl } from "@/baseApi/apiUrl";
import { NextPageContext } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
    try {
        const response = await fetch(`${baseUrl}/todos/${params.taskId}`, {
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

export async function POST(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
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

export async function PUT(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
    try {
        const response = await fetch(`${baseUrl}/todos/${params.taskId}`, {
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

export async function DELETE(request: NextRequest, context: any) {
    const { params } = context;
    console.log("params", params);
    try {
        const response = await fetch(`${baseUrl}/todos/${params.taskId}`, {
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
