import { mdstfu } from '../src/index';

describe('mdstfu', () => {
    let markdownFetcher: mdstfu;
    const mockUrl = 'https://raw.githubusercontent.com/colack/mdstfu/main/README.md';
    const mockMarkdown = '# Sample Markdown\n\nThis is a sample markdown file.';

    beforeEach(() => {
        markdownFetcher = new mdstfu(mockUrl);
    });

    it('should fetch and render markdown', async () => {
        await markdownFetcher.fetch();
        const renderedMarkdown = markdownFetcher.render();
        expect(renderedMarkdown).toContain('Sample Markdown');
    });

    it('should trigger fetchStart and fetchComplete events', async () => {
        const fetchStartSpy = jest.fn();
        const fetchCompleteSpy = jest.fn();

        markdownFetcher.on('fetchStart', fetchStartSpy);
        markdownFetcher.on('fetchComplete', fetchCompleteSpy);

        await markdownFetcher.fetch();

        expect(fetchStartSpy).toHaveBeenCalledWith(mockUrl);
        expect(fetchCompleteSpy).toHaveBeenCalled();
    });
});
