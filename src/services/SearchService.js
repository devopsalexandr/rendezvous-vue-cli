import HttpApiClient from "./HttpApiClient";

const SearchService = {

    getResults(searchParams) {
        return HttpApiClient.post('/search', searchParams)
    },

    getResultsByPage(page, searchParams) {
        return HttpApiClient.post('/search?page=' + page, searchParams)
    }
};

export default SearchService;