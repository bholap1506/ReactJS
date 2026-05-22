import "react";
// function Card({username, price}) {   // We can use this line intead of line number 3 it is more easy and used to way
function Card(props) {
    console.log(props.username);
    return (
    <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="350"
          height="350"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col  rounded-b-xl py-4 ">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">{props.username}</h1>
          <h1 className="font-bold font-RubikBold">{props.price || "₹800"}</h1>
        </div>
        <div className="flex  justify-between font-mono">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
    )
}

export default Card