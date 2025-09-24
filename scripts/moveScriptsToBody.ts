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
          // Remove empty lines from head and ensure proper formatting
          cleanedHead = cleanedHead.replace(/\n\s*\n/g, '\n').trim()
          // Normalize indentation to 4 spaces for all head elements
          cleanedHead = cleanedHead.replace(/^\s*/gm, '    ')
          return `<head>\n${cleanedHead}\n  </head>`
        })
        
        // Insert scripts before closing body tag with same indentation as other body content
        if (scripts.length > 0) {
          const indentedScripts = scripts.map(script => `    ${script}`)
          modifiedHtml = modifiedHtml.replace(
            /<\/body>/i,
            `${indentedScripts.join('\n')}\n  </body>`
          )
        }
        
        return modifiedHtml
      }
    }
  }
}