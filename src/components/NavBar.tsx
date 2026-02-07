const NavBar = () => {
  return (
    <nav className="flex items-center justify-end px-[10px] py-[7px] text-[13px] text-[#202124]">
      <div className="flex items-center gap-[11px]">
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-[7px] py-[5px] hover:underline leading-[24px]"
        >
          Gmail
        </a>
        <a
          href="https://www.google.com/imghp"
          target="_blank"
          rel="noopener noreferrer"
          className="px-[7px] py-[5px] hover:underline leading-[24px]"
        >
          Images
        </a>
        <button
          className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full hover:bg-[rgba(60,64,67,0.08)] transition-colors"
          title="Google apps"
        >
          <svg
            className="w-[24px] h-[24px] text-[#5f6368]"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
            />
          </svg>
        </button>
        <a
          href="https://accounts.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#1a73e8] text-white text-[14px] font-medium ml-[2px] mr-[4px] cursor-pointer hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)] transition-shadow"
          title="Google Account"
        >
          U
        </a>
      </div>
    </nav>
  )
}

export default NavBar
