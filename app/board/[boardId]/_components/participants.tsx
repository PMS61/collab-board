"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "./user-avatar";
import { useOthers,useSelf } from "@/liveblocks.config";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2; //excluding yourself

export const Participants = () => {
    const users = useOthers();
    const currentUser= useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_USERS;
    return(
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md">
        {users.slice(0,MAX_SHOWN_USERS)
        .map(({connectionId,info})=>{
            return (
                <UserAvatar borderColor={connectionIdToColor(connectionId)} key={connectionId} src={info?.picture} name={info?.name} fallback={info?.name?.[0] || "T"}/>
            )

        })}
        {currentUser && <UserAvatar borderColor={connectionIdToColor(currentUser.connectionId)} src={currentUser.info?.picture} name={`${currentUser.info?.name} (You)`} fallback={currentUser.info?.name?.[0]}/>}
        {hasMoreUsers && (<UserAvatar name={`${users.length - MAX_SHOWN_USERS} more`} fallback={`+${users.length - MAX_SHOWN_USERS}`}/>)}
    </div>
    
    );
}

export const ParticipantsSkeleton = ()=>{
    return(
        <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md w-[100px]">
            <Skeleton className="h-full w-full bg-muted-400" />
        </div>
    )
}