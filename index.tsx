import { h, render, Component, Fragment } from 'https://esm.sh/preact';
import { useState, useCallback } from 'https://esm.sh/preact/hooks';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

const pageData = {
  "meta": {
    "site_name": "Employee Recognition",
    "page_title": "Recognition Kickstarter Audit — 7-Day Audit to Unlock Engagement",
    "page_description": "A 7-day recognition audit that delivers a clear, vertical-aware 90-day roadmap to improve participation, frequency, coverage and sentiment across your teams.",
    "canonical_url": "https://example.com/recognition",
    "og_image": "/og/recognition.png",
    "language": "en-GB"
  },
  "brand": {
    "logo_src": "/brand/logo.svg",
    "primary_color": "#1E90FF",
    "secondary_color": "#0F172A",
    "accent_color": "#22C55E",
    "background_color": "#FFFFFF",
    "text_color": "#0B1221",
    "font_heading": "Inter",
    "font_body": "Inter"
  },
  "layout": {
    "container_width_px": 1120,
    "grid_gutter_px": 24,
    "sections_order": [ "hero", "value_props", "proof", "process", "kpis", "pricing", "faq", "cta", "footer" ]
  },
  "sections": {
    "hero": {
      "variant": "left_text_right_art",
      "eyebrow": "Employee Recognition",
      "headline": "Unlock a recognition system that actually moves the numbers",
      "subheadline": "In 7 days, get a vertical-aware audit and a 90-day roadmap to raise participation, frequency and coverage — without new software.",
      "primary_cta": {"label": "Book a consultation", "href": "/book", "style": "primary"},
      "secondary_cta": {"label": "Download the audit template (£199)", "href": "/assets/recognition-audit-template.pdf", "style": "ghost"},
      "hero_image_src": "https://storage.googleapis.com/gemini-prod-us-central1-c223a10bbe0a495f/images/223126f9-03f1-419b-a010-09e7c53e8310.png",
      "badges": ["AI + Human", "7-day turnaround", "Vertical-specific"]
    },
    "value_props": {
      "headline": "What you'll get",
      "items": [
        {"title": "Clear 90-day plan", "body": "Decision-ready recommendations mapped to your workflows and channels.", "icon": "🗺️"},
        {"title": "Vertical benchmark", "body": "Compare frequency, coverage and visibility to peers in your industry.", "icon": "📊"},
        {"title": "Bias and blind spot scan", "body": "Identify inequities across department, shift, location or tenure.", "icon": "🔍"},
        {"title": "Rituals and automation", "body": "Lightweight, proven rituals and nudges tailored to your tools.", "icon": "✨"}
      ]
    },
    "proof": {
      "headline": "Why recognition drives performance",
      "bullets": [
        "Participation and frequency correlate with engagement and retention",
        "Coverage across teams reduces inequity and disengagement",
        "Specific, visible praise reinforces the behaviours that matter"
      ],
      "vertical_inserts": {
        "SaaS": {
          "org_profile": "Hybrid dev + GTM. Slack-centric. Sprint cadences.",
          "channels": ["Slack #kudos", "Sprint reviews", "Demo days", "CRM kudos"],
          "rituals": ["Weekly sprint-end kudos", "Monthly Customer Love", "Quarterly Release Heroes"],
          "kpis": {"peer_mentions_per_person_weekly": "≥ 0.5", "manager_coverage": "≥ 70%"},
          "risks": ["Bias toward product/eng", "Vague praise"]
        },
        "E-commerce": {
          "org_profile": "HQ + warehouse + CX. Mixed shifts. Multilingual.",
          "channels": ["Shift briefings", "WhatsApp", "Printed boards", "CX platform"],
          "rituals": ["Daily Accuracy Hero", "Weekly 5-Star Save", "Monthly Zero-Defect Streak"]
        }
      }
    },
    "process": {
      "headline": "7-day cadence",
      "steps": [
        {"day": "0", "title": "Kickoff", "desc": "Access, stakeholders, goals"},
        {"day": "1-2", "title": "Discovery", "desc": "Artifacts, tools, policy, message corpus"},
        {"day": "3-4", "title": "Interviews + benchmarking", "desc": "2–3 roles, vertical comparison"},
        {"day": "5", "title": "Synthesis", "desc": "Map to pillars and gaps"},
        {"day": "6", "title": "QA", "desc": "AI + human, client pack prep"},
        {"day": "7", "title": "Readout", "desc": "Executive summary and 90-day roadmap"}
      ],
      "pillars": ["Frequency", "Coverage", "Specificity", "Visibility", "Equity"]
    },
    "kpis": {
      "headline": "Targets we aim to move",
      "table": [
        {"metric": "Participation rate", "target": "75%+", "impact_area": "Engagement"},
        {"metric": "Recognition frequency", "target": "2+ per employee monthly", "impact_area": "Culture"},
        {"metric": "Coverage across teams", "target": "90%+ of departments", "impact_area": "Inclusion"},
        {"metric": "Positive sentiment", "target": "15%+ increase in eNPS", "impact_area": "Retention"}
      ]
    },
    "pricing": {
      "headline": "Simple, fixed pricing",
      "packages": [
        {
          "name": "Recognition Kickstarter Audit",
          "price_gbp": 199,
          "billing": "Upfront",
          "turnaround": "7 days",
          "includes": [
            "Executive summary",
            "Findings by pillar",
            "Quick-wins checklist",
            "90-day roadmap",
            "KPI baseline + targets",
            "Vertical-specific templates"
          ],
          "notes": "Additional interviews or artifact reviews quoted separately"
        }
      ]
    },
    "faq": {
      "headline": "Frequently asked questions",
      "items": [
        {"q": "Do we need new software?", "a": "No. We design rituals and nudges that fit your current tools and channels."},
        {"q": "How much time do you need from us?", "a": "Typically 2–3 short interviews plus access to existing artifacts and channels."},
        {"q": "Is the plan tailored to our vertical?", "a": "Yes. We benchmark and adapt by industry patterns and constraints."},
        {"q": "What happens after the audit?", "a": "You receive a 90-day roadmap and templates to implement immediately."}
      ]
    },
    "cta": {
      "headline": "Ready to make recognition a performance lever?",
      "subheadline": "Book a consultation or start with the Kickstarter Audit.",
      "primary_cta": {"label": "Book a consultation", "href": "/book"},
      "secondary_cta": {"label": "Get the £199 Audit", "href": "/checkout/audit"}
    },
    "footer": {
      "links": [
        {"label": "Privacy", "href": "/privacy"},
        {"label": "Terms", "href": "/terms"},
        {"label": "Contact", "href": "/contact"}
      ],
      "social": [
        {"platform": "LinkedIn", "href": "https://linkedin.com"}
      ],
      "copyright": "© 2025 Recognition"
    }
  }
};

