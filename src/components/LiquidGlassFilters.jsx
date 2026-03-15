// Inline SVG filter definitions for the liquid glass lensing effect.
// Placed once in the DOM — referenced by CSS filter: url(#lg-lens)

export default function LiquidGlassFilters() {
  return (
    <svg
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        {/* Plastic selector buttons — subtle amber warp */}
        <filter
          id="lg-lens"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.055 0.04"
            numOctaves="2"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
            result="warped"
          />
          <feComposite in="warped" in2="SourceGraphic" operator="in" />
        </filter>

        {/* Orange go button — stronger warm warp */}
        <filter
          id="lg-lens-go"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.03"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
            result="warped"
          />
          <feComposite in="warped" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}
