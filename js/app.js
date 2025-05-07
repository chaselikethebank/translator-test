async function renderCards(lang = 'en') {
    const cards = await fetchCrmCards()
    const container = document.getElementById('cards')
    container.innerHTML = ''
  
    for (let card of cards) {
      if (lang !== 'en') {
        const translated = await translateTextBatch([card.title, card.desc], lang)
        card.title = translated[0]
        card.desc = translated[1]
      }
  
      const div = document.createElement('div')
      div.innerHTML = `<h3>${card.title}</h3><p>${card.desc}</p>`
      container.appendChild(div)
    }
  }
  