const CTAButton = ({ label, href, style = 'primary' }) => {
    const className = style === 'primary' ? 'btn btn-primary' : 'btn btn-ghost';
    return html`<a href=${href} class=${className}>${label}</a>`;
};

const Hero = ({ data }) => html`
    <section class="hero" aria-labelledby="hero-headline">
        <div class="container">
            <div class="hero-content">
                <span class="eyebrow">${data.eyebrow}</span>
                <h1 id="hero-headline">${data.headline}</h1>
                <p class="subheadline">${data.subheadline}</p>
                <div class="cta-group">
                    <${CTAButton} ...${data.primary_cta} />
                    <${CTAButton} ...${data.secondary_cta} />
                </div>
                <div class="badges">
                    ${data.badges.map(badge => html`<span class="badge">${badge}</span>`)}
                </div>
            </div>
            <div class="hero-image-wrapper">
                <img src="${data.hero_image_src}" alt="Abstract illustration of recognition and team engagement" />
            </div>
        </div>
    </section>
`;

const ValueProps = ({ data }) => html`
    <section class="section" aria-labelledby="value-props-headline">
        <div class="container">
            <div class="section-header">
                <h2 id="value-props-headline">${data.headline}</h2>
            </div>
            <div class="value-props-grid">
                ${data.items.map(item => html`
                    <div class="value-prop-card">
                        <div class="icon" aria-hidden="true">${item.icon}</div>
                        <h3>${item.title}</h3>
                        <p>${item.body}</p>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const Proof = ({ data }) => html`
    <section class="section" aria-labelledby="proof-headline">
        <div class="container">
            <div class="section-header">
                 <h2 id="proof-headline">${data.headline}</h2>
            </div>
            <div class="proof-content">
                <ul>
                    ${data.bullets.map(bullet => html`<li>${bullet}</li>`)}
                </ul>
            </div>
            <div class="vertical-inserts-grid">
                {/* FIX: Explicitly type 'value' as 'any' to resolve TypeScript errors because Object.entries() types it as 'unknown'. */}
                ${Object.entries(data.vertical_inserts).map(([key, value]: [string, any]) => html`
                    <div class="vertical-card">
                        <h4>For ${key}</h4>
                        <p><strong>Profile:</strong> ${value.org_profile}</p>
                        <p><strong>Channels:</strong></p>
                        <ul>${value.channels.map(c => html`<li>${c}</li>`)}</ul>
                        <p><strong>Rituals:</strong></p>
                        <ul>${value.rituals.map(r => html`<li>${r}</li>`)}</ul>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const Process = ({ data }) => html`
    <section class="section" aria-labelledby="process-headline">
        <div class="container">
            <div class="section-header">
                <h2 id="process-headline">${data.headline}</h2>
            </div>
            <div class="process-timeline">
                ${data.steps.map(step => html`
                    <div class="timeline-item">
                       <div class="timeline-day">Day<br/>${step.day}</div>
                       <div class="timeline-content">
                            <h4>${step.title}</h4>
                            <p>${step.desc}</p>
                       </div>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const Kpis = ({ data }) => html`
    <section class="section" aria-labelledby="kpis-headline">
        <div class="container">
            <div class="section-header">
                <h2 id="kpis-headline">${data.headline}</h2>
            </div>
            <div class="kpi-table-wrapper">
                <table class="kpi-table">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Target</th>
                            <th>Impact Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.table.map(row => html`
                            <tr>
                                <td>${row.metric}</td>
                                <td>${row.target}</td>
                                <td>${row.impact_area}</td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
