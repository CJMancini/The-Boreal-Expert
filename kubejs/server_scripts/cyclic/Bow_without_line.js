onEvent('recipes', event => {
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": "totemic:baykok_bow"
    },
    "block_in": {
        "blocks": ["minecraft:water"],
        "state": {
            "level": 0
        }
    },
    "post": [
        {
            "type": "place",
            "block": "minecraft:air"
        },
        {
            "type": "drop_item",
            "item": "cyclic:boomerang_carry",
            "contextual": {
                "type": "chance",
                "chance": 1.0
            }
        }
        ]

})
})