// HTML minification plugin for Vite
export const htmlMinify = () => {
  return {
    name: 'html-minify',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string) {
        // Simple HTML minification
        return html
          .replace(/\s+/g, ' ')
          .replace(/>\s+</g, '><')
          .replace(/\s+>/g, '>')
          .replace(/<\s+/g, '<')
          .trim()
      }
    }
  }
}