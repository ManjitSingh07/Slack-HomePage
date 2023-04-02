import React from "react";
import Card from "./Card";
import pic from "../../Assets/img1.jpg";
import styles from './WelcomePageComponent.module.css';
const WelcomePageComponent = () =>{
  return (
    <div className={styles.welcomeComponent__container}>
      <div>
        <Card
          image={pic}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
      <div>
        <Card
          image={pic}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
      <div>
        <Card
          image={pic}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
      <div>
        <Card
          image={pic}
          smallDescription="Resources"
          description="See how others are building their digital HQ."
          next='Read More'
        />
      </div>
    </div>
  );
}

export default WelcomePageComponent;
