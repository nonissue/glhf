import { useEffect, useState } from "react";

type InstructionProps = {
  timestamp: string;
  text: string;
  variant: "current" | "next" | "previous" | "upcoming";
  step?: number;
};

const Instruction = ({ timestamp, text, variant, step }: InstructionProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 9999);

    return () => clearTimeout(timer);
  }, []);

  if (show) {
    console.log(show);
  }

  // const getClassName = () => {
  //   return `is-${variant}`;
  // };

  return (
    <div
      className={`${
        step === 1 && "text-gray-500"
      } instruction ${variant} flex flex-row content-center `}
    >
      <div className={`timestamp ${variant}`}>{timestamp}</div>
      <div className="">{text}</div>
    </div>
  );
};

export { Instruction };
