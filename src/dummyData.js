const dummyData = {
  jobs: {
    "job-1": { id: "job-1", content: "software engineer" },
    "job-2": { id: "job-2", content: "database engineer" },
    "job-3": { id: "job-3", content: "front-end engineer" },
    "job-4": { id: "job-4", content: "full-stack engineer" },
  },
  columns: {
    wishlist: {
      id: "wishlist",
      title: "wish list",
      jobIds: ["job-1", "job-2", "job-3", "job-4"],
    },
    applied: {
      id: "applied",
      title: "applied",
      jobIds: [],
    },
    interview: {
      id: "interview",
      title: "interview scheduled",
      jobIds: [],
    },
    offer: {
      id: "offer",
      title: "interview scheduled",
      jobIds: [],
    },
    rejected: {
      id: "rejected",
      title: "interview scheduled",
      jobIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["wishlist", "applied", "interview", "offer", "rejected"],
};

export default dummyData;
