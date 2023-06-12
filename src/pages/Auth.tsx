import Footer from "../components/Footer/Footer";
import Input from "../components/FormElements/Input";
import Story from "../components/Story/Story";
import {
  VALIDATOR_CONFIRM_PASSWORD,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/validatiors";
import { useState, useContext } from "react";
import { useForm } from "../hooks/form-hook";
import Button from "../components/FormElements/Button";
import ImageUpload from "../components/FormElements/ImageUpload";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { AuthContext } from "../components/context/auth-context";
import Modal from "../components/UIElements/Modal";
const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [error, setError] = useState<null | string>(null);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
          phone: undefined,
          passwordRepeat: undefined,
          lastName: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: "badi.jpg",
            isValid: true,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoginMode) {
      const response = authContext.login({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });
      if (response.ok) {
        navigate("/casovi", { replace: true });
      } else {
        setError("Pogrešni pristupni podaci, molimo pokušajte ponovo.");
      }
    } else {
      const formData = new FormData();
      formData.append("email", formState.inputs.email.value);
      formData.append("name", formState.inputs.name.value);
      formData.append("lastName", formState.inputs.lastName.value);
      formData.append("password", formState.inputs.password.value);
      formData.append("passwordRepeat", formState.inputs.passwordRepeat.value);
      formData.append("phone", formState.inputs.phone.value);
      formData.append("image", formState.inputs.image.value);

      const responseData = authContext.register(formData);

      navigate("/casovi", { replace: true });

      console.log(responseData);
    }
  };

  return (
    <>
      <Story auth>
        <Modal
          type="error"
          open={!!error}
          title="Došlo je do greške"
          description={error}
          onClose={() => {
            setError(null);
          }}
          close={() => {
            setError(null);
          }}
          primaryAction="U redu"
        />

        <>
          <Navigation />
          <div
            className={`authentication ${
              isLoginMode ? "auth-login" : "auth-signup"
            }`}
          >
            <div
              onClick={() => {
                if (isLoginMode) {
                  switchModeHandler();
                }
              }}
              className={`sign-up  ${!isLoginMode && "active"}`}
            >
              <h3>Registruj se</h3>
            </div>
            <div
              onClick={() => {
                if (!isLoginMode) {
                  switchModeHandler();
                }
              }}
              className={`log-in  ${isLoginMode && "active"}`}
            >
              <h3>Prijavi se</h3>
            </div>

            <form onSubmit={authSubmitHandler}>
              {!isLoginMode && (
                <Input
                  onInput={inputHandler}
                  id="name"
                  type="text"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  label="Vaše ime"
                  errorText="Molimo unesite vaše ime."
                />
              )}
              {!isLoginMode && (
                <Input
                  onInput={inputHandler}
                  id="lastName"
                  type="text"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  label="Vaše prezime"
                  errorText="Molimo unesite vaše prezime."
                />
              )}

              <Input
                onInput={inputHandler}
                id="email"
                type="email"
                element="input"
                label="E-mail"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Molimo unesite ispravnu e-mail adresu."
              />

              <Input
                onInput={inputHandler}
                id="password"
                type="password"
                element="input"
                label="Lozinka"
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText="Lozinka mora imati minimum 6 znakova."
              />
              {!isLoginMode && (
                <Input
                  onInput={inputHandler}
                  id="passwordRepeat"
                  type="password"
                  element="input"
                  label="Ponovi lozinku"
                  validators={[
                    VALIDATOR_MINLENGTH(6),
                    VALIDATOR_CONFIRM_PASSWORD(formState.inputs.password.value),
                  ]}
                  errorText="Lozinke se ne podudaraju."
                />
              )}
              {!isLoginMode && (
                <Input
                  onInput={inputHandler}
                  id="phone"
                  type="tel"
                  element="input"
                  label="Telefon"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Molimo unesite vaš broj telefona."
                />
              )}
              {!isLoginMode && (
                <ImageUpload
                  initialValue={null}
                  errorText="Molimo izaberite sliku."
                  id="image"
                  center
                  onInput={inputHandler}
                  action="Izaberi sliku"
                />
              )}

              <Button type="submit" disabled={!formState.isValid}>
                {isLoginMode ? "Prijavi se" : "Registruj se"}
              </Button>
            </form>
          </div>
        </>
      </Story>
      <Footer />
    </>
  );
};

export default Auth;
