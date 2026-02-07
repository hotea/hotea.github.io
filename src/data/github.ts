const GITHUB_USERNAME = 'hotea';

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  fork: boolean;
  archived: boolean;
  topics: string[];
}

export async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'hotea.github.io',
      },
    },
  );

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status}`);
    return [];
  }

  const data = await res.json();

  return (data as any[])
    .filter((r) => !r.fork && r.name !== `${GITHUB_USERNAME}.github.io`)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      stars: r.stargazers_count,
      fork: r.fork,
      archived: r.archived,
      topics: r.topics || [],
    }))
    .sort((a, b) => b.stars - a.stars);
}

// Language -> color mapping
const langColors: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  C: '#555555',
  'VimL': '#199f4b',
  Vim: '#199f4b',
  Shell: '#89e051',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Astro: '#ff5a03',
};

export function getLangColor(lang: string | null): string {
  if (!lang) return '#8b949e';
  return langColors[lang] ?? '#8b949e';
}
