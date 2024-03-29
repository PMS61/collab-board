"use client";

import { EmptySearch } from "./empty-search";
import { Emptyfav } from "./empty-favorites";
import { Emptyboard } from "./empty-boards";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";


interface BoardListProps{
orgId: string;
query:{
    search?: string;
favorites?: string;
};
};

export const BoardList = ({orgId,query}:BoardListProps) => {
    const data = useQuery(api.boards.get, {orgId,...query,
     });
if (data === undefined) {
    return (<div>
        <h2 className="text-3xl">
            {query.favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
            <NewBoardButton orgId={orgId} disabled/>
            <BoardCard.Skeleton/>
            <BoardCard.Skeleton/>
            <BoardCard.Skeleton/>
            <BoardCard.Skeleton/>
            <BoardCard.Skeleton/>
            
            </div>
            </div>
        )
        }
    if(!data?.length && query.search){
        return (
            <div>
           <EmptySearch/>
           </div>
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
            <h2 className="text-3xl">
                {query.favorites ? "Favorite Boards" : "Team Boards"}
            </h2>
            <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId}/>
                {data?.map((board) => {
                 if ('title' in board && 'imageUrl' in board && 'authorId' in board && 'authorName' in board) {
                     return (
                       <BoardCard
                         key={board._id}
                         id={board._id}
                         title={board.title}
                         imageUrl={board.imageUrl}
                         authorId={board.authorId}
                         authorName={board.authorName}
                         createdAt={board._creationTime}
                         orgId={board.orgId}
                         isFavorite={board.isFavorite}
                       />
                     );
                 }
                 return null;
                })}

            </div>
        </div>
    )
};

