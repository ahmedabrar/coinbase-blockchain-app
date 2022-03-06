import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "n1bndj5x",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skY5owLwB6tJFeL7CbcORLZq9axhH8uXaCQJjBL1Hea3FvKGc8H9ZK0gHFmIcI1qHfaNwUZ2qoXFwz00dEpYqtUZHzziZ7WuRNCz54LuI02fZAPhwgGHnDLF0E9IDfsDe9gHUNBfToUbUWmrDx84wtU6tgk8q8uKEgDuIBSrazWxrBD2E0yM",
  useCdn: false,
});
