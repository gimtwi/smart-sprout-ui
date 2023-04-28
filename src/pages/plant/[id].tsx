import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "src/components/Layout";
import {
  FindAllPlantsDocument,
  useDeletePlantMutation,
  useFindPlantByIdQuery,
  useTurnOnFanMutation,
  useTurnOnLightningMutation,
  useWaterPlantMutation,
} from "src/generated/graphql";

const PlantID: NextPage = () => {
  const router = useRouter();

  let id: string = router.query.id as string;

  const {
    data: plant,
    error,
    refetch,
  } = useFindPlantByIdQuery({
    variables: { findPlantByIdId: id },
  });

  const [waterPlant] = useWaterPlantMutation();
  const [turnOnLightning] = useTurnOnLightningMutation();
  const [turnOnFan] = useTurnOnFanMutation();

  const [deletePlant] = useDeletePlantMutation();

  if (!plant || error) {
    return (
      <div>
        <Layout btn="back">
          <div className="item-page font-green">This item doesn't exist.</div>
        </Layout>
      </div>
    );
  }
  const handleWatering = async () => {
    await waterPlant({ variables: { waterPlantId: id } })
      .catch((error) => {
        console.log(error);
      })
      .then(() => refetch());
  };

  const handleLighting = async () => {
    await turnOnLightning({ variables: { turnOnLightningId: id } })
      .catch((error) => {
        console.log(error);
      })
      .then(() => refetch());
  };

  const handleFan = async () => {
    await turnOnFan({ variables: { turnOnFanId: id } })
      .catch((error) => {
        console.log(error);
      })
      .then(() => refetch());
  };

  const handleDeletePlant = async () => {
    await deletePlant({
      variables: { deletePlantId: id },
      refetchQueries: [{ query: FindAllPlantsDocument }],
    })
      .catch((error) => {
        console.log(error);
      })
      .then(() => router.push("/"));
  };

  return (
    <div>
      <Layout btn="back">
        <div className="item-page max-width">
          <div className="item-field space">
            <div className="item-page">
              <div className="item-field">
                <label htmlFor="name">Name:</label>
                <div>{plant.findPlantById.name}</div>
              </div>
              <div className="item-field">
                <label htmlFor="type">Type:</label>
                <div>{plant.findPlantById.type}</div>
              </div>
            </div>
            <div className={plant.findPlantById.img} />
          </div>
          <div className="item-switch">
            <label htmlFor="humidity">Humidity</label>
            <div>{plant.findPlantById.humidity} %</div>
          </div>
          <div className="item-switch">
            <label htmlFor="brightness">Brightness</label>
            <div>{plant.findPlantById.brightness} %</div>
          </div>
          <div className="item-switch">
            <label htmlFor="temperature">Temperature</label>
            <div>{plant.findPlantById.temperature} °C</div>
          </div>
          <hr className="divider" />
          <div className="item-switch">
            <label htmlFor="watering">Watering</label>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={plant.findPlantById.watering || undefined}
                onChange={handleWatering}
              />
              <span className="slider round" />
            </label>
          </div>
          <div className="item-switch">
            <label htmlFor="lighting">Lighting</label>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={plant.findPlantById.lighting || undefined}
                onChange={handleLighting}
              />
              <span className="slider round" />
            </label>
          </div>
          <div className="item-switch">
            <label htmlFor="fan">Fan</label>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={plant.findPlantById.fan || undefined}
                onChange={handleFan}
              />
              <span className="slider round" />
            </label>
          </div>
          <Link passHref href={`/edit/${id}`} className="edit-btn">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="plus-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </i>
          </Link>
          <button className="delete-btn" onClick={handleDeletePlant}>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="plus-icon"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </i>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default PlantID;
