import React from "react";
import { useStep } from "react-hooks-helper";
import Opening from "../create-modal/Opening"
import CreateAcc from "../create-modal/CreateAcc"
import Category from "../create-modal/Category"


const steps = [{ id: "opening" }, { id: "createacc" }, { id: "category" }];

const Main = () => {

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { navigation }

  switch (step.id) {
    case "opening":
      return <Opening {...props} />;
    case "createacc":
      return <CreateAcc  {...props} />;
    case "category":
      return <Category  {...props} />;
  }

  return (
    <div>
    </div>
  );
};

export default Main;
