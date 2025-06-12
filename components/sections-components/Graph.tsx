import React from "react"

import { ProgressiveBlur } from "../ui/progressive-blur"

export default function Graph() {
  return (
    <div className="relative flex h-min w-full max-w-[500px]">
      <div className="w-2/4 h-[400px] absolute flex bg-gradient-to-r from-background via-background/50 to-background/0 top-0 -left-0 z-20" />
      <div className="w-2/4 h-[400px] absolute flex bg-gradient-to-l from-background via-background/50 to-background/0 top-0 -right-0 z-20" />
      <div className="w-full h-[150px] absolute flex bg-gradient-to-t from-background via-background/50 to-background/0 bottom-0 mx-auto z-20" />
      <ProgressiveBlur
        className="pointer-events-none z-20 absolute top-0 -left-5 h-full w-4/12"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none z-20 absolute top-0 -right-5 h-full w-4/12"
        direction="right"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none z-20 absolute -bottom-5 right-0 w-full h-[100px]"
        direction="bottom"
        blurIntensity={1}
      />
      <svg
        id="growth and efficiency"
        className="flex w-full z-10"
        viewBox="0 0 983 545"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_147_2"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="983"
          height="545"
        >
          <rect width="982.466" height="545" fill="#FEFEFE" />
        </mask>
        <g mask="url(#mask0_147_2)">
          <path
            d="M112.422 394.958C53.9537 388.612 0 294.757 0 294.757V546.483H982.466V212.884C982.466 212.884 921.859 232.261 879.821 212.884C842.728 195.788 830.173 151.214 791.839 137.122C707.612 106.16 750.012 351.705 663.531 327.75C624.723 317 663.531 260.541 585.325 260.541C547.695 260.541 534.738 208.681 497.343 212.884C432.43 220.181 483.901 350.716 353.15 347.301C302.732 345.985 299.594 279.957 249.283 276.427C177.538 271.393 183.923 402.719 112.422 394.958Z"
            fill="url(#paint0_linear_147_2)"
          />
          <foreignObject x="-50" y="84.417" width="1082.47" height="512.066">
            <div
              style={{
                backdropFilter: "blur(25px)",
                clipPath: "url(#bgblur_0_147_2_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="50"
            d="M112.422 394.958C53.9537 388.612 0 294.757 0 294.757V546.483H982.466V212.884C982.466 212.884 921.859 232.261 879.821 212.884C842.728 195.788 830.173 151.214 791.839 137.122C707.612 106.16 750.012 351.705 663.531 327.75C624.723 317 663.531 260.541 585.325 260.541C547.695 260.541 534.738 208.681 497.343 212.884C432.43 220.181 483.901 350.716 353.15 347.301C302.732 345.985 299.594 279.957 249.283 276.427C177.538 271.393 183.923 402.719 112.422 394.958Z"
            fill="white"
            fillOpacity="0.01"
          />
          <g filter="url(#filter1_d_147_2)">
            <path
              d="M-7.33154 284.72C-7.33154 284.72 53.954 388.612 112.422 394.958C183.923 402.719 177.538 271.393 249.283 276.427C299.595 279.957 302.732 345.985 353.151 347.301C483.902 350.716 432.43 220.181 497.343 212.884C534.738 208.681 547.695 260.541 585.325 260.541C663.532 260.541 624.723 317 663.532 327.75C750.012 351.705 707.613 106.16 791.839 137.122C830.173 151.214 842.729 195.788 879.821 212.884C921.86 232.261 988.577 210.179 988.577 210.179"
              stroke="#8E50EC"
              strokeWidth="4"
            />
          </g>
        </g>
        <rect width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="220" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="264" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="44" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="176" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="308" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="352" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="396" y="308" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="88" y="352" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="132" y="352" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="481" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="525" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="569" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="613" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="745" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="789" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="833" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="481" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="525" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="569" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="613" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="745" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="789" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="833" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="481" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="525" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="569" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="613" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="745" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="789" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="833" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="481" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="525" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="569" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="613" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="745" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="833" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="481" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="525" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="569" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="613" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="569" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="613" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" y="220" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="437" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="657" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="701" y="264" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="878" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="922" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="966" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="878" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="922" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="966" y="44" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="878" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="922" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="966" y="88" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="878" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="922" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="966" y="132" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="878" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="922" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <rect x="966" y="176" width="6" height="6" rx="3" fill="#F3D7FF" />
        <line
          x1="405"
          y1="91"
          x2="560"
          y2="91"
          stroke="url(#paint1_linear_147_2)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="484"
          y1="14"
          x2="484"
          y2="169"
          stroke="url(#paint2_linear_147_2)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <g filter="url(#filter2_d_147_2)">
          <path
            d="M514.558 120.562L529.649 135.655Z"
            className="fill-primary"
          />
          <path
            d="M493.623 98.0918C493.409 98.0015 493.173 97.9771 492.945 98.0218C492.717 98.0664 492.507 98.1781 492.342 98.3425C492.178 98.507 492.066 98.7167 492.022 98.9449C491.977 99.1731 492.001 99.4094 492.092 99.6237L507.385 137.271C507.479 137.499 507.642 137.692 507.851 137.822C508.06 137.952 508.305 138.014 508.551 137.997C508.797 137.981 509.032 137.889 509.222 137.732C509.412 137.576 509.549 137.364 509.613 137.126L513.304 122.811C513.501 121.976 513.922 121.21 514.522 120.596C515.123 119.983 515.88 119.545 516.711 119.331L531.119 115.616C531.358 115.553 531.572 115.418 531.73 115.227C531.887 115.037 531.981 114.802 531.997 114.555C532.014 114.308 531.952 114.063 531.821 113.853C531.69 113.643 531.496 113.48 531.267 113.387L493.623 98.0918Z"
            className="fill-primary"
          />
          <path
            d="M514.558 120.562L529.649 135.655M493.623 98.0918C493.409 98.0015 493.173 97.9771 492.945 98.0218C492.717 98.0664 492.507 98.1781 492.342 98.3425C492.178 98.507 492.066 98.7167 492.022 98.9449C491.977 99.1731 492.001 99.4094 492.092 99.6237L507.385 137.271C507.479 137.499 507.642 137.692 507.851 137.822C508.06 137.952 508.305 138.014 508.551 137.997C508.797 137.981 509.032 137.889 509.222 137.732C509.412 137.576 509.549 137.364 509.613 137.126L513.304 122.811C513.501 121.976 513.922 121.21 514.522 120.596C515.123 119.983 515.88 119.545 516.711 119.331L531.119 115.616C531.358 115.553 531.572 115.418 531.73 115.227C531.887 115.037 531.981 114.802 531.997 114.555C532.014 114.308 531.952 114.063 531.821 113.853C531.69 113.643 531.496 113.48 531.267 113.387L493.623 98.0918Z"
            className="stroke-primary"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g filter="url(#filter3_d_147_2)">
          <circle cx="484" cy="218" r="8" fill="#8E50EC" />
          <circle cx="484" cy="218" r="7" stroke="#FEFEFE" strokeWidth="2" />
        </g>
        <g filter="url(#filter4_d_147_2)">
          <rect
            x="517"
            y="192"
            width="151"
            height="51"
            rx="10"
            fill="#FEFEFE"
          />
          <rect
            x="518"
            y="193"
            width="149"
            height="49"
            rx="9"
            stroke="#DBDBDB"
            strokeWidth="2"
          />
        </g>
        <path
          d="M534.208 229.512C532.523 229.512 531.083 229.245 529.888 228.712C528.693 228.157 527.755 227.389 527.072 226.408C526.389 225.427 525.995 224.296 525.888 223.016L529.44 222.792C529.611 223.987 530.112 224.883 530.944 225.48C531.797 226.056 532.885 226.344 534.208 226.344C535.701 226.344 536.875 225.928 537.728 225.096C538.603 224.264 539.04 223.101 539.04 221.608C539.04 220.627 538.837 219.784 538.432 219.08C538.048 218.355 537.493 217.8 536.768 217.416C536.043 217.011 535.179 216.808 534.176 216.808C533.173 216.808 532.277 217.021 531.488 217.448C530.699 217.875 530.133 218.461 529.792 219.208H526.208L527.744 206.28H541.056V209.448H530.816L529.856 217.224L529.312 216.744C529.675 216.104 530.133 215.581 530.688 215.176C531.243 214.749 531.883 214.429 532.608 214.216C533.355 213.981 534.144 213.864 534.976 213.864C536.512 213.864 537.845 214.195 538.976 214.856C540.128 215.517 541.024 216.435 541.664 217.608C542.304 218.781 542.624 220.115 542.624 221.608C542.624 223.165 542.272 224.541 541.568 225.736C540.864 226.931 539.883 227.859 538.624 228.52C537.365 229.181 535.893 229.512 534.208 229.512ZM550.548 229V212.808H545.748V210.024H547.7C548.553 210.024 549.247 209.917 549.78 209.704C550.313 209.469 550.697 209.085 550.932 208.552C551.167 207.997 551.284 207.24 551.284 206.28H554.004V229H550.548ZM558.844 229V224.968H562.972V229H558.844ZM567.942 229C567.942 226.653 568.252 224.339 568.87 222.056C569.51 219.752 570.406 217.544 571.558 215.432C572.732 213.299 574.129 211.304 575.75 209.448H563.046V206.28H579.398V209.224C577.606 211.272 576.113 213.32 574.918 215.368C573.745 217.395 572.87 219.528 572.294 221.768C571.74 223.987 571.462 226.397 571.462 229H567.942ZM589.294 229.512C586.67 229.512 584.644 228.904 583.214 227.688C581.806 226.472 581.049 224.872 580.942 222.888L584.494 222.696C584.622 223.997 585.113 224.936 585.966 225.512C586.841 226.067 587.95 226.344 589.294 226.344C590.19 226.344 591.012 226.227 591.758 225.992C592.526 225.736 593.134 225.331 593.582 224.776C594.052 224.2 594.286 223.453 594.286 222.536C594.286 221.171 593.828 220.168 592.91 219.528C591.993 218.867 590.777 218.536 589.262 218.536H587.374V215.528H589.262C590.478 215.528 591.492 215.283 592.302 214.792C593.113 214.301 593.518 213.448 593.518 212.232C593.518 211.165 593.177 210.355 592.494 209.8C591.812 209.224 590.766 208.936 589.358 208.936C587.993 208.936 586.958 209.203 586.254 209.736C585.55 210.269 585.134 210.995 585.006 211.912L581.454 211.72C581.668 209.928 582.446 208.488 583.79 207.4C585.156 206.312 587.012 205.768 589.358 205.768C590.98 205.768 592.366 206.024 593.518 206.536C594.67 207.027 595.556 207.741 596.174 208.68C596.793 209.619 597.102 210.717 597.102 211.976C597.102 213.363 596.654 214.493 595.758 215.368C594.884 216.243 593.593 216.84 591.886 217.16V216.584C593.742 216.819 595.204 217.48 596.27 218.568C597.337 219.635 597.87 221 597.87 222.664C597.87 224.093 597.508 225.331 596.782 226.376C596.057 227.4 595.054 228.179 593.774 228.712C592.494 229.245 591.001 229.512 589.294 229.512Z"
          fill="#434344"
        />
        <path
          d="M607.584 212.328V204.488H609.536V212.328H607.584ZM604.64 209.384V207.448H612.48V209.384H604.64ZM618.309 213.256C616.901 213.256 615.813 212.936 615.045 212.296C614.288 211.645 613.882 210.771 613.829 209.672L616.309 209.576C616.362 210.141 616.56 210.557 616.901 210.824C617.253 211.08 617.722 211.208 618.309 211.208C618.693 211.208 619.034 211.155 619.333 211.048C619.632 210.931 619.866 210.755 620.037 210.52C620.218 210.285 620.309 209.992 620.309 209.64C620.309 209.096 620.122 208.691 619.749 208.424C619.376 208.147 618.869 208.008 618.229 208.008H617.221V206.2H618.229C618.72 206.2 619.125 206.099 619.445 205.896C619.776 205.683 619.941 205.325 619.941 204.824C619.941 204.397 619.808 204.061 619.541 203.816C619.274 203.56 618.853 203.432 618.277 203.432C617.701 203.432 617.269 203.549 616.981 203.784C616.693 204.019 616.517 204.323 616.453 204.696L614.005 204.568C614.112 203.608 614.533 202.84 615.269 202.264C616.016 201.677 617.018 201.384 618.277 201.384C619.173 201.384 619.93 201.512 620.549 201.768C621.168 202.024 621.637 202.392 621.957 202.872C622.277 203.352 622.437 203.917 622.437 204.568C622.437 205.24 622.213 205.795 621.765 206.232C621.328 206.669 620.693 206.968 619.861 207.128V206.856C620.81 206.995 621.541 207.32 622.053 207.832C622.565 208.344 622.821 209.005 622.821 209.816C622.821 210.531 622.634 211.149 622.261 211.672C621.888 212.184 621.365 212.579 620.693 212.856C620.021 213.123 619.226 213.256 618.309 213.256ZM629.131 213.256C628.129 213.256 627.265 213.021 626.539 212.552C625.814 212.072 625.254 211.389 624.859 210.504C624.475 209.619 624.283 208.563 624.283 207.336C624.283 206.109 624.481 205.053 624.875 204.168C625.27 203.272 625.825 202.584 626.539 202.104C627.265 201.624 628.129 201.384 629.131 201.384C630.123 201.384 630.977 201.624 631.691 202.104C632.417 202.584 632.977 203.272 633.371 204.168C633.766 205.053 633.963 206.109 633.963 207.336C633.963 208.552 633.766 209.603 633.371 210.488C632.987 211.373 632.433 212.056 631.707 212.536C630.982 213.016 630.123 213.256 629.131 213.256ZM629.131 211.208C629.878 211.208 630.449 210.883 630.843 210.232C631.249 209.581 631.451 208.616 631.451 207.336C631.451 206.472 631.361 205.752 631.179 205.176C631.009 204.6 630.747 204.168 630.395 203.88C630.054 203.581 629.633 203.432 629.131 203.432C628.619 203.432 628.187 203.581 627.835 203.88C627.494 204.168 627.233 204.6 627.051 205.176C626.881 205.752 626.795 206.472 626.795 207.336C626.795 208.616 626.993 209.581 627.387 210.232C627.793 210.883 628.374 211.208 629.131 211.208ZM634.998 213V210.552H637.606V213H634.998ZM639.116 213C639.116 212.029 639.244 211.187 639.5 210.472C639.766 209.757 640.193 209.117 640.78 208.552C641.377 207.987 642.166 207.448 643.148 206.936C643.67 206.669 644.081 206.435 644.38 206.232C644.689 206.019 644.908 205.805 645.036 205.592C645.164 205.379 645.228 205.128 645.228 204.84C645.228 204.563 645.164 204.323 645.036 204.12C644.918 203.907 644.742 203.741 644.508 203.624C644.273 203.496 643.98 203.432 643.628 203.432C643.052 203.432 642.593 203.603 642.252 203.944C641.921 204.275 641.713 204.76 641.628 205.4L639.132 205.256C639.238 204.051 639.676 203.107 640.444 202.424C641.222 201.731 642.273 201.384 643.596 201.384C644.47 201.384 645.212 201.528 645.82 201.816C646.438 202.104 646.908 202.504 647.227 203.016C647.558 203.528 647.724 204.125 647.724 204.808C647.724 205.405 647.622 205.907 647.42 206.312C647.228 206.717 646.913 207.091 646.476 207.432C646.038 207.773 645.462 208.136 644.748 208.52C643.83 209.011 643.153 209.464 642.716 209.88C642.278 210.285 642.044 210.643 642.012 210.952H647.724V213H639.116ZM651.889 207.144C651.121 207.144 650.486 206.915 649.985 206.456C649.483 205.987 649.233 205.277 649.233 204.328C649.233 203.368 649.483 202.659 649.985 202.2C650.486 201.741 651.121 201.512 651.889 201.512C652.657 201.512 653.286 201.741 653.777 202.2C654.278 202.659 654.529 203.368 654.529 204.328C654.529 205.277 654.278 205.987 653.777 206.456C653.286 206.915 652.657 207.144 651.889 207.144ZM651.889 205.928C652.23 205.928 652.486 205.795 652.657 205.528C652.827 205.261 652.913 204.861 652.913 204.328C652.913 203.795 652.827 203.395 652.657 203.128C652.486 202.861 652.23 202.728 651.889 202.728C651.558 202.728 651.302 202.861 651.121 203.128C650.95 203.395 650.865 203.795 650.865 204.328C650.865 204.861 650.95 205.261 651.121 205.528C651.302 205.795 651.558 205.928 651.889 205.928ZM658.609 213.128C657.841 213.128 657.206 212.899 656.705 212.44C656.203 211.971 655.953 211.261 655.953 210.312C655.953 209.352 656.203 208.643 656.705 208.184C657.206 207.725 657.841 207.496 658.609 207.496C659.377 207.496 660.011 207.725 660.513 208.184C661.014 208.643 661.265 209.352 661.265 210.312C661.265 211.261 661.014 211.971 660.513 212.44C660.011 212.899 659.377 213.128 658.609 213.128ZM658.609 211.912C658.95 211.912 659.206 211.779 659.377 211.512C659.547 211.245 659.633 210.845 659.633 210.312C659.633 209.779 659.547 209.379 659.377 209.112C659.206 208.845 658.95 208.712 658.609 208.712C658.278 208.712 658.022 208.845 657.841 209.112C657.67 209.379 657.585 209.779 657.585 210.312C657.585 210.845 657.67 211.245 657.841 211.512C658.022 211.779 658.278 211.912 658.609 211.912ZM650.737 213L658.289 201.64H659.761L652.209 213H650.737Z"
          fill="#1AC34C"
        />
        <defs>
          <clipPath
            id="bgblur_0_147_2_clip_path"
            transform="translate(50 -84.417)"
          >
            <path d="M112.422 394.958C53.9537 388.612 0 294.757 0 294.757V546.483H982.466V212.884C982.466 212.884 921.859 232.261 879.821 212.884C842.728 195.788 830.173 151.214 791.839 137.122C707.612 106.16 750.012 351.705 663.531 327.75C624.723 317 663.531 260.541 585.325 260.541C547.695 260.541 534.738 208.681 497.343 212.884C432.43 220.181 483.901 350.716 353.15 347.301C302.732 345.985 299.594 279.957 249.283 276.427C177.538 271.393 183.923 402.719 112.422 394.958Z" />
          </clipPath>
          <filter
            id="filter1_d_147_2"
            x="-29.0532"
            y="108.417"
            width="1038.26"
            height="304.873"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_147_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_147_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_147_2"
            x="479"
            y="89"
            width="66"
            height="66"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_147_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_147_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_147_2"
            x="472"
            y="210"
            width="24"
            height="24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_147_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_147_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_147_2"
            x="497"
            y="176"
            width="191"
            height="91"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_147_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_147_2"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_147_2"
            x1="491.233"
            y1="134.417"
            x2="491.233"
            y2="546.483"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C11C63" />
            <stop offset="0.442308" stopColor="#A23ACC" />
            <stop offset="1" stopColor="#7800E4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_147_2"
            x1="405"
            y1="92.5"
            x2="560"
            y2="92.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8E50EC" stopOpacity="0" />
            <stop offset="0.5" stopColor="#8E50EC" />
            <stop offset="1" stopColor="#8E50EC" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_147_2"
            x1="482.5"
            y1="14"
            x2="482.5"
            y2="169"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8E50EC" stopOpacity="0" />
            <stop offset="0.5" stopColor="#8E50EC" />
            <stop offset="1" stopColor="#8E50EC" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
