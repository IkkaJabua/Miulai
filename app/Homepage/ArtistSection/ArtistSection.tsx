import Card from "@/app/components/Card/Card";
import styles from "./ArtistSection.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";



const ArtistSection = () => {
  const [atrist, setArtist] = useState([]);
 
  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/author`)
    .then((r) => {
      setArtist(r.data);
      
     
      
    });
  }, [])
// რადგან ჩაწერილი მაქვს უკვე მე არტისტს გეთერ სთეითში ინფორმაცია არტისტებზე, და მერე ვმაპავ მაქედან ქარდებს, ამის გამო 
// აღარაა საჭირო იმიჯისთვის ან ფირსთნეიმისთვის რაიმე სთეითი შევქმნა , პირდაპირ შემიძლია აითემით ჩავწვდე მას , არც / - ია საჭირო
// რადგან ბექიდანვე მოყვება სლეში და ყველაფერი. მე რომ ვმაპავ რამეს , მაგალითად ქარდებში და პარამეტრად ვაყოლებ აითემს - ეს ნიშნავს
// რომ სეტერში არსებულ r.data ზე დგას ეს აითემი და პირდაპირ შემიძლია მივწვდე item. რაღაცით და წამოვიღო ამდროს.
// მაგრამ თუ სადმე მინდა გამოვაჩინო ფოფაფში მაგალითად ბექიდან ინფო და არსად არაფერი არაა გადამაპული, თუ ისეთ ადგილას ვიყენებ 
//  სადაც არიმაპება მაშინ ცვლადში ვწერ(მაგ: ფოფაფი-ერთ რამეს ვაგდებ, მანდ მაპი რაში მჭირდება , ამიტომ ვიყენებ ცვლადში ჩასწერას
// მაგ ინფორმაციისას რომ რამენაირად ამოვაგდო , -------- რიქოილი - როცა ერთ ფაილში იღებ ინფოს მარა სხვა ფაილში მიგაქ გამოსაჩენად,,
//  ან სხვა ფაილში ონკლიკი გინდა რო დაიჭირო აიდი, და სხვაგან კიდე გამოიყენო.

  return (
    <div className={styles.container}>
      <div className={styles.art}>
        {atrist.map((item: any) => (
          <div className={styles.box} key={item.id}>
            <Card
          
              key={item.id}
              image={`${item.files[0]?.url}`}
              title={item.firstName}
              imageStyle={"round"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
