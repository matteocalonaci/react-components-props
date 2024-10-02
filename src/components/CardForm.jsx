function CardForm({ addCity }) {
  const handleClick = () => {
    const city = {
      id: 4,
      title: "Okinawa",
      description:
        "Okinawa is a Japanese prefecture in the southernmost part of the country, known for unique Ryukyu culture, beautiful beaches and crystal clear waters and other things",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1724593825200-39731dcdacf8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitated: false,
    };
    addCity(city);
    console.log(city);
  };

  return (
    <div className="p-10">
      <span className="m-10">Name:</span>
      <input className="mt-10" type="text"></input>

      <br />

      <span className="m-10"> Email:</span>
      <input className="mt-10" type="text" ></input>

      <br />

      <span className="m-10">Message:</span>
      <input className="mt-10"type="text" ></input>

      <br />
      <button className="mt-5 p-2 bg-red-600 rounded-2xl" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
export default CardForm;
