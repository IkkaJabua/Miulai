import axios from "axios";
import styles from "./AlbumEditModal.module.scss";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { clickFetchState, globalPLaylistState } from "@/app/state";
import { useState } from "react";

type Props = {
  closeModal?: (e:any) => void;
  openModal?: () => void;
  id: number;
};


interface Form {
  name: string;
}

const AlbumEditModal = (props: Props) => {
  const { handleSubmit, register , formState: {errors}} = useForm<Form>();
  const [ click , setClick] = useRecoilState(clickFetchState)
 

  const onEditClick = (values: any) => {
    const token = Cookies.get("token");
    console.log("here");
    axios.patch(
      `https://interstellar-1-pdzj.onrender.com/playlist/${props.id}`,
      {
        name: String(values.name),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(() => {
        setClick(!click)
      
      })
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((values, id) => {
          onEditClick(values);
        })}
      >
        <input
          type="text"
          onClick={(e) => e.stopPropagation()}
          {...register("name", {
            required: {
              value: true,
              message: 'Name is required'
            },
            validate: (value) => {
              return value.trim().length > 1 || "Name cannot be empty or whitespace";
            }
          })}
          className={styles.input}
          autoComplete="off"
          placeholder="Edit name"
        />
        {errors.name && <p className={styles.errMessage}>{errors.name.message}</p>}
        <input
          type="submit"
          className={styles.submit}
          onClick={props.closeModal}
        />
      </form>
    </div>
  );
};

export default AlbumEditModal;
