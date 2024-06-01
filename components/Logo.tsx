import { PiggyBank} from 'lucide-react'
import React from 'react'

function Logo() {
    return (
        <a href='/' className='flex items-center justify-center gap-2 w-full'>
            <PiggyBank className='stroke h-11 w-11 stroke-amber-500 ' />
            <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold  text-transparent'>
                BudgetTracker
            </p>
        </a>
    )
}

export default Logo