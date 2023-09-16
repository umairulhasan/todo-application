import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const client = await db.connect();


    try {
        await client.sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`
        return NextResponse.json({ message: "you call this api" })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Some thing went wrong" })

    }
}




export async function POST(request:NextRequest){

    const client = await db.connect();
    const req = await request.json();
try{
if(req.task){
await client.sql`INSERT INTO Todos(Task) VALUES(${req.task})`
return NextResponse.json({message: "Data added successfully"})

}else{
    throw new Error("TASK REQUIRED")
}
}
catch(error){
    console.log(error);
    return NextResponse.json({ message: (error as {message : string}).message})
}
}