"use client";
import Link from "next/link";

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <Link href={route} className="hover:no-underline ">
      {children}
    </Link>
  );
}

export default ClientSideRoute;
