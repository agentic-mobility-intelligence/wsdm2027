// Homepage copy follows the motivation, scope and objectives in the supplied proposal.
export function renderHome({ event, themes, workshop, pending, esc, renderTopic, arrow, dates, contactBand }) {
  const diagram = (name, title, caption, alt, steps) => `<div class="diagram-panel" id="panel-${name}" role="tabpanel" aria-labelledby="tab-${name}" tabindex="0"${name === 'agentic' ? '' : ' hidden'}><figure class="mobility-diagram"><a class="figure-link" href="assets/img/${name}-mobility.png" data-lightbox data-caption="${esc(title)}"><img src="assets/img/${name}-mobility.webp" width="1448" height="1086" loading="lazy" decoding="async" alt="${esc(alt)}"><span class="figure-zoom">View full size ${arrow}</span></a><figcaption class="diagram-caption">${esc(caption)}</figcaption></figure><div class="diagram-flow" aria-label="${esc(steps.join(', '))}">${steps.map(step=>`<span>${esc(step)}</span>`).join('<i aria-hidden="true">→</i>')}${name === 'agentic' ? '<i aria-hidden="true">↻</i>' : ''}</div></div>`;
  return `<section class="hero hero-intro"><div class="container">
    <div class="workshop-intro-grid">
      <div class="workshop-intro-copy">
        <div class="eyebrow light"><span class="small-dot"></span>AMI’27 · ${pending ? 'Proposed workshop at WSDM 2027' : 'Workshop at WSDM 2027'}</div>
        <h1>Agentic Mobility <span>Intelligence</span></h1>
        <p class="hero-subtitle">${esc(event.subtitle)}</p>
        <p class="workshop-introduction">${esc(workshop.heroIntroduction)}</p>
        <div class="hero-actions"><a class="button button-mint" href="cfp.html">Call for Papers <span aria-hidden="true">→</span></a><a class="text-link text-link-light" href="#motivation">Explore the Workshop <span aria-hidden="true">↓</span></a></div>
      </div>
      <aside class="workshop-focus" aria-labelledby="workshop-focus-title"><div class="eyebrow light">The workshop’s focus</div><h2 id="workshop-focus-title">What will we explore?</h2><ol>${workshop.focusQuestions.map((question,index)=>`<li><span aria-hidden="true">0${index+1}</span><p>${esc(question)}</p></li>`).join('')}</ol><a class="text-link text-link-light" href="#topics">Explore the topics <span aria-hidden="true">↓</span></a></aside>
    </div>
    <div class="event-facts"><div><span>Tentative workshop date</span><strong>${esc(event.date)}</strong></div><div><span>Half-day workshop</span><strong>${esc(event.time)} HKT</strong></div><div><span>Attendance mode</span><strong>In person <span class="fact-muted">· Venue TBA</span></strong></div><div><span>Research focus</span><strong>Mining · Recommendation · Interaction</strong></div></div>
  </div></section>

  <section class="section motivation-section" id="motivation"><div class="container"><div class="about-grid">
    <div class="proposal-prose"><div class="section-heading"><div><h2>About the Workshop</h2></div></div>${workshop.introduction.map(paragraph=>`<p>${esc(paragraph)}</p>`).join('')}<section class="workshop-objectives-section" id="objectives" aria-labelledby="objectives-title"><h3 id="objectives-title">Workshop Objectives</h3><ul class="workshop-objectives">${workshop.objectives.map(objective=>`<li><strong>${esc(objective.title)}.</strong> ${esc(objective.text)}</li>`).join('')}</ul></section></div>
    <aside class="about-diagrams" id="closed-loop" aria-labelledby="diagram-title"><h3 id="diagram-title">From Prediction to Action</h3>
      <div class="concept-tabs diagram-tabs" role="tablist" aria-label="Mobility system diagrams"><button type="button" class="selected" id="tab-agentic" data-tab role="tab" aria-controls="panel-agentic" aria-selected="true" tabindex="0">Agentic Mobility</button><button type="button" id="tab-traditional" data-tab role="tab" aria-controls="panel-traditional" aria-selected="false" tabindex="-1">Traditional Mobility</button></div>
      ${diagram('agentic','Agentic Mobility: The Feedback Loop',workshop.definition,'Agentic mobility intelligence: data, predictions, recommendations, user responses, a changed environment and new observations form a feedback loop.',['Mine','Recommend','Respond','Learn'])}
      ${diagram('traditional','Traditional Mobility Intelligence','Forecasts and representations help explain mobility patterns and predict demand, travel times, and traffic.','Traditional mobility intelligence: mobility data is processed by a model to predict demand, arrival times and traffic.',['Data','Model','Prediction'])}
      <noscript><p class="diagram-fallback"><a href="assets/img/traditional-mobility.png">View the traditional mobility diagram</a></p></noscript>
    </aside>
  </div></div></section>

  <section class="section homepage-topics-section" id="topics"><div class="container"><div class="section-heading"><div><h2>Topics of interest</h2></div><a class="text-link" href="cfp.html#topics">Full scope & submission guidelines ${arrow}</a></div><p class="proposal-section-lead">We welcome methodological, empirical, systems, dataset, and position contributions across three themes.</p><div class="homepage-topics">${themes.map(theme=>`<article class="homepage-topic" id="theme-${theme.number}"><span class="theme-number">${theme.number}</span><h3>${esc(theme.title)}</h3><ul class="clean-list">${theme.summaryTopics.map(topic=>`<li>${renderTopic(topic)}</li>`).join('')}</ul></article>`).join('')}</div><p class="topics-scope">Across these themes, we encourage location privacy, equitable access, robustness, user agency, and responsible experimentation.</p></div></section>

  <section class="section participation-section"><div class="container"><div class="row"><div class="col-md-6 participation-copy"><h2>Who Should Join?</h2><p>${esc(workshop.audience)}</p><p>${esc(workshop.participation)}</p><div class="home-speaker-notice"><h3>Invited speakers and panelists</h3><p>${esc(workshop.speakerAnnouncement)}</p><a class="text-link" href="speakers.html">Speaker information ${arrow}</a></div><a class="button button-navy" href="cfp.html">View the call for papers ${arrow}</a></div><div class="col-md-5 col-md-offset-1"><div class="dates-box"><div class="dates-heading"><h3>Important dates</h3></div>${dates(true)}</div></div></div></div></section>
    ${contactBand('Contact the organizing team','For questions about submissions, the workshop or participation, please get in touch.')}`;
}
