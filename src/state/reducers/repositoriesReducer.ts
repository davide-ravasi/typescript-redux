import { Action } from "../actions";
import { ActionTypes } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  repositories: string[];
}

const initialState = {
  loading: false,
  error: null,
  repositories: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, repositories: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, repositories: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, repositories: [] };
    default:
      return state;
  }
};

export default reducer;
