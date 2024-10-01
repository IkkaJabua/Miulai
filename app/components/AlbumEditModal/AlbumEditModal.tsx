import axios from "axios";
import styles from "./AlbumEditModal.module.scss";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { clickFetchState, globalPLaylistState } from "@/app/state";

type Props = {
  closeModal?: (e:any) => void;
  openModal?: () => void;
  id: number;
};

const AlbumEditModal = (props: Props) => {
  const { handleSubmit, register } = useForm();
  const [ click , setClick] = useRecoilState(clickFetchState)


  const onEditClick = (values: any) => {
    const accessToken = Cookies.get("token");
    console.log("here");
    axios.patch(
      `https://interstellar-1-pdzj.onrender.com/playlist/${props.id}`,
      {
        name: String(values.name),
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
          {...register("name")}
          className={styles.input}
          autoComplete="off"
          placeholder="Edit name"
        />
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
