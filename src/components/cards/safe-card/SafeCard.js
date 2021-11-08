import { useState, useEffect } from "react";
import { Spin } from "antd";
import "./SafeCard.scss";
import NumberFormat from "react-number-format";
import SafeIcon from "../../../assets/icons/brangkas.svg";
import ArrowRight from "../../../assets/icons/arrow-right.png";
import { getSafeAsync } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SafesReducer from "../../../redux/reducers/SafesReducer";

function SafeCard() {
  const dispatch = useDispatch();
  const { activeSafe } = useSelector((state) => state.SafesReducer);

  useEffect(() => {
    dispatch(getSafeAsync())
  }, []);

  function renderSafeCard(data) {
    return (
      <div className="safe-card">
        <div className="safe-icon">
          <img src={SafeIcon} alt="icon safe" />
        </div>

        <div className="safe-info">
          <h4 className="safe-name">{data?.safeName}</h4>
          <h4 className="safe-amount">
            <NumberFormat
              value={data ? data.amount : 0}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp"
            />
          </h4>
        </div>
      </div>
    )
  }
  return (
    <>
      {renderSafeCard(activeSafe)}
    </>
  );
}

export default SafeCard;
