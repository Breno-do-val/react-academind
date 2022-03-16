import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = (props) => {
  const match = useRouteMatch();
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  if (!props.quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn-flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <p>{quoteId}</p>
      <Route path={`${match.path}`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
