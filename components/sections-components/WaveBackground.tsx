import React from "react"

export default function WaveBackground() {
  return (
    <div className="absolute top-0 left-0 flex w-full items-center justify-center">
      <svg
        fill="none"
        height="484"
        viewBox="0 0 1350 484"
        width="1350"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter
          id="a"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="483.509"
          width="1348.87"
          x=".264221"
          y=".022339"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_51_51"
            stdDeviation="25"
          />
        </filter>
        <g filter="url(#a)" stroke="#000">
          <path
            d="m381.221 231.884h-236.721l242.756 70.241 272.07 53.41 274.659-100.377 315.035 15.585-319.899-72.197-274.888 97.707z"
            fill="#bc34a5"
          />
          <path
            d="m338 174-237.5-73.5 259.5 138.783 275.433 106.008 294.81-106.008 259.757 106.008-250-179.291-304.567 91.5z"
            fill="#8e52ed"
          />
          <path
            d="m432.969 166-234.969 27.747 167.424 15.603 337.879 155.65 264.394-105.872h280.303l-280.303-65.381-264.394 107.58z"
            fill="#a23acc"
          />
          <path
            d="m310.332 383-159.332-27.747 113.53-15.602 225.47-142.651 182.928 92.872h190.072l-190.072 65.381-212.428-94.753z"
            className="fill-bricks"
          />
        </g>
      </svg>
    </div>
  )
}
