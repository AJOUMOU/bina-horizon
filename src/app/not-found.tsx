import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="chapter">Off the map</p>
      <h1 className="mt-6 font-display text-6xl italic text-brown md:text-8xl">
        This is not the horizon.
      </h1>
      <p className="mt-6 max-w-md text-charcoal/75">
        The page has wandered. Come back to the line we can still see.
      </p>
      <Button asChild className="mt-10">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
