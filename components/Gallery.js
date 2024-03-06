import Image from "next/image";

export default function Gallery() {
  return (
    <div className="px-[130px] mt-9">
      <h2 className="text-xl font-semibold text-[#1a201f] mb-3">Gallery</h2>
      <div className="grid grid-cols-3 gap-0 max-w-3xl">
        <Image
          src="/images/gallery-1.png"
          alt="gallery"
          className="w-full h-full object-cover"
          width={254}
          height={185}
        />
        <Image
          src="/images/gallery-2.png"
          alt="gallery"
          className="w-full h-full object-cover"
          width={254}
          height={185}
        />
        <Image
          src="/images/gallery-3.png"
          alt="gallery"
          className="w-full h-full object-cover"
          width={254}
          height={185}
        />
        <Image
          src="/images/gallery-4.png"
          alt="gallery"
          className="w-full h-full object-cover"
          width={254}
          height={185}
        />
        <Image
          src="/images/gallery-5.png"
          alt="gallery"
          className="w-full h-full object-cover"
          width={254}
          height={185}
        />
        <Image
          src="/images/gallery-6.png"
          alt="gallery"
          className="w-full h-full"
          width={254}
          height={185}
        />
      </div>
    </div>
  );
}
