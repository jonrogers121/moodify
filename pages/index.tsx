import Head from 'next/head';
import Image from 'next/image';

// Assets
import Logo from '@/public/assets/images/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Moodify!</title>
        <meta
          name="description"
          content="Get the mood of your favorite song with Moodify!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎧</text></svg>"
        />
      </Head>
      <main className="flex min-h-screen flex-col justify-center bg-spotify-green">
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <div className="min-h-[21px] max-w-[97px]">
            <Image src={Logo} alt="Moodify logo" className="h-auto w-full" />
          </div>
          <h1 className="text-2xl font-bold text-white md:text-4xl">Moodify</h1>
        </div>
        <form>
          <div className="my-12 flex gap-4">
            <div className="ml-auto w-full max-w-md">
              <input
                type="text"
                id="first_name"
                className="block w-full rounded-lg border border-spotify-black/20 bg-white p-2.5 text-xl text-spotify-black/80 outline-none focus:border-spotify-black/80 focus:ring-2 focus:ring-spotify-black/40"
                placeholder="John"
                required
              />
            </div>
            <button
              type="submit"
              className="mr-auto w-full rounded-lg bg-spotify-black px-5 py-2.5 text-center text-xl font-medium text-white hover:bg-spotify-black/80 focus:outline-none focus:ring-4 focus:ring-green-950 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
