const {
  StateProvider,
  AsyncResolver,
  DebouncePropagator,
} = "reenhance-components";

console.clear();

const SuggestAsyncResolver = AsyncResolver("query", []);

const Suggests = ({ query }) => (
  <SuggestAsyncResolver query={query} subject={{}}>
    {(props) => (
      <ul>
        {props[1] && props[1].length > 0 ? (
          props[1].map((str) => <li key={str}>{str}</li>)
        ) : (
          <li>No results</li>
        )}
      </ul>
    )}
  </SuggestAsyncResolver>
);

const InputState = StateProvider("");
const SuggestDebounce = DebouncePropagator({ query: "" });

export const SuggestedInput = () => (
  <InputState>
    {({ state: query, setState: setQuery }) => (
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <SuggestDebounce time={200} query={query}>
          {({ query, state }) => (
            <div>{query && <Suggests query={query} />}</div>
          )}
        </SuggestDebounce>
      </div>
    )}
  </InputState>
);
