import { PromoItemProps } from "../../utils/types";
import Button from "../FormElements/Button";
const PromoItem: React.FC<PromoItemProps> = ({
  title,
  img,
  description,
  reverse,
  action,
}) => {
  return (
    <div className={reverse ? "promo-item reverse" : "promo-item"}>
      <div className="text-wrapper">
        <h4>{title}</h4>
        <p>{description}</p>

        {action && <Button to="/auth">Registruj se</Button>}
      </div>

      <div className="img-wrapper">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default PromoItem;
