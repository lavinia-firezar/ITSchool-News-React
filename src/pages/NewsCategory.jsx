import { Container } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { getNewsList } from "../api/adaptors";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { useFetch } from "../utils/hooks/useFetch";
import Pagination from "../components/Pagination";

function NewsCategory() {
  const { categoryId } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);
  let currentPage = queryParams.get("page");
  if (!currentPage) {
    currentPage = 1;
  }

  const newsCategoryEndpoint = getNewsCategoryEndpoint(categoryId, currentPage);
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  console.log(adaptedNewsList);

  let title = "";
  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "football":
      title = "Fotbal";
      break;
    case "fashion":
      title = "Fashion";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
        <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
