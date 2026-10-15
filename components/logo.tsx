import Link from "next/link";

export default function Logo({
  markClassName = "size-10 sm:size-11 xl:size-12",
}: {
  markClassName?: string;
}) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2.5">
      <img
        src="/logo/stf-mark.png"
        alt=""
        width={512}
        height={512}
        className={markClassName}
      />
      <span className="whitespace-nowrap text-sm font-bold tracking-tight text-white sm:text-base">
        Soman Tech Foundry
      </span>
    </Link>
  );
}
