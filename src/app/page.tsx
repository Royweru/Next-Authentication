import Image from "next/image";
import { Main } from "./components/Main";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-full flex items-center justify-between font-mono text-sm lg:flex">
        {session ? (
          <Main />
        ) : (
          <>
            <h1 className=" text-3xl text-yellow-400">
              You are currently not signed in
            </h1>
            <br />
            <h2 className=" text-2xl font-bold font-mono text-red-900">
              <a href="/api/auth/signin">SIGN IN</a>
            </h2>
          </>
        )}
      </div>
    </main>
  );
}
