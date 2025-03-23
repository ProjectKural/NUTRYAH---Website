import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutryah | Create Your Account",
  description: "Join Nutryah today! Sign up to access personalized diet plans, expert consultations, and wellness insights.",
};


export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
