export const loadTopStories = () => ({
  name: "loadTopStories",
  status: "topStories",
  payload: async (cache, api) => {
    if (cache.get("global.initialized")) return null;

    const topStories = await api.loadTopStories();

    return {
      "global.initialized": true,
      "searches.topStories.ids": topStories,
    };
  },
});

export const loadMoreTopStories = () => ({
  name: "loadMoreTopStories",
  payload: (cache) => ({
    "searches.topStories.count": cache.get("searches.topStories.count") + 10,
  }),
});

export const loadMoreVisible = {
  inputs: {
    topStories: "searches.topStories",
  },
  compute: ({ topStories }) => topStories.ids.length > topStories.count,
};

export const topStories = {
  inputs: {
    topStories: "searches.topStories",
  },
  compute: ({ topStories }) => topStories.ids.slice(0, topStories.count),
};

export const storyById = (id) => `entities.story.${id}`;

export const loadStory = (id) => ({
  name: "loadStory",
  status: `story.${id}`,
  payload: async (cache, api) => {
    if (cache.has(storyById(id))) return null;
    const story = await api.loadStory(id);
    return { [storyById(id)]: story };
  },
});

export const commentById = (id) => `entities.comment.${id}`;

export const loadComment = (id) => ({
  name: "loadComment",
  status: `comment.${id}`,
  payload: async (cache, api) => {
    if (cache.has(commentById(id))) return null;
    const comment = await api.loadComment(id);
    return { [commentById(id)]: comment };
  },
});

export const isExpandedStory = (id) => ({
  inputs: { routingId: "routing.params.id" },
  compute: ({ routingId }) => routingId === String(id),
});

export const answerCount = (id) => ({
  inputs: { kids: `${commentById(id)}.kids` },
  compute: ({ kids }) => (kids ? kids.length : 0),
});
