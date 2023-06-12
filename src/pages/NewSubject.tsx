import { useContext } from "react";
import Input from "../components/FormElements/Input";
import { useForm } from "../hooks/form-hook";
import { creatableSelectStyles, searchBarTheme } from "../utils/customStyles";
import { locationOptions, subjectOptions } from "../utils/data";
import { VALIDATOR_REQUIRE } from "../utils/validatiors";
import CreatableSelect from "react-select/creatable";
import Button from "../components/FormElements/Button";
import Navigation from "../components/Navigation/Navigation";
import { FormEvent } from "react";
import { postSubject, subject } from "../services/services";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../components/context/auth-context";

const NewSubject = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      predmet: {
        value: "",
        isValid: false,
      },
      cena: {
        value: "",
        isValid: false,
      },
      vremeTrajanja: {
        value: "",
        isValid: false,
      },
      grad: {
        isValid: false,
        value: "",
      },
      opis: {
        isValid: false,
        value: "",
      },
    },
    false
  );

  function selectHandler(
    this: { id: string },
    event: { value: string | null; label: string } | null
  ) {
    console.log(event);
    console.log(this.id);

    inputHandler(this.id, event?.value || "", !!event?.value || false);
  }

  const addSubjectHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subjectItem: subject = {
      predmet: formState.inputs.predmet.value,
      opis: formState.inputs.opis.value,
      cena: formState.inputs.cena.value,
      vremeTrajanja: formState.inputs.vremeTrajanja.value,
      grad: formState.inputs.grad.value,
      creatorId: authContext.userData!.id,
    };

    postSubject(subjectItem);

    navigate("/casovi");
  };
  return (
    <div className="subjects-container">
      <Navigation />
      <div className="new-subject-container">
        <form onSubmit={addSubjectHandler}>
          <h2>Objavi novi čas</h2>
          <CreatableSelect
            id="predmet"
            placeholder="Izaberi predmet"
            theme={searchBarTheme}
            styles={creatableSelectStyles}
            options={subjectOptions}
            isClearable
            onChange={selectHandler.bind({ id: "predmet" })}
          />
          <Input
            onInput={inputHandler}
            id="opis"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            label="Dodaj opis"
            errorText="Molimo unesite opis."
            noResize
          />
          <CreatableSelect
            id="grad"
            placeholder="Izaberi grad"
            theme={searchBarTheme}
            styles={creatableSelectStyles}
            options={locationOptions}
            isClearable
            onChange={selectHandler.bind({ id: "grad" })}
          />
          <Input
            onInput={inputHandler}
            id="vremeTrajanja"
            type="number"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            label="Vreme trajanja (MIN)"
            errorText="Molimo unesite vreme trajanja časa u minutima."
          />
          <Input
            onInput={inputHandler}
            id="cena"
            type="number"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            label="Cena (RSD)"
            errorText="Molimo izaberite cenu."
          />

          <Button disabled={!formState.isValid} type="submit">
            Objavi čas
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NewSubject;
