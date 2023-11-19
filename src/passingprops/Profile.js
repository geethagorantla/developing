import React from "react";
import Avatar from "./Avatar";

const Card = ({ children ,stylingcrads}) => {
  return <div className={stylingcrads?.card}>{children}</div>;
};

const Profile = () => {
  return (
    <div style={{ display: "flex" ,justifyContent:"space-around",alignItems:"center"}}>
      <Card stylingcrads={{card:"card1"}}>
        <Avatar
          width={60}
          height={110}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
      </Card>
      <Card stylingcrads={{card:"card2"}}>
        <Avatar
          width={80}
          height={100}
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        />
      </Card>
      <Card  stylingcrads={{card:"card3"}}>
        <Avatar
          width={80}
          height={110}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </Card>
      <Card  stylingcrads={{card:"card4"}}>
        <Avatar person={{ name: "Geetha" }} />
      </Card>
    </div>
  );
};

export default Profile;
