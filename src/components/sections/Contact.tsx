import { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Copy, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { contactChannels, contactTopics, email } from '@/data/contact'

const WEB3FORMS_ACCESS_KEY = '09abca9d-40a7-48dc-87cd-144ca67f2e5c'

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

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Contact section — direct channel links, email copy button, and interactive Web3Forms inquiry form.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.topic || 'General Inquiry',
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', topic: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(
          result.message || 'Something went wrong while submitting the form. Please try again or email directly.'
        )
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network connection error. Please email directly at ' + email)
    }
  }

  const handleReset = () => {
    setStatus('idle')
    setErrorMessage('')
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
                      className="ml-space-md shrink-0 px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary-container font-mono text-code-sm transition-colors duration-150 border border-surface-container-highest flex items-center gap-1 cursor-pointer"
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
          <div className="lg:col-span-7 p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high shadow-card flex flex-col justify-between">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-space-xl flex flex-col items-center justify-center text-center gap-space-md my-auto"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
                  <CheckCircle2 size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans text-headline-sm font-semibold text-on-surface">
                    Message sent successfully!
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant max-w-md">
                    Thank you for reaching out. I have received your message and will get back to you as soon as I can.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-space-sm px-4 py-2 rounded bg-surface-container hover:bg-surface-container-high text-primary-container font-mono text-code-sm border border-surface-container-high transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-space-md"
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
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors duration-150 disabled:opacity-50"
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
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors duration-150 disabled:opacity-50"
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
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm focus:outline-none focus:border-primary-container transition-colors duration-150 disabled:opacity-50"
                  >
                    <option value="" disabled>Select an option</option>
                    {contactTopics.map((t) => (
                      <option key={t.value} value={t.label}>{t.label}</option>
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
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="Tell me a little about the role, project, problem or opportunity..."
                    className="w-full px-3 py-2 rounded bg-surface-container-lowest border border-surface-container-high text-on-surface font-sans text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors duration-150 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Error Notice */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-surface-container border border-red-500/40 text-on-surface-variant font-mono text-code-sm flex items-start gap-2"
                    role="alert"
                  >
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-red-300 font-medium">Failed to send message via Web3Forms.</p>
                      <p className="text-on-surface-variant text-xs">
                        {errorMessage || 'An unexpected error occurred.'}{' '}
                        Please feel free to email directly at{' '}
                        <a
                          href={`mailto:${email}?subject=Portfolio Inquiry`}
                          className="text-primary underline hover:text-primary-container transition-colors"
                        >
                          {email}
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Submit row */}
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-mono text-code-sm text-outline flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    I'll get back to you as soon as I can.
                  </span>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-5 py-2.5 rounded bg-primary-container text-on-primary-container font-mono text-code-md font-medium hover:bg-primary hover:text-on-primary transition-all duration-150 flex items-center gap-1.5 shadow-card cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
