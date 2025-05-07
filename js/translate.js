async function translateTextBatch(texts, targetLang = 'es') {
    const results = []
    for (const text of texts) {
      const res = await axios.post(
        'https://libretranslate.de/translate',
        {
          q: text,
          source: 'en',
          target: targetLang,
          format: 'text'
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      results.push(res.data.translatedText)
    }
    return results
  }
  