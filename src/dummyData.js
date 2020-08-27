const dummyData = {
  jobs: {
    "job-1": { id: "job-1", content: "software engineer" },
    "job-2": { id: "job-2", content: "database engineer" },
    "job-3": { id: "job-3", content: "front-end engineer" },
    "job-4": { id: "job-4", content: "full-stack engineer" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "wish list",
      jobIds: ["job-1", "job-2", "job-3", "job-4"],
    },
    "column-2": {
      id: "column-2",
      title: "applied",
      jobIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "interview scheduled",
      jobIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default dummyData;
