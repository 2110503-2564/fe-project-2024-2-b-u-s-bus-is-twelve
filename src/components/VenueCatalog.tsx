import Card from "./Card";
import Link from "next/link";
import { VenueItem, VenueJson } from "../../interface";

export default async function VenueCatalog({venuesJson} : {venuesJson : VenueJson}) {

    const venuesJsonReady = await venuesJson

    return (
        <>
        Explore {venuesJsonReady.count} models in our catalog

        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>

            { venuesJsonReady.data.map((venueItem: VenueItem) => (
                <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/4">
                    <Card venueName={venueItem.name} imgSrc={venueItem.picture} />
                </Link>
            )) 
            }

        </div>
        </>
    );
}