import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import { Heading } from "@chakra-ui/react";

const App = () => {
  const [stackOneValues, setStackOneValues] = useState({
    values: {
      stack1Question1: "",
      stack1Question2: "",
      stack1Question3: "",
      stack1Question4: "",
      stack1Question5: "",
      stack1Question6: "",
      stack2Question1: "",
      stack2Question2: "",
      stack2Question3: "",
      stack2Question4: "",
      stack2Question5: "",
      stack2Question6: "",
      stack3Question1: "",
      stack3Question2: "",
      stack3Question3: "",
      stack3Question4: "",
      stack3Question5: "",
      stack3Question6: "",
      stack4Question1: "",
      stack4Question2: "",
      stack4Question3: "",
      stack4Question4: "",
      stack4Question5: "",
      stack4Question6: "",
    },
  });
  const [accordionStates, setAccordionStates] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  });
  const [AccordionOne, setAccordionOne] = useState(false);
  const [AccordionTwo, setAccordionTwo] = useState(false);
  const [AccordionThree, setAccordionThree] = useState(false);
  const [AccordionFour, setAccordionFour] = useState(false);

  const handleStateChange = (eve, eve2, eve3) => {
    console.log("Datas-->", eve, eve2, eve3);
    if (eve3 === "Accordion 1") {
      switch (eve) {
        case 0:
          if (eve2 === "Yes" || eve2 === "NA") {
          }
          break;
        case 1:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question2: eve2,
            },
          }));
          break;
        case 2:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question3: eve2,
            },
          }));
          break;
        case 3:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question4: eve2,
            },
          }));
          break;
        case 4:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question5: eve2,
            },
          }));
          break;
        case 5:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question6: eve2,
            },
          }));
          break;
        default:
          return null;
      }
    }
    if (eve3 === "Accordion 1") {
      switch (eve) {
        case 0:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question1: eve2,
            },
          }));
          break;
        case 1:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question2: eve2,
            },
          }));
          break;
        case 2:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question3: eve2,
            },
          }));
          break;
        case 3:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question4: eve2,
            },
          }));
          break;
        case 4:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question5: eve2,
            },
          }));
          break;
        case 5:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack1Question6: eve2,
            },
          }));
          break;
        default:
          return null;
      }
    } else if (eve3 === "Accordion 2") {
      switch (eve) {
        case 0:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack2Question1: eve2,
            },
          }));
          break;
        case 1:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack2Question2: eve2,
            },
          }));
          break;
        case 2:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack2Question3: eve2,
            },
          }));
          break;
        case 3:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack2Question4: eve2,
            },
          }));
          break;
        case 4:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack2Question5: eve2,
            },
          }));
          break;
        case 5:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack2Question6: eve2,
            },
          }));
          break;
        default:
          return null;
      }
    } else if (eve3 === "Accordion 3") {
      //   alert("inside");
      //   debugger;
      switch (eve) {
        case 0:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack3Question1: eve2,
            },
          }));
          break;
        case 1:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack3Question2: eve2,
            },
          }));
          break;
        case 2:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack3Question3: eve2,
            },
          }));
          break;
        case 3:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack3Question4: eve2,
            },
          }));
          break;
        case 4:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack3Question5: eve2,
            },
          }));
          break;
        case 5:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack3Question6: eve2,
            },
          }));
          break;
        default:
          return null;
      }
    } else if (eve3 === "Accordion 4") {
      //   alert("inside");
      //   debugger;
      switch (eve) {
        case 0:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack4Question1: eve2,
            },
          }));
          break;
        case 1:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack4Question2: eve2,
            },
          }));
          break;
        case 2:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack4Question3: eve2,
            },
          }));
          break;
        case 3:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack4Question4: eve2,
            },
          }));
          break;
        case 4:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack4Question5: eve2,
            },
          }));
          break;
        case 5:
          setStackOneValues((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              stack4Question6: eve2,
            },
          }));
          break;
        default:
          return null;
      }
    }
  };
  const handleAccOpenCloseCheck = (accordionName) => {
    // alert("called");
    console.log("accordionName-->", accordionName);

    switch (accordionName) {
      case "Accordion 1":
        setAccordionOne(!AccordionOne);
        break;
      case "Accordion 2":
        setAccordionTwo(!AccordionTwo);
        break;
      case "Accordion 3":
        setAccordionThree(!AccordionThree);
        break;
      case "Accordion 4":
        setAccordionFour(!AccordionFour);
        break;
      default:
        return null;
    }
  };
  const handleToggle = (accordionName) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [accordionName]: !prevState[accordionName],
    }));
  };

  return (
    <>
      <Heading display={"flex"} justifyContent={"center"}>
        Sample Form
      </Heading>
      <Accordion
        title="Accordion 1"
        onChange={handleStateChange}
        onClick={handleAccOpenCloseCheck}
        isOpen={accordionStates.accordion1}
        onToggle={() => handleToggle("accordion1")}
        checkQn1={stackOneValues.values.stack1Question1}
        checkQn2={stackOneValues.values.stack1Question2}
        checkQn3={stackOneValues.values.stack1Question3}
        checkQn4={stackOneValues.values.stack1Question4}
        checkQn5={stackOneValues.values.stack1Question5}
        checkQn6={stackOneValues.values.stack1Question6}
        questions={[
          "Q1. Have you ever traveled outside your country?",
          "Q2. Do you enjoy spicy food?",
          "Q3. Do you believe in ghosts?",
          "Q4. Have you ever broken a bone?",
          "Q5. Have you ever participated in a marathon?",
          "Q6. Are you allergic to any foods?",
        ]}
      />
      <Accordion
        title="Accordion 2"
        onChange={handleStateChange}
        onClick={handleAccOpenCloseCheck}
        isOpen={accordionStates.accordion2}
        onToggle={() => handleToggle("accordion2")}
        checkStack2Qn1={stackOneValues.values.stack2Question1}
        checkStack2Qn2={stackOneValues.values.stack2Question2}
        checkStack2Qn3={stackOneValues.values.stack2Question3}
        checkStack2Qn4={stackOneValues.values.stack2Question4}
        checkStack2Qn5={stackOneValues.values.stack2Question5}
        checkStack2Qn6={stackOneValues.values.stack2Question6}
        questions={[
          "Q1. Do you enjoy watching horror movies?",
          "Q2. A Have you ever been scuba diving?",
          "Q3. Do you enjoy solving puzzles?",
          "Q4. Have you ever visited a museum?",
          "Q5. Have you ever volunteered for a charity organization?",
          "Q6. Have you ever experienced an earthquake?",
        ]}
      />
      <Accordion
        title="Accordion 3"
        onChange={handleStateChange}
        onClick={handleAccOpenCloseCheck}
        isOpen={accordionStates.accordion3}
        onToggle={() => handleToggle("accordion3")}
        checkStack3Qn1={stackOneValues.values.stack3Question1}
        checkStack3Qn2={stackOneValues.values.stack3Question2}
        checkStack3Qn3={stackOneValues.values.stack3Question3}
        checkStack3Qn4={stackOneValues.values.stack3Question4}
        checkStack3Qn5={stackOneValues.values.stack3Question5}
        checkStack3Qn6={stackOneValues.values.stack3Question6}
        questions={[
          "Q1. What inspired you to pursue your current career path, and how has it evolved over time?",
          "Q2. Can you describe a challenging situation you've faced recently and how you navigated through it?",
          "Q3. What are the key factors you consider when making significant life decisions?",
          "Q4. How do you define success in both your personal and professional life?",
          "Q5. Have you ever volunteered for a charity organization?",
          "Q6. How do you prioritize self-care and maintain a healthy work-life balance?",
        ]}
      />
      <Accordion
        title="Accordion 4"
        onChange={handleStateChange}
        onClick={handleAccOpenCloseCheck}
        isOpen={accordionStates.accordion4}
        onToggle={() => handleToggle("accordion4")}
        checkStack4Qn1={stackOneValues.values.stack4Question1}
        checkStack4Qn2={stackOneValues.values.stack4Question2}
        checkStack4Qn3={stackOneValues.values.stack4Question3}
        checkStack4Qn4={stackOneValues.values.stack4Question4}
        checkStack4Qn5={stackOneValues.values.stack4Question5}
        checkStack4Qn6={stackOneValues.values.stack4Question6}
        questions={[
          "Q1. How do you handle constructive criticism and feedback in a professional setting?",
          "Q2. Can you describe a mentor or role model who has had a significant impact on your life?",
          "Q3. Reflecting on your achievements, what do you hope to be remembered for?",
          "Q4. What steps do you take to stay informed about current events and global issues?",
          "Q5. How do you typically start your day?",
          "Q6. Is waking up in the morning is really hard?",
        ]}
      />
    </>
  );
};

export default App;
