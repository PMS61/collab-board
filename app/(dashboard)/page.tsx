"use client";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/board-list";

interface DashboardProps {
    searchParams: {
search?: string;
favorites?: string;

    };
};

const DashBoard = ({searchParams,}: DashboardProps) => {
    const {organization} = useOrganization();
    return (
    <div className=" flex -1 h-[calc(100%-80px)] justify-center p-6">
     
        {!organization ? (<EmptyOrg/>) : (
       <BoardList 
       orgId={organization.id}
       query={searchParams}/>
        )}
    
    
    </div>
    );
    };
    export default DashBoard;