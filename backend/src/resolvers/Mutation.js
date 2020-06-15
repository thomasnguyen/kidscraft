const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },

  async updateItem(parent, args, ctx, info) {
    // get the item
    // make changes to the item
    // make db update
    // return item

    // first take copy of the updates
    const updates = { ...args };

    // delete id from updates
    delete updates.id;

    // run update method
    const item = await ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id },
      },
      info
    );

    return item;
  },
};

module.exports = Mutations;
