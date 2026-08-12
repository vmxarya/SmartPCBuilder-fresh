import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request){
 try{
  const body=await request.json();
  const supabase=getSupabase();
  const {data,error}=await supabase.functions.invoke("recommend-build-v2",{body});
  if(error) return NextResponse.json({error:error.message},{status:502});
  return NextResponse.json(data);
 }catch(error){ return NextResponse.json({error:error instanceof Error?error.message:"Request failed"},{status:500}); }
}
