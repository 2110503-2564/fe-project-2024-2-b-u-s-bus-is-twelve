export default async function getVenue(id:string) {
    const response = await fetch(`https://bus-frontend-wine.vercel.app/api/v1/venues/${id}`)

    if(!response.ok) {
        throw new Error("Failed to fetch venue")
    }

    return await response.json()
}