import React from "react"

import { useEffect, useState } from "react"

import { quotes } from "@config/quotes"

// import QuoteLeft from '../images/assets/graphic/quote-left-solid.svg'

const QuoteSection = () => {
  const [quote, setQuote] = useState({
    quote: ``,
    author: ``,
  })

  useEffect(() => {
    const q = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(q)
  }, [])

  return (
    <>
      {quote.quote ? (
        <>
          <span className="material-symbols-rounded text-white w-12 h-12 text-5xl">
            format_quote
          </span>
          <p className="my-4 text-2xl font-sailec">{quote.quote}</p>
          <cite className="text-base italic tracking-wider">
            &mdash; {quote.author}
          </cite>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default QuoteSection
