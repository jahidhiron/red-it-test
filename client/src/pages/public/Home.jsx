import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { charList } from "../../redux/actions/character-action-types";
import { api } from "../../config/api";

function Home() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([]);
  const [char, setChar] = useState([]);
  const [current, setCurrent] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setSearch("");
  }, []);

  useEffect(() => {
    setPage([]);
    setIsSearch(false);
    setLoading(true);
    setCurrent(1);
    setSearch("");
    dispatch(
      charList({
        page: 1,
        q: "",
        callback: ({ error, result }) => {
          if (!error && result) {
            if (result?.status === "success") {
              setChar(result?.data?.results);
              for (let i = 1; i < result?.data?.page + 1; i++) {
                setPage((prev) => [...prev, i]);
              }
              setCurrent(result?.data?.current);
            }
          }
          setLoading(false);
        },
      })
    );
  }, [dispatch]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 200);
    };
  };

  const handleSearchText = (value) => {
    if (value) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
    setLoading(true);
    setCurrent(1);
    setSearch(value);
    dispatch(
      charList({
        q: value,
        callback: ({ error, result }) => {
          if (!error && result) {
            if (result?.status === "success") {
              setChar(result?.data?.results);
            }
          }
          setLoading(false);
        },
      })
    );
  };

  const optimizedFn = useCallback(debounce(handleSearchText), []);

  const handleDetail = (url) => {
    const id = url.split(api.peopleApi)[1].split("/")[0];
    navigate(`/${id}`);
  };

  const handlePagination = (e, page) => {
    setIsSearch(false);
    setCurrent(page);
    setLoading(true);
    dispatch(
      charList({
        page,
        callback: ({ error, result }) => {
          if (!error && result) {
            if (result?.status === "success") {
              setChar(result?.data?.results);
              setCurrent(result?.data?.current);
            }
          }
          setLoading(false);
        },
      })
    );
  };

  return (
    <div className="container">
      <div className="top-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            optimizedFn(e.target.value);
          }}
        />
      </div>

      <div className="main-container">
        <div className="main">
          <ul className="cards">
            {loading ? (
              <h1
                style={{
                  width: "90vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Loading...
              </h1>
            ) : char?.length === 0 ? (
              <h1
                style={{
                  width: "90vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Your search <b style={{ margin: "0 5px" }}>{search}</b> did not
                match any documents
              </h1>
            ) : (
              char?.map((c, index) => (
                <li
                  className="cards_item"
                  onClick={() => handleDetail(c?.url)}
                  key={index}
                >
                  <div className="card">
                    <div
                      className="card_image"
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="image-block">
                        <h1 style={{ fontSize: "30px" }}>
                          {c?.name[0].toUpperCase()}
                          {c?.name[1].toLowerCase()}
                        </h1>
                      </div>
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{c?.name}</h2>
                      <p className="card_text">{c?.gender}</p>
                      <button
                        className="btn card_btn"
                        onClick={() => handleDetail(c?.url)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        {loading || isSearch ? null : (
          <div className="pagination">
            <button
              onClick={(e) => handlePagination(e, current - 1)}
              style={{ border: "1px solid #999", marginRight: "10px" }}
              disabled={current === 1 ? true : false}
              className={`${current === 1 ? "disable" : ""}`}
            >
              prev
            </button>
            {page?.map((p, index) => (
              <button
                key={index}
                onClick={(e) => handlePagination(e, p)}
                className={`${p === current ? "active" : ""}`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={(e) => handlePagination(e, current + 1)}
              style={{ border: "1px solid #999", marginLeft: "10px" }}
              disabled={current === page?.length ? true : false}
              className={`${current === page?.length ? "disable" : ""}`}
            >
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
