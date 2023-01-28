// List of mods
const mods = [
  {
    title: 'Architectury API (Fabric/Forge)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/architectury-api',
    image: 'https://media.forgecdn.net/avatars/thumbnails/313/420/64/64/637408811378175814.png'
  },
  {
    title: 'Bamboo Everything (Forge/Fabric)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/bamboo-everything',
    image: 'https://media.forgecdn.net/avatars/thumbnails/425/424/64/64/637654319432130352.png'
  },
  {
    title: 'Basic Shields [Fabric]',
    link: 'https://www.curseforge.com/minecraft/mc-mods/basic-shields-fabric',
    image: 'https://media.forgecdn.net/avatars/thumbnails/475/725/64/64/637768083099063556.png'
  },
  {
    title: 'BCLib',
    link: 'https://www.curseforge.com/minecraft/mc-mods/bclib',
    image: 'https://media.forgecdn.net/avatars/thumbnails/396/271/64/64/637595638220205053.png'
  },
  {
    title: 'BetterEnd',
    link: 'https://www.curseforge.com/minecraft/mc-mods/betterend',
    image: 'https://media.forgecdn.net/avatars/thumbnails/471/575/64/64/637760294980874674.png'
  },
  {
    title: 'BetterNether',
    link: 'https://www.curseforge.com/minecraft/mc-mods/betternether',
    image: 'https://media.forgecdn.net/avatars/thumbnails/471/574/64/64/637760293478357857.png'
  },
  {
    title: 'Cardinal Components',
    link: 'https://www.curseforge.com/minecraft/mc-mods/cardinal-components',
    image: 'https://media.forgecdn.net/avatars/thumbnails/495/295/64/64/637808343701625758.png'
  },
  {
    title: 'Cloth Config API (Fabric/Forge)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/cloth-config',
    image: 'https://media.forgecdn.net/avatars/thumbnails/282/467/64/64/637289313020452406.png'
  },
  {
    title: 'Expanded Storage',
    link: 'https://www.curseforge.com/minecraft/mc-mods/expanded-storage',
    image: 'https://media.forgecdn.net/avatars/thumbnails/648/548/64/64/638050146344021856.png'
  },
  {
    title: 'Fabric API',
    link: 'https://www.curseforge.com/minecraft/mc-mods/fabric-api',
    image: 'https://media.forgecdn.net/avatars/thumbnails/185/822/64/64/636829723898798601.png'
  },
  {
    title: 'Fabric Language Kotlin',
    link: 'https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin',
    image: 'https://media.forgecdn.net/avatars/thumbnails/181/492/64/64/636800855682272538.png'
  },
  {
    title: 'Fabric Shield Lib',
    link: 'https://www.curseforge.com/minecraft/mc-mods/fabric-shield-lib',
    image: 'https://media.forgecdn.net/avatars/thumbnails/270/145/64/64/637244079425307064.png'
  },
  {
    title: 'FPS - Display',
    link: 'https://www.curseforge.com/minecraft/mc-mods/fpsdisplay',
    image: 'https://media.forgecdn.net/avatars/thumbnails/336/372/64/64/637472456792852267.png'
  },
  {
    title: 'Industrial Revolution',
    link: 'https://www.curseforge.com/minecraft/mc-mods/industrual-revolution',
    image: 'https://media.forgecdn.net/avatars/thumbnails/292/719/64/64/637326741883981172.png'
  },
  {
    title: 'Light Overlay (RIft/Forge/Fabric)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/light-overlay',
    image: 'https://media.forgecdn.net/avatars/thumbnails/208/146/64/64/636972456902715264.png'
  },
  {
    title: 'Mod Menu',
    link: 'https://www.curseforge.com/minecraft/mc-mods/modmenu',
    image: 'https://media.forgecdn.net/avatars/thumbnails/281/367/64/64/637285257027983134.png'
  },
  {
    title: 'More Geodes',
    link: 'https://www.curseforge.com/minecraft/mc-mods/emerald-geodes',
    image: 'https://media.forgecdn.net/avatars/thumbnails/545/929/64/64/637880449229790304.png'
  },
  {
    title: 'The One Probe Fabric',
    link: 'https://www.curseforge.com/minecraft/mc-mods/the-one-probe-fabric',
    image: 'https://media.forgecdn.net/avatars/thumbnails/496/316/64/64/637810794394638170.png'
  },
  {
    title: 'Roughly Enough Items Fabric/Forge (REI)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items',
    image: 'https://media.forgecdn.net/avatars/thumbnails/282/25/64/64/637287701215436754.png'
  },
  {
    title: 'Traveler\'s Backpack [Fabric]',
    link: 'https://www.curseforge.com/minecraft/mc-mods/travelers-backpack-fabric',
    image: 'https://media.forgecdn.net/avatars/thumbnails/623/756/64/64/638018179443585069_animated.gif'
  },
  {
    title: 'Trinkets (Fabric)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/trinkets',
    image: 'https://media.forgecdn.net/avatars/thumbnails/392/688/64/64/637587073088891583.png'
  },
  {
    title: 'Xaero\'s Minimap',
    link: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap',
    image: 'https://media.forgecdn.net/avatars/thumbnails/92/854/64/64/636258666554688823.png'
  },
  {
    title: 'Xaero\'s World Map',
    link: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map',
    image: 'https://media.forgecdn.net/avatars/thumbnails/196/654/64/64/636886857118683130.png'
  }
]

