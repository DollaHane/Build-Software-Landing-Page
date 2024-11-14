import React from "react"

export default function Footer() {
  return (
    <div className="flex bottom-0 w-[90vw] mt-40 mb-10 lg:mt-0 mx-auto h-20 grid-cols-1 px-12 justify-center z-50">
      <p className="my-auto h-auto w-full justify-center text-center text-xs">
        Copyright © 2024 - buildsoftware.co.za |{" "}
        <a href="/termsandconditions">Terms & Conditions</a> | All rights
        reserved
      </p>
    </div>
  )
}
