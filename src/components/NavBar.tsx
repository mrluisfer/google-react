const NavBar = () => {
  return (
    <div className="flex items-center justify-end px-3 py-2 text-[13px] text-[#202124]">
      <div className="flex items-center gap-4">
        <a
          href="https://gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Gmail
        </a>
        <a
          href="https://www.google.com/imghp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Images
        </a>
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          title="Google apps"
        >
          <svg className="w-6 h-6 text-[#5f6368]" focusable="false" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
            />
          </svg>
        </button>
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-medium hover:shadow-md transition-shadow"
          title="Google Account"
        >
          U
        </button>
      </div>
    </div>
  )
}

export default NavBar
