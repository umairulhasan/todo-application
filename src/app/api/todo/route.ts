import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const client = await db.connect();


    try {
        //first query if first is already run then the skip this and go to next due to await 
        await client.sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`
        // secound query for get the data from todos table
        const res = await client.sql`SELECT * FROM Todos`

        // check response 

        console.log(res)
         // Filter the  or find use find method () or if u want loop

         console.log(res.rows.find(items => items.id === 1))
        return NextResponse.json({ message: res })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Some thing went wrong" })

    }
}

export async function POST(request: NextRequest) {

    const client = await db.connect();
    const req = await request.json();
    try {
        if (req.task) {
            await client.sql`INSERT INTO Todos(Task) VALUES(${req.task})`
            return NextResponse.json({ message: "Data added successfully" })

        } else {
            throw new Error("TASK REQUIRED")
        }
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: (error as { message: string }).message })
    }
}