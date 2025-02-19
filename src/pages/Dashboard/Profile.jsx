import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const [user, setUser] = useState({
    image: "https://via.placeholder.com/150",
    name: "Mehedi Hasan",
    email: "mehedi@example.com",
    phone: "+880 1234 567 890",
    address: "Dinajpur, Bangladesh",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Phone</label>
            <Input value={user.phone} disabled />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Address</label>
            <Input value={user.address} disabled />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Button variant="outline">Edit</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