// Variable for search text
let search

// Render mods based on search
function render() {
  // Get the mod container
  const modContainer = document.getElementById('mod-container')

  // Reset the mod container
  modContainer.innerHTML = ''

  // Elements to add to the mod container
  var elements = []

  // Mods to add (all by default)
  var searchedMods = [...mods]
  // Filters mods with the search string in its name (if it is not empty)
  if (search) searchedMods = mods.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))

  // Create each card and add it to the elements variable
  searchedMods.forEach((mod) => {
    // Create card
    var container = document.createElement('div')
    container.classList.add('mod-display')
    
    // Add image to card
    var img = document.createElement('img')
    img.classList.add('mod-img')
    img.setAttribute('src', mod.image)
    container.append(img)

    // Create info element to hold the title and link
    var info = document.createElement('div')
    info.classList.add('mod-info')

    // Create the title element
    var title = document.createElement('h2')
    title.classList.add('mod-title')
    title.innerText = mod.title

    // Create the link element
    var link = document.createElement('a')
    link.classList.add('mod-link')
    link.setAttribute('href', mod.link)
    link.setAttribute('target', '_blank')
    link.innerText = mod.link

    // Add the link and title to the info element
    info.append(title)
    info.append(link)
    // Add the info element to the main container
    container.append(info)

    // Add the whole element into the elements variable
    elements.push(container)
  })

  // Add the elements to the page
  elements.forEach((element) => {
    modContainer.append(element)
  })

}

// Called when the page is loaded
function init() {
  // Get the clear button in the search bar
  const clearBtn = document.getElementById('clear')

  // Render the searched mods when the search is submitted
  document.forms[0].addEventListener('submit', (e) => {
    // Stop page from refreshing
    e.preventDefault()
    // Render mods
    render()
  })
  
  // Listen for when character is typed
  document.forms[0].children[0].addEventListener('keyup', (e) => {
    // Search is empty
    if (e.target.value == '') {
      // Reset the search variable
      search = null
      // Hide the clear button
      if (!clearBtn.classList.contains('hidden')) clearBtn.classList.add('hidden')
    }
    // Search is not empty
    else {
      // Set the search variable to the text in the search input
      search = e.target.value
      // Reveal the clear button
      if (clearBtn.classList.contains('hidden')) clearBtn.classList.remove('hidden')
    }
  })
  // Listen for when the clear button is clicked
  document.forms[0].children[2].addEventListener('click', () => {
    // Reset the search input
    document.forms[0].children[0].value = ''
    // Reset the search variable
    search = null
    // Hide the clear button
    if (!clearBtn.classList.contains('hidden')) clearBtn.classList.add('hidden')
    // Render mods
    render()
  })
}

// Initial render so the page does not load empty
render()
// Start listening for events
init()