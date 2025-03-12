"use client";

import { createClient } from "@/utils/supabase/client";

export default function SignOutButton() {
    const handleLogout = async () => {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Logout failed:", error.message);
        } else {
            window.location.href = "/login"; // Redirect to login after logout
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
        >
            Sign Out
        </button>
    );
}
