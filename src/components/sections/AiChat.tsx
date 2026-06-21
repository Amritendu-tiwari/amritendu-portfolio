import { useState, useRef, useEffect } from 'react'
import SectionLabel from '../ui/SectionLabel'

interface Message { role: 'user' | 'assistant'; content: string }

// NOTE: No system prompt here — it lives server-side in api/chat.js only.
// The AI is guardrailed to only answer about Amritendu's profile.

const QUICK_QUESTIONS = [
  "What makes you unique as an AI engineer?",
  "Tell me about the WhatsApp automation at Bhargava Negotium.",
  "How did you fine-tune Gemma3 on a limited GPU budget?",
  "What's your ideal next role?",
  "Tell me about your Gangotri trip.",
]

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! 👋 I'm Amritendu's portfolio AI — Ask me anything about his experience, projects, skills, or even his Himalayan adventures. I only answer questions about him!"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const chatBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages, loading])

  async function send(text: string) {
    if (!text.trim() || loading) return
    const trimmed = text.trim().slice(0, 500) // cap input length client-side too
    const userMsg: Message = { role: 'user', content: trimmed }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Send ONLY messages — no system prompt. Server controls that.
          messages: [...messages, userMsg],
        }),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.content || "I didn't catch that — could you rephrase?"
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Connection issue — please try again in a moment, or email amritendu.wrk@gmail.com directly."
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="chat"
      className="py-24 px-6"
      style={{ backgroundColor: 'rgba(13,13,26,0.90)' }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionLabel>AI Feature</SectionLabel>
        <h2 className="font-serif-display text-4xl md:text-5xl text-cream mb-3">Ask my AI clone.</h2>
        <p className="text-muted text-base mb-2 leading-relaxed">
          Ask anything about my experience, projects, or skills.
        </p>
        {/* <p className="font-mono-code text-xs text-amber/60 mb-10">
          ⚡ Guardrailed — only answers questions about Amritendu's actual profile.
        </p> */}

        <div className="border border-border rounded-sm overflow-hidden bg-ink">
          {/* Chat header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-ink-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber to-amber/40 flex items-center justify-center text-ink font-bold text-sm">AT</div>
              <div>
                <div className="font-sans text-sm text-cream font-medium">Amritendu's Portfolio AI</div>
                <div className="flex items-center gap-1.5 font-mono-code text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                  Online · 
                </div>
              </div>
            </div>
            <span className="font-mono-code text-xs text-muted/50 bg-ink-3 border border-border px-2.5 py-1 rounded-sm">
              groq/llama-3.1
            </span>
          </div>

          {/* Messages */}
          <div ref={chatBoxRef} className="h-80 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex msg-enter ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-sm px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-amber text-ink font-medium'
                      : 'bg-ink-2 border border-border text-cream/90'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-ink-2 border border-border px-4 py-3 rounded-sm flex gap-1.5 items-center">
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                </div>
              </div>
            )}
            {/* <div ref={bottomRef} /> */}
          </div>

          {/* Quick questions */}
          <div className="px-5 pb-3 flex gap-2 flex-wrap border-t border-border pt-3">
            {QUICK_QUESTIONS.map(q => (
              <button
                key={q}
                onClick={() => send(q)}
                disabled={loading}
                className="font-mono-code text-xs border border-border text-muted px-3 py-1.5 rounded-full hover:border-amber hover:text-amber transition-colors disabled:opacity-50"
              >
                {q.slice(0, 34)}…
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-3 px-5 pb-5">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) } }}
              placeholder="Ask about experience, projects, skills, or travel..."
              rows={1}
              disabled={loading}
              maxLength={500}
              className="flex-1 bg-ink-2 border border-border rounded-sm px-4 py-3 text-sm text-cream placeholder-muted/50 outline-none resize-none focus:border-amber/50 transition-colors font-sans disabled:opacity-50"
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              className="px-5 py-3 bg-amber text-ink font-mono-code text-sm font-bold rounded-sm hover:bg-amber-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
            >
              Send →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
