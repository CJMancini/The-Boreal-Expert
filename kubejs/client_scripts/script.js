// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.add.items', event => {
    event.add(Item.of('minecraft:player_head', '{RepairCost:0,SkullOwner:"Bulachudo",display:{Name:\'{"text":"Credits: Modpack create by Bulachudo"}\'}}'))
  })

  onEvent('jei.hide.items', event => {
    event.hide('iceandfire:dragonforge_ice_core_disabled')
    event.hide('iceandfire:dragonforge_lightning_core_disabled')
    event.hide('iceandfire:dragonforge_fire_core_disabled')
    
  })
 
  onEvent('jei.remove.categories', event => { 
    event.remove('iceandfire:fire_dragon_forge')
    event.remove('iceandfire:lightning_dragon_forge')
    event.remove('iceandfire:ice_dragon_forge')

  })