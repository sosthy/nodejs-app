export const defaultState = {
  users: [
    {
      id: "U1",
      name: "dev",
    },
  ],
  groups: [
    {
      name: "To Go",
      id: "G1",
      owner: "u1",
    },
  ],
  tasks: [
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Compile ES6",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
    {
      name: "Update component snapshots",
      id: "T4",
      group: "G2",
      owner: "U2",
      isComplete: true,
    },
  ],
};
