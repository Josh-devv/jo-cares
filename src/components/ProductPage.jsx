import React from "react";
import { useRouter } from 'next/router';

export default function ProductPage(){
    const router = useRouter();
    const { id } = router.query;; //taking the id from the routes using useParams which passed thru the routes

    return(
        <>
        <div>
            <div>
                {id}
            </div>
            <div></div>
        </div>
        </>
    )
}