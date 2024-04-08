import React from "react"

export default function Footer() {
  return (
    <div className="bottom-0 mx-auto flex h-20 w-[90vw] grid-cols-1 justify-center">
      <p className="my-auto h-auto w-full justify-center text-center text-xs">
        Copyright © 2024 - Buidl.co.za |{" "}
        <a href="/termsandconditions">Terms & Conditions</a> | All rights
        reserved
      </p>
    </div>
  )
}
