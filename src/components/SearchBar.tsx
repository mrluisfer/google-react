import { useState } from 'react'
import { searchesList, TSearchesList } from './searchesList'

const SearchBar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleFocusInput = () => {
    setShowSuggestions(true)
  }

  const handleOnBlurEvent = () => {
    setShowSuggestions(false)
  }

  return (
    <div className="w-full max-w-[584px] px-4 sm:px-0 relative">
      {/* Placeholder para mantener la altura cuando la barra está expandida */}
      {showSuggestions && <div className="h-[46px]" />}
      <div
        className={`google-search-bar bg-white ${showSuggestions ? 'expanded' : ''}`}
      >
        <div className="flex items-center w-full h-[44px] px-[14px]">
          <div className="flex items-center justify-center w-[20px] h-[20px] mr-[13px]">
            <svg
              className="text-[#9aa0a6]"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search_input"
            id="search_input"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            className="flex-1 h-full text-[16px] bg-transparent outline-none text-[#202124]"
            onFocus={handleFocusInput}
            onBlur={handleOnBlurEvent}
          />
          <div className="flex items-center gap-[12px] ml-[13px]">
            <button
              className="flex items-center justify-center w-[24px] h-[24px] hover:opacity-70 transition-opacity"
              title="Search by voice"
              type="button"
            >
              <svg
                className="w-[24px] h-[24px]"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                />
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
                <path
                  fill="#fbbc04"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                />
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                />
              </svg>
            </button>
            <button
              className="flex items-center justify-center w-[24px] h-[24px] hover:opacity-70 transition-opacity"
              title="Search by image"
              type="button"
            >
              <svg
                className="w-[24px] h-[24px]"
                focusable="false"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height="192" width="192" />
                <g>
                  <circle fill="#4285f4" cx="144.07" cy="144" r="16" />
                  <circle fill="#ea4335" cx="96.07" cy="104" r="24" />
                  <path
                    fill="#34a853"
                    d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                  />
                  <path
                    fill="#fbbc04"
                    d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                  />
                  <path
                    fill="#4285f4"
                    d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        {showSuggestions && (
          <div className="border-t border-[#e8e8e8] pb-[4px]">
            {searchesList?.map((singleSearch: TSearchesList) => (
              <div
                key={singleSearch.text}
                className="flex items-center gap-x-[13px] text-[16px] hover:bg-[#eee] py-[7px] px-[14px] cursor-pointer"
              >
                <svg
                  className="w-[20px] h-[20px] text-[#70757a] flex-shrink-0"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                  />
                </svg>
                <span className="text-[#202124] flex-1">
                  {singleSearch.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
