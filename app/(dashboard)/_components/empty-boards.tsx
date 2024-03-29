"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useRouter } from "next/navigation";

export const Emptyboard = () => {
    const router = useRouter();
const {organization} = useOrganization();
const {mutate,pending} = useApiMutation(api.board.create);

const onClick = ()=>{
    if(!organization) return;

    mutate({orgId:organization.id,title:"New Board"})
    .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
    })
    .catch(() => toast.error("Failed to create board"));

    
    };
    return(
        <div className="flex flex-col justify-center items-center">
            <Image
            src="/note.svg"
            height={140}
            width={140}
            alt="Empty"/>
            <h2 className="text-2xl font-semibold mt-6">Create your first Board</h2>
            <p className="text-muted-foreground textg-sm mt-2"> Start by creating a board for your Organization</p>
            <div className="p-4"><Button disabled={pending} onClick={onClick}>Create board</Button></div>
        </div>
    )}
    