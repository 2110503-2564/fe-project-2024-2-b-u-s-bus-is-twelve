import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { VenueJson } from "../../../../interface";

export default async function Venue() {

    const venues:VenueJson = await getVenues()

    return(
        <main className="text-center p-5">
            
            <h1 className="text-xl font-medium">Select your venue</h1>
            <Suspense fallback={ <p>Loading...<LinearProgress/></p> }>
                <VenueCatalog venuesJson={venues}/>
            </Suspense>

            {/* <CardPanel /> */}
        </main>
    );
}