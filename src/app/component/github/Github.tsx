"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./github.css"
import Image from 'next/image';

interface GitHubStats {
  avatar_url: string;
  login: string;
  public_repos: number;
  followers: number;
  // Add more properties as needed
}

interface GitHubRepo {
  name: string;
  html_url: string;
  pushed_at: string;
}

const GitHubStatsCard: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [currentWorkingProject, setCurrentWorkingProject] = useState<GitHubRepo | null>(null);

  useEffect(() => {
    // Replace 'YOUR_GITHUB_ACCESS_TOKEN' with your GitHub Personal Access Token
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
    const username = 'joelk9895';

    // Fetch user's GitHub stats
    axios
      .get<GitHubStats>(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      })
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub stats:', error);
      });

    // Fetch user's GitHub repositories
    axios
      .get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      })
      .then((response) => {
        // Find the repository with the most recent commit (last pushed_at date)
        const sortedRepos = response.data.sort(
          (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
        setCurrentWorkingProject(sortedRepos[0]);
      })
      .catch((error) => {
        console.error('Error fetching GitHub repositories:', error);
      });
  }, []);

  if (!stats || !currentWorkingProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="github-stats-card">
        <Image src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" width={50} height={50} />
      {stats.login && <h3>{stats.login}</h3>}
      {stats.public_repos && <p>Public Repositories: {stats.public_repos}</p>}
      {stats.followers && <p>Followers: {stats.followers}</p>}
      {/* Add more stats you want to display */}
      
      {/* Display the current working project based on last commit */}
      {currentWorkingProject.name && (
        <div>
          <p>Currently working on:</p>
          <a href={currentWorkingProject.html_url} target="_blank" rel="noopener noreferrer">
            {currentWorkingProject.name}
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubStatsCard;
