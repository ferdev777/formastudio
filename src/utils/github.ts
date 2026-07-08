export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  topics?: string[];
}

export function getFilteredRepos(
  allRepos: Repo[],
  currentLang: string,
  currentSearch: string,
  currentSort: string
): Repo[] {
  const q = currentSearch.toLowerCase();
  
  return allRepos
    .filter((r) => !r.fork)
    .filter((r) => currentLang === "all" || r.language === currentLang)
    .filter((r) =>
      q === "" ||
      r.name.toLowerCase().includes(q) ||
      (r.description ?? "").toLowerCase().includes(q)
    )
    .sort((a, b) => {
      if (currentSort === "stars") return b.stargazers_count - a.stargazers_count;
      if (currentSort === "name")  return a.name.localeCompare(b.name);
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
}
