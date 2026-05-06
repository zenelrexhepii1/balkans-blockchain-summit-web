
export default function Cube({...props}:any) {
    return (
        <svg
        width={390}
        height={390}
        viewBox="0 0 390 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="max-[600px]:w-[270px] max-[600px]:h-[270px]"
      >
        <g clipPath="url(#clip0_8065_13820)">
          <mask
            id="mask0_8065_13820"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={390}
            height={390}
          >
            <path d="M390 0H0V390H390V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_8065_13820)">
            <g opacity={0.4}>
              <path
                d="M387.753 312.124V2.60547H78.2344V312.124H387.753Z"
                stroke="#EDECEB"
                strokeWidth={3}
              />
              <path
                d="M312.163 387.753V78.2344H2.64453V387.753H312.163Z"
                stroke="#EDECEB"
                strokeWidth={3}
              />
              <path
                d="M78.2327 2.25V312.143L2.625 386.573V77.0365L78.2327 2.25Z"
                stroke="#EDECEB"
                strokeWidth={3}
                strokeLinejoin="bevel"
              />
              <path
                d="M387.768 2.25V312.143L312.16 387.751V77.0365L387.768 2.25Z"
                stroke="#EDECEB"
                strokeWidth={3}
                strokeLinejoin="bevel"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8065_13820">
            <rect width={390} height={390} fill="white" />
          </clipPath>
        </defs>
      </svg>

    )
}