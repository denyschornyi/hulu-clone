const API_KEY = 'a50cde705e9b73389fbfaad0fd645e4f';

export default {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
}