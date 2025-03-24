import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import Hotel from "@/db/models/Hotel"
import { dbConnect } from "@/db/dbConnnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function DashboardPage() {

    const addHotel = async(addHotelForm: FormData) => {
        "use server"
        console.log("Adding new hotel...");
        const name = addHotelForm.get("name")
        const location = addHotelForm.get("location")
        const price = addHotelForm.get("price")
        const image = addHotelForm.get("image")
        const description = addHotelForm.get("description")

        console.log("Hotel Data:", { name, location, price, image, description });

        try {
            await dbConnect();

            const hotel = await Hotel.create({
                "name": name,
                "location": location,
                "price": price,
                "image": image,
                "description": description,
            })

            console.log("Hotel added successfully:", hotel);
        } catch(error) {
            console.log(error)
        }
        revalidateTag('hotels')
        redirect('/hotel')
    }

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return(
        <main className="bg-slate-100">
            <div className="text-2xl"> {profile.data.name} </div>
            <table className="table-auto border-seperate border-spacing-2">
                <tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>

            {
                (profile.data.role=="admin")?
                <form action={addHotel}>
                    <div className="text-xl text-blue-700">
                        Create Hotel Model
                    </div>

                    <div className="flex items-center w-1/2 my-2">
                        <label className='w-auto block text-gray-700 pr-4'>
                            Name
                        </label>

                        <input type='text' required id='name' name="name" placeholder="Hotel Model" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>

                    <div className="flex items-center w-1/2 my-2">
                        <label className='w-auto block text-gray-700 pr-4'>
                            Location
                        </label>
                        
                        <input type='text' required id='location' name="location" placeholder="Hotel Location" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>

                    <div className="flex items-center w-1/2 my-2">
                        <label className='w-auto block text-gray-700 pr-4' htmlFor="price">
                            Price
                        </label>
                        
                        <input type='number' required id='price' name="price" placeholder="Hotel price" min={0} className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>

                    <div className="flex items-center w-1/2 my-2">
                        <label className='w-auto block text-gray-700 pr-4' htmlFor="image">
                            Picture
                        </label>
                        
                        <input type='text' required id='image' name="image" placeholder="URL" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>                

                    <div className="flex items-center w-1/2 my-2">
                        <label className='w-auto block text-gray-700 pr-4'>
                            Description
                        </label>
                        
                        <input type='text' required id='desc' name="desc" placeholder="Hotel Description" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>

                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Hotel</button>

                </form>
                : null
            }

        </main>
    )
}