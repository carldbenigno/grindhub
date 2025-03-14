import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SignOutButton from "./components/SignOutButton";

export default async function Home() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }

    return (
        <section>
            <h1>Welcome to the Landing Page, {data.user.email}!</h1>
            <SignOutButton />
        </section>
    );
}
