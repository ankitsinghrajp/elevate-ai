import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
export default function Page() {

  return (
    <>
       <Link href="/onboarding">
       <SignIn />
       </Link>
      
    </>
   
  )
 
}
