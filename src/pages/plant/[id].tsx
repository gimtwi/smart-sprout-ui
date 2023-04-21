import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/components/Layout";

const PlantID: NextPage = () => {
  const router = useRouter();

  if (!router.query.id || router.query.id === "undefined") {
    return (
      <div>
        <Layout btn="back">
          <div className="item-page font-green">This item doesn't exist.</div>
        </Layout>
      </div>
    );
  }

  return (
    <div>
      <Layout btn="back">
        <div className="item-page">hi!</div>
      </Layout>
    </div>
  );
};

export default PlantID;
