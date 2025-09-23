import { useState, useEffect } from 'react'

const useGitHubRepos = (username = 'SD187') => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch repositories from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`)
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Filter and format repositories
        const filteredRepos = data
          .filter(repo => !repo.fork) // Exclude forked repositories
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            description: repo.description,
            htmlUrl: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazersCount: repo.stargazers_count,
            forksCount: repo.forks_count,
            size: repo.size,
            createdAt: repo.created_at,
            updatedAt: repo.updated_at,
            topics: repo.topics || [],
            isPrivate: repo.private,
            defaultBranch: repo.default_branch,
            openIssuesCount: repo.open_issues_count,
            license: repo.license?.name || null,
            visibility: repo.visibility
          }))
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)) // Sort by most recently updated
        
        setRepos(filteredRepos)
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  // Helper functions
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      'C#': '#239120',
      HTML: '#e34c26',
      CSS: '#1572B6',
      TypeScript: '#2b7489',
      React: '#61dafb',
      Vue: '#4FC08D',
      PHP: '#777bb4',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      Go: '#00ADD8',
      Rust: '#dea584',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Dart: '#00B4AB',
      Shell: '#89e051'
    }
    return colors[language] || '#586069'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 30) return `${diffDays} days ago`
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30)
      return months === 1 ? '1 month ago' : `${months} months ago`
    }
    const years = Math.floor(diffDays / 365)
    return years === 1 ? '1 year ago' : `${years} years ago`
  }

  const formatRepoSize = (size) => {
    if (size < 1024) return `${size} KB`
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} MB`
    return `${(size / (1024 * 1024)).toFixed(1)} GB`
  }

  return {
    repos,
    loading,
    error,
    utils: {
      getLanguageColor,
      formatDate,
      formatRepoSize
    },
    refetch: () => {
      setLoading(true)
      setError(null)
      // Re-run the effect
      const event = new CustomEvent('refetch-repos')
      window.dispatchEvent(event)
    }
  }
}

export default useGitHubRepos