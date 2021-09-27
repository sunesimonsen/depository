const pageSize = 20;

export const initialState = {
  searches: {
    topStories: { ids: [], count: pageSize },
  },
  entities: {},
};

export const loadTopStories = () => ({
  name: "loadTopStories",
  status: "topStories",
  inputs: {
    initialized: "global.initialized",
  },
  payload: async ({ initialized }, api) => {
    if (initialized) return null;

    const topStories = await api.loadTopStories();

    return {
      "global.initialized": true,
      "searches.topStories.ids": topStories,
    };
  },
});

export const reloadTopStories = () => ({
  name: "reloadTopStories",
  status: "reloadTopStories",
  payload: async (api) => {
    const topStories = await api.loadTopStories();

    return {
      "searches.topStories.ids": topStories,
      "searches.topStories.count": pageSize,
    };
  },
});

export const loadMoreTopStories = () => ({
  name: "loadMoreTopStories",
  inputs: {
    count: "searches.topStories.count",
  },
  payload: ({ count }) => ({
    "searches.topStories.count": count + pageSize,
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
  inputs: { cachedStory: storyById(id) },
  payload: async ({ cachedStory }, api) => {
    if (cachedStory) return null;
    const story = await api.loadStory(id);
    return { [storyById(id)]: story };
  },
});

export const commentById = (id) => `entities.comment.${id}`;

export const loadComment = (id) => ({
  name: "loadComment",
  status: `comment.${id}`,
  inputs: {
    cachedComment: commentById(id),
  },
  payload: async ({ cachedComment }, api) => {
    if (cachedComment) return null;
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
