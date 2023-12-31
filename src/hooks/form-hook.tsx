import { useCallback, useReducer } from "react";
import { CustomFormData } from "../utils/types";

const formReducer = (
  state: any,
  action: {
    type: string;
    inputId?: string;
    isValid?: boolean;
    value?: string;
    inputs?: CustomFormData;
    formIsValid?: boolean;
  }
) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid: boolean | undefined = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        inputs: {
          ...state.inputs,
          [action.inputId!]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (
  initialInputs: CustomFormData,
  initialFormValidity: boolean
) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      console.log("input handler runned", id, value, isValid);
      dispatch({
        type: "INPUT_CHANGE",
        inputId: id,
        value,
        isValid,
      });
    },
    []
  );

  const setFormData = useCallback(
    (inputData: CustomFormData, formValidity: boolean) => {
      console.log("formValidity,", formValidity);
      dispatch({
        type: "SET_DATA",
        inputs: inputData,
        formIsValid: formValidity,
      });
    },
    []
  );

  return [formState, inputHandler, setFormData];
};
