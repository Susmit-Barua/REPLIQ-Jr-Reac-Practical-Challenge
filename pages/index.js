import { fetchApi, baseURL } from "../utils/fetchApi";
import Card from "../components/Card";

export default function Home({ products }) {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
      {products?.map((productdetail) => {
        // console.log(productdetail);
        return <Card productdetail={productdetail} key={productdetail.id} />;
      })}
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await fetchApi(
    `${baseURL}/products/v2/list?store=US&offset=0&categoryId=4209&limit=2&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`
  );

  return {
    props: products,
  };
};
