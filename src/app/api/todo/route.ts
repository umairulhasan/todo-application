import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";


export async function GET( request: NextRequest){
const client = await db.connect();


try {
    await client.sql `CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`
} catch(err){
console.log(err);
return NextResponse.json({message: "Some thing went wrong"})

}
    return NextResponse.json({234: "sad"})
}
