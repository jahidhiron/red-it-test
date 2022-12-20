import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { charDetail } from "../../redux/actions/character-action-types";
import { api } from "../../config/api";

function Detail() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(id)) {
      navigate("/not-found");
    } else {
      setLoading(true);
      dispatch(
        charDetail({
          id,
          callback: ({ error, result }) => {
            if (!error && result) {
              if (result?.status === "success") {
                setData(result?.data);
              }
            }
            if (error) {
              navigate("/not-found");
            }
            setLoading(false);
          },
        })
      );
    }
  }, [id, dispatch, navigate]);

  const handleDetail = (url) => {
    const id = url.split(api.peopleApi)[1].split("/")[0];
    navigate(`/${id}`);
  };

  return (
    <div className="container">
      {loading ? (
        <h1 className="title">Loading...</h1>
      ) : (
        <>
          <div className="wrapper">
            <h2 className="title">Basic information</h2>
            <hr />
            <div className="box">
              <h3 className="inline">Name: </h3>
              <span>{data?.name}</span>
            </div>
            <div className="box">
              <h3 className="inline">Birth year: </h3>
              <span>{data?.birth_year}</span>
            </div>
            <div className="box">
              <h3 className="inline">Gender: </h3>
              <span>{data?.gender}</span>
            </div>
            <div className="box">
              <h3 className="inline">Hair color: </h3>
              <span>{data?.hair_color}</span>
            </div>
            <div className="box">
              <h3 className="inline">Eye color: </h3>
              <span>{data?.eye_color}</span>
            </div>
            <div className="box">
              <h3 className="inline">Skin color: </h3>
              <span>{data?.skin_color}</span>
            </div>
            <div className="box">
              <h3 className="inline">Height: </h3>
              <span>{data?.height}</span>
            </div>
            <div className="box">
              <h3 className="inline">Weight: </h3>
              <span>{data?.mass}</span>
            </div>
          </div>

          <div className="wrapper">
            <h2 className="title">Film information</h2>
            <hr />
            {data?.films?.length > 0
              ? data?.films?.map((fm, index) => (
                  <div className="wrapper" key={index}>
                    <h3>
                      Film {index + 1} : {fm?.title}
                    </h3>
                    <div className="box">
                      <h4 className="inline">Director : </h4>
                      <span>{fm?.director}</span>
                    </div>
                    <div className="box">
                      <h4 className="inline">Producer : </h4>
                      <span>{fm?.producer}</span>
                    </div>
                    <div className="box">
                      <h4 className="inline">Episode : </h4>
                      <span>{fm?.episode_id}</span>
                    </div>
                    <div className="box">
                      <h4 className="inline">Release date : </h4>
                      <span>{fm?.release_date}</span>
                    </div>
                    <div className="box">
                      <h4 className="inline">Description : </h4>
                      <span>{fm?.opening_crawl}</span>
                    </div>

                    <div className="box extra-margin">
                      <h4 className="inline">Characters : </h4>
                      {fm?.characters?.map((chr, index) => (
                        <button
                          key={index}
                          className="characters"
                          onClick={() => handleDetail(chr?.url)}
                        >
                          {chr?.name}
                        </button>
                      ))}
                    </div>

                    <div className="box extra-margin">
                      <h4 className="inline">Planets : </h4>
                      {fm?.planets?.map((pl, index) => (
                        <div style={{ marginBottom: "15px" }}>
                          <p key={index} className="non-underline inline">
                            Name: {pl?.name}, Gravity: {pl?.gravity}, Orbital
                            period: {pl?.orbital_period}, Rotation period:{" "}
                            {pl?.rotation_period}, Population: {pl?.population},
                            Surface water: {pl?.surface_water}, Terrain:{" "}
                            {pl?.terrain}, Diameter: {pl?.diameter}, Climate:{" "}
                            {pl?.climate}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="box extra-margin">
                      <h4 className="inline">Species : </h4>
                      {fm?.species?.map((sp, index) => (
                        <div style={{ marginBottom: "15px" }}>
                          <p key={index} className="non-underline inline">
                            Name: {sp?.name}, Language: {sp?.language},
                            Classification: {sp?.classification}, Average
                            height: {sp?.average_height}, Average lifespan:{" "}
                            {sp?.average_lifespan}, Designation:{" "}
                            {sp?.designation}, Eye colors: {sp?.eye_colors},
                            Hair colors: {sp?.climate}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="box extra-margin">
                      <h4 className="inline">Starships : </h4>
                      {fm?.starships?.map((str, index) => (
                        <div style={{ marginBottom: "15px" }}>
                          <p key={index} className="non-underline inline">
                            Name: {str?.name}, Starship class:{" "}
                            {str?.starship_class}, Passengers: {str?.passengers}
                            , Model: {str?.model}, Max atmosphering speed:{" "}
                            {str?.max_atmosphering_speed}, Manufacturer:{" "}
                            {str?.manufacturer}, Length: {str?.length},
                            Hyperdrive rating: {str?.hyperdrive_rating}, crew:{" "}
                            {str?.crew}, Cost in credits: {str?.cost_in_credits}
                            , Consumables: {str?.consumables}, Cargo capacity:{" "}
                            {str?.cargo_capacity}, MGLT: {str?.MGLT}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="box extra-margin">
                      <h4 className="inline">Vehicles : </h4>
                      {fm?.vehicles?.map((vch, index) => (
                        <div style={{ marginBottom: "15px" }}>
                          <p key={index} className="non-underline inline">
                            Name: {vch?.name}, Vehicle class:{" "}
                            {vch?.vehicle_class}, Passengers: {vch?.passengers},
                            Model: {vch?.model}, Max atmosphering speed:{" "}
                            {vch?.max_atmosphering_speed}, Manufacturer:{" "}
                            {vch?.manufacturer}, Length: {vch?.length}, crew:{" "}
                            {vch?.crew}, Cost in credits: {vch?.cost_in_credits}
                            , Consumables: {vch?.consumables}, Cargo capacity:{" "}
                            {vch?.cargo_capacity}
                          </p>
                        </div>
                      ))}
                    </div>
                    <br />
                    {index < data?.films?.length - 1 ? (
                      <span
                        style={{ display: "block", border: "1px dotted #aaa" }}
                      ></span>
                    ) : null}
                  </div>
                ))
              : null}
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
