import { NextResponse } from "next/server";
import { ApiResponse , ApiError } from "@/shared/types/API-Response";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

 const todos = [
      {
        id: 1,
        title: "Learn Next.js",
        completed: true,
      },
      {
        id: 2,
        title: "Build a Todo App",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to Vercel",
        completed: false,
      },
    ];
export async function GET(): Promise<NextResponse<ApiResponse<Todo[]>>> {
  try{
    console.log("Fetching posts...");
   

    return NextResponse.json({
      data: todos,
    });
  }catch (error) {
    // my own throwing error    
    if(error instanceof ApiError){
      return NextResponse.json({
        error: {
          message: error.message,
          code: error.code,
        }
      });
    // error coming from external requests & i should map it to my custom error format 

    // unknown error 
    }else if (error instanceof Error) {
      return NextResponse.json({
        error: {
          message: error.message,
          code: "INTERNAL_SERVER_ERROR",
        }
      });
    }else{
      return NextResponse.json({
        error: {
          message: "something went wrong",
          code: "UNKNOWN_ERROR",
        }
      });
    }
  }
}

export async function POST(req: Request): Promise<NextResponse<ApiResponse<Todo>>> {
  try {
    console.log("Adding post...");
    const body = await req.json();
    
    const newTodo: Todo = {
      id: todos.length + 1,
      title: body.title || "New Todo",
      completed: body.completed || false,
    };
    
    todos.push(newTodo);

    return NextResponse.json({
      data: newTodo,
    });
  } catch (error) {
    if(error instanceof ApiError){
      return NextResponse.json({
        error: {
          message: error.message,
          code: error.code,
        }
      });
    }else if (error instanceof Error) {
      return NextResponse.json({
        error: {
          message: error.message,
          code: "INTERNAL_SERVER_ERROR",
        }
      });
    }else{
      return NextResponse.json({
        error: {
          message: "something went wrong",
          code: "UNKNOWN_ERROR",
        }
      });
    }
  }
}
