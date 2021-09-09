import { useEffect, useState } from "react";
import Button from "../button";
const Studants = ({ studantsList }) => {
  const [renderStudants, setRenderStudants] = useState([]);
  const [filterStudants, setFilterStudants] = useState([]);
  const [btnText, setBtnText] = useState("Começar");
  const [pStatus, setPStatus] = useState("on");

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setFilterStudants(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (renderStudants.length < 3 && filterStudants.length !== 0) {
      random();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderStudants]);

  const filterHouses = (house) => {
    const filter = filterStudants.filter(
      (elemento) => elemento.house !== house
    );
    setFilterStudants([...filter]);
  };

  const randomStudants = () => {
    const output =
      filterStudants[Math.floor(Math.random() * filterStudants.length)];
    filterHouses(output.house);
    return output;
  };

  const random = () => {
    const randomStudant1 = randomStudants();
    setRenderStudants([...renderStudants, randomStudant1]);
  };
  const clearArr = () => {
    setFilterStudants(studantsList);
    setRenderStudants([]);
    setBtnText("Jogar Novamente");
    setPStatus("off");
  };
  return (
    <>
      <div className={pStatus}>
        <h1> Torneio tribruxo</h1>
        <p> Clique no botão para encontrar os feiticeiros</p>
      </div>
      <div className="box">
        {renderStudants.map((studant) => (
          <div key={studant.name}>
            <div className={`${studant.house}`}>
              <h1>{studant.name}</h1>
              <figure>
                <img src={studant.image} alt={studant.name}></img>
              </figure>
              <p>{studant.house} </p>
            </div>
          </div>
        ))}
      </div>
      <Button handClick={clearArr} btnText={btnText} />
    </>
  );
};
export default Studants;
