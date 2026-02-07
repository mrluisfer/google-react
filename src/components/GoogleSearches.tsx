import SearcherLineSeparate from './SearcherLineSeparate'
import { searchesList, TSearchesList } from './searchesList'

export default function GoogleSearches() {
  return (
    <section className="absolute bg-white z-10 w-full left-0 border-x border-b border-[rgba(223,225,229,0)] shadow-[0_4px_6px_rgba(32,33,36,0.28)] top-[43px] flex flex-col rounded-b-[24px] overflow-hidden pb-[4px]">
      <SearcherLineSeparate />
      {searchesList?.map((singleSearch: TSearchesList) => (
        <div
          key={singleSearch.text}
          className="flex items-center gap-x-[13px] group text-[16px] hover:bg-[#eee] py-[7px] px-[14px] cursor-pointer"
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
    </section>
  )
}
