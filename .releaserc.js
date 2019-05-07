module.exports = {
	branch: 'master',
	plugins: [
		// analyse all our commits since the last release
		'@semantic-release/commit-analyzer',

		// generate some nice release notes to use in our GitHub release
		'@semantic-release/release-notes-generator',

		// if it's a library/dockerfile, then bump the package.json version but don't publish to npm
		'@semantic-release/npm',

		// finally, push a new version as a release to GitHub with the changelog included
		['@semantic-release/github', {
			failComment: false, // don't create a 'release failed' issue on the repo
			releasedLabels: ['published'] // tag PRs with [published] when release succeeded
		}]
	]
};
