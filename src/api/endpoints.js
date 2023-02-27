const API_KEY = "e5fcb07c-1d25-47d7-aa91-32b202d55f10";

export function getNewsCategoryEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `api-key=${API_KEY}&section=${category}&page-size=${pageSize}&page=${pageNumber}&show-fields=all`;

  return `https://content.guardianapis.com/search?${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `${newsId}?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${queryParams}`;
}
