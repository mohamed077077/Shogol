'use client';
import { useTheme } from 'next-themes';
export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();

  return <div>
    <h1 className={`h-500 w-500 bg-background ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>Page</h1>
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>

  </div>
}
