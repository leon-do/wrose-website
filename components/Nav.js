import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image className="h-8 w-auto lg:block" width="32" height="32" src="/images/oasis.svg" alt="WROSE" />
                  </Link>
                </div>
              </div>
              <div className="ml-6 flex space-x-8">
                <Link href="https://github.com/orgs/wrose-sapphire/repositories" className="inline-flex items-center border-b-2 hover:border-b-sky-500 px-1 pt-1 text-base font-medium">
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
