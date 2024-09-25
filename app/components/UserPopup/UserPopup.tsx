import { useState } from "react";
import styles from "./UserPopup.module.scss";
import Image from "next/image";
import { cookies } from "next/dist/client/components/headers";
import router, { useRouter } from "next/navigation";

type Props = {
  userName: string;
  userGmail: string;
};

const UserPopup = ({ userName, userGmail }: Props) => {
  const router = useRouter();
  const handleLogOut = () => {
    // Delete the token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/signin");
    // Refresh the page to reflect the logout state
    window.location.reload();
  };

  
  
  return (
    <div className={styles.container}>
      <div className={styles.userNameWrapper}>
        <Image
          src={"/icon/userHeaderIcon.svg"}
          alt="image"
          width={20}
          height={20}
        />
        <span className={styles.gmail}>{userGmail}</span>
      </div>
      <div className={styles.logoutWrapper} onClick={handleLogOut}>
        <Image src={"icon/logoutIcon.svg"} alt="image" width={20} height={20} />
        <span className={styles.logout}>Log out</span>
      </div>
    </div>
  );
};


export default UserPopup;