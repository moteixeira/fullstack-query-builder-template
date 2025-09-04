import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        {name: "CSS"},
        {name: "Node"},
        {name: "Typescript"},
        {name: "HTML"},
        {name: "Node"},
        {name: "Nest.js"},
        {name: "Next.js"},
        {name: "ReactNative"},
    ]);
};
