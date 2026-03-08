import { useState } from "react";
import { INFRAREF_AI_SYSTEM_PROMPT } from "../data/aiPrompt.js";

const QUICK_QUESTIONS = [
  "NWP 14 permanent fill threshold OR",
  "AASHTO LRFD stopping sight distance 60 mph",
  "NESC Rule 232 clearance 115kV over highway",
  "WSDOT CRA P80 contingency process",
  "ODOT HDM superelevation urban arterial max",
  "ESA Section 7 formal consultation BiOp timeline",
  "FTA Small Starts vs New Starts thresholds",
  "HEC-18 local pier scour round-nose pier",
];

export function AIPanel({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "InfraRef AI — technical reference for Oregon & Washington infrastructure consulting.\n\nAsk specific, exact questions: code section values, permit thresholds, load combinations, clearance requirements, funding eligibility criteria, contingency methods, or process timelines. I cite sources by manual name, edition, section, and table number.\n\nExample: \"What is the NESC Rule 232 minimum vertical clearance for a 115kV line crossing a state highway in Oregon?\"" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setLoading(true);

    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": apiKey || "",
      "anthropic-version": "2023-06-01",
    };

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers,
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          system: INFRAREF_AI_SYSTEM_PROMPT,
          messages: messages
            .filter(m => m.role !== "assistant" || messages.indexOf(m) > 0)
            .map(m => ({ role: m.role, content: m.text }))
            .concat([{ role: "user", content: userMsg }])
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Unable to get a response.";
      setMessages(m => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", text: "Connection error. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{
      width: "340px", minWidth: "340px", background: "#080a0e", borderLeft: "1px solid #1e2433",
      display: "flex", flexDirection: "column", height: "100%"
    }}>
      <div style={{ padding: "16px", borderBottom: "1px solid #1e2433", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", color: "#f97316", letterSpacing: "0.1em" }}>INFRAREF AI</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#475569" }}>OR / WA Consulting Assistant</div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: "18px" }}>✕</button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#334155" }}>{m.role === "user" ? "YOU" : "AI"}</div>
            <div style={{
              maxWidth: "90%", padding: "10px 12px", borderRadius: "3px",
              fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", lineHeight: 1.6,
              background: m.role === "user" ? "#1a1f2e" : "#0f1117",
              border: `1px solid ${m.role === "user" ? "#2a3a5a" : "#1e2433"}`,
              color: m.role === "user" ? "#93c5fd" : "#cbd5e1"
            }}>
              {m.text.split("\n").map((line, li) => (
                <span key={li}>{line}{li < m.text.split("\n").length - 1 && <br />}</span>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#f97316" }}>
            processing<span style={{ animation: "blink 1s infinite" }}>_</span>
          </div>
        )}
      </div>

      <div style={{ padding: "12px", borderTop: "1px solid #1e2433", display: "flex", gap: "8px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ask about OR/WA standards..."
          style={{
            flex: 1, background: "#0f1117", border: "1px solid #2a2a2a", color: "#e2e8f0",
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
            padding: "8px 10px", borderRadius: "3px", outline: "none"
          }}
        />
        <button
          onClick={send}
          style={{
            background: "#f97316", border: "none", color: "#0a0c10",
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 600,
            padding: "0 12px", borderRadius: "3px", cursor: "pointer"
          }}
        >→</button>
      </div>

      <div style={{ padding: "8px 12px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {QUICK_QUESTIONS.map(q => (
          <button
            key={q}
            onClick={() => setInput(q)}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "3px 6px",
              background: "transparent", border: "1px solid #1e2433", color: "#475569",
              borderRadius: "2px", cursor: "pointer", textAlign: "left"
            }}
          >{q}</button>
        ))}
      </div>
    </div>
  );
}
