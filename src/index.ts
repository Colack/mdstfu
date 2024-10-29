/*
    markdown-fetcher - @colack/markdown-fetcher
    A simple utility to fetch markdown files from GitHub URLs or any other URLs.
*/

/**
 * Fetches a markdown file from a GitHub URL.
 * @param url The URL of the markdown file.
 * @returns The markdown content.
 */
export async function fetchMarkdownFromGithub(url: string)
{
    try {
        const urlObject = new URL(url);
        if (urlObject.hostname !== 'raw.githubusercontent.com') {
            throw new Error('URL is not a GitHub raw URL');
        }

        if (!urlObject.pathname.endsWith('.md')) {
            throw new Error('URL is not a markdown file');
        }

        const response = await fetch(url, {
            headers: { 'Accept': 'application/vnd.github.v3.raw' }
        });

        const markdown = await response.text();
        return markdown;
    } catch (error) {
        console.error(`Error fetching markdown from GitHub: ${error}`);
    }
}

/**
 * Fetches a markdown file from a given URL.
 * @param url The URL of the markdown file.
 * @returns The markdown content.
 */
export async function fetchMarkDownFromUrl(url: string)
{
    try {
        const response = await fetch(url);
        const markdown = await response.text();
        return markdown;
    } catch (error) {
        console.error(`Error fetching markdown from URL: ${error}`);
    }
}