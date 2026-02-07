type Props = {
  text: string
  url: string
}

export default function FooterLink({ text, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#70757a] hover:underline text-[14px]"
    >
      {text}
    </a>
  )
}
