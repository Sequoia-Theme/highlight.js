

/* Dark Orange Theme */
:root {
  --selection: #0F1014;
  --background: #0F1014;
  --text: #868690;
  --title: #868690;
  --built_in:  #ffbb88;
  --keyword: #8eb6f5;
  --function: #f58ee0;
  --params: #fdfdfe;
  --comment: #575861;
  --string: #575861;
  --number: #575861;
}

pre code {
  display: block;
  overflow-x: auto;
  padding: 10px;
  background: var(--background);
  -webkit-text-size-adjust: none;
}

pre code *::selection,
.hljs::selection {
  background: var(--selection) !important;
}

.hljs {
  color: var(--text);
}

.hljs-string {
  color: var(--string);
}

.hljs-number {
  color: var(--number) !important;
}

.hljs-title {
  color: var(--title) !important;
}

.hljs-built_in {
  color: var(--built_in) !important;
}

.hljs-keyword {
  color: var(--keyword) !important;
}

.hljs-function > .hljs-keyword {
  color: var(--function) !important;
  font-style: italic;
}

.hljs-params {
  color: var(--params);
}

.hljs-comment {
  color: var(--comment);
}
