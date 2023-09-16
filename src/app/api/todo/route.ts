import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";


export async function GET( request: NextRequest){
const client = await db.connect();
    return NextResponse.json({234: "sad"})
}
//comment added