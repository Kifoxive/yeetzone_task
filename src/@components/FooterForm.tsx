import React, { useState } from "react";
import styles from "../styles";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { api } from "../api";
import Preload from "./Preload";

export type IInputs = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

const FooterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IInputs>({ mode: "onBlur" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IInputs> = async (fields) => {
    try {
      setIsLoading(true);
      const result = await api.sendFormData(fields);
      console.log(result);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      // reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col items-center w-full 2xl:max-w-[724px] "}
    >
      <div className="flex flex-col sm:flex-row justify-between w-full mb-2">
        <div className="py-2 w-full sm:w-[30%] sm:mr-[11px]">
          <input
            type="text"
            {...register("name", {
              required: "jméno je povinné",
              minLength: {
                value: 2,
                message: "příliš krátké jméno",
              },
            })}
            placeholder="Jméno"
            className={`${styles.paragraph} p-[10px] rounded-lg w-full focus:outline focus:outline-black text-black`}
          />
          {errors?.name && (
            <p className={`${styles.paragraph} my-2 text-red-700 text-bold`}>
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="py-2 w-full sm:w-[30%] sm:mr-[11px]">
          <input
            type="text"
            {...register("surname", { required: false })}
            placeholder="Přijímení"
            className={`${styles.paragraph} p-[10px] rounded-lg w-full focus:outline focus:outline-black text-black`}
          />
          {errors?.surname && (
            <p className={`${styles.paragraph} my-2 text-red-700 text-bold`}>
              {errors.surname?.message}
            </p>
          )}
        </div>
        <div className="py-2 w-full sm:w-[40%]">
          <input
            type="email"
            {...register("email", {
              required: "email je povinen",
              minLength: {
                value: 5,
                message: "e-mail je příliš krátký",
              },
            })}
            placeholder="Váš email"
            className={`${styles.paragraph} p-[10px] rounded-lg w-full focus:outline focus:outline-black text-black`}
          />
          {errors?.email && (
            <p className={`${styles.paragraph} my-2 text-red-700 text-bold`}>
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>
      <textarea
        {...register("message", {
          required: "zpráva je vyžadována",
          minLength: {
            value: 5,
            message: "příliš krátká zpráva",
          },
        })}
        className={`${styles.paragraph} w-full h-[80px] xl:h-[100px] 2xl:h-[124px] mb-2 p-[10px] rounded-lg focus:outline focus:outline-black resize-none text-black`}
        placeholder="Vaše zpráva"
      />
      {errors?.message && (
        <p
          className={`${styles.paragraph} my-2 2xl:text-[2rem] text-red-700 text-bold`}
        >
          {errors.message?.message}
        </p>
      )}
      <Button text="Odeslat" isSubmit={true} disabled={!isValid} />
      {isLoading && <Preload />}
    </form>
  );
};

export default FooterForm;
