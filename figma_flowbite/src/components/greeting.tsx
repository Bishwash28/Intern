const Greeting = () => {
  const currentTime = new Date().getHours();

  let greet: string;
  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greet = "Good Morning !";
    customStyle.color = "yellow";
  } else if (currentTime < 18) {
    greet = "Good Afternoonnn !";
    customStyle.color = "Red";
  } else {
    greet = "Good Night !";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading  font-extrabold text-2xl" style={customStyle}>
        {greet}
      </h1>
    </div>
  );
};

export default Greeting;
