import React, { useState } from "react";
import * as C from "./styles";

const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpansive, setExpense] = useState(false);

  const handleSave = () => {
    if (desc || amount) {
      alert("Informe a descrição do valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo");
      return;
    }
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label> Valor </C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setDesc(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome/"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpansive)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpansive"
            name="group1"
            onChange={() => setExpense(!isExpansive)}
          />
          <C.Label htmlFor="rIncome">Saida</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
    </>
  );
};

export default Form;
