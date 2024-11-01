module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/your-username/mdstfu',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
