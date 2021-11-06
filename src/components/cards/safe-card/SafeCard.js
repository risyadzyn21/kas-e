import { useState, useEffect } from "react";
import { Spin } from "antd";
import "./SafeCard.scss";
import NumberFormat from "react-number-format";
import SafeIcon from "../../../assets/icons/brangkas.svg";
import ArrowRight from "../../../assets/icons/arrow-right.png";
import { getSafe } from "../../../services";
import { getSafeAsync } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SafesReducer from "../../../redux/reducers/SafesReducer";

function SafeCard() {
  const [safes, setSafes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const safesReducer = useSelector((state) => state.SafesReducer);

  useEffect(() => {
    // setIsLoading(true)
    getSafe(token).then((response) => {
      setSafes(response?.data);
      console.log(response, "test");
      // setIsLoading(false)
    });
    // if (setSafes === null) {
    //   safesReducer(true);
    // }
  }, [safesReducer.createSafe]);

  // console.log(safesReducer, "bisayuk")
  function renderSafeCard(data) {
    return (
    <div className="safe-card">
      <div className="safe-icon">
        <img src={SafeIcon} alt="icon safe" />
      </div>

      <div className="safe-info">
        <h4 className="safe-name">{data && data[data?.length - 1].safeName}</h4>
        <h4 className="safe-amount">
          <NumberFormat
            value={data && data[data?.length - 1].amount}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="Rp"
          />
        </h4>
      </div>
      <div className="safe-button">
        <img src={ArrowRight} alt="arrow" />
      </div>
    </div>
    )
  }
  return (
    <>
      {safes?.length === 0
        ? renderSafeCard(SafesReducer.createSafe)
        : renderSafeCard(safes)}
    </>
  );
}

export default SafeCard;
