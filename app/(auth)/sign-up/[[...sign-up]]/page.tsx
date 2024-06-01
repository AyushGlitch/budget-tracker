import Logo from "@/components/Logo";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col gap-5">
            <Logo />
            <SignUp />
        </div>
    );
}