import { createContext, useState, useEffect } from "react";

const defaultState = {
  domain: "AE",
  sortorder: "REVIEW",
  checkindate: "",
  checkoutdate: "",
};

export const SearchContext = createContext({
  searchParams: defaultState,
});

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState(defaultState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const value = { searchParams, onChangeHandler };

  return;
};
