import { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Copy, Check } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { contactChannels, contactTopics, email } from '@/data/contact'

/** Icon map for contact channels */
function ChannelIcon({ id }: { id: string }) {
  if (id === 'linkedin') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (id === 'github') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
  // mail
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

/**
 * Contact section — direct channel links, email copy button, and static inquiry form.
 * Form submission shows a mailto fallback alert (no backend).
 */
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const nameId    = useId()
  const emailId   = useId()
  const topicId   = useId()
  const messageId = useId()

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    form.reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section
      id="contact"
      className="w-full py-space-xl bg-surface scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ INITIATE CONTACT ]</SectionLabel>
          <h2
            id="contact-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface mt-1"
          >
            Let's build something useful.
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mt-1 max-w-2xl">
            Whether you're hiring, building a product, or dealing with a technical problem that needs
            another pair of eyes, I'd be happy to talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg"
        >
          {/* ── Direct Channels ──────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {contactChannels.map((ch) => {
              const isEmail = ch.id === 'email'
              return (
                <div
                  key={ch.id}
                  className="p-space-md rounded-lg bg-surface-container-low border border-surface-container-high hover:border-primary-container transition-all duration-150 flex items-center justify-between group shadow-card"
                >
                  <a
                    href={ch.href}
                    aria-label={ch.ariaLabel}
                    {...(ch.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-space-md flex-1 min-w-0"
                  >
                    <span className="text-primary-container shrink-0">
                      <ChannelIcon id={ch.id} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-sans text-title-md text-on-surface font-medium group-hover:text-primary transition-colors duration-150">
                        {ch.label}
                      </div>
                      <div className="font-mono text-code-sm text-on-surface-variant truncate group-hover:text-primary transition-colors duration-150">
                        {ch.display}
                      </div>
                    </div>
                  </a>

                  {/* Copy button only on email row */}
                  {isEmail ? (
                    <button
                      type="button"
                      onClick={handleCopy}
                      aria-label="Copy email address"
                      className="ml-space-md shrink-0 px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary-container font-mono text-code-sm transition-colors duration-150 border border-surface-container-highest flex items-center gap-1"
                    >
                      {copied
                        ? <><Check size={13} aria-hidden="true" /><span>Copied!</span></>
                        : <><Copy size={13} aria-hidden="true" /><span>Copy</span></>
                      }
                    </button>
                  ) : (
                    <ArrowRight
                      size={16}
                      className="ml-space-md shrink-0 text-outline group-hover:text-primary transition-colors duration-150"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* ── Inquiry Form ──────────────────────────────────────────── */}
          <div className="lg:col-span-7 p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high shadow-card">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-space-md"
              noValidate
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor={nameId}
                    className="font-mono text-code-sm text-outline uppercase tracking-wider"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors duration-150"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor={emailId}
                    className="font-mono text-code-sm text-outline uppercase tracking-wider"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors duration-150"
                  />
                </div>
              </div>

              {/* Topic select */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={topicId}
                  className="font-mono text-code-sm text-outline uppercase tracking-wider"
                >
                  WHAT ARE YOU REACHING OUT ABOUT?
                </label>
                <select
                  id={topicId}
                  required
                  defaultValue=""
                  className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm focus:outline-none focus:border-primary-container transition-colors duration-150"
                >
                  <option value="" disabled>Select an option</option>
                  {contactTopics.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* Message textarea */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={messageId}
                  className="font-mono text-code-sm text-outline uppercase tracking-wider"
                >
                  TELL ME WHAT YOU'RE WORKING ON
                </label>
                <textarea
                  id={messageId}
                  rows={4}
                  required
                  placeholder="Tell me a little about the role, project, problem or opportunity..."
                  className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors duration-150 resize-none"
                />
              </div>

              {/* Submit row */}
              <div className="flex items-center justify-between pt-space-xs">
                <span className="font-mono text-code-sm text-outline flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                  I'll get back to you as soon as I can.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded bg-primary-container text-on-primary-container font-mono text-code-md font-medium hover:bg-primary hover:text-on-primary transition-all duration-150 flex items-center gap-1.5 shadow-card"
                >
                  Send Message
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>

              {/* Mailto fallback alert */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-surface-container border border-surface-container-high text-on-surface-variant font-mono text-code-sm text-center"
                  role="alert"
                  aria-live="polite"
                >
                  Direct email integration pending. Please feel free to email directly at{' '}
                  <a
                    href={`mailto:${email}`}
                    className="text-primary underline hover:text-primary-container transition-colors"
                  >
                    {email}
                  </a>
                  .
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
