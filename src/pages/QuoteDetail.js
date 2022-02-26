import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const { quoteId } = useParams();

    return (
        <Fragment>
            <h1>QuoteDetail Page</h1>
            <p>{quoteId}</p>
            <Route path={`/quotes/${quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;