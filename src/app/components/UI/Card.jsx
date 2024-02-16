import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ src, alt, title, price, delivery, address, dateCreated }) => {
  return (
    <Link href={""}>
      <div className="flex">
        <span>Icon</span>
        <span>Seller</span>
        <span>Rating</span>
      </div>
      <Image src={src} alt={alt} />
      <p>{title}</p>
      <p>{price} €</p>
      <p>{delivery}</p>
      <p>{address}</p>
      <p>{dateCreated}</p>
    </Link>
  );
};

export default Card;
