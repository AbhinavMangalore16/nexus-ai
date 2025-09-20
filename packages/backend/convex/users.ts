import { mutation, query } from "./_generated/server";
export const getMany = query({
    args: {},
    handler: async (ctx) =>{
        const users = await ctx.db.query("users").collect();
        return users;
    }
}) 


export const insert = mutation({
    args: {},
    handler: async (ctx) => {
        const names = [
            "Alice Johnson",
            "Bob Smith",
            "Charlie Brown",
            "Diana Prince",
            "Ethan Hunt",
            "Fiona Clark",
            "George Miller",
            "Hannah Lee",
            "Ian Wright",
            "Julia Roberts"
        ];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const userId = await ctx.db.insert("users", { name: randomName });

        return userId;
    }
});
