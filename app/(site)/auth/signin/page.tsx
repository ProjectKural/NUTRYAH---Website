import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutryah | Login to Your Account",
  description:
    "Access your personalized diet plans, consultations, and health insights. Log in to your Nutryah account now.",
  icons: "/images/logo/logo-Nutryah.png",
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
