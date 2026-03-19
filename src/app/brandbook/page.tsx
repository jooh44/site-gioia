import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Guidelines — Gioia e Associados Advocacia',
  robots: { index: false, follow: false },
}

export default function BrandbookPage() {
  return (
    <iframe
      src="/brand/brandbook.html"
      title="Brand Guidelines — Gioia e Associados"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        display: 'block',
      }}
    />
  )
}
