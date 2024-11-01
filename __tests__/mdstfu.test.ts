import { mdstfu } from '../src/index';
import { jest } from '@jest/globals';

const TEST_URL =
  'https://raw.githubusercontent.com/Colack/mdstfu/refs/heads/main/README.md';

describe('mdstfu', () => {
  let markdownFetcher: mdstfu;

  beforeEach(() => {
    markdownFetcher = new mdstfu(TEST_URL);
  });

  it('should fetch markdown content from the given URL', async () => {
    await markdownFetcher.fetch();
    expect(markdownFetcher.markdown).toContain('# mdstfu');
  });

  it('should cache fetched content', async () => {
    await markdownFetcher.fetch();
    const cachedContent = mdstfu.cache.get(TEST_URL);
    expect(cachedContent).toEqual(markdownFetcher.markdown);
  });

  it('should render markdown content to HTML', async () => {
    const html = await markdownFetcher.render();
    expect(html).toContain('<h1>mdstfu</h1>');
  });

  it('should use custom renderer if provided', async () => {
    const customRenderer = (markdown: string) => `Custom: ${markdown}`;
    const markdownWithCustomRenderer = new mdstfu(TEST_URL, customRenderer);
    await markdownWithCustomRenderer.fetch();
    const customRenderedContent = await markdownWithCustomRenderer.render();
    expect(customRenderedContent).toContain('Custom:');
  });

  it('should throw an error on invalid URL', () => {
    expect(() => new mdstfu('invalid-url')).toThrow('Invalid URL format');
  });

  it('should throw an error if fetch fails', async () => {
    const invalidFetcher = new mdstfu('https://invalid.url');

    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await expect(invalidFetcher.fetch()).rejects.toThrow();
    consoleSpy.mockRestore();
  });
});
