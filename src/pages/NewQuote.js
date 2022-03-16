import React from "react";
import { useHistory } from "react-router-dom";

import QuoteFom from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  React.useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteFom isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
