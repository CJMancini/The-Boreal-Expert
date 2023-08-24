onEvent('item.tooltip', e => {
  //#region variables
  let Reator = [
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:fission_reactor_logic_adapter',
    'mekanismgenerators:fission_reactor_port',
    'mekanismgenerators:fission_fuel_assembly'
  ]



  let formattedTooltip = (item, tooltip) => {
    e.add(item, '')
    let line = ''
    tooltip.split(' ').forEach(word => {
      line.length == 0 ? line = word : line += ` ${word}`
      if (line.length > 30) {
        e.add(item, Text.of(line).yellow())
        line = ''
      }
    })
    if (line.length > 0) e.add(item, Text.of(line).yellow())
    e.add(item, '')
  }

  Reator.forEach(item => formattedTooltip(item, 'Nós da Equipe MekaMiners, resolvemos diminiur o precesso do "Fissile Fuel" ultilizando apenas a barra de Uranium, com esses processo podemos afirmar que com apenas 7 Chemical Oxidize(Full Upgrade) ser suficiente para o maior Reator de Fissão '))

  formattedTooltip('draconicevolution:chaotic_hoe', 'É... Viniccius13 ficaria orgulhoso!')
  formattedTooltip('mekanism:basic_universal_cable', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:basic_mechanical_pipe', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:basic_pressurized_tube', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:basic_logistical_transporter', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:basic_thermodynamic_conductor', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:ultimate_universal_cable', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:ultimate_mechanical_pipe', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:ultimate_pressurized_tube', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:ultimate_logistical_transporter', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:ultimate_thermodynamic_conductor', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:advanced_universal_cable', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:advanced_mechanical_pipe', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:advanced_pressurized_tube', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:advanced_thermodynamic_conductor', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:advanced_logistical_transporter', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:elite_universal_cable', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:elite_pressurized_tube', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:elite_logistical_transporter', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('mekanism:elite_thermodynamic_conductor', 'Este item encostado no "Connector" do Xnet, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('xnet:connector_blue', 'Este item encostado nos "Cabos" do Mekanism, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('xnet:connector_green', 'Este item encostado nos "Cabos" do Mekanism, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')
  formattedTooltip('xnet:connector_red', 'Este item encostado nos "Cabos" do Mekanism, causará a queda no TPS do servidor. Então por este motivo Nós da Equipe Mekaminers, caso for encontrado será removido sem aviso prévio.')

  //#region Pipez
  //pipes
  e.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
  ])
  e.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  e.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  e.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

  //upgrades
  e.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  e.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  e.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  e.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])
  e.add('pipez:infinity_upgrade', [
    [Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
    [Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])
  //#endregion
})
