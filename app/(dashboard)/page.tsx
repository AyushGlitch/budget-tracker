import { RedirectToSignIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

function Page() {

  return (
    <div>
      Page
      
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
    </div>
  )
}

export default Page