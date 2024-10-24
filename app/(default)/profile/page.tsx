import Checkout from "@/components/partials/Checkout"
import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Profile = () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = getUserById(userId);
  return (
    <div className=" gap-3 md:p-4 w-full md:max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 py-4 md:py-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Deposit</h3>
            <Checkout buyerId={userId}/>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Withdrawal</h3>
            <Checkout buyerId={userId}/>
          </div>
        </div>
    </div>
  )
}

export default Profile