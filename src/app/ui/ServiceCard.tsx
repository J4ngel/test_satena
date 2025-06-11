import Link from "next/link"
import Image from "next/image"
import { Img } from "../lib/interfaces"

interface ServiceCardProps {
    image?: Img
    title: string
    description: string
    url: string
    className?: string
}

export default function ServiceCard({
  image,
  title,
  description,
  url,
  className = "",
}: ServiceCardProps){
  return (
    <div className={`bg-white hover:bg-gray-400 shadow-md rounded-lg p-0 ${className}`}>
      <Image
        src={image?.url??"/service_image.webp"}
        alt={`${title} Image`}
        className="w-full h-48 object-cover rounded-t-lg "
        width={image?.width??474}
        height={image?.height??316}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Link
          href={url}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Más información
        </Link>
      </div>
    </div>      
  );
}