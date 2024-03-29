
import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { Participants, ParticipantsSkeleton } from "./participants";
import {  ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-auto flex items-center justify-center ">
            <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
<InfoSkeleton />
<ParticipantsSkeleton />
<ToolbarSkeleton/>
        </main>
    )
}