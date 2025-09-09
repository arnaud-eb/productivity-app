const resolvers = {
  Query: {
    me: () => {
      return 'Arnaud';
    },
  },
};

export default resolvers;

for (let i = 0; i < 3; i++) {
  console.log(i);
}
