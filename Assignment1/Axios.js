const getData = async () => {
  try {
    const object = await axios.get(`${'https://jsonplaceholder.typicode.com/posts'}`);

    let content = document.querySelector(".tableData");

    content.innerHTML = (object.data).map(element =>
      `
            <tr>
                <td>${element['userId']}</td>
                <td>${element['id']}</td>
                <td>${element['title']}</td>
            </tr>
        `
    ).join('');

  } catch (errors) {
    console.error(errors);
  }
};

getData();