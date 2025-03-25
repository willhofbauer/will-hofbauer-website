import Link from "next/link";
import { FC } from "react";

interface ExternalLinkProps {
    href: string
    year: number
    title: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, year, title }) => {
    return <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div
            className="bg-white/80 p-4 rounded-lg hover:bg-pink-200 transition-colors transform hover:scale-105 hover:rotate-1 border-4 border-dashed border-purple-400"
        >
            <span className="font-bold text-pink-600">{year}</span> -{" "}
            <span className="text-purple-800">{title}</span>
        </div>
    </Link>
}