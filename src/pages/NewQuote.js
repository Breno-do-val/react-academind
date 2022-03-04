import QuoteFom from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    };

    return (
        <QuoteFom onAddQuote={addQuoteHandler}/>
    );
};

export default NewQuote;