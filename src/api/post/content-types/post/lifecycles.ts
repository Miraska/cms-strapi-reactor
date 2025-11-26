/**
 * Post lifecycle hooks
 *
 * Injects id attributes into the HTML content for anchor navigation.
 * TOC items should be managed manually in Strapi admin.
 *
 * Note: Auto-generation of TOC components is handled on the client side
 * because Strapi requires component IDs for repeatable components,
 * which cannot be easily created in lifecycle hooks.
 */

interface TocItem {
  id?: number;
  anchorId?: string;
  label?: string;
}

interface PostData {
  content?: string;
  tableOfContents?: TocItem[];
}

/**
 * Inject id attributes into headings based on TOC items
 */
function injectHeadingIds(html: string, toc: TocItem[]): string {
  if (!html || !toc || toc.length === 0) {
    return html || '';
  }

  let processedHtml = html;

  for (const item of toc) {
    // Skip items without required fields
    if (!item.label || !item.anchorId) {
      continue;
    }

    // Escape special regex characters in label
    const escapedLabel = item.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Match heading tags (h2-h3) that contain this label
    const headingRegex = new RegExp(
      `(<h([2-3])([^>]*)>)\\s*(${escapedLabel})\\s*(</h\\2>)`,
      'i',
    );

    processedHtml = processedHtml.replace(
      headingRegex,
      (_match, _openTag, level, attrs, text, _closeTag) => {
        // Check if id already exists
        if (/\bid\s*=/.test(attrs || '')) {
          // Replace existing id
          const newAttrs = (attrs || '').replace(
            /\bid\s*=\s*["'][^"']*["']/i,
            `id="${item.anchorId}"`,
          );
          return `<h${level}${newAttrs}>${text}</h${level}>`;
        }

        // Add id attribute
        const newAttrs = attrs ? ` id="${item.anchorId}"${attrs}` : ` id="${item.anchorId}"`;
        return `<h${level}${newAttrs}>${text}</h${level}>`;
      },
    );
  }

  return processedHtml;
}

export default {
  async beforeCreate(event: { params: { data: PostData } }) {
    const { data } = event.params;

    // Only inject heading IDs if TOC is provided and content exists
    if (data?.content && data?.tableOfContents && data.tableOfContents.length > 0) {
      data.content = injectHeadingIds(data.content, data.tableOfContents);
    }
  },

  async beforeUpdate(event: { params: { data: PostData } }) {
    const { data } = event.params;

    // Only inject heading IDs if TOC is provided and content exists
    if (data?.content && data?.tableOfContents && data.tableOfContents.length > 0) {
      data.content = injectHeadingIds(data.content, data.tableOfContents);
    }
  },
};
