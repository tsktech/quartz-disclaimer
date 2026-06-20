import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types"

const Disclaimer: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const text = "⚠️ Disclaimer: This is an independent technical reference wiki. innerrange.com is the official source for product specifications and documentation. While we strive for accuracy, always cross-reference critical specifications against official Inner Range documentation."

  const parts = text.split("innerrange.com")
  return (
    <div class="disclaimer-banner">
      <p>
        {parts.length > 1 ? (
          <>
            {parts[0]}
            <a href="https://innerrange.com" target="_blank" rel="noopener noreferrer">
              innerrange.com
            </a>
            {parts[1]}
          </>
        ) : (
          text
        )}
      </p>
    </div>
  )
}

Disclaimer.css = `
.disclaimer-banner {
  text-align: center;
  font-size: 0.85rem;
  padding: 1rem 1.5rem;
  margin: 2rem 0 0 0;
  border-top: 1px solid var(--lightgray);
  border-bottom: 1px solid var(--lightgray);
  color: var(--gray);
  background: var(--light);
}
.disclaimer-banner p { margin: 0; }
.disclaimer-banner a { color: var(--secondary); text-decoration: underline; }
`

export default (() => Disclaimer) satisfies QuartzComponentConstructor
