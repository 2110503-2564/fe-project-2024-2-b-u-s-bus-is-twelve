'use client'
import { useReducer, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import { VenueItem, VenueJson } from "../../../interface"

export default function CardPanel() {

    const cardReducer = (venueList:Map<string, number>, action:{type:string, venueName:string, rating?:number}) => {
        const newVenueList = new Map(venueList);
        switch(action.type) {
            case 'update' : {
                newVenueList.set(action.venueName, action.rating??0);
                return newVenueList;
            }
            case 'remove' : {
                newVenueList.delete(action.venueName);
                return newVenueList
            }
            default : return venueList
        }
    }

    const [ venueList, dispatchVenue ] = useReducer(cardReducer, new Map<string, number>([
        ['The Bloom Pavilion', 0],
        ['Spark Space', 0],
        ['The Grand Table', 0]
    ]))

    const [venueResponse, setVenueResponse] = useState<VenueJson|null>(null)

    /**
     * Mock Data for Demonstration Only
     */

    const mockVenueRepo = [
        {vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg"},
        {vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg"},
        {vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg"},
    ]

    return(
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    venueResponse?.data?.map((venueItem:VenueItem)=>(
                        <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                            <Card venueName={venueItem.name} imgSrc={venueItem.picture} onRating={(venue, rating) => dispatchVenue({ type: 'update', venueName: venue, rating})}/>
                        </Link>
                    ))
                }
            </div>

            <div className="w-full font-medium, text-xl">
                Venue List with Ratings: { venueList.size }
            </div>

            <div className="text-lg">
                { Array.from(venueList).map( ([venueName, rating]) => 
                <div key={venueName} onClick={ ()=>dispatchVenue({type:'remove', venueName:venueName})} data-testid={venueName}>
                    {venueName} - {rating}
                </div>)}
            </div>
        </div>
    );
}