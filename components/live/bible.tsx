'use client'

import { useState } from 'react'

export function Bible() {
  const [bible, setBible] = useState('')

  return (
    <div className="p-1 h-full w-full flex flex-col ">
        <div className="flex h-full p-2 backdrop-blur-sm">
        <iframe src="https://www.biblegateway.com/passage/?search=Genesis%201&version=NIV" width="100%"  height="100%" title="Bible"></iframe>
        </div>

    </div>
  )
}
