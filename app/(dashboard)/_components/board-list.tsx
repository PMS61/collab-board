"use client";

import { EmptySearch } from "./empty-search";
import { Emptyfav } from "./empty-favorites";
import { Emptyboard } from "./empty-boards";

interface BoardListProps{
orgId: string;
query:{
    search?: string;
favorites?: string;
};
};

export const BoardList = ({orgId,query}:BoardListProps) => {
    const data = [];//api call
    if(!data?.length && query.search){
        return (
           <EmptySearch/>
        );
    }
    if(!data?.length && query.favorites){
        return (
            <div>
                <Emptyfav/>
            </div>
        );
    }
    if(!data?.length ){
        return (
            <div>
                <Emptyboard/>
            </div>
        );
    }

    return(
        <div>
            {JSON.stringify(query)}
        </div>
    )
};

