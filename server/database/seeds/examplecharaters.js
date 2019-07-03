
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rpg_example').del()
    .then(function () {
      // Inserts seed entries
      return knex('rpg_example').insert([
        {
        name: 'Noora Faust',
        class: "Rouge Revolutionary Knight",
        level:4,
        race:"Human",
        size:"M",
        sex:"F",
        age:19,
        weight:110,
        description:"",
        alignment: "chaotic good",
        ideology:"democratic socialist",
        motivation:"helping the people",
        fear:"seeing her friends fall",

        hitpoints:33,
        initiative:7,

        str: 4,
        perc:8,
        dex:9,
        const: 1,
        int:3,
        wisdom:6,
        charisma:7,
        will:11,
        reflex:9,
        speed:9,
        mana:20,
        luck:7,

        attackBonus:3,
        spellBonus:0,
        attackResist:3,
        SpellResist:1,

        techScore:11,
        magicScore:5,
        },
        {
          name: 'Captain Morty',
        class: "Ranger Fighter",
        level:9,
        race:"Human",
        size:"m",
        sex:"m",
        age:36,
        weight:188,
        description:"",
        alignment: "naturel",
        ideology:"capitalist",
        motivation:"Keeping this ship a float",
        fear:"commitment",

        hitpoints:43,
        initiative:7,

        str: 10,
        perc:3,
        dex:4,
        const: 4,
        int:10,
        wisdom:7,
        charisma:1,
        will:4,
        reflex:2,
        speed:7,
        mana:42,
        luck:3,

        attackBonus:5,
        spellBonus:8,
        SpellResist:4,
        attackResist:5,

        techScore:15,
        magicScore:21,
        }
      ]);
    });
};
