import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { login, signup } from "./actions";

export default async function LoginPage() {
    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();
    if (data?.user) {
        redirect("/private");
    }

    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
    );
}
