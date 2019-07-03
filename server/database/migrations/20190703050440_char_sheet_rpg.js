
exports.up = function(knex) {
return knex.schema.createTable(
    "rpg_example", c =>{
        c.increments();
        c.string('name', 256);
        c.string('class', 188);
        c.integer('level');
        c.string('race', 256);
        c.string('size', 188);
        c.string('sex',188);
        c.integer('age');
        c.integer('weight');
        c.string('description',2000);
        c.string('alignment', 188);
        c.string('ideology', 188);
        c.string('motivation',1000);
        c.string('fear',1000);

        c.integer('hitpoints');
        c.integer('initiative');

        c.integer('str');
        c.integer('perc');
        c.integer('dex');
        c.integer('const');
        c.integer('int');
        c.integer('wisdom');
        c.integer('charisma');
        c.integer('will');
        c.integer('reflex');
        c.integer('speed');
        c.integer('mana');
        c.integer('luck');

        c.integer('attackBonus')
        c.integer('spellBonus')
        c.integer('attackResist')
        c.integer('SpellResist')
        c.integer('techScore')
        c.integer('magicScore')
    }
)
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("rpg_example");
};