`;

const Pricing = ({ data }) => {
    const pkg = data.packages[0];
    return html`
        <section class="section" aria-labelledby="pricing-headline">
            <div class="container">
                <div class="section-header">
                    <h2 id="pricing-headline">${data.headline}</h2>
                </div>
                <div class="pricing-card">
                    <h3>${pkg.name}</h3>
                    <div class="price">£${pkg.price_gbp} <span>/ ${pkg.billing}</span></div>
                    <p>Turnaround in ${pkg.turnaround}.</p>
                    <ul>
                        ${pkg.includes.map(item => html`<li>${item}</li>`)}
                    </ul>
                     <${CTAButton} label="Get the £199 Audit" href="/checkout/audit" style="primary" />
                </div>
            </div>
        </section>
    `;
};

const Faq = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return html`
        <section class="section" aria-labelledby="faq-headline">
            <div class="container">
                <div class="section-header">
                    <h2 id="faq-headline">${data.headline}</h2>
                </div>
                <div class="faq-container">
                    ${data.items.map((item, index) => html`
                        <div class=${"faq-item " + (openIndex === index ? 'open' : '')}>
                            <button class="faq-question" onClick=${() => toggleFaq(index)} aria-expanded=${openIndex === index}>
                                <span>${item.q}</span>
                                <span class="faq-toggle" aria-hidden="true">+</span>
                            </button>
                            <div class="faq-answer">
                                <p>${item.a}</p>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

const CtaSection = ({ data }) => html`
    <section class="section cta-section" aria-labelledby="cta-headline">
        <div class="container">
            <div class="section-header">
                <h2 id="cta-headline">${data.headline}</h2>
                <p>${data.subheadline}</p>
                 <div class="cta-group">
                    <${CTAButton} label=${data.primary_cta.label} href=${data.primary_cta.href} style="primary" />
                    <${CTAButton} label=${data.secondary_cta.label} href=${data.secondary_cta.href} style="ghost" />
                </div>
            </div>
        </div>
    </section>
`;

const LinkedInIcon = () => html`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
`;

const Footer = ({ data }) => html`
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">Employee Recognition</div>
                <nav class="footer-links" aria-label="Footer navigation">
                    <ul>
                        ${data.links.map(link => html`<li><a href=${link.href}>${link.label}</a></li>`)}
                    </ul>
                </nav>
                <div class="footer-social">
                    <ul>
                        ${data.social.map(s => html`
                            <li>
                                <a href=${s.href} aria-label=${s.platform}>
                                    <${LinkedInIcon} />
                                </a>
                            </li>
                        `)}
                    </ul>
                </div>
                <div class="footer-copyright">
                    <p>${data.copyright}</p>
                </div>
            </div>
        </div>
    </footer>
`;

const sectionComponentMap = {
    hero: Hero,
    value_props: ValueProps,
    proof: Proof,
    process: Process,
    kpis: Kpis,
    pricing: Pricing,
    faq: Faq,
    cta: CtaSection,
    footer: Footer
};

const App = () => {
    return html`
        <main>
            ${pageData.layout.sections_order.map(sectionName => {
                const Component = sectionComponentMap[sectionName];
                const data = pageData.sections[sectionName];
                if (Component && data) {
                    return html`<${Component} data=${data} />`;
                }
                return null;
            })}
        </main>
    `;
};

render(html`<${App} />`, document.getElementById('root'));