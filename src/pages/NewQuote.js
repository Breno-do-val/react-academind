import { useHistory } from "react-router-dom";

import QuoteFom from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return <QuoteFom onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
