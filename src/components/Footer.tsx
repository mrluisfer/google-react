const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-[#70757a] text-[14px]">
      <div className="px-[30px] py-[15px] border-b border-[#dadce0]">
        <span>Mexico</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-[30px] py-[10px]">
        <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[4px]">
          <a
            href="https://about.google/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            About
          </a>
          <a
            href="https://ads.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Advertising
          </a>
          <a
            href="https://smallbusiness.withgoogle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            How Search works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[4px] mt-[8px] sm:mt-0">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Terms
          </a>
          <button className="footer-link bg-transparent border-none cursor-pointer font-[inherit]">
            Settings
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
