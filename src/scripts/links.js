// Links that leave the page (other sites, PDFs) open in a new tab;
// in-page anchors and mailto: links stay where they are.
export function newTabProps(href) {
  const leavesPage = /^https?:\/\//.test(href) || href.endsWith('.pdf')
  return leavesPage ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
