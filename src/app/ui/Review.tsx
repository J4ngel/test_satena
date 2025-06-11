import Image from "next/image";
import { Img } from "../lib/interfaces";

interface ReviewProps {
    imgUser?: Img;
    name: string;
    qualification: number;
    destiny: string;
    description: string;
    className?: string;
}


export default function Review({
    imgUser,
    name,
    qualification,
    destiny,
    description,
    className,
}: ReviewProps) {   

  return (
    <div className={`flex flex-col ${className??''}`}>
      <div className="flex flex-row  items-center">
        <Image 
        src={imgUser?.url??'/unknown_user.svg'} 
        alt={imgUser?.alt??'User image'}
        width={imgUser?.width??50}
        height={imgUser?.height??50} />

        <div className="flex flex-col ml-2 justify-center">
          <div className="flex flex-row gap-2">
            <strong>{name}</strong>
            <i>{destiny}</i>
          </div>
          <span className="text-yellow-500">
          {"★".repeat(qualification)}
          {"☆".repeat(5 - qualification)}
        </span>
        </div>
      </div>
      
      <i>
        "{description}"
      </i>
    </div>
  );
}