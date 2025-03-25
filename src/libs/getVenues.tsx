export default async function getHotels() {
    await new Promise( (resolve)=>setTimeout(resolve, 300) )

    const response = await fetch("http://localhost:5000/api/v1/hotels", { next: {tags:['hotels']} })
    if(!response.ok) {
        throw new Error("Failed to fetch hotels")
    }

    return await response.json()
}