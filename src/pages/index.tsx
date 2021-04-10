import { NextPage } from "next/types";
import { getLayout } from "src/layouts/Layout";
import { Instruction } from "src/components";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="shadow-xl min-h-full bg-white dark:bg-gray-900 mx-auto pt-4 divide-y divide-gray-200 dark:divide-gray-800 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-6 lg:mx-12 lg:my-4">
        <div className="flex flex-col justify-center mb-1 lg:my-0 lg:col-span-2">
          <div className="text-xs lg:text-2xl lg:mb-2 uppercase font-mono tracking-widest font-light text-gray-400">
            Build:
          </div>
          <div className="text-4xl mb-2 lg:text-6xl font-semibold">
            Safe Marine Drop
          </div>
        </div>
        <div className="flex flex-row lg:flex-col flex-wrap">
          <div className="w-1/3 flex flex-col justify-around mb-1 py-0 lg:py-0 leading-3">
            <div className="text-xs uppercase font-mono tracking-wide font-light text-gray-500">
              Difficulty:
            </div>
            <div className="text-sm lg:text-lg font-medium">Intermediate</div>
          </div>
          <div className="w-1/3 flex flex-col justify-around mb-1 py-0 lg:py-0 leading-3">
            <div className="text-xs uppercase font-mono tracking-wide font-light text-gray-500">
              Race:
            </div>
            <div className="text-sm lg:text-lg font-medium">Terran</div>
          </div>
          <div className="w-1/3 flex flex-col justify-around mb-1 py-0 lg:py-0 leading-3">
            <div className="text-xs uppercase font-mono tracking-wide font-light text-gray-500">
              Date:
            </div>
            <div className="text-sm lg:text-lg font-medium">21-04-09</div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <Instruction
          timestamp="0:11"
          text="Say (glhf)!"
          variant="previous"
          step={1}
        />
        <Instruction
          timestamp="0:21"
          text="Build supply depot"
          variant="previous"
        />
        <Instruction
          timestamp="0:32"
          text="Send scouting worker"
          variant="current"
        />
        <Instruction timestamp="0:58" text="Build Barracks" variant="next" />
        <Instruction
          timestamp="1:02"
          text="Build Refinery"
          variant="upcoming"
        />
        <Instruction
          timestamp="1:32"
          text="Build Reactor on Barracks"
          variant="upcoming"
        />
        <Instruction
          timestamp="1:58"
          text="Start Combat Shields"
          variant="upcoming"
        />
      </div>

      <article className="">
        <h2 className="font-display text-center px-12 py-4 text-3xl font-bold text-transparent">
          GLHF!
        </h2>
      </article>
    </section>
  );
};

Index.getLayout = getLayout;

export default Index;
