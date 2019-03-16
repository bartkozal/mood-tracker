interface State {}

type Action = {
  type: null;
};

const initialState: State = {};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};
