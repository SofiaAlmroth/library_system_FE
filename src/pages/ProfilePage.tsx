import { auth } from "@services";
import { User } from "@types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  if (!user) return <p>You need to log in to view this page.</p>;

  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <div className="card bg-base-200 shrink-0 w-full max-w-lg shadow-2xl p-12">
        <h1 className="text-5xl font-bold mb-5">Profile</h1>

        <div className="avatar">
          <div className="mask mask-squircle w-24">
            <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
          </div>
        </div>
        <span className="text-lg py-3 mt-6">{user.name}</span>
        <span className="text-lg">{user.email}</span>
        <div className="mt-6">
          <button
            onClick={() => navigate("/books")}
            className=" btn btn-primary text-[#ffffff]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
