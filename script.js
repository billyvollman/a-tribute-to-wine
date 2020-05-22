// src="https://instagram.fmel7-1.fna.fbcdn.net/v/t51.2885-15/e35/50286414_145153786484567_2560871604719469309_n.jpg?_nc_ht=instagram.fmel7-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=UkNNGTUzlEUAX9XpP24&amp;oh=63f9fa3f76161504f08dcedc8c3f1784&amp;oe=5EF07EF9"
// src="https://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/71/2016/04/tyrion.gif"

const facts = [
  data = {
    fact: "The oldest winemakers are Georgian 🇬🇪 🍷 </br> Georgia is generally considered the ‘cradle of wine’, as archaeologists have traced the world’s first known wine creation back to the people of the South Caucasus in 6,000BC.",
    source: "https://www.nationalgeographic.com/travel/destinations/asia/georgia/sponsor-content-secret-birthplace-of-wine/"
  },
  data = {
    fact: "As red wines age, they become lighter in color.",
    source: "https://winefolly.com/tips/facts-about-red-wine/"
  },
  data = {
    fact: "One grape vine produces 10 bottles.",
    source: "http://siponthisjuice.com/fun-odd-amusing-facts-about-wine/"
  },
  data = {
    fact: "White wine can be made from red & white grapes.",
    source: "http://thetaste.ie/wp/21-fun-facts-about-wine/"
  },
  data = {
    fact: "It is widely believed among wine historians that the concept of pairing wine with cheese originated in France 🇫🇷 🍷🧀.",
    source: "https://learn.winecoolerdirect.com/wine-cheese-pairing/"
  },
  data = {
    fact: "Wine is fat-free and cholesterol-free.",
    source: "http://thetaste.ie/wp/21-fun-facts-about-wine/"
  },
  data = {
    fact: "Two new studies have shown that polyphenols in wine (and chocolate!) increase blood flow and oxygen to the brain, boosting cognitive ability. The effect gets even more beneficial as you age, since there is a natural reduction in blood supply around the brain later in life. All the more reason to have a glass of ‘medicine’ and a little dessert every chance you get.",
    source: "http://thetaste.ie/wp/21-fun-facts-about-wine/"
  },
  data = {
    fact: "Hippocrates (c.460 – c. 370 BC), also known as the ‘father of medicine’, used wine in many of his recorded remedies. He used it for lower fevers and as a general antiseptic. It was a remedy he used often for his ailing patients.",
    source: "https://www.gooseneckvineyards.com/20-fun-facts-wine/"
  },
  data = {
    fact: "The oldest bottle of wine is at least 1,650 years old and known as Römerwein, or the Speyer wine bottle. The 1.5-liter glass vessel was discovered during the excavation of a Roman nobleman’s tomb in modern-day Germany.",
    source: "https://mymodernmet.com/oldest-unopened-bottle-wine-world/"
  },
  data = {
    fact: "The oldest known wine cellar is on the Titanic. When divers went down to the wreckage, surprisingly most of the bottles were still in tact.",
    source: "https://www.gooseneckvineyards.com/20-fun-facts-wine/"
  },
]

const wineFacts = document.querySelector(".wine-facts")
let ul = '<ul>'
facts.forEach(item => {
  ul += `<li>
          ${item.fact}
          <a href=${item.source} target="_blank" >Source</a>
        </li>`
})
ul += '</ul>';
wineFacts.innerHTML = ul


// bullet point info
{/* <ul>
        <li>The oldest winemakers are Georgian 🇬🇪 🍷 </br> Georgia is generally considered the ‘cradle of wine’, as
          archaeologists have traced the world’s first known wine creation back to the people of the South Caucasus in
          6,000BC.
          <a href="https://www.nationalgeographic.com/travel/destinations/asia/georgia/sponsor-content-secret-birthplace-of-wine/"
            target="_blank">Source</a>
        </li>
        <li>As red wines age, they become lighter in color. <a href="https://winefolly.com/tips/facts-about-red-wine/"
            target="_blank">Source</a> </li>
        </li>
        <li>One grape vine produces 10 bottles.
          <a href="http://siponthisjuice.com/fun-odd-amusing-facts-about-wine/" target="_blank">Source</a>
        </li>
        <li>White wine can be made from red & white grapes.
          <a href="http://thetaste.ie/wp/21-fun-facts-about-wine/" target="_blank">Source</a>
        </li>
        <li>It is widely believed among wine historians that the concept of pairing wine with cheese originated in
          France 🇫🇷 🍷🧀.
          <a href="https://learn.winecoolerdirect.com/wine-cheese-pairing/" target="_blank">Source</a>
        </li>
        <li>Wine is fat-free and cholesterol-free.
          <a href="http://thetaste.ie/wp/21-fun-facts-about-wine/" target="_blank">Source</a>
        </li>
        <li>Two new studieshave shown that polyphenols in wine (and chocolate!) increase blood flow and oxygen to the
          brain, boosting cognitive ability. The effect gets even more beneficial as you age, since there is a natural
          reduction in blood supply around the brain later in life. All the more reason to have a glass of ‘medicine’
          and a little dessert every chance you get.
          <a href="http://thetaste.ie/wp/21-fun-facts-about-wine/" target="_blank">Source</a>
        </li>
        <li>Hippocrates (c.460 – c. 370 BC), also known as the ‘father of medicine’, used wine in many of his recorded
          remedies. He used it for lower fevers and as a general antiseptic. It was a remedy he used often for his
          ailing patients. <a href="https://www.gooseneckvineyards.com/20-fun-facts-wine/" target="_blank">Source</a>
        </li>
        <li>The oldest bottle of wine is at least 1,650 years old and known as Römerwein, or the Speyer wine bottle. The
          1.5-liter glass vessel was discovered during the excavation of a Roman nobleman’s tomb in modern-day Germany.
          <a href="https://mymodernmet.com/oldest-unopened-bottle-wine-world/" target="_blank">Source</a></li>
        <li>The oldest known wine cellar is on the Titanic. When divers went down to the wreckage, surprisingly most of
          the bottles were still in tact. <a href="https://www.gooseneckvineyards.com/20-fun-facts-wine/"
            target="_blank">Source</a></li>
      </ul> */}