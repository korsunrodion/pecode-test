import React from "react";
import cx from "./character-card.module.scss";

interface Props {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  logo?: string;
  onClick?: () => void;
}

const CharacterCard: React.FC<Props> = ({ id, name, species, status, gender, logo, onClick }) => {
  return (
    <div key={id} className={cx.characterCard} onClick={onClick}>
      <img src={logo} alt="logo" className={cx.logo} />
      <div className={cx.infoWrapper}>
        <span className={cx.label}>Имя</span>
        <span className={cx.info}>{name}</span>
        <span className={cx.label}>Вид</span>
        <span className={cx.info}>{species}</span>
        <span className={cx.label}>Статус</span>
        <span className={cx.info}>{status}</span>
        <span className={cx.label}>Пол</span>
        <span className={cx.info}>{gender}</span>
      </div>
    </div>
  )
}

export default CharacterCard;