// Plugin to move scripts to bottom of body
export const moveScriptsToBody = () => {
  return {
    name: 'move-scripts-to-body',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string) {
        // Extract script tags from head
        const scriptRegex = /<script[^>]*>[\s\S]*?<\/script>|<script[^>]*\/>/gi
        const scripts: string[] = []
        
        // Remove scripts from head and collect them
        let modifiedHtml = html.replace(/<head>([\s\S]*?)<\/head>/i, (_match, headContent) => {
          let cleanedHead = headContent
          let scriptMatch
          while ((scriptMatch = scriptRegex.exec(headContent)) !== null) {
            scripts.push(scriptMatch[0])
            cleanedHead = cleanedHead.replace(scriptMatch[0], '')
          }
          return `<head>${cleanedHead}</head>`
        })
        
        // Insert scripts before closing body tag
        if (scripts.length > 0) {
          modifiedHtml = modifiedHtml.replace(
            /<\/body>/i,
            `${scripts.join('\n    ')}\n  </body>`
          )
        }
        
        return modifiedHtml
      }
    }
  }
}