import {Message as MessageType} from "ai";
import {Bot , User} from "lucide-react";
import {Card, CardHeader } from "./ui/card";
export default function Message({message}:{message:MessageType}){
    const {role,content}=message;
    if (role==='assistant'){
        return (
        <div className="flex flex-col gap-3 p-6 whitespace-pre-wrap" >

            <div className="flex items-center gap-2 drop-shadow-lg">
                <Bot />
                Assistant:
            </div>
            {content}
        </div>) 

    }
    return (
        <Card className="whitespace-pre-wrap shadow-md mx-3" >
            <CardHeader>
                <div className="flex ">
                    <User size={36}/>
                    {content}
                </div>
            </CardHeader>
        </Card>
    );

}