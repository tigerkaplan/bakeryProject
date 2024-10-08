import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa';

const socialData = [
  { href: 'https://youtube.com', icon: <FaYoutube /> },
  { href: 'https://facebook.com', icon: <FaFacebookF /> },
  { href: 'https://instagram.com', icon: <FaInstagram /> },
  { href: 'https://discord.com', icon: <FaDiscord /> },
];

export default function Socials() {
  return (
    <div className="flex gap-x-2">
      {socialData.map((item, index) => (
        <a
          className="border border-white/20 rounded-full w-11 h-11 flex items-center justify-center text-sm hover:text-orange hover:border-orange transition-all"
          href={item.href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
