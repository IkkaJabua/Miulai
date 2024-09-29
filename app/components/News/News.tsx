import styles from "./News.module.scss";
import Button from "../Button/Button";

interface Props {
  title: string;
  image: string;
  plays?: string;
}

const News = (props: Props) => {
  const backImage: object = {
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left",
  };

  return (
    <div className={styles.container} style={backImage}>
        <div className={styles.container_news}>
          <div className={styles.container_title}>
            <div className={styles.font_style_news}>{props.title}</div>
            <div className={styles.font_style_plays}>{props.plays} Plays</div>
          </div>
          <div className={styles.mainButton}>
            <Button
              title={"Listen Now"}
              mode={"reusable button"}
              padding="12px 24px 12px 20px"
              borderRadius="8px"
              gap="4px"
              width="153px"
              fontSize="16px"
              fontWeight="500"
              imageSrc="clip.svg"
              imageWidth={20}
              imageHeight={20}
              onClick={() => console.log("button clicked")}
            />
          </div>
          <div className={styles.mobileButton}>
            <Button
              title={"Listen Now"}
              mode={"reusable button"}
              padding="8px 12px 8px 8px"
              borderRadius="4px"
              gap="4px"
              width="114px"
              fontSize="14px"
              fontWeight="500"
              imageSrc="clip.svg"
              imageWidth={16}
              imageHeight={16}
              onClick={() => console.log("button clicked")}
            />
          </div>
        </div>
      </div>
  );
};

export default News;
