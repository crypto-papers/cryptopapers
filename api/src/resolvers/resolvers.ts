const resolvers = {
  Query: {
    papers: (obj, args, context, info) => context.db.papers,
  },
};

export default resolvers;