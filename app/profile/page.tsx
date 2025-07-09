"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ProfilePage from "@/components/main_sections/ProfilePage";
import { userLogout, userProfile } from "@/lib/useraction";
import { useAuth } from "@/context/AuthProvider";

type ProfileType = {
  username: string;
  email: string;
};

const Profile = () => {
  const pathname=usePathname()
  const router = useRouter();
  const { token, logout } =useAuth();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    userProfile(token)
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error("Failed to fetch profile:", err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    if (pathname !== "/profile") return; // only redirect if you're on /profile
    if (!loading && !token) {
      router.push("/signup");
    }
  }, [token, loading, pathname]);

  const logoutFunction = async () => {
    if (!token) return;
    await userLogout(token);
    logout(); 
    setTimeout(() => {
      router.replace("/");
    }, 50);
  };

  if (loading) return <p>Loading profile...</p>;
  if (!token) return null;

  return <ProfilePage logoutFunction={logoutFunction} profile={profile} />;
};

export default Profile;
