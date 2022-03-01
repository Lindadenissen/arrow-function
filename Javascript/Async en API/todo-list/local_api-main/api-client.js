const apiUrl = "http://localhost:3000";

const getToDoList = async () => {
  try {
    const response = await fetch(`${apiUrl}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (err) {
    return err;
  }
};

const postData = async (data) => {
  const result = {description: data, done: false};
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(result),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postedData = await response.json();
    console.log(postedData);
    return postedData;
  } catch (err) {
    console.log(err);
  }
}

const deleteItem = async (item) => {
  try {
    const response = await fetch(`apiUrl, ${item.id}`, {
      method: "DELETE",
      body: JSON.stringify(response),
      headers: {
        "content-type": "application/json"
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err)
  }
}



