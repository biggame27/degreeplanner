import React from 'react'
import Link from 'next/link'
const Planner = () => {
  return (
    <div>
      Uhh...this is awkward...
      <Link href="/">
            <button className="mt-6 px-6 py-3 bg-maroon text-white rounded-lg font-medium hover:bg-maroon-dark">
              Hit this to get the home page, and back where you belong.
            </button>
          </Link>
    </div>
  )
}

export default Planner;