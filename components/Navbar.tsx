"use client"

import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { ThemeSwitcherButton } from './ThemeSwitcherButton'

function Navbar() {
    return (
        <>
            <DesktopNavbar />
        </>
    )
}


const items= [
    {label: "Dashboard", link: "/"},
    {label: "Transactions", link: "/transactions"},
    {label: "Manage", link: "/manage"},
]


function DesktopNavbar() {
    return (
        <div className='hidden border-separate border-b bg-background md:block'>
            <nav className='flex items-center justify-between px-8'>
                <div className='flex items-center gap-x-4 py-3'>
                    <Logo />

                    <div className='flex h-full'>
                        {
                            items.map( item => (
                                <NavbarItem key= {item.label}
                                            link= {item.link}
                                            label= {item.label} 
                                />
                            ) )
                        }
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <ThemeSwitcherButton />
                    <UserButton afterSignOutUrl='/sign-in' />
                </div>
            </nav>
        </div>
    )
}


function NavbarItem( {link, label} : 
    {   link: string
        label: string
    } ) {

        const pathname= usePathname()
        const isActive = pathname === link

        return (
            <div>
                <Button variant={'ghost'} asChild>
                    <Link href={link} className={cn(isActive && buttonVariants({variant: "secondary"}))}> {label} </Link>
                </Button>
            </div>
        )
}

export default Navbar