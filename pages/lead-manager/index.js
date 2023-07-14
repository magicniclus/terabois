import React, { useState, useEffect, use } from "react";
import BackOffice from "../../layouts/BackOffice";
import SearchBar from "../../components/molecules/search/SearchBar";
import Pagination from "../../components/molecules/pagination/pagination";
import DataTable from "../../components/molecules/table/DataTable";
import { getData } from "../../firebase/getData";
import { useDispatch } from "react-redux";
import { getUser } from "../../firebase/auth";
import { useRouter } from "next/router";

const index = () => {
  const [data, setData] = useState();

  const dispatch = useDispatch();

  const route = useRouter();

  useEffect(() => {
    getUser()
      .then((res) => {
        getData().then((res) => {
          const sortedData = [...res].sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
          });
          setData(sortedData);
          dispatch({
            type: "SET_DATA",
            payload: sortedData,
          });
        });
      })
      .catch((err) => {
        route.push("/connexion");
      });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    getUser()
      .then((res) => {
        dispatch({
          type: "SET_USER_NAME",
          payload: res.displayName,
        });
      })
      .catch((err) => {
        console.log(err);
        route.push("/connexion");
      });
  }, []);

  return (
    <BackOffice>
      <SearchBar data={data} setData={setData} />
      <DataTable data={data} setData={setData} />
      <Pagination data={data} setData={setData} />
    </BackOffice>
  );
};

export default index;
