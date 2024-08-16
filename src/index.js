// con el async y await
// async function obtenerUsuarios() {
//   const url = "http://localhost:3000/users";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// sin el async y await
async function obtenerUsuarios() {
  let promesa = fetch("http://localhost:3000/users");

  await promesa
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        return Promise.reject(resp.json());
      }
    })
    .then((data) => {
      console.log(data);
    });
}

console.log(obtenerUsuarios());
