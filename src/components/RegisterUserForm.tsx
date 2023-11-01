import { useCallback, useState } from "react";
import useCreateUserQuery from "../shared/hooks/useCreateUserQuery";
import BoxContent from "./BoxContent";
import Button from "./Button";
import InputField from "./InputField";
import { RegisterUserData } from "../shared/types";
import SuccessMessage from "./SuccessMessage";

export default function RegisterUserForm() {
  const initUserValue = {
    password: null,
    userEmail: null,
    userName: null,
  };
  const { submitUserData } = useCreateUserQuery();
  const [errorSubmiting, setErrorSubmiting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<RegisterUserData>(initUserValue);

  const handleSubmitData = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();

      if (!formData.password || !formData.userEmail || !formData.userName) {
        setErrorSubmiting(true);
      } else {
        submitUserData(formData).then(() => {
          setErrorSubmiting(false);
          setFormData(initUserValue);
          setIsSuccess(true);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData, submitUserData]
  );
  return (
    <BoxContent title={isSuccess ? undefined : "Create a New User"}>
      {isSuccess ? (
        <SuccessMessage
          message="The user have been created"
          onOkClick={() => setIsSuccess(false)}
        />
      ) : (
        <form onSubmit={handleSubmitData}>
          <InputField
            fieldName="userName"
            labelText="User Name:"
            type="text"
            value={formData.userName ?? undefined}
            errorMessage="User Name is required"
            error={errorSubmiting && !formData.userName}
            onChange={(value) =>
              setFormData((state) => ({ ...state, userName: value }))
            }
          />
          <InputField
            fieldName="userEmail"
            labelText="Email:"
            type="text"
            value={formData.userEmail ?? undefined}
            error={errorSubmiting && !formData.userEmail}
            errorMessage="User Email is required"
            onChange={(value) =>
              setFormData((state) => ({ ...state, userEmail: value }))
            }
          />
          <InputField
            fieldName="password"
            labelText="Password:"
            error={errorSubmiting && !formData.password}
            value={formData.password ?? undefined}
            errorMessage="Password is required"
            type="password"
            onChange={(value) =>
              setFormData((state) => ({ ...state, password: value }))
            }
          />
          <Button text="Register User" style={{ marginTop: "30px" }} />
        </form>
      )}
    </BoxContent>
  );
}
