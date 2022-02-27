interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'fewjufhwuefewf45f6e4w5f64e',
        user: {
          name: 'Flamarion',
          email: 'flama@fakeemail.com',
        },
      });
    }, 2000);
  });
}
