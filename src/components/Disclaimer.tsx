import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"

export interface DisclaimerOptions {
  /** Custom text to display (optional, uses default if not set) */
  text?: string
}

const defaultText =
  "⚠️ Disclaimer: This is an independent technical reference wiki. innerrange.com is the official source for product specifications and documentation. While we strive for accuracy, always cross-reference critical specifications against official Inner Range documentation."

export default ((opts?: DisclaimerOptions) => {
  const text = opts?.text ?? defaultText

  const Disclaimer: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
    return (
      <div class="disclaimer-banner">
        <p>
          {text.split("innerrange.com").length > 1 ? (
            <>
              {text.split("innerrange.com")[0]}
              <a
                href="https://innerrange.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                innerrange.com
              </a>
              {text.split("innerrange.com")[1]}
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

.disclaimer-banner p {
  margin: 0;
}

.disclaimer-banner a {
  color: var(--secondary);
  text-decoration: underline;
}
`

  return Disclaimer
}) satisfies QuartzComponentConstructor
