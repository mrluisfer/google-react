const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-[#70757a] text-[14px]">
      <div className="px-8 py-3 border-b border-[#dadce0]">
        <span>Country</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-3">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="https://ads.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Advertising
          </a>
          <a
            href="https://smallbusiness.withgoogle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            How Search works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2 sm:mt-0">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms
          </a>
          <a href="#" className="hover:underline">
            Settings
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
