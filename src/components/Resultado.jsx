import styled from "@emotion/styled";
import React from "react";

const Resultados = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 150px;
`;

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;
export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  console.log(resultado);
  return (
    <Resultados>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="cryptocurrency"
      />
      <div>
        <Precio>
          El Precio es de <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del dia <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del dia <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion últimas 24 horas <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Actualizado hace <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultados>
  );
};
