import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <section
      id="footer"
      className="flex bottom-0 w-[90vw] mt-40 mb-5 lg:mt-0 mx-auto grid-cols-1 px-12 justify-center z-50"
      role="region"
      aria-labelledby="footer-heading"
    >
      <p className="my-auto w-full justify-center text-center text-xs">
        Copyright © {year} - buildsoftware.co.za |{" "}
        <a href="/termsandconditions">Terms & Conditions</a> | All rights
        reserved
      </p>
    </section>
  )
}
