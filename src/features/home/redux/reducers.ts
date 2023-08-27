type InitialStates = {
  data: Record<string, string>[];
};

type Actions = {
  type: string;
};

const initialState: InitialStates = {
  data: [],
};

export default function homeReducers(state = initialState, action: Actions) {
  switch (action.type) {
    default:
      return state;
  }
}
