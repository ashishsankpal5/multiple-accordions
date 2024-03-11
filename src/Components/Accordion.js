import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  RadioGroup,
  Radio,
  Heading,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";

const AccordionMain = ({
  title,
  questions,
  onChange,
  onClick,
  isOpen,
  onToggle,
  editable,
  isFirstAccordion,
  onCompletion,
  accordionIndex,
  ...props
}) => {
  const [answers, setAnswers] = useState(new Array(questions));

  const [accordions, setAccordions] = useState([
    { id: 1, editable: true, questions: questions },
    { id: 2, editable: false, questions: questions },
    { id: 3, editable: false, questions: questions },
    { id: 4, editable: false, questions: questions },
  ]);

  useEffect(() => {
    console.log("ashish12", accordions[0].questions);
    // console.log("sample1=>", accordions[0]);
  }, [accordions]);

  const handleRadioChange = (accordionIndex, questionIndex, value) => {
    console.log("data", accordionIndex);

    const updatedAccordions = [...accordions];
    console.log("hello", updatedAccordions);
    // updatedAccordions[accordionIndex].questions[questionIndex] = value;
    const test = updatedAccordions[accordionIndex];
    console.log("see->", test);
    setAccordions(updatedAccordions);
  };

  const handleAnswerChange = (index, answer, title) => {
    console.log("sample-->", index, answer, title);

    const newAnswers = [...answers];
    console.log("newANNSS-->", newAnswers);
    const newAnns = (newAnswers[index] = answer);
    onChange(index, newAnns, title);
  };
  const toggleEditable = () => {
    const updatedAccordions = [...accordions];
    updatedAccordions[1].editable = !updatedAccordions[1].editable;
    setAccordions(updatedAccordions);
  };
  return (
    <>
      <Accordion allowToggle boxShadow="lg" ml="10" mr="10" mt="25">
        <AccordionItem>
          <h2>
            <AccordionButton onClick={onToggle}>
              <Box as="span" flex="1" textAlign="left">
                <Heading as={"h1"} size="m">
                  {title} {isOpen ? "Open Accordion" : "Close Accordion"}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            bg={"#f5f5f5"}
            borderRadius={"md"}
            style={{ border: "1px solid #D3D3D3" }}
          >
            {/* {questions.map((question, index) => ( */}
            {/* {accordions.map((accordion, accordionIndex) => ( */}
            <Box>
              {questions.map((question, questionIndex) => (
                <AccordionPanel pb={4}>
                  <Heading as={"h3"} size={"m"} mb="5">
                    {question}
                  </Heading>
                  <RadioGroup>
                    <Stack direction="row">
                      <Radio
                        name={"stack1Question1"}
                        value="Yes"
                        checked={question === "Yes"}
                        onChange={() =>
                          handleAnswerChange(questionIndex, "Yes", title)
                        }
                      >
                        Yes
                      </Radio>
                      <Radio
                        name="stack1Question1"
                        value="No"
                        checked={question === "No"}
                        onChange={() =>
                          handleAnswerChange(questionIndex, "No", title)
                        }
                      >
                        No
                      </Radio>
                      <Radio
                        name="stack1Question1"
                        value="NA"
                        checked={question === "NA"}
                        onChange={() =>
                          handleAnswerChange(questionIndex, "NA", title)
                        }
                      >
                        NA
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              ))}
            </Box>
            {((title === "Accordion 1" && props.checkQn1 !== "") ||
              props.checkQn2 !== "" ||
              props.checkQn3 !== "" ||
              props.checkQn4 !== "" ||
              props.checkQn5 !== "" ||
              props.checkQn6 !== "") &&
              ((title === "Accordion 2" && props.checkStack2Qn1 !== "") ||
                props.checkStack2Qn2 !== "" ||
                props.checkStack2Qn3 !== "" ||
                props.checkStack2Qn4 !== "" ||
                props.checkStack2Qn5 !== "" ||
                props.checkStack2Qn6 !== "") &&
              ((title === "Accordion 3" && props.checkStack3Qn1 !== "") ||
                props.checkStack3Qn2 !== "" ||
                props.checkStack3Qn3 !== "" ||
                props.checkStack3Qn4 !== "" ||
                props.checkStack3Qn5 !== "" ||
                props.checkStack3Qn6 !== "") &&
              ((title === "Accordion 4" && props.checkStack4Qn1 !== "") ||
                props.checkStack4Qn2 !== "" ||
                props.checkStack4Qn3 !== "" ||
                props.checkStack4Qn4 !== "" ||
                props.checkStack4Qn5 !== "" ||
                props.checkStack4Qn6 !== "") && (
                <Flex justifyContent={"end"}>
                  <Button mr="2" colorScheme="linkedin" variant="outline">
                    Save
                  </Button>
                  <Button colorScheme="linkedin" variant="outline">
                    Cancel
                  </Button>
                </Flex>
              )}
            {accordions[0].questions.every(
              (q) => q === "Yes" || q === "NA"
            ) && (
              <Button
                colorScheme="linkedin"
                variant="outline"
                onClick={toggleEditable}
              >
                Enable Accordion
              </Button>
            )}
          </AccordionPanel>
          {/* )} */}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionMain;
