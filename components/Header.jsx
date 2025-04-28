import React from 'react'
import { SignedIn,SignedOut,SignInButton,SignUpButton,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { checkUser } from '@/lib/checkUser'




const Header = async () => {
  await checkUser();
  return (
    <header className='fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b supports-[backdrop-filter]:bg-background/60'>

        <nav className='containeer mx-auto flex items-center justify-between md:px-4 px-1 py-2 h-16'>
           <Link href="/" className='logo-design'>Ankit's Elevate.ai</Link>
           <div  className='flex items-center space-x-2 md:space-x-4'>
            <SignedIn>
                <Link href={'/dashboard'}>
                <Button variant={'outline'}>
                    <LayoutDashboard className='h-4 w-4'/>
                   <span className='font-semibold md:block hidden'> Industry Insights</span>
                </Button>
                </Link>

                <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>
        <StarsIcon className='h-4 w-4'/>
        <span className='font-semibold md:block hidden'> Growth Tools</span>
        <ChevronDown className='h-4 w-4'/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>

  <DropdownMenuItem>
    <Link className='flex gap-2 items-center' href={'/interview'}>
        <GraduationCap className='h-4 w-4'/>
        <span className='font-semibold'>Interview Prep </span>

        </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link className='flex gap-2 items-center' href={'/ai-cover-letter'}>
        <PenBox className='h-4 w-4'/>
        <span className='font-semibold '>Cover Letter </span>

        </Link>
    </DropdownMenuItem>
 

    <DropdownMenuItem>
    <Link className='flex gap-2 items-center' href={'/resume'}>
        <FileText className='h-4 w-4'/>
        <span className='font-semibold'>Build Resume </span>

        </Link>
    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button variant={'outline'}>
                    Sign In
                    </Button>
              </SignInButton>
              <SignUpButton>
                <Button >
                    Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
            <UserButton
             appearance={
                {
                    avatarBox : "w-10 h-10",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier:"text-sm font-semibold",
                }
             } 
             afterSignOutUrl='/'
             />
            </SignedIn>

           </div>
        </nav>

         
    </header>
  )
}

export default Header