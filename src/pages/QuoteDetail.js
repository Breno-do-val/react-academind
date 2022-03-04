import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = (props) => {
    const { quoteId } = useParams();

    if(!props.quote) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={props.text} author={props.author}/>
            <p>{quoteId}</p>
            <Route path={`/quotes/${quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;