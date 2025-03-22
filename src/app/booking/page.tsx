import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 space-x-2 py-3">
            <div className="text-xl font-medium">Venue Booking</div>

            <div className="w-fit space-y-2">
                <DateReserve/>
            </div>

            <button name="Book Venue" className="block rounded-md bg-sky-500 hover:bg-indigo-500 px-3 py-2 text-white shadow-sm">Book Venue</button>

            <div className="text-2xl"> {profile.data.name} </div>
            <table className="table-auto border-seperate border-spacing-2">
                <tbody>
                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
        </main>
    );
}