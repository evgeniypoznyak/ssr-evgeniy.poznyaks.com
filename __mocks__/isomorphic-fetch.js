let __value = '{"items": [{"value": "test"}]}';
const isomorphicFetch = jest.fn(() => __value);
isomorphicFetch.__setValue = (v) => __value = v;
export default isomorphicFetch;
