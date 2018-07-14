// @flow
type Result = Done | Error | Third; // a disjoint union type with two cases
type Done = { status: 'done', answer: number };
type Error = { status: 'error', message: string };
type Third = { status: 'third', query: string };

function invert(callback: (result: Result) => void) {
  const result = (Math.random() > 0.5)
    ? { status: 'done', answer: 55 }
    : { status: 'error', message: 'Ya dun goofed'};
  callback(result);
}

const callback = result => {
  switch (result.status) {
  case 'error':
    console.log ('Uh oh!', result.message);
    break;  // see what happens if you forget to break! :)
  case 'done':
    console.log ('Inverse:', result.answer);
  }
};

invert(callback);
