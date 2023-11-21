onEvent('worldgen.remove', event => {

event.removeSpawnsByID(spawns => {
    spawns.entities.values = [
      'kiwiboi:kiwi'
    ]
  })

})