import { generateMediaByENV } from "@/lib/utils/generators";
import Link from "next/link";
import { FC } from "react";

interface MediaProps {
  className?: string;
}

const Media: FC<MediaProps> = (props) => {
  const { className } = props;

  return (
    <div className={`flex items-center ${className}`}>
      {generateMediaByENV().map((media) => (
        <Link href={media.href} target="_blank" key={media.key}>
          {<media.Element className="w-9 opacity-80" />}
        </Link>
      ))}
    </div>
  );
};

export default Media;
