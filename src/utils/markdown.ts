export function parseSimpleMarkdown(md: string): string {
  let html = md;

  // Tables
  html = html.replace(/\n\|(.+)\|\n\|([\s\-:|]+)\|\n((?:\|.+\|\n?)+)/g, (match, headerRow, dividerRow, bodyRows) => {
    const headers = headerRow.split('|').map((h: string) => h.trim()).filter((h: string) => h.length > 0);
    const rows = bodyRows.trim().split('\n').map((row: string) => 
      row.split('|').map((c: string) => c.trim()).filter((c: string) => c.length > 0)
    );

    return `
      <div class="article-table-wrapper">
        <table class="article-table">
          <thead>
            <tr>${headers.map((h: string) => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map((r: string[]) => `<tr>${r.map((c: string) => `<td>${c}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  });

  // Blockquotes
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote class="article-blockquote">$1</blockquote>');

  // Headings
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1 class="article-h1">$1</h1>');

  // Bold & Italics
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Unordered lists
  html = html.replace(/^\*\s+(.+)$/gm, '<li class="article-li">$1</li>');
  html = html.replace(/((?:<li class="article-li">.+<\/li>\n?)+)/g, '<ul class="article-ul">$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li class="article-oli">$1</li>');
  html = html.replace(/((?:<li class="article-oli">.+<\/li>\n?)+)/g, '<ol class="article-ol">$1</ol>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="article-divider" />');

  // Paragraphs
  html = html.split('\n\n').map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<div') || trimmed.startsWith('<hr')) {
      return trimmed;
    }
    return `<p>${trimmed.replace(/\n/g, '<br/>')}</p>`;
  }).join('\n\n');

  return html;
}
