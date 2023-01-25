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
    title: '[Fabric] Iron Chests',
    link: 'https://www.curseforge.com/minecraft/mc-mods/iron-chests-fabric',
    image: 'https://media.forgecdn.net/avatars/thumbnails/294/612/64/64/637333797757444007.png'
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
    title: 'Oh The Biomes You\'ll Go Refabricated',
    link: 'https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go-fabric',
    image: 'https://media.forgecdn.net/avatars/thumbnails/281/230/64/64/637284761944802812.png'
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
    title: 'TerraBlender (Fabric)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/terrablender-fabric',
    image: 'https://media.forgecdn.net/avatars/thumbnails/478/13/64/64/637773349975382748.png'
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

let search

function render() {
  const modContainer = document.getElementById('mod-container')

  modContainer.innerHTML = ''

  var elements = []

  if (!search) {
    mods.forEach((mod) => {
      var container = document.createElement('div')
      container.classList.add('mod-display')
      
      var img = document.createElement('img')
      img.classList.add('mod-img')
      img.setAttribute('src', mod.image)
      container.append(img)

      var info = document.createElement('div')
      info.classList.add('mod-info')

      var title = document.createElement('h2')
      title.classList.add('mod-title')
      title.innerText = mod.title

      var link = document.createElement('a')
      link.classList.add('mod-link')
      link.setAttribute('href', mod.link)
      link.setAttribute('target', '_blank')
      link.innerText = mod.link

      info.append(title)
      info.append(link)
      container.append(info)

      elements.push(container)
    })
  }

  else {
    mods.filter(m => m.title.toLowerCase().includes(search.toLowerCase())).forEach((mod) => {
      var container = document.createElement('div')
      container.classList.add('mod-display')
      
      var img = document.createElement('img')
      img.classList.add('mod-img')
      img.setAttribute('src', mod.image)
      container.append(img)

      var info = document.createElement('div')
      info.classList.add('mod-info')

      var title = document.createElement('h2')
      title.classList.add('mod-title')
      title.innerText = mod.title

      var link = document.createElement('a')
      link.classList.add('mod-link')
      link.setAttribute('href', mod.link)
      link.setAttribute('target', '_blank')
      link.innerText = mod.link

      info.append(title)
      info.append(link)
      container.append(info)

      elements.push(container)
    })
  }

  elements.forEach((element) => {
    modContainer.append(element)
  })

}

function init() {
  const clearBtn = document.getElementById('clear')

  document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault()
    render()
  })
  
  document.forms[0].children[0].addEventListener('keyup', (e) => {
    if (e.target.value == '') {
      search = null
      if (!clearBtn.classList.contains('hidden')) clearBtn.classList.add('hidden')
    }
    else {
      search = e.target.value
      if (clearBtn.classList.contains('hidden')) clearBtn.classList.remove('hidden')
    }
  })
  document.forms[0].children[2].addEventListener('click', () => {
    document.forms[0].children[0].value = ''
    search = null
    if (!clearBtn.classList.contains('hidden')) clearBtn.classList.add('hidden')
    render()
  })
}

render()
init()