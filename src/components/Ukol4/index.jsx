import { NumpadButton } from "./NumpadButton";
import { FunctionButton } from "./FunctionButton";
import "./style.css";
import { useState } from "react";

/*
  Zadání: Zprovozněte číselník tak, aby se po kliknutí na tlačítka správně skládalo číslo 
    na displeji.

  Krok 1: Založte stav `displayValue` a zařiďte, aby se správně zobrazoval na displeji. 
    Stav budeme chtít jako řetězec, abychom mohli snadno přidávat další cifry.

  Krok 2: Do komponenty `NumpadButton` přidejte prop `onDigitClick`, která bude očekávat 
    funkci, která se zavolá při kliknutí na tlačítko a předá se jí číslo, které je na 
    tlačítku napsané.

  Krok 3: V komponentě `Ukol4` založte funkci `handleDigitClick`, která bude mít jeden 
    parametr `digit`. Ve funkci přidejte k hodnotě `displayValue` hodnotu `digit`. Tuto 
    funkci pak předejte komponentě `NumpadButton` jako prop `onDigitClick`.

  Krok 4: Pozor na situaci, kdy je na začátku na displeji číslo nula. Pokud je na displeji
    zobrazena `0` a uživatel klikne na nějaké číslo, nahradíme obsah displeje číslicí,
    na kterou uživatel klikl.

  Krok 5: Do komponenty `FunctionButton` přidejte prop `onFunctionClick`, která bude očekávat
    funkci bez parametrů. Tímto říkáme, že uživatel kliknul na nějaké funkční tlačítko. 

  Krok 6: V komponentě `Ukol4` založte funkci `handleClearClick` bez paramtrů. V ní nastavte
    stav `displayValue` na nulu. Tuto funkci pak předejte komponentě `FunctionButton` jako
    prop `onFunctionClick`

  Vyzkoušejte, že jde číselník správně používat.
*/

export const Ukol4 = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleDigitClick = (digit) => {
    if (displayValue === "0") {
      setDisplayValue(String(digit))
    } else {
      setDisplayValue(displayValue + String(digit))
    }

    if (displayValue.length > 9) {
      setDisplayValue(displayValue)
    }
  }

  const handleClearClick = () => {
    setDisplayValue("0")
  }


  return (
    <>
      <div className="display">{displayValue}</div>
      <div className="numpad">
        <NumpadButton onDigitClick={handleDigitClick} digit={1} />
        <NumpadButton onDigitClick={handleDigitClick} digit={2} />
        <NumpadButton onDigitClick={handleDigitClick} digit={3} />
        <NumpadButton onDigitClick={handleDigitClick} digit={4} />
        <NumpadButton onDigitClick={handleDigitClick} digit={5} />
        <NumpadButton onDigitClick={handleDigitClick} digit={6} />
        <NumpadButton onDigitClick={handleDigitClick} digit={7} />
        <NumpadButton onDigitClick={handleDigitClick} digit={8} />
        <NumpadButton onDigitClick={handleDigitClick} digit={9} />
        <NumpadButton onDigitClick={handleDigitClick} digit={0} />
        <FunctionButton onFunctionClick={handleClearClick} label="C" />
      </div>
    </>
  );
};
