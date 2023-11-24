onEvent('worldgen.remove', e => {

e.removeSpawnsByID(s => {
    s.entities.values = [
      'kiwiboi:kiwi'
    ]
  })

})