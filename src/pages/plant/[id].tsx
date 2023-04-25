import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/components/Layout";
import { useFindPlantByIdQuery } from "src/generated/graphql";

const PlantID: NextPage = () => {
  const router = useRouter();

  let id: string = router.query.id as string;

  const { data: plant, error } = useFindPlantByIdQuery({
    variables: { findPlantByIdId: id },
  });

  if (!plant || error) {
    console.log(error);
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
