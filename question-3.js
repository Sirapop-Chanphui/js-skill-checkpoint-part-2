// เริ่มเขียนโค้ดตรงนี้
let getUsersFromJsonplaceholder = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

async function getUser() {
  try {
    const user = await getUsersFromJsonplaceholder();
    // console.log(user);
    const filterNameMoreThan17 = user
      .filter((user) => user.name.length > 17)
      .map((user) => user.name);
    console.log(filterNameMoreThan17);
  } catch (error) {
    console.log(error);
  }
}

 getUser();

