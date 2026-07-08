import { describe, it, expect } from "vitest";
import { getFilteredRepos, type Repo } from "../src/utils/github";

const mockRepos: Repo[] = [
  {
    name: "react-project",
    description: "A cool react UI",
    html_url: "https://github.com/test/react",
    language: "TypeScript",
    stargazers_count: 50,
    forks_count: 5,
    updated_at: "2023-01-01T00:00:00Z",
    fork: false
  },
  {
    name: "vue-project",
    description: "Vue 3 dashboard",
    html_url: "https://github.com/test/vue",
    language: "Vue",
    stargazers_count: 100,
    forks_count: 10,
    updated_at: "2024-01-01T00:00:00Z",
    fork: false
  },
  {
    name: "forked-repo",
    description: "A fork",
    html_url: "https://github.com/test/fork",
    language: "JavaScript",
    stargazers_count: 10,
    forks_count: 1,
    updated_at: "2022-01-01T00:00:00Z",
    fork: true
  }
];

describe("GitHub Utils: getFilteredRepos", () => {
  it("should filter out forked repositories", () => {
    const result = getFilteredRepos(mockRepos, "all", "", "updated");
    expect(result.length).toBe(2);
    expect(result.some(r => r.fork)).toBe(false);
  });

  it("should filter by language", () => {
    const result = getFilteredRepos(mockRepos, "Vue", "", "updated");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("vue-project");
  });

  it("should filter by search string (case insensitive in name)", () => {
    const result = getFilteredRepos(mockRepos, "all", "REACT", "updated");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("react-project");
  });

  it("should filter by search string (case insensitive in description)", () => {
    const result = getFilteredRepos(mockRepos, "all", "dashboard", "updated");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("vue-project");
  });

  it("should sort by stars (descending)", () => {
    const result = getFilteredRepos(mockRepos, "all", "", "stars");
    expect(result[0].name).toBe("vue-project"); // 100 stars
    expect(result[1].name).toBe("react-project"); // 50 stars
  });

  it("should sort by name", () => {
    const result = getFilteredRepos(mockRepos, "all", "", "name");
    // "react-project" comes before "vue-project" alphabetically
    expect(result[0].name).toBe("react-project");
    expect(result[1].name).toBe("vue-project");
  });
});
