import Head from 'next/head';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

// Assets
import Logo from '@/public/assets/images/logo.png';

// Types
// Hooks
import useDebounce from '@/hooks/useDebounce';

export default function Home() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const token =
    'BQDwQ96oQv98bwK8qhIKSEA6PzjB0Uuin-bTrexpuz5mHKlPBWk05eugpyOLe2yQdoizguh8EQWU3aKdKuAJx6ijP5aRz6yI47K4xnvthK4skyILRxGz';
  const fetchWebApi = async (
    endpoint: string,
    method: string,
    body?: object
  ) => {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body:
        method !== 'GET' && method !== 'HEAD'
          ? JSON.stringify(body)
          : undefined,
    });
    return await res.json();
  };

  const getSearchResults = async (query: string) => {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (
      await fetchWebApi(
        `v1/search?q=${encodeURIComponent(query)}&type=track`,
        'GET'
      )
    ).tracks;
  };

  useEffect(() => {
    if (debouncedValue) {
      const fetchData = async () => {
        const searchResults = await getSearchResults(debouncedValue);
        // eslint-disable-next-line no-console
        console.log(searchResults.items);
      };
      fetchData();
    }
  }, [debouncedValue]);

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
                id="song_name"
                className="block w-full rounded-lg border border-spotify-black/20 bg-white p-2.5 text-xl text-spotify-black/80 outline-none focus:border-spotify-black/80 focus:ring-2 focus:ring-spotify-black/40"
                placeholder="Enter a song"
                required
                value={value}
                onChange={handleChange}
                aria-label="Enter a song's name to search for its mood"
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
