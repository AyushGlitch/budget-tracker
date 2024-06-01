import Logo from "@/components/Logo";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col gap-5">
            <Logo />
            <SignIn />
        </div>
    );
}