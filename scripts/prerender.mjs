import { createServer } from 'vite'
import { readFileSync, writeFileSync } from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    ssr: {
      // Let Node handle these directly instead of Vite's SSR evaluator
      external: ['react', 'react-dom', 'react-dom/server'],
    },
  })

  try {
    // Use Vite's SSR loader for our app (handles JSX, CSS imports, etc.)
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx')

    // Render the app to static HTML
    const appHtml = renderToString(React.createElement(App))

    // Read the built index.html and inject the rendered content
    const template = readFileSync('dist/index.html', 'utf-8')
    const result = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )
    writeFileSync('dist/index.html', result)

    console.log('Prerendered index.html with static content')
  } catch (err) {
    console.error('Prerender failed:', err)
    process.exit(1)
  } finally {
    await vite.close()
  }
}

prerender()
