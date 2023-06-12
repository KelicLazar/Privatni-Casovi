import { PromoListProps } from "../../utils/types";
import PromoItem from "./PromoItem";

const PromoList: React.FC<PromoListProps> = ({ list }) => {
  return (
    <div className="promo-list">
      {list.map((item, index) => {
        return (
          <PromoItem
            reverse={index % 2 > 0 ? true : false}
            title={item.title}
            description={item.description}
            img={item.img}
            action={item.action}
          />
        );
      })}
    </div>
  );
};

export default PromoList;
