import Image from "next/image";

export function Portrait({
  src,
  alt,
  className = "",
  tight = false,
}: {
  src: string;
  alt: string;
  className?: string;
  tight?: boolean;
}) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded-full bg-paper-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 45vw, 220px"
        className={
          tight
            ? "scale-[1.55] object-cover object-[center_24%]"
            : "scale-[1.2] object-cover object-[center_42%]"
        }
      />
    </div>
  );
}
