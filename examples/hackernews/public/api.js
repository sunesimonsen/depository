export const loadTopStories = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  return await response.json();
};

const loadItem = async (id) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  return response.json();
};

export const loadStory = loadItem;
export const loadComment = loadItem;
